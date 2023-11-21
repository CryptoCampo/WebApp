import { defineStore } from "pinia";
import { ethers } from 'ethers';
import CollectableService from '../service/collectable';
import ERC20Service from '../service/erc20service';

const useCollectable = defineStore('collectable', {
  state: () => {
    return {
      owner: '',
      canBuy: false,
      nftPrice: 0,
      buyFee: 0,
      tokenCount: 0,
      maxPerUser: 0,
      maxSupply: 0,
      supply: 0,
      profitToPay: 0,
      nftBalance: 0,
      pendingTx: false,
      txError: '',
      canClaim: false,
      smartContractAddress: process.env.NFT_CONTRACT_ADDRESS,
    }
  },
  actions: {
    async claim(userAddress) {
      try {
        const userBalnce = await CollectableService.balanceOf(userAddress);
        if(userBalnce){
          const promiseArray = [];
          this.pendingTx = true;
          for(let i = 0; i < userBalnce; i++){
            promiseArray.push(CollectableService.getTokenOfOwnerByIndex(userAddress, i).then(res => res.toNumber()))
          }
          const tokensIds = await Promise.all(promiseArray);
          const tx =  await CollectableService.claim(tokensIds);
          if(!tx) {
            throw new Error('No transaction was created');
          }
          await tx.wait();
          this.pendingTx = false;
          return 'success'
        }
      } catch(e){
        this.txError = e?.response?.data?.errors?.message || e.message;
        this.pendingTx = false;
        throw e;
      }
    },
    async getOwner() {
      this.owner = await CollectableService.owner();
      return this.owner;
    },
    async getCanBuy() {
      this.canBuy = await CollectableService.getCanBuy();
      return this.canBuy;
    },
    async getCanClaim() {
      this.canClaim = await CollectableService.getCanClaim();
      return this.canClaim;
    },
    async getMaxSupply() {
      this.maxSupply = await CollectableService.getMaxSupply();
      return this.maxSupply;
    },
    async getSupply() {
      this.supply = await CollectableService.getTokenCount();
      return this.supply;
    },
    async getNFTPrice() {
      this.nftPrice = await CollectableService.getNFTValue();
      return this.nftPrice;
    },
    async getBuyFee() {
      this.buyFee = await CollectableService.getBuyFee();
      return this.buyFee;
    },
    async getBalance(address) {
      this.nftBalance = await CollectableService.balanceOf(address);
      return this.nftBalance;
    },
    async getProfitToPay() {
      this.profitToPay = await CollectableService.getProfitToPay();
      return this.profitToPay;
    },
    async getMaxPerUser() {
      this.maxPerUser = await CollectableService.getMaxMintPerUser();
      return this.maxPerUser;
    },
    async buyNFT(amount, userAddress) {
      try {
        this.txError = null;
        this.pendingTx = true;
        const nftPrice = await CollectableService.getNFTValue();
        const nftAddress = CollectableService.getContractAddress();
        const allowance = await ERC20Service.allowance(userAddress, nftAddress);
        let tx;
        if(allowance.gt(nftPrice)) {
          tx = await CollectableService.buy(amount);
        } else {
          const newAllowance = ethers.constants.MaxUint256; 
          const approvalTransaction = await ERC20Service.approve(nftAddress, newAllowance);
          await approvalTransaction.wait();
          tx = await CollectableService.buy(amount);
        }

        if(!tx) {
          throw new Error('No transaction was created');
        }
        await tx.wait();
        return 'success'
      } catch(e) {
        this.txError = e?.response?.data?.errors?.message || e.message;
        throw e
      } finally {
        this.pendingTx = false;
      }
    },
    initialize(address) {
      return Promise.all([  
        this.getOwner(),  
        this.getCanBuy(),
        this.getMaxSupply(),
        this.getMaxPerUser(),
        this.getNFTPrice(),
        this.getBuyFee(),
        this.getBalance(address),
        this.getSupply(),
        this.getProfitToPay(),
        this.getCanClaim()
      ])
    },
    clearStore() {
      this.owner =  '';
      this.canBuy =  false;
      this.nftPrice =  0;
      this.buyFee =  0;
      this.tokenCount =  0;
      this.maxPerUser =  0;
      this.maxSupply =  0;
      this.profitToPay =  0;
      this.supply =  0;
      this.nftBalance =  0;
      this.pendingTx =  false;
      this.txError =  '';
      this.canClaim = false;
    },
  },
  getters: {
  }
})

export default useCollectable;
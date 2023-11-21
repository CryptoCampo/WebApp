import { ethers } from "ethers";
import WalletService from './wallet';
import contractABI from '../abi/nft_2.json';

class CollectableService {
  async getContractInstance() {
    if(this.contractInstance) {
      return this.contractInstance;
    } else {
      const provider = WalletService.getProvider();
      const contractAddress = this.getContractAddress();
      this.contractInstance = new ethers.Contract(contractAddress, contractABI, provider);
      return this.contractInstance;
    }
  }

  getContractAddress() {
    return process.env.NFT_CONTRACT_ADDRESS_2;
  }

  async buy(amount) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return await contractInstance.connect(wallet).buy(amount);
    } catch(e) {
      console.log('Error on collectable service, buy() function ', e.message, e.stack)
      throw e 
    }
  }

  async claim(listTokenId) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return await contractInstance.connect(wallet).claim(listTokenId);
    } catch(e) {
      console.log('Error on collectable service, claim(listTokenId) function ', e.message, e.stack)
    }
  }
  async returnToken(tokenId) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).returnToken(tokenId);
    } catch(e) {
      console.log('Error on collectable service, returnToken(tokenId) function ', e.message, e.stack)
    }
  }
  async reBuy(tokenId) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).reBuy(tokenId);
    } catch(e) {
      console.log('Error on collectable service, reBuy(tokenId) function ', e.message, e.stack)
    }
  }
  async mint(to, amount) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).mint(to, amount);
      return ;
    } catch(e) {
      console.log('Error on collectable service, mintfunction: ', e.message, e.stack);
      throw e;
    }
  }
  async setFundsToken(token) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setFundsToken(token);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setFundsToken ', e.message, e.stack);
      throw e;
    }
  }
  async setFundsCollector(_address) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setFundsCollector(_address);
      return ;
    } catch(e) {
      console.log('Error on collectable service function setFundsCollector ', e.message, e.stack);
      throw e;
    }
  }
  async setFeesCollector(_address) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setFeesCollector(_address);
      return ;
    } catch(e) {
      console.log('Error on collectable service function setFeesCollector ', e.message, e.stack);
      throw e;
    }
  }
  async setReturnCollector(_address) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setReturnCollector(_address);
      return ;
    } catch(e) {
      console.log('Error on collectable service function setReturnCollector ', e.message, e.stack);
      throw e;
    }
  }
  async setProfitToPay(_profitToPay) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setProfitToPay(_profitToPay);
      return ;
    } catch(e) {
      console.log('Error on collectable service function setProfitToPay ', e.message, e.stack);
      throw e;
    }
  }
  async setCanBuy(_canBuy) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setCanBuy(_canBuy);
      return ;
    } catch(e) {
      console.log('Error on collectable service function setCanBuy ', e.message, e.stack);
      throw e;
    }
  }
  async setCanClaim(_canClaim) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setCanClaim(_canClaim);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setCanClaim: ', e.message, e.stack);
      throw e;
    }
  }
  async setCanReturn(_canReturn) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setCanReturn(_canReturn);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setCanReturn: ', e.message, e.stack);
      throw e;
    }
  }
  async setCanReBuy(_canReBuy) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setCanReBuy(_canReBuy);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setCanReBuy: ', e.message, e.stack);
      throw e;
    }
  }
  async setBuyFee(_buyFee) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setBuyFee(_buyFee);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setBuyFee: ', e.message, e.stack);
      throw e;
    }
  }
  async setReturnFee(_returnFee) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setReturnFee(_returnFee);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setReturnFee: ', e.message, e.stack);
      throw e;
    }
  }
  async setReBuyFee(_reBuyFee) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setReBuyFee(_reBuyFee);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setReBuyFee: ', e.message, e.stack);
      throw e;
    }
  }
  async setBaseURI(_baseURI) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).setBaseURI(_baseURI);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function setBaseURI: ', e.message, e.stack);
      throw e;
    }
  }
  async setMaxMintPerUser(_maxMintPerUser) {
      try {
        const contractInstance = await this.getContractInstance();
        const wallet = await WalletService.getCurrentWallet();
        await contractInstance.connect(wallet).setMaxMintPerUser(_maxMintPerUser);
        return ;
      } catch(e) {
        console.log('Error on collectable service, function setMaxMintPerUser: ', e.message, e.stack);
        throw e;
      }
  }

  async transferOwnership(_newOwner) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).transferOwnership(_newOwner);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function transferOwnership: ', e.message, e.stack);
      throw e;
    }
}
  
  async withdraw() {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).withdraw();
      return ;
    } catch(e) {
      console.log('Error on collectable service, function withdraw: ', e.message, e.stack);
      throw e;
    }
  }
  async recover(token) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      await contractInstance.connect(wallet).recover(token);
      return ;
    } catch(e) {
      console.log('Error on collectable service, function recover: ', e.message, e.stack);
      throw e;
    }
  }
  async getFundsCollector () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.fundsCollector();
    } catch(e) {
      console.log('Error on function getFundsCollector: ', e.message, e.stack)
    }
  }
  async getFeesCollector () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.feesCollector();
    } catch(e) {
      console.log('Error on function getFeesCollector: ', e.message, e.stack)
    }
  }
  async getReturnCollector () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.returnCollector();
    } catch(e) {
      console.log('Error on function getReturnCollector: ', e.message, e.stack)
    }
  }
  async getCanBuy () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.canBuy();
    } catch(e) {
      console.log('Error on function getCanBuy: ', e.message, e.stack)
    }
  }
  async getCanClaim () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.canClaim();
    } catch(e) {
      console.log('Error on function getCanClaim: ', e.message, e.stack)
    }
  }
  async getCanReturn () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.canReturn();
    } catch(e) {
      console.log('Error on function getCanReturn: ', e.message, e.stack)
    }
  }
  async getCanReBuy () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.canReBuy();
    } catch(e) {
      console.log('Error on function getCanReBuy: ', e.message, e.stack)
    }
  }
  async getMaxSupply() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.MAX_SUPPLY();
    } catch(e) {
      console.log('Error on function getMaxSupply: ', e.message, e.stack)
    }
  }
  async getNFTValue() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.NFT_VALUE();
    } catch(e) {
      console.log('Error on function getNFTValue: ', e.message, e.stack)
    }
  }
  async getMaxMintPerUser() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.maxMintPerUser();
    } catch(e) {
      console.log('Error on function getMaxMintPerUser: ', e.message, e.stack)
    }
  }
  async getTokenCount() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.tokenCount();
    } catch(e) {
      console.log('Error on function getTokenCount: ', e.message, e.stack)
    }
  }
  async getTokenBurned() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.tokenBurned();
    } catch(e) {
      console.log('Error on function getTokenBurned: ', e.message, e.stack)
    }
  }
  async getBuyFee() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.buyFee();
    } catch(e) {
      console.log('Error on function getBuyFee: ', e.message, e.stack)
    }
  }
  async getReturnFee() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.returnFee();
    } catch(e) {
      console.log('Error on function getReturnFee: ', e.message, e.stack)
    }
  }
  async balanceOf(address) {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.balanceOf(address);
    } catch(e) {
      console.log('Error on function getReturnFee: ', e.message, e.stack)
    }
  }
  async getReBuyFee() {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.reBuyFee();
    } catch(e) {
      console.log('Error on function getReBuyFee: ', e.message, e.stack)
    }
  }
  async getProfitToPay () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.profitToPay();
    } catch(e) {
      console.log('Error on function getProfitToPay: ', e.message, e.stack)
    }
  }
  async getFundsToken () {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.fundsToken();
    } catch(e) {
      console.log('Error on function getFundsToken: ', e.message, e.stack)
    }
  }
  async owner() {
    try {
      const contractInstance = await this.getContractInstance();
      return contractInstance.owner();
    } catch(e) {
      console.log('Error on function owner: ', e.message, e.stack)
    }
  }
  async getTokenOfOwnerByIndex(address, index) {
    try { 
      const contractInstance = await this.getContractInstance();
      return contractInstance.tokenOfOwnerByIndex(address, index);
    } catch(e) {
      console.log('Error on function owner: ', e.message, e.stack)
    }
  }
  async setWhitelistAddresses(addressArray, booleanValue) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return await contractInstance.connect(wallet).setWhitelist(addressArray, booleanValue);
    } catch(e) {
      console.log('Error setting whitelist: ', e.message, e.stack)
    }
  }
  async setOnlyWhitelistStatus(onlyWhiteList) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return await contractInstance.connect(wallet).setOnlyWhitelist(onlyWhiteList);
    } catch(e) {
      console.log('Error setting only Whitelist status: ', e.message, e.stack)
    }
  }
}

export default new CollectableService();
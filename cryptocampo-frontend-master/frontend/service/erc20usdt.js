import { ethers } from "ethers";
import WalletService from './wallet';
import erc20ABI from '../abi/usdt.json';

class ERC20Service {
  async getContractInstance() {
    if(this.contractInstance) {
      return this.contractInstance;
    } else {
      const provider = WalletService.getProvider();
      const contractAddress = process.env.ERC20_ADDRESS_2;
      this.contractInstance = new ethers.Contract(contractAddress, erc20ABI, provider);
      return this.contractInstance;
    }
  }
  async approve(spender, amount) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return await contractInstance.connect(wallet).approve(spender, amount);
    } catch(e) {
      console.log('Error on ERC20 service, function approve: ', e.message, e.stack);
      throw e;
    }
  }
  async balanceOf(address) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      return contractInstance.connect(wallet).balanceOf(address);;
    } catch(e) {
      console.log('Error on ERC20 service, function balanceOf: ', e.message, e.stack);
      throw e;
    }
  }
  async allowance(_owner, spender) {
    try {
      const contractInstance = await this.getContractInstance();
      const wallet = await WalletService.getCurrentWallet();
      const remaining = await contractInstance.connect(wallet).allowance(_owner, spender);
      return remaining;
    } catch(e) {
      console.log('Error on ERC20 service, function allowance: ', e.message, e.stack);
      throw e;
    }
  }
}

export default new ERC20Service();
import { defineStore } from "pinia";
import ERC20Service from '../service/erc20usdt';

const useERC20usdt = defineStore('erc20usdt', {
  state: () => {
    return {
      balance: 0,
    }
  },
  actions: {
    async getBalance(address) {
      this.balance = await ERC20Service.balanceOf(address);
      return this.balance;
    },
    initializeERC20(address) {
      return Promise.all([
        this.getBalance(address)
      ])
    },
    clearStoreERC20() {
      this.balance = 0;
    }
  },
})

export default useERC20usdt;
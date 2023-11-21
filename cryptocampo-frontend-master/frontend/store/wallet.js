import { defineStore } from "pinia";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import WalletService from '../service/wallet';

const useWallet = defineStore('wallet', {
  state: () => {
    return {
      walletAddress: '',
      networkId: '',
      balance: 0,
    }
  },
  actions: {
  async connectWallet() {
      const web3ModalProviderOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: process.env.INFURA_API_KEY,
          },
        },
        binancechainwallet: {
          package: true,
        },
        coinbasewallet: {
          package: CoinbaseWalletSDK, 
          options: {
            infuraId: process.env.INFURA_API_KEY 
          }
        },
      };

      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions: web3ModalProviderOptions,
      });

      const selectedProvider = await web3Modal.connect();

      const wallet = await WalletService.connectWallet(selectedProvider);
      this.walletAddress = await wallet.getAddress();
      return this.walletAddress;
    },
    async disconnectWallet() {
      this.walletAddress = '';
    },
  },
  getters: {
    isWalletConnected(state) {
      return !!state.walletAddress;
    },
    shortWallet(state) {
      return (
        state.walletAddress.substring(0, 6) +
        "..." +
        state.walletAddress.substring(state.walletAddress.length - 4, state.walletAddress.length)
      );
    },
    networkName(state) {
      switch (state.networkId) {
        case 1:
          return "Ethereum Mainnet";
        case 31337: 
          return "Localhost";
        case 56: 
          return "Binance Smart Chain";
        case 97: 
          return "TEST Binance Test chain";
        case 137: 
          return "Polygon";
        default:
          return "Unsupported network";
      }
    },
  }
})

export default useWallet;
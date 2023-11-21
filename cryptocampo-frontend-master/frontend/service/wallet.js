import { ethers } from "ethers";

class WalletService {
  async connectWallet(selectedProvider) {
    await this.ensureCorrectNetwork(selectedProvider);
    try {
      this.provider = new ethers.providers.Web3Provider(selectedProvider || window.ethereum)
      await this.provider.send("eth_requestAccounts", []);
      this.wallet = await this.provider.getSigner();
      return this.wallet;
    } catch(e) {
      if(e.code === 4001) {
        throw new Error('User denied wallet connection');
      }
      console.log('Wallet was not connected')
      throw e;
    }
  }
  async ensureCorrectNetwork(selectedProvider) {
    if(!window.ethereum) {
      return; 
    }
    
    try {
      // This triggers a network switch to desired network

      // Here we check if Binance Wallet was selected
      if(selectedProvider.hasOwnProperty('switchNetwork')){
        
        let currentChainId = selectedProvider.chainId;
        if(currentChainId !== '0x38'){
          await selectedProvider.switchNetwork( "bsc-mainnet" )
        }

      } else {
        let currentChainId = await selectedProvider.request({ method: 'eth_chainId' });

        if(currentChainId !== '0x38'){
          await selectedProvider.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: process.env.TARGET_NETWORK_ID }], // chainId must be in hexadecimal numbers
          });
        }
      }


      
    } catch(e) {
      // This error code indicates that the chain has not been added to MetaMask
      // We can try to install it
      if (e.code === 4902) {
        try {
          await selectedProvider.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainName: "Binance Test Chain",
                nativeCurrency: {
                  name: "Test BNB",
                  symbol: "tBNB",
                  decimals: 18,
                },
                blockExplorerUrls: [
                  'https://testnet.bscscan.com/'
                ],
                chainId: process.env.TARGET_NETWORK_ID || '0x61',
                rpcUrls: [process.env.TARGET_NETWORK_RPC_ULR || 'https://data-seed-prebsc-1-s3.binance.org:8545/'],
              },
            ],
          });
        } catch (error) {
          throw e;
        }
      }
    }
  }
  async addAssetToWallet() {
    const tokenAddress = process.env.NFT_CONTRACT_ADDRESS;
    const tokenSymbol = process.env.NFT_SYMBOL;
    const tokenDecimals = process.env.NFT_DECIMALS;
    // const tokenImage = process.env.NFT_LOGO_URL;
    
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC721', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            // image: tokenImage, // A string url of the token logo
          },
        },
      });
    
      if (wasAdded) {
        console.log('Thanks for your interest!');
        return true;
      } else {
        throw new Error('Asset not added to metamask');
      }
    } catch (error) {
      console.log(error);
      throw e;
    }    
  }
  async getCurrentWallet() {
    if(this.wallet) {
      return this.wallet;
    }
    this.wallet = await this.connectWallet();
    return this.wallet;
  }
  getProvider() {
    if(!this.provider) {
      throw new Error('No provider found, is your wallet connected?');
    }
    return this.provider;
  }
  async getWalletBalance() {
    const wallet = await this.getCurrentWallet();
    return wallet.getBalance();
  }
}

export default new WalletService();
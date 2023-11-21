<template>
  <div class="main-content">
    <div class="container-fluid d-flex justify-content-center container-my-investments-page pt-5">
      <div class="col-8 d-flex flex-column container-my-investments">
        <div class="campaignBuy-header p-4">
          <div class="d-flex justify-content-between campaign-header">
            <div class="d-flex flex-column">
              <div class="title-campaign" style="font-size: 32px; font-weight: bold; color: #F2CE31">
                CAMPAÑA 2.0
              </div>
              <div class="text-campaign" style="font-size: 20px; color: #FFFFFF">
                Cannabis medicinal (cáñamo de CBD)
              </div>
            </div>
            <div class="d-flex align-items-center">
              <router-link to="/my-investments/follow-campaign"><button class="col-12 rounded p-2" style="border: 0; color: #157116; font-size: 15px; font-weight: bold; background-color: #FFFFFF;"><font-awesome-icon icon="fa-solid fa-eye" style="color: black"/> VER ACTUALIZACIONES</button></router-link>
            </div>
          </div>
        </div>
        <div class="campaignBuy">
          <div class="row container box-nft">
            <div class="col-12 col-lg-5 p-4 container-img-cryptocampo" style="padding-right: 0!important">
              <img src="../assets/img/nft-campaign2.jpg" width="295" height="440" />
            </div>
            <div class="col-12 col-lg-7 p-0 p-sm-4 d-flex justify-content-between">
              <div class="container">
                <div class="row">
                  <div class="col-7 pt-2">
                    Compraste: <br/>
                    <div class="h2">Campaña 2.0</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 m-1 mt-2 mb-4 textos">
                    Plazo de la Campaña 2.0: <span style="font-weight: 700">12 meses</span>
                  </div>
                </div>
                <div class="row m-1 mt-2">
                  <div class="d-flex p-2 border border-secondary rounded">
                    <div class="p-2" style="padding-left: 20px!important">NFT ADQUIRIDOS: <span style="font-weight: bold" class="h3"> {{nftBalance}} </span></div>
                  </div>
                </div>
                <div class="row m-1 mt-2">
                  <div class="d-flex p-2 border border-secondary rounded">
                    <div class="p-2" style="padding-left: 20px!important">VALOR DEL NFT: <span style="font-weight: bold" class="h3"> {{nftPriceInERC20}} USDT</span></div>
                  </div>
                </div>
                <div class="row m-1 mt-2">
                  <div class="d-flex p-2 border border-secondary rounded" style="visibility: hidden">
                    <div class="p-2" style="padding-left: 20px!important;">VALOR DEL NFT AL CLAIM: <span style="font-weight: bold" class="h3"> X USDT </span></div>
                  </div>
                </div>
                <div class="d-flex align-items-center m-1">
                  <button class="col-12 mt-2 p-4 buy-button rounded" @click="claimTokens" :disabled="processing || !canClaim || nftBalance <= 0">CLAIM</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable_2';
import useERC20 from '../store/erc20usdt';
import { utils } from 'ethers';
import { useToast } from 'vue-toastification';

export default {
  data() {
    return {
      tocAccepted: false,
      nftsToBuy: 1,
      buyLimit: 8,
      buyLimitOptions: [],
      processing: false,
      toast: null
    }
  },
  computed: {
    ...mapState(useWallet, [ "isWalletConnected", "walletAddress"]),
    ...mapState(useCollectable, ['nftPrice', 'buyFee', 'maxSupply', 'supply', 'maxPerUser', 'nftBalance', 'canClaim']),
    ...mapState(useERC20, ['balance']),
    nftPriceInERC20(){
      if(!this.nftPrice) {
        return 0;
      }
      return utils.formatEther(this.nftPrice);
    },
  }, 
  methods: {
    ...mapActions(useCollectable, ['claim', 'getBalance']),
    async claimTokens(){
      try {
        this.processing = true;
        this.toast("Procesando...", { timeout: false, id: "claim-toast" })
        await this.claim(this.walletAddress)
        await this.getBalance(this.walletAddress)
        this.processing = false;
        this.toast.dismiss("claim-toast");
        this.toast.success("Transaccion realizada con exito");
      } catch(e) {
        this.processing = false;
        this.toast.dismiss("claim-toast");
        this.toast.error("La transaccion fallo");
      }
    },
    async setBuyLimitOptions(){
      for (let i=1; i <= this.buyLimit; i++){
        this.buyLimitOptions.push(i)
      }
    }
  },
  created() {
    this.setBuyLimitOptions();
    this.toast = useToast();
  }
}
</script>

<style scoped>
  .main-content {
    min-height: 50vh;
    background-color: white;
  }


  .flex-column{
    flex-direction: column
  }


  .campaignBuy-header{
    background: #157116; height: auto; border-radius: 10px 10px 0 0; position: relative; z-index: 2; background-image: url(../assets/img/logo-nft-header.svg); background-repeat: no-repeat; background-position: right; background-origin: content-box;

  }
  
  .campaignBuy{
    background: #E8E8E8; height: auto; border-bottom: 15px solid #F2CD32; border-radius: 0 0 10px 10px; position: relative; z-index: 2;
  }


  .NFT-card{
    /* width: 302px; */
    /* height: 450px; */
  }
  .bsc-logo-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .buy-button:enabled{
    background-color: #157116;
    color: white;
    font-weight: 700;
    font-size: 17px;
    transition: font-size 0.5s; 
    border: 0;
    height: 73.5px
  }

  .buy-button:disabled{
    background-color: #C9C9C8;
    color: white;
    font-weight: 400;
    font-size: 15px;
    transition: font-size 0.5s; 
    border: 0;
    height: 73.5px
  }

  .container-img-cryptocampo{
    padding: 0px!important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1400px) {
    .container-my-investments{
      width: 100%;
    }
  }
  @media (max-width: 1000px) {
    .box-nft{
      margin-left: auto;
    margin-right: auto;
  } 
  .container-img-cryptocampo{
    padding-right: 1.5rem!important;
    height: 530px;
  }
  .campaignBuy{
    height: auto;
  }

  .buy-button{
    padding: 0px!important;
    height: 55px!important;
    margin-bottom: 15px;
  }
  @media (max-width: 400px) {
    .container-my-investments-page{
      padding-right: 0px!important;
      padding-left: 0px!important;
    }
    .campaign-header{
      flex-direction: column;
    }
    .title-campaign{
      font-size: 20px!important;
    }

    .text-campaign{
      font-size: 15px!important;
      margin-bottom: 20px;
    }
  }

}

  
</style>
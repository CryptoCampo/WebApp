<template>
  <div class="container-fluid w-100 background d-flex row">
    <ShareAfterPurchaseModal></ShareAfterPurchaseModal>

    <div class="col-3 mt-5 box-info">
    </div>
    <div class="col-9 box-nft ps-4 pt-5">
      <div class="col-10 col-lg-11 col-md-12 col-sm-12 col-xs-4 d-flex align-items-center flex-column col-campaing mb-5">
          <!-- Compra de campaña 1 -->
          <div class="campaignBuy">
            <!-- ConnectWallet message -->
            <!-- <div class="campaignBuyConnectWallet" v-if="!isWalletConnected">
              <div class="h2" style="font-weight: 400">Conectate</div>
              <div class="textos mb-3">Para poder ver los NFT disponbles</div>
              <button type="button" class="btn btn-primary connectWallet" @click="doConnectWallet" >
                <font-awesome-icon icon="fa-solid fa-user" /> Conectar
              </button>
              
            </div> -->

            <!-- Start SOLD OUT message -->
            <div class="campaignSoldOut" v-show="true">
              <div style="font-weight: 400">SOLD OUT</div>
            </div>
            <!-- End SOLD OUT message -->

            <!-- Removed the verification of the wallet to replace it with the SOLD OUT message at all times no matter if logged in or not -->
            <div class="container-nft-campaing row container p-0 m-0 log-in-first">
            <div class="col-12 col-lg-4 container-img-cryptocampo">
              <video class="nft-video" id="nftVideo" width="295" height="440" autoplay loop>
                <source src="https://cryptocampo.net/NFT/NFT.mp4" type="video/mp4" >
                Your browser does not support HTML video.
              </video>

            </div>
            <div class="col-12 col-lg-8 p-0 p-sm-4 d-flex justify-content-between">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-7 pt-2">
                    Estas comprando: <br/>
                    <div class="h2">NFT Campaña 1.0</div>
                  </div>
                  <div class="col-12 col-lg-5 d-flex justify-content-lg-end">
                    <div class="d-flex justify-content-center align-items-center" style="background: white; min-width: 50px; height: 50px; border-radius: 50px;">
                      <img src="../assets/img/bsc-logo.svg" class="bsc-logo"/>
                    </div>
                    <div class="d-flex" style="flex-direction: column; padding-left: 10px">
                      <div>Wallet conectada: </div>
                      <div>{{shortWallet}}</div>
                      <div class="d-flex justify-content-start justify-content-lg-end">
                        <span class="p-1 ps-2 pe-2 wallet-connected">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 m-1 mt-2 mb-4 textos">
                    Plazo de la Campaña 1.0: <span style="font-weight: 700">12 meses</span>
                  </div>
                </div>
                <div class="row m-1 mt-2 container-nft-total">
                  <div class="d-flex p-2 border border-secondary rounded">
                    <div class="p-1 p-sm-2 col-6">NFT TOTALES: <span style="font-weight: bold">{{ maxSupply }} </span></div>
                    <div class="vr"></div>
                    <div class="p-1 p-sm-2" style="padding-left: 20px!important">NFT DISPONIBLES: 
                      <!-- <span style="font-weight: bold">{{ nftAvailable }}</span> -->
                      <span style="font-weight: bold">0</span>
                    </div>
                  </div>
                </div>
                <div class="row m-1 mt-2 container-service-free">
                  <div class="d-flex border border-secondary rounded align-items-center">
                    <div class="p-1 p-sm-2 col-6" style="font-size: 12px">Balance: <span style="font-weight: bold">{{ balanceERC20 }}</span> <br/> Service fee {{ buyFeeInPercentage }}%: <span style="font-weight: bold">{{ buyFeeInERC20 }} BUSD</span></div>
                    <div class="vr my-2"></div>
                    <div class="p-1 p-sm-2" style="padding-left: 20px!important">Pagarás: <span style="font-weight: bold">{{ totalPrice }} BUSD</span></div>
                  </div>
                </div>
                <div class="m-1 mt-3 mb-2 d-flex align-items-center">
                  <div class="d-flex justify-content-between align-items-center ps-3 pe-3" style="width: 180px; background-color: white; border-radius: 5px;">
                    <div class="d-flex align-items-center" style="height: 50px; font-weight: 400"><img src="../assets/img/busd-logo.png" style="width: 40px; margin-right: 10px" />BUSD</div>
                    <div class="d-flex align-items-center" style="height: 50px; font-weight: 700">{{ nftPriceInERC20 }}</div>
                  </div>
                  <div class="ms-3 me-3">
                    <select class="form-select" v-model="nftsToBuy" style="height: 50px; font-size: 20px; font-weight: 700;">
                      <option :value="option" v-for="(option, index) in buyLimit" v-bind:key="index">{{option}}</option>
                    </select>
                  </div>
                  <div class="d-none d-sm-block" style="font-size: 12px">Ingrese la cantidad: <br/> {{ remainingPurchases }} disponible </div>
                </div>
                <div class="d-flex align-items-center m-1 container-btn-mint">
                  <button class="col-12 col-lg-5 mt-2 p-4 buy-button rounded" @click="doBuy" :disabled="!isWalletConnected || !tocAccepted || !canBuy || processing">COMPRAR</button>
                  <div class="col-12 col-lg-6 m-3 d-flex align-items-center box-terms" style="line-height: 20px;">
                    <input type="checkbox" style="height: 30px; width: 30px;" v-model="tocAccepted">
                    <div class="ms-2" style="font-size: 12px">Acepto los <br/><router-link target="_blank" to="/terms-of-service">"Términos y condiciones"</router-link></div>
                  </div>
                </div>
                <div class="textos">
                  Recuerda que para realizar la compra del NFT debes contar también con un mínimo de BNB para pagar el gas (con 3,50 USD te alcanzará). 
                </div>
              </div>
            </div>
          </div>
          </div>
          <!-- Compra de campaña 2 -->
          <!-- <div class="campaignBuy mb-5"></div> -->
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable';
import useERC20 from '../store/erc20';
import { utils } from 'ethers';
import AdminPanel from '../components/admin-panel.vue'
import ShareAfterPurchaseModal from '../components/ShareAfterPurchaseModal.vue'
import collectableService from '../service/collectable'
import { useToast } from 'vue-toastification'

export default {
  data() {
    return {
      tocAccepted: false,
      nftsToBuy: 1,
      buyLimit: 0,
      processing: false,
      toast: null
    }
  },
  components: {
    AdminPanel,
    ShareAfterPurchaseModal
  },
  watch: {
    isWalletConnected(newValue, oldValue) {
      const nftVideo = document.getElementById("nftVideo"); 
      if(newValue && nftVideo && nftVideo.paused){
        nftVideo.play()
      }
      if(newValue){
        this.subscribeToEvent();
      }
    }
  },
  computed: {
    ...mapState(useWallet, ['isWalletConnected', 'shortWallet', "walletAddress"]),
    ...mapState(useCollectable, ['owner', 'canBuy', 'nftPrice', 'buyFee', 'smartContractAddress', 'maxSupply', 'supply', 'profitToPay', 'maxPerUser', 'nftBalance']),
    ...mapState(useERC20, ['balance']),
    nftAvailable() {
      return this.maxSupply - this.supply;
    },
    remainingPurchases() {
      if(this.nftBalance && this.maxPerUser) {
        this.buyLimit = this.maxPerUser - this.nftBalance
        return this.maxPerUser - this.nftBalance;
      }
      return 0;
    },
    balanceERC20() {
      if(!this.balance) {
        return 0;
      }
      let balance = parseFloat(utils.formatEther(this.balance))
      return balance.toFixed(2)
    },
    nftPriceInERC20(){
      if(!this.nftPrice) {
        return 0;
      }
      return utils.formatEther(this.nftPrice);
    },
    buyFeeInPercentage(){
      return this.buyFee/100;
    },
    buyFeeInERC20() {
      if(this.buyFeeInPercentage) {
        const a = this.subTotal;
        const b = this.buyFee / 100;
        return (a * b) / 100;
      }
      return 0;
    },
    subTotal() {
      if (this.nftsToBuy && this.nftPrice ) {
        return (this.nftsToBuy * this.nftPrice) / 10e17;
      }
      return 0;
    },
    totalPrice(){
      if (this.nftsToBuy && this.nftPrice ) {
        const a = this.subTotal;
        const b = this.buyFeeInERC20;
        return a + b;
      }
      return 0;
    }
  }, 
  methods: {
    ...mapActions(useCollectable, ['buyNFT', 'initialize', 'getSupply', 'getBalance']),
    ...mapActions(useERC20, ['initializeERC20']),
    ...mapActions(useWallet, ['connectWallet', 'disconnectWallet']),
    async doBuy() {
      try {
        this.processing = true;
        this.toast("Procesando...", { timeout: false, id: "buy-toast" })
        await this.buyNFT(this.nftsToBuy, this.walletAddress, this.smartContractAddress)
        this.toast.dismiss("buy-toast");
        this.toast.success("Transaccion realizada con exito");
        this.processing = false;
        let ShareAfterPurchaseModalInstance = new bootstrap.Modal(document.getElementById('shareOnTwitterAfterPurchase'), {})
        ShareAfterPurchaseModalInstance.show()
      } catch(e) {
        console.log('Error buying nft', e);
        this.toast.dismiss("buy-toast");
        this.toast.error("La transaccion fallo");
        this.processing = false;
      }
    },
    async doConnectWallet() {
      const walletAddress = await this.connectWallet();
      try {
        await this.initializeERC20(walletAddress);
        await this.initialize(walletAddress);
      }catch(e) {
        console.log('Error initializing things');
        console.log(e.message, e.stack)
      }
    },
    async setBuyLimitOptions(){
      for (let i=1; i <= this.buyLimit; i++){
        this.buyLimitOptions.push(i)
      }
    },
    async subscribeToEvent(){
      const contractInstance = await collectableService.getContractInstance()
      contractInstance.on('Buy', async () => {
        await Promise.all([this.getSupply(),this.getBalance(this.walletAddress)]);
      })
    }
  },
  created() {
    this.toast = useToast();
  }
}
</script>


<style scoped>
.background {
  min-height: 50vh;
  background: #70BB70 0% 0% no-repeat padding-box;
  padding: 0;
  background-image: url(../assets/img/light-green-logo.svg);
  background-position: -15%;
  background-size: 35%;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #EBEBEB;
  opacity: 1; /* Firefox */
}

.start-today{
  background: #D2C169; padding-left: 11vw; border-top-right-radius: 5px; border-bottom-right-radius: 5px;
}

.container-img-cryptocampo{
    padding-right: 0px!important;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex-column{
    flex-direction: column
  }

  .campaignBuy{
    background: #E8E8E8; height: 525px; border-bottom: 15px solid #F2CD32; border-radius: 10px; position: relative; z-index: 2; overflow: hidden;
  }

  .wallet-connected{
    background-color: #353535; color: #70BA71; border-radius: 6px; font-size: 12px; padding: 0px 10px!important;
  }
  .campaignBuyConnectWallet {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 3;
    width: 400px;
    height: 200px;
    background: rgb(232, 232, 232);
    border-radius: 16px;
    padding: 30px 0;
    text-align: center;
  }
  .NFT-card{
    background: url(../assets/img/NFTbackground.jpg);
    position: relative;
    /* width: 302px; */
    /* height: 450px; */
  }
  .bsc-logo-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
  }

  .bsc-logo{
    width: 25px; position: relative; top: 0; left: 0; margin: auto;
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

  .log-in-first{
    filter: blur(0px); pointer-events: none; user-select: none; transition: 1s filter linear, 0.25s -webkit-filter linear;
  }

  .connectWallet{
  border-radius: 5px;
  background-color: #157116;
  border: 0;
  padding: 8px 12px
}

.connectWallet:hover{
  background-color: #157116;
}

.campaignSoldOut {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-left: -75px;
    z-index: 3;
    width: 125%;
    height: 200px;
    background: #177116;
    color: #F2CE31;
    border-radius: 16px;
    padding: 20px 0;
    text-align: center;
    font-size: 100px;
    transform: rotate(-25deg);
  }

  .sold-out-subtitle{
    font-weight: 400; font-size: 20px; margin-top: -15px; color: #FFFFFF;
  }

@media (max-width: 1500px) {
  .col-campaing{
    width: 100%;
  }
} 
@media (max-width: 1350px) { 
  .start-today{
    padding-left: 7vw;
  }

  .campaignBuy {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px!important;
  }
  
}

@media (max-width: 1300px) { 
  .box-info{
    width: 100%;
  }
  .box-nft{
    width: 100%;
  }
  .campaignBuy {
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px!important;
  }
  .col-campaing{
    height: 600px;
  }
  .campaignInfo{
    height: 100%;
    margin-bottom: 0px!important;
  }
  
}
@media (max-width: 1200px) { 
  .container-campaigns-page{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .col-campaing{
    height: 100%;
    margin-right: 0px!important;
    padding-right: 0px!important;
  }
  .campaignInfo{
    padding-bottom: 24px;
  }
  .NFT-card{
    height: 500px !important;
    margin-top: 35px
  }
}

@media (max-width: 1120px) { 
  .campaignBuy {
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px!important;
  }
  
}


@media (max-width: 1000px) { 
  .container-nft-campaing{
    min-width: 100%!important;
    height: 100%;
  }
  .container-img-cryptocampo{
    padding: 0px!important;
    height: 530px;
  }
  .campaignBuy{
    height: auto;
  }
  .container-btn-mint{
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
  .box-terms br{
    display: none;
  }
  .box-terms{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .buy-button{
    padding: 0px!important;
    height: 55px!important;
    margin-bottom: 15px;
  }

  .NFT-card{
    margin-top: 0px
  }

}

@media (max-width: 750px){
  .campaignSoldOut {
    transform: rotate(0deg);
    font-size: 50px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 3;
    width: 100%;
    height: 100px;
    border-radius: 0;
    background: #177116;
    color: #F2CE31;
    padding: 0px 0;
  }

  .sold-out-subtitle{
    font-weight: 200; font-size: 14px; margin-top: -15px;
  }
}


@media (max-width: 400px) { 
  .campaignBuyConnectWallet{
    width: 295px;
  }
  .container-nft-total{
    font-size: 10px;
  }
  .container-service-free{
    font-size: 10px;
  }
}


</style>
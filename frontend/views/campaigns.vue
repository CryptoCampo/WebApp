<template>
  <div class="main-content">

    <AdminPanel />
    <AdminPanel2 />
    <div class="container-fluid p-0 pt-5 d-none d-lg-flex justify-content-center">
      <img src="../assets/img/banner.png" class="banner-width" />
    </div>

    <Divider text="Campaña actual" />

    <div class="container-campaigns-page  container-fluid d-flex justify-content-between p-0 pt-5">
      <div class="col-12 col-xl-4 col-campaing me-3 d-flex flex-column mb-5">
        <!-- Info de campaña actual -->
        <div class="campaignInfoHeader bg-grey textos">
          <div class="campaignInfoHeaderTitle">CAMPAÑA 2.0</div>
          <div class="campaignInfoHeaderSubtitle">Producción de CBD de Alta calidad</div>
        </div>
        <div class="campaignInfo">
          <div class="textos m-4">
            Producción de Cannabis Medicinal de alta calidad en Uruguay. Siguiendo el éxito de la Campaña 1.0,
            realizaremos a mayor escala una producción de flor de cáñamo de CBD de primera calidad con el objetivo de su
            exportación.
          </div>
          <div class="textos m-4">
            <span class="text-black">La siembra se llevará adelante en los campos propiedad de la empresa CANNBIO AGRO
              S.A.S. y sus cultivadores anexos</span>, quienes poseen una sólida trayectoria en la industria y se
            encuentran inscriptos en el Registro Único de Operadores del Ministerio de Ganadería, Agricultura y Pesca de
            Uruguay.
          </div>
          <div class="textos m-4">
            Con la compra del NFT podrá ser parte en la industria del cannabis. <b>Se requiere stablecoin USDT (Tether de
              la red BEP20 - Binance Smart Chain-) y BNB para el gas fee.</b></div>
          <router-link class="btn btn-primary ms-4 moreInfoButton" @click="scrollToTop"
            to="/campaign-2-info"><font-awesome-icon icon="fa-solid fa-eye" /> VER INFO DE LA CAMPAÑA</router-link>
        </div>
        <!-- Info de campaña 2 -->
        <!-- <div class="campaignInfo mb-5"></div> -->
      </div>
      <div class="col-12 col-xl-8 pe-3 d-flex flex-column col-campaing mb-5" style="position: relative">
        <div class="campaignBuyConnectWallet" v-if="!isWalletConnected">
          <div class="h2" style="font-weight: 400">Conectate</div>
          <div class="textos mb-3 text-center">Para poder ver los NFT disponbles</div>
          <button type="button" class="btn btn-primary connectWallet" @click="doConnectWallet" >
            <font-awesome-icon icon="fa-solid fa-user" /> Conectar
          </button>
        </div>
        <!-- Compra de campaña 1 -->
        <div class="campaignBuy" :style="!isWalletConnected ? 'filter: blur(3px) opacity(0.7)' : ''">
          <!-- ConnectWallet message -->

          <!-- Removed the verification of the wallet to replace it with the SOLD OUT message at all times no matter if logged in or not -->
          <div class="container-nft-campaing row container p-0 m-0 log-in-first" :style="isWalletConnected ? 'pointer-events: all; user-select: all;' : ''">
            <div class="col-12 col-lg-4 container-img-cryptocampo">
                
              <img src="../assets/img/nft-campaign2.jpg" width="295" height="440" />

            </div>
            <div class="col-12 col-lg-8 p-0 p-sm-4 d-flex justify-content-between container-info-mint">
              <div class="container">
                <div class="row">
                  <div class="col-12 col-lg-7 pt-2">
                    Estas comprando: <br />
                    <div class="h2">NFT Campaña 2.0</div>
                  </div>
                  <div class="col-12 col-lg-5 d-flex justify-content-lg-end">
                    <div class="d-flex justify-content-center align-items-center"
                      style="background: white; min-width: 50px; height: 50px; border-radius: 50px;">
                      <img src="../assets/img/bsc-logo.svg" class="bsc-logo" />
                    </div>
                    <div class="d-flex" style="flex-direction: column; padding-left: 10px">
                      <div>Wallet conectada: </div>
                      <div>{{ shortWallet }}</div>
                      <div class="d-flex justify-content-start justify-content-lg-end">
                        <span class="p-1 ps-2 pe-2 wallet-connected">Connected</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-12 m-1 mt-2 mb-4 textos">
                    Plazo de la Campaña 2.0: <span style="font-weight: 700">12 meses</span>
                  </div>
                </div>
                <div class="row m-1 mt-2 container-nft-total">
                  <div class="d-flex p-2 border border-secondary rounded">
                    <div class="p-1 p-sm-2 col-6">NFT TOTALES: <span style="font-weight: bold">{{ maxSupply }} </span>
                    </div>
                    <div class="vr"></div>
                    <div class="p-1 p-sm-2" style="padding-left: 20px!important">NFT DISPONIBLES:
                      <span style="font-weight: bold">{{ nftAvailable }}</span>
                    </div>
                  </div>
                </div>
                <div class="row m-1 mt-2 container-service-free">
                  <div class="d-flex border border-secondary rounded align-items-center">
                    <div class="p-1 p-sm-2 col-6" style="font-size: 12px">Balance: <span style="font-weight: bold">{{
                      balanceERC20 }}</span> <br /> Service fee {{ buyFeeInPercentage }}%: <span
                        style="font-weight: bold">{{ buyFeeInERC20 }} USDT</span></div>
                    <div class="vr my-2"></div>
                    <div class="p-1 p-sm-2" style="padding-left: 20px!important">Pagarás: <span
                        style="font-weight: bold">{{ totalPrice }} USDT</span></div>
                  </div>
                </div>
                <div class="m-1 mt-3 mb-2 d-flex align-items-center">
                  <div class="d-flex justify-content-between align-items-center ps-3 pe-3"
                    style="width: 180px; background-color: white; border-radius: 5px;">
                    <div class="d-flex align-items-center" style="height: 50px; font-weight: 400"><img
                        src="../assets/img/usdt-logo.svg" style="width: 40px; margin-right: 10px" />USDT</div>
                    <div class="d-flex align-items-center" style="height: 50px; font-weight: 700">{{ nftPriceInERC20 }}
                    </div>
                  </div>
                  <div class="ms-3 me-3">
                    <select class="form-select" v-model="nftsToBuy"
                      style="height: 50px; font-size: 20px; font-weight: 700;">
                      <option :value="option" v-for="(option, index) in buyLimit" v-bind:key="index">{{ option }}</option>
                    </select>
                  </div>
                  <div class="d-none d-sm-block" style="font-size: 12px">Ingrese la cantidad: <br /> {{ remainingPurchases
                  }} disponible. Maximo {{ maxPerUser }} NFT (5000 USDT) </div>
                </div>
                <div class="d-flex align-items-center m-1 container-btn-mint">
                  <button class="col-12 col-lg-5 mt-2 p-4 buy-button rounded" @click="doBuy"
                    :disabled="!isWalletConnected || !tocAccepted || !canBuy || processing">COMPRAR</button>
                  <div class="col-12 col-lg-6 m-3 d-flex align-items-center box-terms" style="line-height: 20px;">
                    <input type="checkbox" style="height: 30px; width: 30px;" v-model="tocAccepted">
                    <div class="ms-2" style="font-size: 12px">Acepto los <br /><router-link target="_blank"
                        to="/terms-of-service-campaign2">"Términos y condiciones"</router-link></div>
                  </div>
                </div>
                <div class="textos pb-4 pb-sm-0">
                  Recuerda que para realizar la compra del NFT debes contar también con un mínimo de BNB para pagar el gas
                  (con 3,50 USD te alcanzará).
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Compra de campaña 2 -->
        <!-- <div class="campaignBuy mb-5"></div> -->
      </div>
    </div>
    <!-- Campaing's divider -->
    <div class="accordion accordion-flush mt-5 accordion-border-button" id="step-1">
      <div class="accordion-item">
        <h3 class="accordion-header" id="flush-heading-1">
          <button class="accordion-button font-2rem accordion-question" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
            Campañas cerradas
          </button>
        </h3>
        <div id="collapse-1" class="accordion-collapse collapse accordion-bg show" aria-labelledby="heading-1"
          data-bs-parent="#step-1">
          <div class="accordion-body">
            <div class="container-campaigns-page container-fluid d-flex justify-content-between p-0 pt-5">
              <div class="col-12 col-xl-4 col-campaing me-3 d-flex flex-column mb-5">
                <!-- Info de campaña 1 -->
                <div class="campaignInfoHeader textos">
                  <div class="campaignInfoHeaderTitle">CAMPAÑA 1.0</div>
                  <div class="campaignInfoHeaderSubtitle">Cannabis medicinal (cáñamo de CBD)</div>
                </div>
                <div class="campaignInfo">
                  <div class="textos m-4">
                    Producción de cannabis medicinal en el departamento de Rocha, Uruguay. La inversión destinada será
                    para la producción de flor de cáñamo de CBD de primera calidad, ello con fines de exportación.
                  </div>
                  <div class="textos m-4">
                    La siembra y producción será realizada a través de la empresa CANNBIO AGRO S.A.S., la cual posee
                    largos años de experiencia en el rubro y se encuentra inscripta en el Registro Único de Operadores del
                    Ministerio de Ganadería, Agricultura y Pesca de Uruguay. Asimismo, también han obtenido el Certificado
                    de Buenas Prácticas Agrícolas otorgado por la LSQA S.A.
                  </div>
                  <div class="textos m-4">
                    Con la compra del NFT podrá ser parte en la industria del cannabis. Se requiere BUSD -stablecoin
                    emitida por Binance- para adquirirlo.
                  </div>
                  <router-link class="btn btn-primary ms-4 moreInfoButton" @click="scrollToTop"
                    to="/campaign-info"><font-awesome-icon icon="fa-solid fa-eye" /> VER INFO DE LA CAMPAÑA</router-link>
                </div>
                <!-- Info de campaña 2 -->
              </div>
              <div class="col-12 col-xl-8 pe-3 d-flex flex-column col-campaing mb-5">
                <!-- Compra de campaña 1 -->
                <div class="campaignBuy">
                  <!-- ConnectWallet message -->
          
                  <!-- Start SOLD OUT message -->
                  <div class="campaignSoldOut" v-show="true">
                    <div style="font-weight: 400; font-size: 50px"><span style="color: white">FINALIZADA</span> 15% de rentabilidad</div>
                  </div>
                  <!-- End SOLD OUT message -->

                  <!-- Removed the verification of the wallet to replace it with the SOLD OUT message at all times no matter if logged in or not -->
                  <div class="container-nft-campaing row container p-0 m-0 log-in-first">
                    <div class="col-12 col-lg-4 container-img-cryptocampo">
                      <video class="nft-video" id="nftVideo" width="295" height="440" autoplay loop>
                        <source src="https://cryptocampo.net/NFT/NFT.mp4" type="video/mp4">
                        Your browser does not support HTML video.
                      </video>
                    </div>
                    <div class="col-12 col-lg-8 p-0 p-sm-4 d-flex justify-content-between container-info-mint">
                      <div class="container">
                        <div class="row">
                          <div class="col-12 col-lg-7 pt-2">
                            Estas comprando: <br />
                            <div class="h2">NFT Campaña 1.0</div>
                          </div>
                          <div class="col-12 col-lg-5 d-flex justify-content-lg-end">
                            <div class="d-flex justify-content-center align-items-center"
                              style="background: white; min-width: 50px; height: 50px; border-radius: 50px;">
                              <img src="../assets/img/bsc-logo.svg" class="bsc-logo" />
                            </div>
                            <div class="d-flex" style="flex-direction: column; padding-left: 10px">
                              <div>Wallet conectada: </div>
                              <div>{{ shortWallet }}</div>
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
                            <div class="p-1 p-sm-2 col-6">NFT TOTALES: <span style="font-weight: bold">1420
                              </span></div>
                            <div class="vr"></div>
                            <div class="p-1 p-sm-2" style="padding-left: 20px!important">NFT DISPONIBLES:
                              <!-- <span style="font-weight: bold">{{ nftAvailable }}</span> -->
                              <span style="font-weight: bold">0</span>
                            </div>
                          </div>
                        </div>
                        <div class="row m-1 mt-2 container-service-free">
                          <div class="d-flex border border-secondary rounded align-items-center">
                            <div class="p-1 p-sm-2 col-6" style="font-size: 12px">Balance: <span
                                style="font-weight: bold">{{ balanceERC20 }}</span> <br /> Service fee {{
                                  buyFeeInPercentage }}%: <span style="font-weight: bold">{{ buyFeeInERC20 }} BUSD</span>
                            </div>
                            <div class="vr my-2"></div>
                            <div class="p-1 p-sm-2" style="padding-left: 20px!important">Pagarás: <span
                                style="font-weight: bold">{{ totalPrice }} BUSD</span></div>
                          </div>
                        </div>
                        <div class="m-1 mt-3 mb-2 d-flex align-items-center">
                          <div class="d-flex justify-content-between align-items-center ps-3 pe-3"
                            style="width: 180px; background-color: white; border-radius: 5px;">
                            <div class="d-flex align-items-center" style="height: 50px; font-weight: 400"><img
                                src="../assets/img/busd-logo.png" style="width: 40px; margin-right: 10px" />BUSD</div>
                            <div class="d-flex align-items-center" style="height: 50px; font-weight: 700">{{
                              nftPriceInERC20 }}</div>
                          </div>
                          <div class="ms-3 me-3">
                            <select class="form-select" v-model="nftsToBuy"
                              style="height: 50px; font-size: 20px; font-weight: 700;">
                              <option :value="option" v-for="(option, index) in buyLimit" v-bind:key="index">{{ option }}
                              </option>
                            </select>
                          </div>
                          <div class="d-none d-sm-block" style="font-size: 12px">Ingrese la cantidad: <br /> {{
                            remainingPurchases }} disponible </div>
                        </div>
                        <div class="d-flex align-items-center m-1 container-btn-mint">
                          <button class="col-12 col-lg-5 mt-2 p-4 buy-button rounded" @click="doBuy"
                            :disabled="!isWalletConnected || !tocAccepted || !canBuy || processing">COMPRAR</button>
                          <div class="col-12 col-lg-6 m-3 d-flex align-items-center box-terms" style="line-height: 20px;">
                            <input type="checkbox" style="height: 30px; width: 30px;">
                            <div class="ms-2" style="font-size: 12px">Acepto los <br /><router-link target="_blank"
                                to="/terms-of-service">"Términos y condiciones"</router-link></div>
                          </div>
                        </div>
                        <div class="textos pb-4 pb-sm-0">
                          Recuerda que para realizar la compra del NFT debes contar también con un mínimo de BNB para
                          pagar el gas (con 3,50 USD te alcanzará).
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
        </div>
      </div>
    </div>
    <ShareAfterPurchaseModal></ShareAfterPurchaseModal>

  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable';
import useCollectable2 from '../store/collectable_2';
import useERC20 from '../store/erc20usdt';
import { utils } from 'ethers';
import AdminPanel from '../components/admin-panel.vue'
import AdminPanel2 from '../components/admin-panel-2.vue'
import ShareAfterPurchaseModal from '../components/ShareAfterPurchaseModal.vue'
import collectableService from '../service/collectable'
import { useToast } from 'vue-toastification'
import Divider from '../components/Divider.vue';

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
    AdminPanel2,
    ShareAfterPurchaseModal,
    Divider
  },
  watch: {
    isWalletConnected(newValue, oldValue) {
      const nftVideo = document.getElementById("nftVideo");
      if (newValue && nftVideo && nftVideo.paused) {
        nftVideo.play()
      }
      if (newValue) {
        this.subscribeToEvent();
      }
    }
  },
  computed: {
    ...mapState(useWallet, ['isWalletConnected', 'shortWallet', "walletAddress"]),
    ...mapState(useCollectable2, [ 'owner', 'canBuy', 'nftPrice', 'buyFee', 'smartContractAddress', 'maxSupply', 'supply', 'profitToPay', 'maxPerUser', 'nftBalance' ]),
    ...mapState(useERC20, ['balance']),
    nftAvailable() {
      return this.maxSupply - this.supply;
    },
    remainingPurchases() {
      if (this.nftBalance && this.maxPerUser) {
        let buyLimit = this.maxPerUser - this.nftBalance;
        this.buyLimit = buyLimit >= 0 ? buyLimit : 0;
        return this.maxPerUser - this.nftBalance;
      }
      return 0;
    },
    balanceERC20() {
      if (!this.balance) {
        return 0;
      }
      let balance = parseFloat(utils.formatEther(this.balance))
      return balance.toFixed(2)
    },
    nftPriceInERC20() {
      if (!this.nftPrice) {
        return 0;
      }
      return utils.formatEther(this.nftPrice);
    },
    buyFeeInPercentage() {
      return this.buyFee / 100;
    },
    buyFeeInERC20() {
      if (this.buyFeeInPercentage) {
        const a = this.subTotal;
        const b = this.buyFee / 100;
        return (a * b) / 100;
      }
      return 0;
    },
    subTotal() {
      if (this.nftsToBuy && this.nftPrice) {
        return (this.nftsToBuy * this.nftPrice) / 10e17;
      }
      return 0;
    },
    totalPrice() {
      if (this.nftsToBuy && this.nftPrice) {
        const a = this.subTotal;
        const b = this.buyFeeInERC20;
        return a + b;
      }
      return 0;
    }
  },
  methods: {
    ...mapActions(useCollectable, { 'initialize': 'initialize', 'getSupply': 'getSupply', 'getBalance': 'getBalance' }),
    ...mapActions(useCollectable2, { 'buyNFT': 'buyNFT', 'initialize2': 'initialize', 'getSupply2': 'getSupply', 'getBalance2': 'getBalance' }),
    ...mapActions(useERC20, ['initializeERC20']),
    ...mapActions(useWallet, ['connectWallet', 'disconnectWallet']),
    async doBuy() {
      try {
        this.processing = true;
        this.toast("Procesando...", { timeout: false, id: "buy-toast" })
        await this.buyNFT(this.nftsToBuy, this.walletAddress, this.smartContractAddress)
        await this.initialize(this.walletAddress);
        this.toast.dismiss("buy-toast");
        this.toast.success("Transaccion realizada con exito");
        this.processing = false;
        let ShareAfterPurchaseModalInstance = new bootstrap.Modal(document.getElementById('shareOnTwitterAfterPurchase'), {})
        ShareAfterPurchaseModalInstance.show()
      } catch (e) {
        console.log('Error buying nft', e);
        this.toast.dismiss("buy-toast");
        this.toast.error(`${e?.reason || 'La transaccion falló'}`);
        this.processing = false;
      }
    },
    async doConnectWallet() {
      const walletAddress = await this.connectWallet();
      try {
        await this.initializeERC20(walletAddress);
        await this.initialize(walletAddress);
        await this.initialize2(walletAddress);
      } catch (e) {
        console.log('Error initializing things');
        console.log(e.message, e.stack)
      }
    },
    async setBuyLimitOptions() {
      for (let i = 1; i <= this.buyLimit; i++) {
        this.buyLimitOptions.push(i)
      }
    },
    async subscribeToEvent() {
      const contractInstance = await collectableService.getContractInstance()
      contractInstance.on('Buy', async () => {
        await Promise.all([
          this.getSupply(), 
          this.getSupply2(), 
          this.getBalance(this.walletAddress),
          this.getBalance2(this.walletAddress)
        ]);
      })
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {
    this.toast = useToast();
  }
}
</script>

<style scoped>
.container-img-cryptocampo {
  padding-right: 0px !important;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-content {
  min-height: 50vh;
  background-color: white;
}

.banner-width {
  width: 100%
}

.flex-column {
  flex-direction: column
}

.campaignInfo {
  background: #E8E8E8;
  height: 525px;
  border-bottom: 15px solid #F2CD32;
  border-radius: 0 0 10px 10px;
}

.campaignInfoHeader {
  background-color: #157116;
  border-radius: 10px 10px 0 0;
  font-size: 20px;
  padding: 40px 25px;
  background-image: url(../assets/img/logo-nft-header.svg);
  background-repeat: no-repeat;
  background-position: right;
  background-origin: content-box;
  background-size: 35%;
}

.campaignInfoHeaderTitle {
  color: #F2CD32;
}

.campaignInfoHeaderSubtitle {
  color: white;
  margin-top: 10px;
}


.campaignBuy {
  background: #E8E8E8;
  height: 665px;
  border-bottom: 15px solid #F2CD32;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  overflow: hidden;
}


.moreInfoButton {
  background: #D2C169;
  color: white;
  border: 0;
  font-size: 17px;
  font-weight: bold;
  font-family: Lato;
}

.moreInfoButton:hover {
  background: #A59750;
}

.wallet-connected {
  background-color: #353535;
  color: #70BA71;
  border-radius: 6px;
  font-size: 12px;
  padding: 0px 10px !important;
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

.campaignSoldOut {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  font-size: 100px;
  transform: rotate(-25deg);
}

.sold-out-subtitle {
  font-weight: 400;
  font-size: 20px;
  margin-top: -15px;
  color: #FFFFFF;
}

.NFT-card {
  background: url(../assets/img/NFTbackground.jpg);
  position: relative;

}

.bsc-logo-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.bsc-logo {
  width: 25px;
  position: relative;
  top: 0;
  left: 0;
  margin: auto;
}

.buy-button:enabled {
  background-color: #157116;
  color: white;
  font-weight: 700;
  font-size: 17px;
  transition: font-size 0.5s;
  border: 0;
  height: 73.5px
}

.buy-button:disabled {
  background-color: #C9C9C8;
  color: white;
  font-weight: 400;
  font-size: 15px;
  transition: font-size 0.5s;
  border: 0;
  height: 73.5px
}

.log-in-first {
  filter: blur(0px);
  pointer-events: none;
  user-select: none;
  transition: 1s filter linear, 0.25s -webkit-filter linear;
}

.connectWallet {
  border-radius: 5px;
  background-color: #157116;
  border: 0;
  padding: 8px 12px
}

.connectWallet:hover {
  background-color: #157116;
}

.user-select-auto {
  user-select: auto !important;
}

.accordion-question {
  background-color: #177116;
  border-top: 0.5px solid lightgray;
  color: white !important;
  font-size: 2rem;
  font-weight: bold;
}

.accordion-button:not(.collapsed)::after {
  background-image: url(../assets/img/arrow-campaign-2.svg);
  transform: rotate(90deg);
}

.accordion-button::after {
  background-image: url(../assets/img/arrow-campaign.svg);
  height: 25px;
}

.accordion-border-button {
  border-bottom: 1px solid lightgray
}



/* Utils */
.bg-grey {
  background-color: #353535;
}

.font-2rem {
  font-size: 25px !important; 
}

.text-black {
  color: "#000000"
}



@media(max-width: 1900px) {
  .campaignSoldOut {
    margin-left: -100px;
    width: 125%;
    height: 200px;
    text-align: center;
    font-size: 100px;

  }
}

@media (max-width: 1800px) {
  .container-img-cryptocampo {
    padding: 20px 0px 0px 20px;
  }
}

@media (max-width: 1700px) {

  .container-img-cryptocampo {
    /* padding-left: 0px!important; */
  }

  .campaignInfo {
    height: 100%;
    margin-bottom: 0px !important;
    padding-bottom: 24px;
  }
}

@media (max-width: 1600px) {
  .container-info-mint {
    padding: 20px 10px 10px 10px !important;
    width: 60% !important;
  }

  .container-img-cryptocampo {
    width: 40% !important;
    padding: 20px 0px 0px 10px;
  }

  .campaignInfo {
    height: 650px;
  }

  .campaignBuy {
    height: 100%;
  }

}

@media (max-width: 1300px) {

  .campaignInfo {
    height: 350px;
  }

  .campaignBuy {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0px !important;
  }

  .container-campaigns-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .col-campaing {
    width: 100% !important;
  }

  .container-info-mint {
    padding: 1.5rem !important;
  }

  .container-img-cryptocampo {
    padding: 1.5rem !important;
  }
}

@media (max-width: 1200px) {
  .col-campaing {
    height: 100%;
    margin-right: 0px !important;
    padding-right: 0px !important;
  }
}

@media (max-width: 1000px) {

  .campaignInfo {
    height: 450px;
  }

  .container-nft-campaing {
    min-width: 100% !important;
    height: 100%;
  }

  .campaignBuy {
    height: auto;
  }

  .container-btn-mint {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }

  .box-terms br {
    display: none;
  }

  .box-terms {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .buy-button {
    padding: 0px !important;
    height: 55px !important;
    margin-bottom: 15px;
  }

  .container-info-mint {
    padding: 20px !important;
  }

  .container-img-cryptocampo {
    padding: 20px !important;
  }
}

@media (max-width: 900px) {
  .container-info-mint {
    width: 100% !important;
  }

  .container-img-cryptocampo {
    width: 100% !important;
  }

}

@media (max-width: 990px) {
  .campaignSoldOut {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: -100px;
    width: 145%;
    height: 200px;
    border-radius: 16px;
    text-align: center;
    font-size: 100px;
    transform: rotate(-25deg);
  }

}

@media (max-width: 990px) {
  .campaignSoldOut {
    width: 135%;
  }

}

@media (max-width: 650px) {
  .campaignInfo {
    height: 750px;
  }
}

@media (max-width: 600px) {
  .campaignSoldOut {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: -100px;
    width: 145%;
    height: 100px;
    border-radius: 16px;
    text-align: center;
    font-size: 50px;
    transform: rotate(-25deg);
  }

}

@media (max-width: 375px) {
  .campaignSoldOut {
    position: absolute;
    top: 30%;
    left: 0;
    right: 0;
    margin-left: -100px;
    width: 160%;
    height: 100px;
    border-radius: 16px;
    text-align: center;
    font-size: 50px;
    transform: rotate(-25deg);
  }

}

@media (max-width: 400px) {
  .campaignBuyConnectWallet {
    width: 295px;
  }

  .container-nft-total {
    font-size: 10px;
  }

  .container-service-free {
    font-size: 10px;
  }
}</style>>
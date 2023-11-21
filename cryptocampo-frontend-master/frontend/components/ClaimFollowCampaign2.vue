<template>
  <div class="col-3 box-nft-info">
    <div class="d-flex flex-column my-5">
      <div class="campaignInfoHeader textos">
        <div class="campaignInfoHeaderTitle">CAMPAÑA 2.0</div>
        <div class="campaignInfoHeaderSubtitle">Cannabis medicinal (cáñamo de CBD)</div>
      </div>
      <div class="campaignInfo">
        <div class='row container p-0 m-0 container-nft'>
          <div class="col-12 px-4 py-4 card-height">
            <img data-v-4b7629="" src="../assets/img/nft-campaign2.jpg" width="295" height="440">
          </div>
        </div>
        <div class="d-flex text-center justify-content-around container-nft-info">
          <div>
            <div class="card-info-text">
              NFT adquiridos:
            </div>
            <div class="h2">
              {{ nftBalance }}
            </div>
          </div>
          <div class="vr"></div>
          <div>
            <div class="card-info-text">
              Valor total(USD)
            </div>
            <div class="h2">
              {{ nftPriceInERC20 * nftBalance }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 d-flex justify-content-center">
            <button type="button" class="btn py-4 px-5 fw-bold claim-button"
              :disabled="processing || !canClaim || nftBalance <= 0" @click="claimTokens">CLAIM</button>
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
      processing: false,
      toast: null,
      videoIsOpen: false
    }
  },
  computed: {
    ...mapState(useWallet, ["isWalletConnected", "walletAddress"]),
    ...mapState(useCollectable, ['nftPrice', 'buyFee', 'maxSupply', 'supply', 'maxPerUser', 'nftBalance', 'canClaim']),
    ...mapState(useERC20, ['balance']),

    nftPriceInERC20() {
      if (!this.nftPrice) {
        return 0;
      }
      return utils.formatEther(this.nftPrice);
    },
  },
  mounted() {
    const iframe = this.$refs.pdfViewer;
    const pdfURL = require('url:../assets/pdf/CANNCARGO_DOCUMENTAL.pdf');
    iframe.src = pdfURL + '#toolbar=0';

    const iframe2 = this.$refs.pdfViewer2;
    const pdfURL2 = require('url:../assets/pdf/DOC_CANNBIO_CC.pdf');
    iframe2.src = pdfURL2 + '#toolbar=0';
  },
  methods: {
    ...mapActions(useCollectable, ['claim', 'getBalance']),
    async claimTokens() {
      try {
        this.processing = true;
        this.toast("Procesando...", { timeout: false, id: "claim2-toast" })
        await this.claim(this.walletAddress)
        await this.getBalance(this.walletAddress)
        this.processing = false;
        this.toast.dismiss("claim2-toast");
        this.toast.success("Transaccion realizada con exito");
      } catch (e) {
        this.processing = false;
        this.toast.dismiss("claim2-toast");
        this.toast.error("La transaccion fallo");
      }
    },
    VerVideo(url) {
      var video_url = url;
      window.open(video_url).href
    }
  },

  created() {
    this.toast = useToast();
  }
}
</script>

<style scoped>
.main-content {
  min-height: 50vh;
  background-color: white;
}

.campaign2-main-content  {
  padding: 0 16px ;
}

.h2-black {
  color: #353535
}

.h3-green {
  color: #177116
}

.accordion-question {
  background-color: #177116;
  border-top: 0.5px solid lightgray;
  color: white !important;
  font-size: 25px
}

.accordion-button:not(.collapsed) {
  color: black !important;
  background-color: #177116 !important;
  color: white !important;

}

.accordion-button:link,
.accordion-button:visited,
.accordion-button:hover,
.accordion-button:active {
  background-color: #177116 !important;
  color: white !important;
  text-decoration: none !important;
  border-color: lightgray !important;
  box-shadow: 0px !important;

}

.accordion-button:focus {
  z-index: 3;
  outline: 0;
  color: white !important;
  box-shadow: 0 0 0 .1rem #70BB70 !important;

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

.button-disabled:not(.collapsed) {
  background-color: #E8E8E8 !important;
  color: #B4B4B4 !important;
  font-size: 25px
}


.button-disabled:link,
.button-disabled:visited,
.button-disabled:hover,
.button-disabled:active {
  background-color: #E8E8E8 !important;
  color: #B4B4B4 !important;
  text-decoration: none !important;
  border-color: lightgray !important;
  box-shadow: 0px !important;

}

.button-disabled:focus {
  z-index: 3;
  outline: 0;
  color: #B4B4B4 !important;
  box-shadow: 0 0 0 0 !important;

}

.button-disabled:not(.collapsed)::after {
  background-image: url(../assets/img/disabled-arrow-2.svg);
  transform: rotate(0deg);
}

.button-disabled::after {
  background-image: url(../assets/img/disabled-arrow-1.svg);
  height: 25px;
}

.campaignInfo {
  background: #E8E8E8;
  border-bottom: 15px solid #F2CD32;
  border-radius: 0 0 10px 10px;
}

.campaignInfoHeader {
  background-color: #157116;
  border-radius: 10px 10px 0 0;
  font-size: 20px;
  padding: 25px;
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
  font-size: 18px
}

.NFT-card {
  background: url(../assets/img/NFTbackground.jpg);
  position: relative;
  /* width: 302px; */
  /* height: 450px; */
  border-radius: 5px !important;
}

.bsc-logo-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.accordion-bg {
  background-color: #F8F8F8
}

.claim-button {
  background-color: #177116;
  color: white;
  width: 18vw;
  margin: 10px;
}

.card-height {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img-align {
  align-self: center;
}

.card-info-text {
  font-size: 18px
}

.btn:disabled {
  background-color: #C8C8C8;
  color: white;
  border: 0
}

.btn {
  background-color: #177116;
  color: white
}

.container-nft {
  margin-left: auto !important;
  margin-right: auto !important;
}

@media (max-width: 1500px) {
  .container-follow-campaign {
    display: flex;
    flex-direction: column-reverse;
  }

  .box-nft {
    width: 100%;
  }

  .box-nft-info {
    width: 100%;
  }
}

@media (max-width: 1200px) {
  .container-title-campaign div {
    font-size: 24px !important;
  }

  .container-nft-info {
    flex-direction: column;
  }
}

@media (max-width: 992px) {
  .claim-button {
    width: 200px;
  }
}

@media (max-width: 376px) {
  .claim-button {
    width: 80%;
  }

  .container-title-campaign {
    flex-direction: column;
    padding-top: 1rem !important;
  }

  .container-title-campaign div {
    font-size: 16px !important;
    padding-left: 0px !important;
  }

  .container-preparation-stage {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
}
</style>



<template>
  <div class="modal fade modal-lg" id="shareOnTwitterAfterPurchase" tabindex="-1" aria-labelledby="shareOnTwitterAfterPurchaseLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
       <div class="modal-body d-flex flex-column flex-md-row position-relative">

          <button type="button" class="btn-close close-modal-button" data-bs-dismiss="modal" aria-label="Close"></button>

          <div class="col-12 col-md-5 text-center">
            <img class="banner-image" src="../assets/img/nft-campaign2.jpg" alt="">
          </div>
          <div class="col-12 col-md-7 px-4 d-flex flex-column">
            <h3 class="congratulation-title">¡FELICITACIONES!</h3>
            <p class="congratulation-text">¡Ya sos parte de la Campaña 2.0 de Cryptocampo!</p>
            <div class="divisor-small"></div>
            <p class="cta-text"> <span>Compartí</span> tu NFT en twitter para ingresar al sorteo de 2 NFTs de la Campaña 2.0 totalmente gratis!</p>
            <div class="text-center mt-2"> 
              <button class="share-on-twitter-button" @click="shareOnTwitter"><font-awesome-icon icon="fa-brands fa-twitter" class="twitter-icon" /> Compartir</button>
            </div>
          </div>  
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    shareOnTwitter(){
      window.open('http://twitter.com/share?url='+encodeURIComponent("https://cryptocampo.app/")+'&text='+encodeURIComponent("Ya soy parte de la Campaña 2.0 de Cryptocampo! @CryptocampoNet"), '_blank');
    }
  }
  
}
</script>

<style scoped>

.close-modal-button{
  position: absolute!important;
  top: 5;
  right: 5;
}

.celebration-icon{
  text-align: center;
  font-size: 50px;
  padding-top: 20px;
}

.congratulation-title{
  text-align: center;
  font-weight: 900;
  color: #167116;
  font-size: 30px;
  margin-top: 90px;
}

.congratulation-text {
  text-align: center;
  font-size: 20px;
  font-weight: 900;
  margin-bottom: 0px;
}

.divisor-small{
  width: 50px;
  border: #A59750 1px solid;
  align-self: center;
  margin: 30px 0px;
}

.cta-text{
  font-size: 18px;
  font-weight: 100;
  color: #353535;
  letter-spacing: 0px;
  text-align: center;
}

.cta-text span{
  font-weight: 900;
}

.banner-image{
  max-width: 100%;
  max-height: 100%;
}

.share-on-twitter-button{
  border-radius: 20px;
  color: #FFF;
  background: #1d9bf0;
  border: none;
  height: 32px;
  font-weight: 700;
}

.twitter-icon{
  color: #FFF;
  font-size: 15px;
}

@media (max-width: 768px) {
  .banner-image{
    max-width: 100%;
    max-height: 100%;
    height: 300px;
  } 
  .congratulation-title {
    margin-top: 40px;
  }
}

</style>
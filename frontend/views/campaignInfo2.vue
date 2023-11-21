<template>
  <div class="main-content">
    <div class="container-fluid pt-5 align-items-center">
      <div class="h2 title-info-campaign">INFORMACION DE LA CAMPAÑA:</div>
      <div class="d-flex justify-content-between container-inf-campaign">
        <div v-for="(data, index) in info" :key="index" class="d-flex flex-row m-1 rounded py-5 container-info-campaign" style="background-color: #70BB70; width: 25%;">
          <div class="d-flex flex-column justify-content-center px-3 container-info">
            <div style="font-size: 18px; color: #267F27">
            {{data.type}}
            </div>
            <div class="d-flex">
              <div style="font-size: 32px; color: #F2CD31">
              {{data.value}}
              <span style="font-size: 18px; color: #F2CD31">{{data.value2}}</span>
              </div>
            </div>
          </div>
          <div class="vr separator-campaign-info" style="color: #FFFFFF; width: 2px; opacity: 1"></div>
          <div class="px-3 d-flex align-items-center textos" style="font-size: 16px; color: white">
            {{data.desc}}
          </div>
        </div>
      </div>
      
      <div class="container mt-4">
        <div class="row p-2">
          <div class="container-prod-1 col-12 col-lg-6">
           
            <div class="textos">
              Los cultivos van a estar ubicados en el departamento de Rocha, República Oriental del Uruguay, donde las condiciones climáticas y de seguridad son ideales para la producción sostenible de cannabis medicinal (cáñamo de CBD).
              <br/> La siembra comienza entre los meses de Noviembre y Diciembre de 2023 y se realizará en losv campos propiedad de la empresa CANNBIO AGRO S.A.S. y sus cultivadores anexos, quienes se encuentran inscriptos en el Registro Único de Operadores del Ministerio de Ganadería, Agricultura y Pesca de Uruguay y cuentan con las habilitaciones para producir CBD.
              <br/> Al tratarse de un cultivo de exterior, no solamente contamos con la luz natural del sol y la excelente tierra para sembrar, sino que también tenemos recursos de agua natural de manantial para los sistemas de riego de los campos, lo que crea de esta manera las condiciones ideales para obtener un producto de excelente calidad.
              <br/><b>Una de las razones por las cuales elegimos este tipo de cultivo es porque posee una baja huella de carbono.</b> Al cultivar bajo el sol se usa el medio ambiente natural como combustible de crecimiento, por lo que no se requiere luces de alta intensidad artificiales. Comparado con el Cannabis de interiores, las plantas cultivadas bajo el sol requieren típicamente menos mejoras en el suelo, fertilizantes, pesticidas y fungicidas. Asimismo, también permite una ventilación y circulación de aire natural, dado que no se necesitan ventiladores eléctricos.
            </div>
            <div class="textos mt-3">
              Como muestra de nuestro compromiso social con el ecosistema, decidimos con CANNBIO AGRO implementar una política de buenas prácticas agrícolas y ello fue reconocido por la LSQA S.A. a través del Certificado de Buenas Prácticas Agrícolas otorgado a la empresa.
            </div>
            <div class="textos mt-3">
              Nuestro proceso productivo garantiza que el producto alcance los más altos estándares de calidad, lo que asegura una alta demanda del mismo a nivel internacional, y en particular del mercado americano.
            </div>
          </div>
          <div class="col-12 col-lg-6 my-1">
            <img src="../assets/img/info-campaign2-page1-img1.png" class="m-2 img-campaign"/>
            <img src="../assets/img/info-campaign2-page1-img3.jpg" class="m-2 img-campaign"/>
          </div>
        </div>
      </div>
    
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable';
import useERC20 from '../store/erc20';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default {
  data() {
    return {
      info: [
        {
          type: "USD",
          value: '500.000',
          desc: "Es la inversión destinada para el proyecto"
        },
        {
          type: "KG",
          value: '3.500',
          desc: "Objetivo de producción: Obtener aprox. 3.500 kg de Flor de Cáñamo de CBD de primera calidad"
        },
        {
          type: "Plazo",
          value: '12',
          value2: "meses",
          desc: "Plazo esperado de la campaña"
        },
        {
          type: "Token",
          value: "USDT",
          desc: "Para poder participar deberás adquirir el NFT con la criptomoneda USDT (Tether de la red BEP20 - Binance Smart Chain-)"
        }
      ]
    }
  },
  computed: {
    ...mapState(useWallet, ['isWalletConnected', 'shortWallet', "walletAddress"]),
    ...mapState(useCollectable, ['owner', 'canBuy', 'nftPrice', 'buyFee', 'smartContractAddress', 'maxSupply', 'supply', 'profitToPay', 'maxPerUser', 'nftBalance']),
    ...mapState(useERC20, ['balance']),
  }, 
  methods: {
  },
  components: {
    Splide,
    SplideSlide,
    SplideTrack
  },
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

  .custom-arrows{
    height: 100%; border-radius: 5px; width: 75px; background-color: #70BB70; color: #147116; opacity: 1; font-size: 50px; position: relative;
  }
  .container-info{
    min-width: 150px;
  }
  .img-campaign {
    width: 100%;
    height: 40%;

  }
@media (max-width: 1800px) { 
  .splide-container{
    padding-right: 100px;
  }
  .splide-container-2{
    padding-left: 100px;
  }
}
@media (max-width: 1700px) { 
  .splide-container{
    padding-right: 200px;
  }
}
@media (max-width: 1600px) { 
  .splide-container{
    padding-right: 100px;
  }
}
@media (max-width: 1500px) { 
  .splide-container{
    padding-right: 200px;
  }
} 
@media (max-width: 1400px) {
  .splide-container{
    padding-right: 0px;
  }
  .img-campaign{
    width: 80%;
  }
  .img-prod{
    width: 100%;
  }
} 
@media (max-width: 1300px) { 
  .container-info{
    min-width: auto;
  }
  .container-info div{
    text-align: center;
  }
  .container-info-campaign{
    display: flex!important;
    flex-direction: column!important;
    justify-content: start;
    align-items: center;
    text-align: center;
  }
  .separator-campaign-info{
    display: none;
  }
  .splide-container-2{
    padding-left: 80px;
  }
}
@media (max-width: 1023px) { 
  .custom-arrows{
    width: 20px;
  }
  .splide__arrow svg {
    height: 35px;
  }
}
@media (max-width: 400px) {
  .container-inf-campaign{
    display: flex!important;
    flex-direction: column!important;
  }
  .container-info-campaign{
    width: 100%!important;
  }
  .title-info-campaign{
    font-size: 20px;
    text-align: center;
  }
  .container-prod-1{
    padding-left: 0px;
  }
  .splide-container{
    padding-right: 10px;
  }
  .splide-container-2{
    padding-left: 10px;
  }
} 
  
</style>
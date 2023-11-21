<template>
  <div class="container-footer container-fluid main-content d-flex align-items-center justify-content-between"> 
    <img class="logo-footer" src="../assets/img/cryptoCampoLogoFooter.svg">
    <div class="text-center">
      <div>Términos y Condiciones del Servicio</div>
      <button class="button-pdf mt-3">
        <a :href="require('url:../assets/pdf/terminos-y-condiciones-de-servicio-2.pdf')" target="_blank">DESCARGAR PDF</a>
      </button>
    </div>
    <div class="container-social d-flex justify-content-around" style="width: 10vw">
      <a href="https://www.instagram.com/cryptocamponet/" target="_blank"><font-awesome-icon icon="fa-brands fa-instagram" class="iconColors" /></a>
      <a href="https://twitter.com/CryptocampoNet" target="_blank"><font-awesome-icon icon="fa-brands fa-twitter" class="iconColors" /></a>
      <a href="https://cryptocampo.net/" target="_blank"><font-awesome-icon icon="fa-solid fa-earth-americas" class="iconColors" /></a>
    </div>
  </div>
</template>

<style lang="css" scoped>
  a {
    all: unset;
    cursor: pointer;
  }
  .main-content {
    min-height: 16vh;
    background-color: white;
  }
  .button-pdf {
    background: #323232;
    color: white;
    border: none;
    padding: 10px 20px;
    white-space: 5px!important;
    font-weight: 700;
    letter-spacing: 2px;
  }
@media (max-width: 400px) { 
  .container-footer{
    display: flex!important;
    flex-direction: column!important;
    justify-content: center!important;
    align-content: center!important;
  }
  .logo-footer{
    width: 80%;
  }
  .container-social{
    margin-top: 10px;
    width: 80%!important;
    display: flex!important;
    justify-content: space-around!important;
    align-content: center!important;
  }
}
</style>

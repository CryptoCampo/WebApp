<template>
  <div class="main-content container-about-page overflow-hidden">
    <div class="container-fluid pt-5 align-items-center">
      <div class="row">
        <div class="col-7">
          <div class="h2 mb-3">
            Conoce acerca de CRYPTOCAMPO
          </div>
          <div class="textos mb-3">
            <span style="font-weight: 700">CRYPTOCAMPO</span> es la primera y única plataforma en el mundo que conecta a los
            usuarios de cryptomonedas con el mercado agropecuario.
          </div>
          <div class="textos mb-3">
            Nuestro objetivo es cambiar el paradigma existente, permitiendo a todo aquél que lo
            desee poder ser parte de una de las principales actividades económicas del mundo.
          </div>
          <div class="textos mb-3">
            A través de la plataforma de CRYPTOCAMPO el usuario podrá participar con sus
            cryptos en mercados respaldados con activos reales y tangibles relacionados con el
            campo.
          </div>
          <div class="textos mb-3">
            De esta forma, conectamos a los usuarios con los agronegocios de forma simple,
            rápida y transparente a través de la tecnología blockchain.
          </div>
          <div class="textos mb-3">
            Nuestro valor se basa en la transparencia que otorga la tecnología blockchain como
            la clave para la confianza, siendo la condición necesaria para el funcionamiento de
            nuestra plataforma.
          </div>
          <div class="textos mb-3">
          </div>
          <div class="h2 mb-2">Founders:</div>
          <ul class="mb-3 links" style="font-size: 19px">
            <li class="">
              <a href="https://ar.linkedin.com/in/paula-arenzo-b55664189" target="_blank">Paula Arenzo</a>
            </li>
            <li class="">
              <a href="https://www.linkedin.com/in/bruno-arenzo-813051187/" target="_blank">Bruno Arenzo</a>
            </li>
            <li class="">
              <a href="https://www.linkedin.com/in/m%C3%A1ximo-g%C3%A1ndara-de-las-carreras-78497657/" target="_blank">Máximo Gándara</a>
            </li>
            <li class="">
              <a href="https://www.linkedin.com/in/federico-celico-24211782/" target="_blank">Federico Célico</a>
            </li>
          </ul>
          <div style="font-size: 12px">
          CRYPTOCAMPO, propiedad y operación de HYDRA CHAIN LLC, registrada en
          el estado de Delaware, Estados Unidos de América, bajo el número 6707222.
          <br/>
          <a href="#" target="_blank">Términos y Condiciones</a>
          </div>
        </div>
        <div class="col-5 about-image">
          <img src="../assets/img/about-us.png" />
        </div>
      </div>
    </div>
    <div class="container-fluid main-content d-flex align-items-center">
      <!-- <div style="background: #F6F6F6; border-radius: 5px; height: 18vh; width: 100%">
        <div class="d-flex align-items-center justify-content-around" style="height: 100%; margin-left: 2vw">
          
          <p style="width: auto" class="bannerText">El agro, a un click <br/> de distancia</p>

          <div class="d-flex">
            <div class="bannerIcon">
              <font-awesome-icon icon="fa-solid fa-spider-web" />
            </div>
            <div>
              <div class="h3 bannerTextColors">Conexión</div>
              <div class="textos bannerBoxSize">Conectamos a los Cryptoinversores con los Agronegocios a través de la tecnología Blockchain.</div>
            </div>
          </div>

          <div class="d-flex">
            <div class="bannerIcon">
              <font-awesome-icon icon="fa-solid fa-mobile-screen" />
            </div>
            <div>
              <div class="h3 bannerTextColors">Info actualizada</div>
              <div class="textos bannerBoxSize">El inversor tendrá información actualizada del estado y evolución de cada campaña agropecuaria.</div>
            </div>
          </div>


          <div class="d-flex">
            <div class="bannerIcon">
              <font-awesome-icon icon="fa-solid fa-presentation-screen" />
            </div>
            <div>
              <div class="h3 bannerTextColors">Informes</div>
              <div class="textos bannerBoxSize">Podrás acceder a las imágenes e informes sobre el desarrollo de la misma en forma periódica</div>
            </div>
          </div>

        </div>
      </div> -->
      <img src="../assets/img/banner.jpg" style="width: 80vw" />
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
}
</script>

<style scoped>
.main-content {
  min-height: 40vh;
  background-color: white;
}

.bannerTextColors {
  color: #157116;
  font-weight: bold;
}

.bannerBoxSize {
  width: 250px;
}

.bannerIcon {
  margin-right: 15px;
  width: 75px;
  height: 75px;
  background-color: lightgray;
  border-radius: 50px;
}

.about-image {
  position: relative;
}
.about-image img {
  position: absolute;
  right: -215px;
}

@media (max-width: 1600px) { 
  .about-image{
    display: none;
  }
}

</style>
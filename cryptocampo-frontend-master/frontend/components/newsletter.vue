<template>
  <div class="container-fluid main-content d-flex align-items-center"> 
    <div class="d-flex align-items-center green-container">
      <div class="d-flex align-items-center justify-content-between w-100 banner-container">
        <!-- Font-weight 100 displays a similar font-weight as the design. Originally says it's BOLD but they don't seem to match -->
        <div style="font-weight: 400;" class="newsletterText fw-bold">Mantente actualizado <br class="br-newsletter" /> con nuestros Newsletters</div>
        
        <div class="d-flex justify-content-around container-input-mail">
          <input type="email" class="enter-email" placeholder="Ingrese su e-mail" v-model="emailAddress">
          <button @click="submitEmail" type="button" class="btn btn-primary subscribe px-5 fw-bold">ENVIAR</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useToast } from 'vue-toastification'
import { mapState } from 'pinia';
import useWallet from '../store/wallet';

export default {
  data() {
    return {
      emailAddress: '',
      axiosInstance: null,
      toast: null
    }
  },
  computed: {
    ...mapState(useWallet, ["walletAddress"]),
  },
  methods: {
    async submitEmail (){
      try {
        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(! validRegex.test(this.emailAddress) ){
          this.toast.error("Error en el formato del email");
          return
        }
        this.toast("Procesando...", { timeout: false, id: "newsletter-sending-email-toast" })
        const res = await this.api.post('/api/Authenticate/Validation', {"username": "WebApp", "password": "DevsCampo&Road8213"});
        const token = res.data.token;
        const data = {
          "name": "",
          "lastName": "",
          "phoneNumber": 0,
          "mail": this.emailAddress,
          "country": "",
          "city": "",
          "address": "",
          "plataforma": 2,
          "wallet": this.walletAddress || "",
          "creationDate": new Date().toJSON()
        }
        await this.api.post(
          '/api/Suscriptores/InsertSimpleSuscriptor',
          data,
          {headers: {Authorization: `Bearer ${token}`}}
        )
        this.toast.dismiss("newsletter-sending-email-toast");
        this.toast.success('Email agregado!')
        this.emailAddress = "";
      }catch(e){
        console.log(e);
        this.toast.dismiss("newsletter-sending-email-toast");
        this.toast.error("Hubo un problema, intente nuevamente");
      }
    }
  },
  created(){
    this.toast = useToast();
    this.api = axios.create({
      baseURL: 'https://www.cryptocampoapi.somee.com',
    });
  }
}
</script>


<style scoped>
.main-content {
  min-height: 27vh;
  background: #F6F6F6 0% 0% no-repeat padding-box;
}

.green-container{
  background: #70BB70; border-radius: 5px; height: 18vh; width: 100%
}

.subscribe{
  background-color: #D2C169; border: 0; font-family: Lato; font-size: 17px;
}

.subscribe:hover{
  background-color: #A59750;
}

.banner-container{
  height: 100%; margin: 0 2vw
}
.enter-email{
  width: 40vw; margin-right: 1vw; font-family: Lato; border: 0; border-radius: 5px; padding-left: 25px
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #EBEBEB;
  opacity: 1; /* Firefox */
}

@media (max-width: 800px) { 
  .br-newsletter{
    display: none;
  }
  .banner-container{
    flex-direction: column;
    justify-content: center!important;
  }
  .newsletterText{
    margin-bottom: 20px;
  }
}
@media (max-width: 400px) { 
  .green-container{
    height: 200px;
  }
  .enter-email {
    height: 50px;
    width: 90%;
  }
  .subscribe{
    height: 40px;
    margin-top: 20px;
  }
}


</style>
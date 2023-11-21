<template>
  <div class="main-content">
    <div class="container-fluid mb-5">
      <div class="d-flex flex-column flex-lg-row justify-content-between mt-5">
        <div class="col-12 col-lg-6 pe-0 pe-lg-5">
          <div class="h2 dgray">¿Necesitas ayuda?</div>
          <div class="h3 dgreen pb-3">Contactanos por cualquiera de los medios disponibles y te contestaremos a la mayor brevedad posible</div>
          <form>
            <div class="my-3">
              <input type="text" class="form-control" v-model="firstName">
              <label for="exampleInputEmail1" class="form-label">Nombre</label>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" v-model="lastName">
              <label for="exampleInputEmail1" class="form-label">Apellido</label>
            </div>
            <div class="mb-3">
              <input type="text" class="form-control" v-model="email">
              <label for="exampleInputPassword1" class="form-label">e-mail</label>
            </div>
            <div class="mb-3">
              <select id="country" name="country" class="form-select" v-model="country">
                <option selected disabled></option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Aland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, Democratic Republic of the Congo</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Cote D'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curacao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and Mcdonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="XK">Kosovo</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libyan Arab Jamahiriya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the Former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="AN">Netherlands Antilles</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Reunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthelemy</option>
                <option value="SH">Saint Helena</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="CS">Serbia and Montenegro</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.s.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </select>
              <label for="exampleInputPassword1" class="form-label">País</label>
            </div>
            <div class="mb-3">
              <textarea class="form-control" id="floatingTextarea" v-model="message"></textarea>
              <label for="floatingTextarea">Mensaje</label>
            </div>
            <button type="submit" class="btn d-greenbg white w-25" @click="sendForm" v-on:click.prevent.self >Enviar</button>
          </form>
        </div>
        <div class="col-12 col-lg-6 ps-0 ps-lg-5 mt-5 mt-lg-0">
          <div class="d-flex justify-content-around container-social">
            <div>
              <div class="text-center dgreen">Por Whatsapp</div>
              <a href="https://wa.me/5491164198824?text=Hola%20CryptoCampo!%20Queria%20consultarles%20acerca%20de%20" target="_blank">
                <img src="../assets/img/whatsapplogo.svg" alt="" class="icon-social whatsapp px-5 py-3 rounded">
              </a>
            </div>
            <div>
              <div class="text-center dgreen">Por Discord</div>
              <a href="https://discord.gg/Hwezys7NTu" target="_blank">
                <img src="../assets/img/discordlogo.svg" alt="" class="icon-social discord px-5 py-3 rounded">
              </a>
            </div>
          </div>
          <div class="dgreen text-center">DM por Redes sociales</div>
          <div class="d-flex justify-content-around mb-4 container-social">
            <div>
              <a href="https://www.linkedin.com/company/cryptocampo?originalSubdomain=ar" target="_blank">
              <img src="../assets/img/linkedinlogo.svg" alt="" class="icon-social linkedin px-5 py-3 rounded">
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/cryptocamponet/" target="_blank">
              <img src="../assets/img/iglogo.svg" alt="" class="icon-social ig px-5 py-3 rounded">
              </a>
            </div>
            <div>
              <a href="https://twitter.com/cryptocamponet" target="_blank">
              <img src="../assets/img/twitterlogo.svg" alt="" class="icon-social twitter px-5 py-3 rounded">
              </a>
            </div>
          </div>
          <div>
            <router-link to="/faq">
              <button type="submit" class="btn d-greenbg white w-100 p-3 mt-5">¿Preguntas?...<br/>visitá nuestras FAQ</button>
            </router-link>
          </div>
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
      firstName: '',
      lastName: '',
      email: '',
      country: '',
      message: ''
    }
  },
  computed: {
    ...mapState(useWallet, [ "isWalletConnected", "walletAddress"]),
  },
  methods: {
    async sendForm(){
      try {
        if(!this.firstName || !this.lastName || !this.email || !this.country || !this.message){
          this.toast.warning("Por favor complete todos los campos!")
          return;
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if(! validRegex.test(this.email) ){
          this.toast.error("Error en el formato del email");
          return;
        }

        this.toast("Procesando...", { timeout: false, id: "sendingForm-toast" })

        const res = await this.api.post(
          '/api/Authenticate/Validation', 
          {"username": "WebApp", "password": "DevsCampo&Road8213"}
        );
        const token = res.data.token;
        const data = {
          "name": this.firstName, 
          "lastName": this.lastName,
          "mail": this.email,
          "country": this.country,
          "city": "",
          "address": "",
          "plataforma": 3,
          "wallet": this.walletAddress || "",
          "creationDate": new Date().toJSON(),
          "message": this.message
        }
        await this.api.post(
          '/api/Suscriptores/SoporteForm',
          data,
          {headers: {Authorization: `Bearer ${token}`}}
        )
        this.toast.dismiss("sendingForm-toast");
        this.toast.success('Mensaje guardado exitosamente!')
        this.firstName = "";
        this.lastName = "";
        this.email = "";
        this.country = "";
        this.message = "";
      }catch(e){
        console.log(e);
        this.toast.dismiss("sendingForm-toast");
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

<style lang="css" scoped>
.main-content {
  min-height: 50vh;
  background-color: white;
}

.whatsapp{
  background-color: #30C54D;
  width: 252px;
  height: 91px;
  margin: 10px;
  object-fit: contain;
}

.discord{
  background-color: #5865F2;
  width: 252px;
  height: 91px;
  margin: 10px;
  object-fit: contain;
}

.linkedin{
  background-color: #0966C2;
  width: 160px;
  height: 91px;
  margin: 10px;
  object-fit: contain;

}

.ig{
  background: rgb(110,105,250);
  background: linear-gradient(159deg, rgba(110,105,250,1) 35%, rgba(196,75,163,1) 67%, rgba(223,101,108,1) 85%, rgba(223,101,108,1) 91%, rgba(223,101,108,1) 95%, rgba(207,78,147,1) 100%);
  width: 160px;
  height: 91px;
  margin: 10px;
  object-fit: contain;
}

.twitter{
  background-color: #2297EB;
  width: 160px;
  height: 91px;
  margin: 10px;
  object-fit: contain;

}

.btn:hover{
  background-color: #157116;
  color: white
}

.btn:focus{
  background-color: #157116;
  color: white
}

@media (max-width: 420px) { 
  .container-social{
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .icon-social{
    width: 200px;
  }
 }
</style>
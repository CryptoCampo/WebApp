<template>
  <div class="main-content">
    <div class="container-fluid pt-5 align-items-center">
      <div class="row align-items-center">
        <div class="title-faq col-12 col-xl-7 h1">
          ¿En qué podemos ayudarte?
        </div>
        <div class="container-input-search col-12 col-xl-5">
          <div class="input-group mb-auto">
            <input type="text" class="form-control" placeholder="Buscar..." aria-label="Buscar" aria-describedby="button-addon2" v-model="faqQuery" @keyup.enter="doSearch">
            <button class="btn btn-outline-secondary search-button" type="button" id="button-addon2" @click="doSearch"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
          </div>
        </div>
      </div>
    </div>
    <div class="accordion accordion-flush mt-5 accordion-border-button" id="accordionExample">
      <div class="accordion-item" v-for="(QandA, index) in faqCopy" v-bind:key="index">
        <h2 class="accordion-header" :id="'flush-heading' + index">
          <button class="accordion-button collapsed accordion-question" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="false" :aria-controls="'collapse' + index">
            {{QandA.question}}
          </button>
        </h2>
        <div :id="'collapse' + index" class="accordion-collapse collapse" :aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            {{QandA.answer}}
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex justify-content-center">
      <router-link @click="scrollToTop" to="/">
        <button class="btn btn-primary m-4 px-5" style="background-color: #177116; border: 0">¿LISTOS PARA PARTICIPAR?</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      faqQuery: '',
      faqCopy: [],
      faq: [
        {
        question: '¿Qué es CryptoCampo?',
        answer: 'Cryptocampo es una plataforma blockchain que brinda la posibilidad a las personas de participar en el mercado agropecuario, de forma segura y accesible. Por medio del sitio web, los usuarios pueden gestionar sus participaciones en las campañas agropecuarias ofrecidas adquiriendo un NFT con cryptomonedas. Es por ello que a través de la plataforma de CryptoCampo cualquier usuario podrá acceder con sus cryptomonedas en mercados respaldados con activos reales y concretos relacionados con el campo o actividades agropecuarias, ello en forma segura y transparente, propio de la tecnología blockchain.'
        },
        {
        question: '¿Cómo funciona la plataforma?',
        answer: 'En primer lugar, el usuario tiene que loguearse/ingresar en la plataforma de Cryptocampo conectando su wallet (billetera) y elegir la opción de wallet que maneje, por ejemplo, Metamask. Actualmente, puede ingresar con las siguientes wallets (billeteras): Metamask, Binance Wallet y "OpenWallet Connect" cuyo código QR para escanear con el telefono permite que también sea compatible con "Trust wallet" y otras similares. Una vez conectado y firmado el contrato, va a tener acceso a la información de las campañas agropecuarias que se ofrecen actualmente en la plataforma, como asi también podrá comprar un  NFT que represente su participación en la campaña seleccionada.'
        },
        {
        question: '¿Qué red blockchain utilizan?',
        answer: 'Actualmente la plataforma está desarrollada sobre la Blockchain de Binance, la BNB Chain.'
        },
        {
        question: '¿Qué wallets son compatibles con la BNB Chain?',
        answer: 'Cualquier wallet para Ethereum que tenga la posibilidad de modificar su configuración para aceptar otras redes será compatible con la BNB Chain. Ten en cuenta que, para pagar las tarifas de red, será necesario que tengas cierta cantidad de la criptomoneda BNB en tu wallet (unos USD 10 en BNB, por ejemplo, pueden servirte para hacer unas 20 o 25 transacciones). Si vas a utilizar aplicaciones descentralizadas como las mencionadas arriba, posiblemente, la opción más cómoda sea utilizar una extensión de navegador. La más utilizada es Metamask. Aunque no viene configurada por defecto para la BNB Chain, es algo que puede hacerse muy fácilmente. Esta blockchain también tiene su wallet oficial: Binance Wallet. Funciona, al igual que Metamask, como una extensión para navegador. La diferencia es que ya desde su configuración inicial soporta la BNB Chain.'
        },
        {
        question: '¿Cómo participo de una campaña agropecuaria ofrecida por la plataforma de CryptoCampo?',
        answer: 'Para poder participar hay que adquirir un NFT (non fungible token - token no fungible) que va a representar tu participación en la campaña agropecuaria listada en la plataforma. Cada NFT emitido es único y su valor es fijo. Asimismo, cada campaña tiene un NFT propio y un valor determinado previamente.'
        },
        {
        question: '¿Qué es un NFT?',
        answer: 'Un NFT -token no fungible- son activos digitales certificados mediante la tecnología blockchain. La criptografía de estos tokens es la que convierte estos activos en únicos: no hay dos iguales, y no se pueden cambiar entre sí. Esto permite acreditar que el usuario que ha adquirido el token es su único propietario.'
        },
        {
        question: '¿Qué representa el NFT que adquiero a través de la plataforma de CryptoCampo?',
        answer: 'La compra del NFT te asegura la participación en la campaña agropecuaria propuesta en la plataforma. El NFT representa una inversión y no un préstamo a la plataforma de CryptoCampo. Una vez finalizada la campaña, el usuario propietario del NFT obtendrá las ganancias correspondientes en proporción a la cantidad de cryptomonedas invertidas.'
        },
        {
        question: '¿Cuál es el rendimiento?',
        answer: 'En cada campaña se van a informar los rendimientos históricos de la actividad agropecuaria que se pone a disposición del usuario. Cryptocampo no promete rendimientos, sino que informa los parámetros de rentabilidad que se podrían llegar a obtener. Tampoco Cryptocampo da recomendaciones de inversión ni maneja carteras de usuarios.'
        },
        {
        question: '¿Cuál es el plazo de duración de la campaña agropecuaria?',
        answer: 'Cada campaña tiene un plazo determinado, la información se encuentra disponible para el usuario y va a depender de la actividad agropecuaria a llevar adelante, siempre respetando los tiempos que demanda la producción agrícola o actividad agropecuaria seleccionada.'
        },
        {
        question: '¿Quién puede participar?',
        answer: 'Cualquier persona física o jurídica, mayor de 18 años y que posea una wallet o billetera habilitada por el sitio, la cual debe ser de su propiedad.'
        },
        {
        question: '¿Qué pasa si pierdo el acceso a mi wallet (billetera)?',
        answer: ' Las 	wallets (billeteras) no son operadas, mantenidas ni afiliadas a CryptoCampo, y CryptoCampo no tiene la custodia ni el control sobre el contenido de su wallet, como asi tampoco tiene la capacidad de recuperar o transferir su contenido.'
        },
        {
        question: '¿Cómo participo de la plataforma de CryptoCampo?',
        answer: 'Participar es muy sencillo, solo tenés que realizar 4 simples pasos:  1)Loguearte/ingresar con tu billetera (wallet. 2)Elegir entre los proyectos agropecuarios que se ofrecen y comprar el NFT. 3) Aceptar los términos y condiciones de la plataforma para poder habilitar la 	compra del NFT. 4) Una vez adquirido el NFT, ya estás participando de Cryptocampo y podrás seguir la campaña en todas sus etapas.',
        },
        {
        question: '¿Cómo adquiero el NFT?',
        answer: 'El NFT se va a poder adquirir con stablecoins, actualmente la plataforma de CryptoCampo tiene habilitado USDT de la red de Binance(BEP20). NO TENEMOS TOKEN PROPIO'
        },
        {
        question: '¿Cuál es el monto mínimo para participar?',
        answer: 'Va a depender de cada campaña agropecuaria, pero siempre vamos a buscar que sea el más accesible para que todos puedan ser parte.'
        },
        {
        question: '¿Puedo participar en todos los proyectos?',
        answer: 'Sí. Vas a poder participar en todos los proyectos que desees al mismo tiempo y crear una cartera acorde con tus necesidades de usuario.'
        },
        {
        question: '¿Cuáles son los términos de una participatión en CryptoCampo?',
        answer: 'Los términos de cada participación en CryptoCampo varían según el proyecto elegido. Los usuarios potenciales deberán revisar en detalle los términos y condiciones, como asi también la información detallada para cada oportunidad.'
        },
        {
        question: '¿Es obligatorio participar más capital luego de haber realizado la participación inicial?',
        answer: 'No. A la hora de participar en un proyecto, el inversor hace una ÚNICA participación inicial. Los inversores no tendrán que realizar aportes adicionales en ningún momento. Ningún miembro de CryptoCampo le solicitará una mayor participación ni se comunicará con el usuario para ello.'
        },
        {
        question: '¿Cómo voy a poder informarme sobre los avances del proyecto en el cual participo?',
        answer: 'En la plataforma de CryptoCampo habrá actualizaciones periódicas sobre el curso y estado del proyecto. Se informarán los avances del proyecto, con un detallado informe y contenido audiovisual. Asimismo, también contará con la geolocalización de donde se encuentran los cultivos de la campaña en la cual está participando. En caso necesario, los participantes pueden comunicarse con CryptoCampo para ampliar información a través de los canales habilitados.'
        },
        {
        question: '¿Cuándo voy a recuperar mi participación y cómo van a ser distribuidas las potenciales ganancias?',
        answer: 'Los potenciales retornos y/o distribuciones estimadas varían según cada proyecto ofrecido en la plataforma de CryptoCampo. Los plazos y rendimientos estimados estarán explicados en detalle en cada uno de las campañas agropecuarias. Una vez finalizada la campaña agropecuaria, se va a informar en la plataforma de CryptoCampo y cada uno de los propietarios de ese NFT va a poder reclamar (claimear) su participación en las ganancias, transfiriéndose a su wallet (billetera) la rentabilidad obtenida en el proyecto. Una vez reclamado el NFT, el mismo se quema. El usuario podrá optar por reclamar su POAP (POAP -Proof of Attendance Protocol- es un certificado digital que se le entrega a los participantes de CryptoCampo y se almacenan en su wallet de Ethereum) de participación en CryptoCampo.'
        },
        {
        question: '¿Existe un Mercado Secundario donde pueda vender mi participación?',
        answer: 'Actualmente No. CryptoCampo no ofrece ni promociona ningún tipo de sistema de mercado secundario por el cual el propietario de un NFT pueda ofrecer libremente su participación a otros. Inclusive, CryptoCampo desalienta la salida antes de la finalización de la campaña agropecuaria.'
        },
        {
        question: '¿Cuál es el riesgo de participar en CryptoCampo?',
        answer: 'El riesgo de participar en CryptoCampo es el equivalente a cualquier participación que se realice en la actividad agropecuaria.Al adquirir un NFT, las cryptomonedas serán destinadas para llevar adelante la campaña agropecuaria elegida por el usuario en la plataforma.¿Qué sucede si las participaciones en una determinada campaña agropecuaria superan el monto necesario para el proyecto? Una vez recaudado el 100% del capital requerido para el proyecto se cerrarán las participaciones y solo quienes hicieron efectiva su participación, antes de ese momento, participarán de ese determinado proyecto. El resto de los potenciales usuarios podrán optar por cualquier otro proyecto de su interés que este activo en ese momento en la plataforma de CryptoCampo o anotarse en la “Green List” en caso de habilitarse la misma.'
        },
        {
        question: '¿Qué hace CryptoCampo para reducir mi riesgo?',
        answer: 'El equipo de profesionales de CryptoCampo analiza y estudia detalladamente cada proyecto para minimizar riesgos y maximizar las potenciales ganancias. Para esto, analizamos el proyecto, la empresa con la que realizamos la gestión agropecuaria, la nómina de empleados, las garantías, la rentabilidad esperada, entre otros aspectos que determinan una reducción de riesgo asegurada.'
        },
        {
        question: '¿Qué ocurre si no se recauda el 100% del capital requerido para un proyecto en el tiempo preestablecido?',
        answer: 'Simplemente se desarrollará la campaña con los fondos recaudados. En esta oportunidad CryptoCampo se ha asociado con Cannbio Agro S.A.S. en la producción de su campaña 2023/2024. De esta forma, la cantidad de hectáreas producidas se encuentra sujeta a los fondos recaudados durante el minteo de los NFT de la campaña 2.0.'
        },
      ]
    }
  },
  created(){
    this.faqCopy = this.faq

  },
  methods: {
    doSearch(){
      this.faqCopy = this.faq
      if(this.faqQuery){
        let faqFiltered = this.faq.filter(question => {
          return question?.question.toLowerCase().indexOf(this.faqQuery.toLowerCase()) > -1 || question?.answer.toLowerCase().indexOf(this.faqQuery.toLowerCase()) > -1
        })
        this.faqCopy = faqFiltered
      }
      else {
        this.faqCopy = this.faq
      }
    },
    scrollToTop(){
      window.scrollTo(0,0);
    },
  },

}

</script>

<style scoped>
  .main-content {
    min-height: 50vh;
    background-color: white;
  }

  .accordion-question{
    background-color: white;
    border-top: 0.5px solid lightgray;
  }

  .accordion-button:not(.collapsed) {
  color: black  !important;
  background-color: white !important;
  font-weight: 700;
}

.accordion-button:link, .accordion-button:visited, .accordion-button:hover, .accordion-button:active  {
  background-color: white !important;
  color: black !important;
  text-decoration: none !important;
  border-color: lightgray !important;
  box-shadow: 0px !important;
  font-weight: 700;
}

.accordion-button:focus {
  z-index: 3;
  outline: 0;
  box-shadow: 0 0 0 .1rem #70BB70 !important;
}

.accordion-button:not(.collapsed)::after {
  background-image: url(../assets/img/arrowFAQ-2.svg);
  transform: rotate(90deg);
}

.accordion-button::after {
  background-image: url(../assets/img/arrowFAQ.svg);
  height: 25px;
}

.accordion-border-button{
  border-bottom: 1px solid lightgray
}

.search-button{
  background-color: #70BB70;
  border: 0;
  color: white
}

.search-button:hover{
  color: #70BB70;
  background-color: white;
  border: 1px solid #70BB70
}

.search-button:focus{
  outline: none !important;
  box-shadow: none !important;

}

.form-control:focus {
    border-color: #28a745;
    box-shadow: none !important;
    border-right: 0
    } 

@media (max-width: 1100px) { 
  .title-faq{
    font-size: 30px;
    padding: 0px;
  }
  .container-input-search{
    padding: 0px;
  }
 }
@media (max-width: 400px) { 
  .title-faq{
    font-size: 25px;
    text-align: center;
  }
  .container-input-search{
    padding: 0px;
  }
 }
</style>
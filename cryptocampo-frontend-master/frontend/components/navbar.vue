<template>
<nav class="navbar navbar-container navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
    <img class="logo-navbar" src="../assets/img/cryptoCampoLogoHeader.svg">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="background-color: white; border-color: white">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navbar-text" id="navbarSupportedContent" style="justify-content: flex-end">
      <div class="navbar-nav">
        <!-- <router-link @click="hideNavbar" :class="this.$route.path == '/about-us' ? 'nav-link active' : 'nav-link'" to="">Nosotros</router-link> -->
        <a @click="hideNavbar" class="nav-link" target="_blank" href="https://cryptocampo.net/">NOSOTROS</a>
        <router-link @click="hideNavbar" :class="this.$route.path == '/' ? 'nav-link active' : 'nav-link'" to="/">CAMPAÑAS</router-link>
        <router-link v-show="isWalletConnected" @click="hideNavbar" :class="this.$route.path == '/my-investments/follow-campaign' ? 'nav-link active' : 'nav-link'" to="/my-investments/follow-campaign">SEGUÍ TU CAMPAÑA</router-link>
        <router-link @click="hideNavbar" :class="this.$route.path == '/whitepaper' ? 'nav-link active' : 'nav-link'" to="/whitepaper">WHITEPAPER</router-link>
        <router-link @click="hideNavbar" :class="this.$route.path == '/faq' ? 'nav-link active' : 'nav-link'" to="/faq">FAQ</router-link>
        <ConnectWallet 
          @connected="afterWalletConnect"
          @disconnected="afterWalletDisconnect"
         />
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import ConnectWallet from '../components/connect-wallet.vue';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable';
import useCollectable2 from '../store/collectable_2';
import useERC20 from '../store/erc20usdt';
import { mapActions, mapState } from 'pinia';
export default {
  computed: {
    ...mapState(useWallet, ['isWalletConnected', 'walletAddress']),
  },
  methods: {
    ...mapActions(useERC20, ['initializeERC20', 'clearStoreERC20']),
    ...mapActions(useCollectable, ['initialize', 'clearStore']),
    ...mapActions(useCollectable2, { 'initialize2': 'initialize', 'clearStore2': 'clearStore' }),
    async afterWalletConnect() {
      try {
        await this.initializeERC20(this.walletAddress);
        await this.initialize(this.walletAddress);
        await this.initialize2(this.walletAddress);
        
      }catch(e) {
        console.log('Error initializing things');
        console.log(e.message, e.stack)
      }
    },
    async afterWalletDisconnect(){
      console.log('Wallet disconnected') 
      try {
        await this.clearStoreERC20();
        await this.clearStore();
        await this.clearStore2();
      }catch(e) {
        console.log('Error initializing things');
        console.log(e.message, e.stack)
      }
    },
    hideNavbar(){
      var navbarTogglerActive = window.matchMedia("(max-width: 991px)");
      if(navbarTogglerActive.matches) {
        const navLinks = document.querySelectorAll('.nav-item')
        const menuToggle = document.getElementById('navbarSupportedContent')
        const bsCollapse = new bootstrap.Collapse(menuToggle)
        navLinks.forEach((l) => {
          l.addEventListener('click', () => { bsCollapse.toggle() })
        })
      }
      window.scrollTo(0,0);

    }
  },
  components: {
    ConnectWallet,
  },
  created(){
  }
}
</script>

<style scoped>
.navbar-container{
  background-color: #157116;
  padding: 0 9vw;
}
.inline {
  display: flex;
  flex-direction: row;
}
.main-content {
  min-height: 8.3vh;
  background-color: coral;
}

.navbar-text a:hover{
  color: white;
}

.navbar-text a:focus{
  color: white;
}
.navbar-nav a.active { 
    color: #F2CD32; 
}

.navbar-nav a:hover { 
    color: #F2CD32; 
}

.navbar-toggler-icon {
  width: 20px;
  height: 20px;
}

@media (max-width: 1600px) { 
  .navbar-container{
    background-color: #157116;
    padding: 0 5vw;
  }
}
@media (max-width: 400px) { 
  .logo-navbar{
    width: 220px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
}

</style>
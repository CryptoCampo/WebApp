<template>
  <div v-if="!isWalletConnected">
    <button type="button" class="btn btn-primary connectWallet" @click="doConnectWallet" >
      <font-awesome-icon icon="fa-solid fa-user" /> Conectar
    </button>
  </div>
  <div v-else>
    <div class="dropdown w-50">
      <button type="button" class="btn btn-primary dropdown-toggle connectWalletActive" data-bs-toggle="dropdown" aria-expanded="false">
        <font-awesome-icon icon="fa-solid fa-user" />
      </button>
      <ul class="dropdown-menu dropdownbg">
        <li><router-link @click="hideNavbar" class="nav-link dropdown-item walletDropdownOption" to="/">INVERTÍ</router-link></li>
        <li><router-link @click="hideNavbar" class="nav-link dropdown-item walletDropdownOption" to="/my-investments">MIS INVERSIONES</router-link></li>
        <li><router-link @click="hideNavbar" class="nav-link dropdown-item walletDropdownOption" to="/support">SOPORTE</router-link></li>
        <div class="walletAddress"> Wallet address: </div>
        <div class="walletAddressInverted"> {{ shortWallet }} </div>
        <li class="disconnectButton" @click="doDisconnectWallet">
          <router-link @click="hideNavbar" class="nav-link dropdown-item logout dgray" to="/">
          <font-awesome-icon icon="fa-solid fa-arrow-up" class="rotate-arrow" />&nbsp;&nbsp;&nbsp;Cerrar sesión
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import useWallet from '../store/wallet';
import { mapActions, mapState } from 'pinia';
export default {
  emits: ['connected', 'disconnected'],
  methods: {
    ...mapActions(useWallet, ['connectWallet', 'disconnectWallet']),
    async doConnectWallet() {
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
      const walletAddress = await this.connectWallet();
      this.$emit('connected', { walletAddress });
    },
    async doDisconnectWallet(){
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
      await this.disconnectWallet();
      this.$emit('disconnected');
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
  computed: {
    ...mapState(useWallet, ['isWalletConnected', 'shortWallet']),
  }
}
</script>

<style scoped>

.dropdownbg{
  background-color: #D2C169;
  border-top-left-radius: 0;
  border-top-right-radius: 0
}

.walletAddress{
  text-align: center; background-color: #353535; color: white; font-size: 10px
}

.walletAddressInverted{
  text-align: center; background-color: #353535; color: white; font-size: 16px;
}

.connectWallet{
  border-radius: 5px;
  background-color: #D2C169;
  border: 0;
  padding: 8px 12px
}

.connectWallet:hover{
  background-color: #A59750;
}

.connectWalletActive{
  border-radius: 50px;
  background-color: #D2C169;
  border: 0;
  padding: 8px 12px
}

.connectWalletActive:hover{
  background-color: #A59750;
}

.walletDropdownOption{
  color: white; 
  background-color: #D2C169;
}
.logout{
  color: #353535; 
  background-color: #D2C169;
}

.disconnectButton{
  text-align: center;
  color: white;
  cursor: pointer;
}

.rotate-arrow{
  transform: rotate(45deg);
}
@media (max-width: 1600px) {
  .dropdown-menu{
    right: 0px!important;
    left: auto!important;
  }
}

</style>
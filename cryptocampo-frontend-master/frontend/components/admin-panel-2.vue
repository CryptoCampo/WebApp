<template>
  <div class="container-fluid main-content d-flex" style="flex-direction: row;flex-wrap: wrap;" v-if="walletAddress && isOwner"> 
    <div  class="col-12"> <h1> Configuraciones de la campaña 2 </h1> </div>
        <div v-for="action in actions" :key="action.name" class="col-4"> 
          <label class="textos"> {{ action.name }}:  </label>
          <!-- This is for the whitelist case that requires two inputs -->
          <div class="mb-3 d-flex flex-wrap" style="width: 25vw" v-if="action.name === 'setWhitelist'">
            <div class="col-12">
              <input class="form-control" v-model="action.addressValues">
              <span style="font-size: 15px;color: grey;">Introduzca las wallets separadas por una coma, sin espacios</span>
            </div>
            <div class="d-flex">
              <input class="form-control" v-model="action.booleanValue">
              <button @click="action.onclick(action.addressValues, action.booleanValue)" type="button" class="btn btn-success ms-3 buttonText"> Guardar </button>
            </div>
            <div>
              {{action.errorMessage}}
            </div>
          </div>
          <!-- This is for the rest of the cases -->
          <div class="mb-3 d-flex" style="width: 25vw" v-else>
            <input class="form-control" v-model="action.value">
            <button @click="action.onclick(action.value)" type="button" class="btn btn-success ms-3 buttonText"> Guardar </button>
          </div>
        </div>
  </div>
</template>

<script>
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable_2';
import CollectableService from '../service/collectable_2';
import { mapState } from 'pinia';
import { useToast } from 'vue-toastification'
export default {
  computed: {
    ...mapState(useWallet, ['walletAddress']),
    ...mapState(useCollectable, ['owner']),
    isOwner(){
      return this.walletAddress === this.owner;
    }
  },
  data() {
    return {
      actions: [
        { 
          name: 'setFundsToken (address del token para comprar el nft)',
          value: '0x000000000000000000000000000000000',
          onclick: (token) => CollectableService.setFundsToken(token),
        },
        { 
          name: 'setFundsCollector (address de quien va a recaudar fondos)',
          value: '0x000000000000000000000000000000000',
          onclick: (_address) => CollectableService.setFundsCollector(_address),
        },
        { 
          name: 'setFeesCollector',
          value: '0x000000000000000000000000000000000',
          onclick: (_address) => CollectableService.setFeesCollector(_address),
        },
        { 
          name: 'setReturnCollector',
          value: '0x000000000000000000000000000000000',
          onclick: (_address) => CollectableService.setReturnCollector(_address),
        },
        { 
          name: 'setProfitToPay',
          value: '0x000000000000000000000000000000000',
          onclick: (_profitToPay) => CollectableService.setProfitToPay(_profitToPay),
        },
        { 
          name: 'setCanBuy',
          value: false,
          onclick: (_canBuy) => CollectableService.setCanBuy(_canBuy),
        },
        { 
          name: 'setCanClaim',
          value: false,
          onclick: (_canClaim) => CollectableService.setCanClaim(_canClaim),
        },
        { 
          name: 'setCanReturn',
          value: false,
          onclick: (_canReturn) => CollectableService.setCanReturn(_canReturn),
        },
        { 
          name: 'setCanReBuy',
          value: false,
          onclick: (_canReBuy) => CollectableService.setCanReBuy(_canReBuy),
        },
        { 
          name: 'setBuyFee',
          value: 0,
          onclick: (_buyFee) => CollectableService.setBuyFee(_buyFee),
        },
        { 
          name: 'setReturnFee',
          value: 0,
          onclick: (_returnFee) => CollectableService.setReturnFee(_returnFee),
        },
        { 
          name: 'setReBuyFee',
          value: 0,
          onclick: (_reBuyFee) => CollectableService.setReBuyFee(_reBuyFee),
        },
        { 
          name: 'setBaseURI',
          value: 'ipfs://',
          onclick: (_baseURI) => CollectableService.setBaseURI(_baseURI),
        },
        { 
          name: 'setMaxMintPerUser',
          value: 0,
          onclick: (_maxMinPerUser) => CollectableService.setMaxMintPerUser(_maxMinPerUser),
        },
        { 
          name: 'transferOwnership',
          value: '0x0000000000000000000000000000000000',
          onclick: (_newOwner) => CollectableService.transferOwnership(_newOwner),
        },
        { 
          name: 'recover',
          value: '0x0000000000000000000000000000000000',
          onclick: (token) => CollectableService.recover(token),
        },
        {
          name: 'setOnlyWhitelist',
          value: true,
          onclick: (value) => CollectableService.setOnlyWhitelistStatus(value)
        },
        {
          name: 'setWhitelist',
          addressValues: '',
          booleanValue: true,
          onclick: (addressValues, booleanValue) => {
            if(addressValues.indexOf(' ') > -1){
              this.toast.error("Hay espacios en blanco en las wallets");
            }
            const addressValuesArray = addressValues.split(',');
            return CollectableService.setWhitelistAddresses(addressValuesArray,booleanValue);
          }
        },

      ]
    }
  },
  created(){
    this.toast = useToast();
  }
}
</script>


<style scoped>
.main-content {
  min-height: 27vh;
  background: #F6F6F6 0% 0% no-repeat padding-box;
}

.buttonText{
  font-family: var(--unnamed-font-family-lato);
  font-style: var(--unnamed-font-style-normal);
  font-weight: var(--unnamed-font-weight-normal);
  font-size: var(--unnamed-font-size-14);
  line-height: var(--unnamed-line-spacing-19);
  letter-spacing: var(--unnamed-character-spacing-0);
  color: white;
  }

</style>
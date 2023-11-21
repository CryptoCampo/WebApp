import DefaultLayout from '../layouts/default.vue';
import useWallet from '../store/wallet';
import useCollectable from '../store/collectable'
import Landing from '../views/landing.vue';
import FAQ from '../views/faq.vue';
import AboutUs from '../views/about.vue';
import Whitepaper from '../views/whitepaper.vue';
import Campaigns from '../views/campaigns.vue'
import CampaignInfo from '../views/campaignInfo.vue'
import CampaignInfo2 from '../views/campaignInfo2.vue'
import MyInvestments from '../views/my-investments.vue'
import FollowCampaign from '../views/follow-campaign.vue'
import TermsOfService from '../views/terms-of-service.vue'
import TermsOfServiceCampaing2 from '../views/terms-of-service-campaign2.vue'
import Support from '../views/support.vue'

const routes = [
  {
    name: 'default-layout',
    path: '/',
    component: DefaultLayout,
    children: [{
        path: '/',
        component: Campaigns,
        name: 'CAMPAÑAS',
        meta: { title:'CAMPAÑAS' }
      },
      {
        path: '/faq',
        component: FAQ,
        name: 'FAQ - Preguntas Frecuentes',
        meta: { title:'FAQ - Preguntas Frecuentes' }
      },
      {
        path: '/whitepaper',
        component: Whitepaper,
        name: 'WHITEPAPER',
        meta: { title:'WHITEPAPER', description: '"EL AGRO, A UN CLICK DE DISTANCIA"' }
      },
      {
        path: '/about-us',
        component: AboutUs,
        name: 'NOSOTROS',
        meta: { title:'NOSOTROS' }
      },
      {
        path: '/my-investments',
        component: MyInvestments,
        name: 'MIS INVERSIONES',
        meta: { title:'MIS INVERSIONES' },
        beforeEnter: (to, from, next) => {  
          let walletStore = useWallet();
          if(walletStore.isWalletConnected){
            next()
          } else {
            next('/')
          }
        },
      },
      {
        path: '/my-investments/follow-campaign',
        component: FollowCampaign,
        name: 'Seguí tu campaña',
        meta: { title:'MIS INVERSIONES', followUp: 'Seguí tu campaña' },
        beforeEnter: (to, from, next) => {  
          let walletStore = useWallet();
          if(walletStore.isWalletConnected){
            next()
          } else {
            next('/')
          }
        },
      },
      // {
      //   path: '/campaigns',
      //   component: Campaigns,
      //   name: 'CAMPAÑAS'
      // },
      {
        path: '/campaign-info',
        component: CampaignInfo,
        name: 'CAMPAÑA 1.0',
        meta: { title:'CAMPAÑA 1.0', description: 'Cannabis medicinal (cáñamo de CBD)' }
      },    {
        path: '/campaign-2-info',
        component: CampaignInfo2,
        name: 'CAMPAÑA 2.0',
        meta: { title:'CAMPAÑA 2.0', description: 'Cannabis medicinal (cáñamo de CBD)' }
      },
      {
        path: '/terms-of-service',
        component: TermsOfService,
        name: 'TERMINOS Y CONDICIONES',
        meta: { title:'TERMINOS Y CONDICIONES' }
      },
      {
        path: '/terms-of-service-campaign2',
        component: TermsOfServiceCampaing2,
        name: 'TERMINOS Y CONDICIONES',
        meta: { title:'TERMINOS Y CONDICIONES' }
      },
      {
        path: '/support/',
        component: Support,
        name: 'SOPORTE',
        meta: { title:'SOPORTE' },
        beforeEnter: (to, from, next) => {  
          let walletStore = useWallet();
          if(walletStore.isWalletConnected){
            next()
          } else {
            next('/')
          }
        },
      },
    ]
  }
];

export default routes;
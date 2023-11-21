import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { createPinia } from 'pinia';
import { createApp } from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

const appInstance = createApp(
  App
)

const options = {
  // You can set your default options here
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
};

const store = createPinia();

library.add(fas, far, fab)

appInstance
  .use(router)
  .use(store)
  .use(Toast, options)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#mounting-point')
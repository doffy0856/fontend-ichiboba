import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from "vue-select";
import VueSimpleAlert from "vue-simple-alert";
import VueThailandAddress from 'vue-thailand-address';
import 'vue-thailand-address/dist/vue-thailand-address.css';


Vue.component("v-select", vSelect);
Vue.use(VueSimpleAlert);
Vue.use(VueThailandAddress);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

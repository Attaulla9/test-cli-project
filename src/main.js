import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'
import VeeValidate from 'vee-validate'
Vue.config.productionTip = false
Vue.use(Buefy, axios)
Vue.use(VeeValidate, {
  events: ''
})
new Vue({
  render: h => h(App),
}).$mount('#app')

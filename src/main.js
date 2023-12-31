import Vue from 'vue'
import axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')

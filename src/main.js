import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

Vue.filter('currency', (val) => '$' + val.toLocaleString())

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

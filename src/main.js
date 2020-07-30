import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import apiService from './services/api';
Vue.prototype.$api = apiService;

new Vue({
  render: h => h(App),
}).$mount('#app')

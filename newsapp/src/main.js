import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import store from './store'
import vuetify from './plugins/vuetify'
import filters from './filters';

Vue.use(Vuex)
Vue.use(filters);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  filters,
  render: h => h(App)
}).$mount('#app')

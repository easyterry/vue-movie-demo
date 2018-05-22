// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad)
FastClick.attach(document.body);

export default new Vuex.Store({

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: {
    App
  },
  template: '<App/>'
})

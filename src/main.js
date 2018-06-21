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
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VeeValidate, {
  Validator
} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Validator.localize('zh_CN', zh_CN);

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyLoad)
Vue.use(ElementUI)
Vue.use(MintUI)
Vue.use(VeeValidate)

FastClick.attach(document.body);

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

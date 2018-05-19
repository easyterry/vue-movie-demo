// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
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

if(process.env.NODE_ENV == 'production'){
    // 部署服务调用正式地址
    axios.defaults.baseURL = 'http://api.douban.com/v2'
    // axios.defaults.headers.get['Content-Type'] = 'application/json';
}else{
    // 开发测试地址
    axios.defaults.baseURL = 'http://localhost:8080'
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

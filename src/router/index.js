import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Main from '@/components/Main'
import Second from '@/components/Second'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/Movie'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/',
      component: HelloWorld
    }, {
      path: '/Second',
      component: Second
    }, {
      path: '/Main',
      component: Main
    }, {
      name:'Movie',
      path: '/Movie/:id',
      component: Movie
    }]
  }, {
    name:'Login',
    path: '/Login',
    component: Login
  }]
})

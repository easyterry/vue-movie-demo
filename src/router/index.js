import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/components/Test'
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
    component: Test,
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
    path: '/Login',
    component: Login
  }]
})

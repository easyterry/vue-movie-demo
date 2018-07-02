import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Main from '@/components/Main'
import Second from '@/components/Second'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/Movie'
import Login from '@/components/Login'
import Shop from '@/components/Shop'
import Personal from '@/components/Personal'
import store from '../store'

Vue.use(Router)

export default new Router({
  base: './',
  routes: [{
    path: '/',
    component: Index,
    children: [{
      path: '/',
      // component: HelloWorld
      component: resolve => require(['@/components/HelloWorld'], resolve)
    }, {
      path: '/Second',
      // component: Second
      component: resolve => require(['@/components/Second'], resolve),
      meta: {
        keepAlive: true
      },
    }, {
      path: '/Main',
      // component: Main
      component: resolve => require(['@/components/Main'], resolve),
      meta: {
        keepAlive: true
      },
    }, {
      name: 'Movie',
      path: '/Movie/:id',
      // component: Movie,
      component: resolve => require(['@/components/Movie'], resolve)
    }]
  }, {
    name: 'Login',
    path: '/Login',
    // component: Login,
    component: resolve => require(['@/components/Login'], resolve),
    beforeEnter: (to, from, next) => {
      if (store.state.isLogin == 0) {
        console.log('未登录');
        next();
      } else {
        next({
          path: '/Personal'
        })
      }
    },
    meta: {
      keepAlive: true
    }
  }, {
    name: 'Shop',
    path: '/Shop',
    // component: Shop
    component: resolve => require(['@/components/Shop'], resolve)
  }, {
    name: 'Personal',
    path: '/Personal',
    component: resolve => require(['@/components/Personal'], resolve)
  }]
})

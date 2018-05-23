<template>
<div class="container">
  <div class="header-box">
    <router-link to='/'>首页</router-link>
    <router-link to='/Second'>Top250</router-link>
    <router-link to='/Main'>即将上映</router-link>
  </div>
  <div>
    <transition enter-active-class='animated fadeIn'>
      <router-view>
      </router-view>
    </transition>
  </div>
  <footer-bar></footer-bar>
</div>
</template>

<script type="text/javascript">
import FooterBar from '@/components/Footer'
export default{
  components:{
    FooterBar,
  }
}
</script>

<style lang="sass" scoped>
  a
    text-decoration: none
    color: #999
  .header-box
    display: flex
    justify-content: space-around
    align-items: center
    width: 100%
    height: 50px
  .router-link-exact-active
    color: #00a0e9
</style>

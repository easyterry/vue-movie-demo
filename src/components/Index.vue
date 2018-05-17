<template>
<div class="container">
  <div class="header-box">
    <router-link to='/'>首页</router-link>
    <router-link to='/Second'>Top250</router-link>
    <router-link to='/Main'>即将上映</router-link>
  </div>
  <div class="">
    <transition name='fade' mode='out-in'>
      <router-view>
      </router-view>
    </transition>
  </div>
</div>
</template>

<script type="text/javascript">

</script>

<style scoped>
a {
  text-decoration: none;
  color: #999;
}

.header-box {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 50px;
}

.router-link-exact-active {
  color: #00a0e9;
}

.fade-enter-active,
.fade-leave-active {
  transition: .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

<template lang="html">
  <div class="">
    <div class="header">
      <back-icon style="margin-top:10px;"></back-icon>
      <span class="login-title">登录</span>
      <input type="text" name="" value="">
      <span></span>
    </div>
  </div>
</template>

<script>
import BackIcon from '@/components/Back'
export default {
  name: 'Login',
  components: {
    BackIcon
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
  input{
    display: inline-block;
    margin-top: 10px;
  }

  .header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .cancel{
    float: left;
    color: #00a0e9;
  }

  .login-title{
    text-align: center;
    font-size: 20px;
    font-weight: 600;
  }
</style>

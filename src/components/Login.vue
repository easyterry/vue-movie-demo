<template lang="html">
  <div class="">
    <div class="header">
      <back-icon style="margin-top:10px;"></back-icon>
      <div class="login">
        <span class="login-title">登录</span>
        <form class="" action="" method="post">
          <input type="text" placeholder='用户名'>
          <input type="password" placeholder='密码'>
          <button type="submit" class="login-btn">确认登录</button>
        </form>
      </div>
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

<style lang="sass" scoped>
  $color: #333
  $bgColor: #00a0e9

  input
    display: inline-block
    margin-top: 10px
    outline: 0
    border: none
    border-bottom: 1px solid #f2f2f2
    margin-top: 20px
    padding: 10px 5px
    font-size: 18px
    &:focus
      border-bottom: 2px solid #00a0e9
  .header
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
  .login
    display: flex
    flex-direction: column
    justify-content: center
    width: 335px
    height: auto
    margin-top: 150px
  .login-title
    text-align: center
    font-size: 24px
    font-weight: 600
    color: $color
  .login-btn
    width: 335px
    height: 55px
    margin-top: 89px
    background: #00a0e9
    outline: none
    border: none
    font-size: 18px
    color: #fff

</style>

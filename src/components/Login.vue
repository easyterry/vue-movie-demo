<template lang="html">
  <div class="">
    <div class="header">
      <back-icon style="margin-top:10px;"></back-icon>
      <div class="login">
        <span class="login-title">登录</span>
        <form>
          <input type="text" placeholder='用户名' v-model='username' v-validate="'required|mobile'" name="username" >
          <span style="display:block" v-show="errors.has('username')">{{ errors.first('username') }}</span>
          <input type="password" placeholder='密码' v-model='pswd' v-validate="'required'" name="password">
          <span style="display:block" v-show="errors.has('password')">{{ errors.first('password') }}</span>
          <button type="button" class="login-btn" @click='handleSignClick(username, pswd)'>确认登录</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import PickerComponent from '@/components/Picker'
import BackIcon from '@/components/Back'
import {
  mapState
} from 'vuex'

export default {
  name: 'Login',
  components: {
    BackIcon,
    PickerComponent,
  },
  data() {
    return {
      username: '',
      pswd: '',
    }
  },
  methods: {
    handleSignClick(username, pswd) {
      // 保存数据到Vuex
      this.$store.dispatch('changeData', username, pswd);
      if (this.username != '' && this.pswd != '') {
        this.$router.push({
          name: 'Personal'
        });
        localStorage.setItem('username', username);
        localStorage.setItem('password', pswd)
      }
    },
    checkLocal() {
      if (localStorage.username != '') {
        this.username = localStorage.getItem('username')
        this.pswd = localStorage.getItem('password')
        this.handleSignClick(this.username, this.pswd);
      }
    },
  },
  mounted() {
    this.checkLocal();
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
  /deep/.mint-popup-bottom
    width: 100%
</style>

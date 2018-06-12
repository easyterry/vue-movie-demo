<template lang="html">
  <div class="">
    <back-icon style="margin-top: 10px"></back-icon>
    <span @click="signOut">注销</span>
    <div class="avatar-container">
      <div class="avatar-box">
        <img class="avatar" src="/static/images/iu.jpeg" alt="">
        <span class="username">{{this.$store.state.username}}</span>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import FooterComponent from '@/components/Footer'
import BackIcon from '@/components/Back'
export default {
  name: 'Personal',
  components: {
    BackIcon,
    FooterComponent
  },
  data() {
    return {

    }
  },
  methods: {
    getLocal() {
      if (this.$store.state.username == '') {
        localStorage.getItem('username');
        this.$store.dispatch('changeData', localStorage.getItem('username'));
      }
    },
    signOut() {
      this.$store.dispatch('changeData', '');
      localStorage.setItem('username', '');
      this.$router.push({
        path: '/Login'
      })
    }
  },
  mounted() {
    this.getLocal();
  }
}
</script>

<style lang="sass" scoped>
  .avatar-container
    position: relative
    display: flex
    justify-content: center
    width: 100%
    height: 187.5px
    margin-top: 50px
    img
      width: 100%
      height: 100%
    .avatar-box
      position: absolute
      left: 50%
      top: 50%
      display: flex
      flex-direction: column
      transform: translate(-50%, -50%)
      .avatar
        display: inline-block
        width: 75px
        height: 75px
        border-radius: 100px
      .username
        margin-top: 15px
        font-size: 18px
        color: #333
</style>

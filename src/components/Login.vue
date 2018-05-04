<template lang="html">
  <div class="">
    <div class="header">
      <span class="cancel" @click='goBack'>取消</span>
      <span class="login-title">登录</span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data(){
    return{

    }
  },
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
  .header{
    display: flex;
    flex-direction: row;
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

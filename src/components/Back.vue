<template lang="html">
  <div @click='goBack'>
    <i class="iconfont icon-fanhui"></i>
    <span>返回</span>
  </div>
</template>

<script>
export default {
  name: 'Back',
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="css" scoped>
  * {
   touch-action: none;
  }

  div{
    position: absolute;
    left: 10px;
    top: 0;
  }

  i{
    color: #333;
  }
</style>

<template lang="html">
  <div class="footer">
    <i class="iconfont icon-shouye" @click='toIndex()'></i>
    <i class="iconfont icon-wode" @click='toMine()'></i>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    toIndex() {
      this.$router.push({
        path: '/'
      })
    },
    toMine(){
      this.$router.push({
        name:'Login'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
  i
    display: inline-block
    width: 50%
    font-size: 30px
  .footer
    position: fixed
    display: flex
    flex-direction: row
    bottom: 0
    left: 0
    width: 100%
    height: 55px
    line-height: 55px
    border-top: 1px solid #eee
    background-color: #fff
</style>

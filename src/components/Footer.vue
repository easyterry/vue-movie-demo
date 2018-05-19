<template lang="html">
  <div class="footer">
    <i class="" @click='toIndex()'><img class="footer-img" src="/static/images/home.png" /></i>
    <i class="" @click='toMine()'><img class="footer-img" src="/static/images/mine.png" /></i>
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
    display: table-cell
    vertical-align: middle
    width: 50%
    font-size: 0
  .footer-img
    vertical-align: middle
    width: 35px
    height: 35px
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

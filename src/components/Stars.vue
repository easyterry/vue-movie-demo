<template lang="html">
  <div class="">
    <span class="rating" v-show="showStars">评分 {{average.toFixed(1)}}</span>
    <span class="stars-container">
      <span v-for='(item, index) in starsArr'
            :key='index'
            v-if="starsArr[index] == 1"
            v-show="showStars"
            class="star-true"></span>
      <span v-else="starsArr[index] == 0" v-show="showStars" class="star-false"></span>
      <span v-show="status" class="coming-soon">暂无评分</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarsNum',
  props: ['stars', 'average'],
  data() {
    return {
      starsArr: '',
      showStars: true,
      status: false,
    }
  },
  mounted() {
    this.starsArr = this.starsComponent(this.stars)
  },
  methods: {
    starsComponent(val) {
      const starArr = []
      const rating = val.substring(0, 1)
      for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
          starArr.push(1)
        } else {
          starArr.push(0)
        }
      }
      const arr = starArr
      const leng = []
      for (var i = 0; i <= arr.length; i++) {
        if (arr[i] == arr[i + 1] && arr[i] == 0) {
          leng.push(0)
        }
      }
      if (leng.length == 4) {
        this.status = true
        this.showStars = false
      }
      return starArr
    }
  }
}
</script>

<style lang="sass" scoped>
.stars-container
  margin-top: 5px
  display: flex
  flex-direction: row
  justify-content: center
.rating
  color: #e09015
  font-size: 14px
.star-true
  width: 13px
  height: 13px
  display: inline-block
  background: url('~@/assets/images/star-true.png') no-repeat
  background-size: 13px 13px
.star-false
  width: 13px
  height: 13px
  display: inline-block
  background: url('~@/assets/images/star-false.png') no-repeat
  background-size: 13px 13px
.coming-soon
  font-size: 14px
  color: #9b9b9b
</style>

<template lang="html">
  <div>
    <span class="stars-container">
      <span v-for='(item, index) in starsArr'
            :key='index'
            v-if="starsArr[index] == 1"
            class="star-true"></span>
      <span v-else="starsArr[index] == 0" class="star-false"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarsNum',
  props: ['stars'],
  data() {
    return {
      starsArr:''
    }
  },
  mounted(){
    this.starsArr = this.starsComponent(this.stars)
  },
  methods: {
    starsComponent(val) {
      const starArr = [];
      const rating = val.toString().substring(0, 1);
      for (var i = 1; i <= 5; i++) {
        if (i <= rating) {
          starArr.push(1);
        } else {
          starArr.push(0)
        }
      }
      return starArr;
    }
  }
}
</script>

<style lang="css" scoped>
.stars-container {
  margin-top: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.star-true {
  width: 13px;
  height: 13px;
  display: inline-block;
  background: url('~@/assets/images/star-true.png') no-repeat;
  background-size: 13px 13px;
}

.star-false {
  width: 13px;
  height: 13px;
  display: inline-block;
  background: url('~@/assets/images/star-false.png') no-repeat;
  background-size: 13px 13px;
}
</style>

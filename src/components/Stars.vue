<template lang="html">
  <div>
    <span class="stars-container">
      <span>{{stars.toString().substring(0, 1)}}</span>
      <span class="star-true"></span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'StarsNum',
  props: ['stars'],
  data() {
    return {}
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
.stars-container {
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

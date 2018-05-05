<template>
<div class="container">
  <h2>即将上映</h2>
  <div class="movies-container">
    <div class="movie-box" v-for='item in subjects'>
      <img :src="'https://images.weserv.nl/?url='+item.images.large.substring(7)">
      <span>{{item.title}}</span>
      <span>评分 {{item.rating.average.toFixed(1)}}</span>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    this.$http.get('/api/movie/coming_soon?count=3').then((res) => {
      this.subjects = res.data.subjects
    })
    return {
      subjects: ''
    }
  }
}
</script>

<style scoped>
img {
  width: 104px;
  height: 162px;
  margin: 0 auto;
}

h2 {
  color: #00a0e9;
}

span {
  display: block;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}

.movies-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.movie-box {
  display: flex;
  flex-direction: column;
}

.movie-box>span:nth-child(2) {
	width: 104px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.movie-box>span:nth-child(3) {
  font-weight: normal;
  font-size: 14px;
  color: #e09015;
}
</style>

<template>
<div class="container">
  <h2>Top250</h2>
  <div class="movies-container">
    <router-link :to="{ name: 'Login' }" style="position:absolute;top:0;left:15px;">登录</router-link>
    <div class="movie-box" v-for='(item, index) in subjects' :key='index'>
      <router-link :to="{ name: 'Movie', params: {id:index, result:subjects} }">
        <img :src="'https://images.weserv.nl/?url='+item.images.large.substring(7)">
      </router-link>
      <span>{{item.title}}</span>
      <span>评分 {{item.rating.average.toFixed(1)}}</span>
      <stars-num v-bind:stars.sysnc="item.rating.stars"></stars-num>
    </div>
  </div>
</div>
</template>

<script>
import StarsNum from '@/components/Stars'
import BackIcon from '@/components/Back'
export default {
  components: {
    StarsNum,
    BackIcon
  },
  data() {
    this.$http.get('/api/movie/top250?count=3').then((res) => {
      this.subjects = res.data.subjects;
      console.log(res);
    })
    return {
      subjects: '',
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}

img {
  width: 104px;
  height: 162px;
  margin: 0 auto;
}

h2 {
  position: relative;
  color: #00a0e9;
}

span {
  display: block;
  margin: 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}

.container {
  position: relative;
}

.movies-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  height: auto;
}

.movie-box {
  display: flex;
  flex-direction: column;
}

.movie-box>span:nth-child(2) {
  width: 104px;
  margin-top: 10px;
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

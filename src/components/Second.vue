<template>
<div class="container">
  <h2>Top250</h2>
  <div class="movies-container">
    <div class="movie-box" v-for='(item, index) in subjects' :key='index'>
      <router-link :to="{ name: 'Movie', params: {id:item.id, result:subjects, idx:index} }">
        <img v-lazy="'https://images.weserv.nl/?url='+item.images.large.substring(7)">
      </router-link>
      <span>{{item.title}}</span>
      <stars-num :stars="item.rating.stars" :average="item.rating.average"></stars-num>
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
    return {
      subjects: '',
    }
  },
  created(){
    this.$http.get('/api/movie/top250?count=9').then((res) => {
      this.subjects = res.data.subjects
    })
  },
}
</script>

<style lang="sass" scoped>
img
  width: 104px
  height: 162px
  margin: 0 auto
h2
  position: relative
  color: #00a0e9
span
  display: block
  margin: 0 auto
  font-weight: 600
  font-size: 16px
  line-height: 1.5
.container
  position: relative
  margin-bottom: 50px
.movies-container
  display: flex
  flex-direction: row
  justify-content: space-around
  flex-wrap: wrap
.movie-box
  display: flex
  flex-direction: column
  margin-bottom: 15px
.movie-box>span:nth-child(2)
  width: 104px
  margin-top: 10px
  overflow: hidden
  text-overflow: ellipsis
  white-space: nowrap
.movie-box>span:nth-child(3)
  font-weight: normal
  font-size: 14px
  color: #e09015
.login
  position: absolute
  top: 0
  left: 15px
</style>

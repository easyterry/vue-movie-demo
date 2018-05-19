<template>
<div class="hello">
  <div class="ipt-container">
    <i class="iconfont icon-sousuo" @click='linkToMovie(idx, subjects)'></i>
    <input style='display:block' class='search-ipt' type="text" v-model='query' placeholder='搜索'>
    <i class="iconfont icon-guanbi" v-show='query' @click='deleteQuery()'></i>
  </div>
  <p class="hotSearch">热门搜索</p>
  <ul>
    <li v-for='(item, index) in subjects' @click='addQuery(item.title, index)'>{{item.title}}</li>
  </ul>
  <home-swiper></home-swiper>
  <div class="main-container">
    <h2>{{title}}</h2>
    <div class='fade movies-container'>
      <div class="movies-layout" v-for='(item, index) in subjects' :key='index'>
        <router-link :to="{ name:'Movie', params: {id: index, result: subjects} }">
          <img v-lazy="'https://images.weserv.nl/?url='+(item.images.large.substring( 7 ))" class="img-size">
        </router-link>
        <span class="intro-title">{{item.title}}</span>
        <span class="rating">评分 {{item.rating.average.toFixed(1)}}</span>
        <stars-num :stars.sysnc="item.rating.stars"></stars-num>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import HomeSwiper from '@/components/Swiper'
import StarsNum from '@/components/Stars'
import FooterBar from '@/components/Footer'
export default {
  name: 'HelloWorld',
  components: {
    HomeSwiper,
    StarsNum,
    FooterBar,
  },
  data() {
    this.$http.get('api/movie/in_theaters?count=9').then((res) => {
      var result = res.data
      this.subjects = result.subjects
      console.log(result)
    })
    return {
      show: false,
      title: '正在热映',
      subjects: '',
      iptValue: '',
      list: [],
      query: '',
      idx: null,
    }
  },
  mounted() {

  },
  methods: {
    addQuery(query, index) {
      this.query = query
      this.idx = index
    },
    deleteQuery() {
      this.query = ''
      this.idx = ''
    },
    linkToMovie(index, subjects) {
      console.log(index)
      if (index == null) {
        alert('请输入要搜索的内容！')
      } else {
        this.$router.push({
          name: 'Movie',
          params: {
            id: index,
            result: subjects
          }
        })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
h1,
h2
  font-weight: 600
h2
  color: #00a0e9
a
  color: #42b983
ul
  padding: 0
li
  box-sizing: border-box
  height: 30px
  line-height: 30px
  padding: 0 3px
  list-style: none
  display: inline-block
  border: 1px solid #ffb712
  border-radius: 3px
  margin: 3px
  color: #ffb712
i
  &.icon-sousuo
    font-size: 20px
  &.icon-guanbi
    font-size: 14px
.hello
  overflow: hidden
.hotSearch
  font-weight: 600
  color: #999
  font-size: 16px
.intro-title
  display: inline-block
  width: 104px
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  margin-top: 10px
  color: #333
  font-family: '微软雅黑'
.rating
  color: #e09015
  font-size: 14px
.search-ipt
  display: inline-block
  outline: none
  border: none
  height: 30px
  font-size: medium
  margin-left: 10px
  color: #333
  background: transparent
.ipt-container
  box-sizing: border-box
  display: flex
  align-items: center
  width: 70%
  margin: 0 auto
  margin-top: 15px
  padding-left: 10px
  border-radius: 5px
  background-color: #eee
.main-container
  margin-top: 30px
  margin-bottom: 50px
.main-container>span
  font-size: 20px
  font-weight: 600
.movies-container
  display: flex
  flex-direction: row
  justify-content: space-around
  flex-wrap: wrap
.movies-layout
  display: flex
  flex-direction: column
  justify-content: center
  margin-bottom: 15px
.letter>span:nth-child(1)
  display: inline-block
  width: 100px
  overflow: hidden
  white-space: nowrap
  text-overflow: ellipsis
  font-weight: 600
.letter>span:nth-child(2)
  font-size: 14px
  color: #e09015
.img-size,
a
  width: 104px
  height: 162px
  margin: 0 auto
.fade-enter-active,
.fade-leave-active
  transition: opacity .5s
.fade-enter,
.fade-leave-to
  opacity: 0
</style>

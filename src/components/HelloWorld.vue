<template>
<div class="hello">
  <div class="ipt-container">
    <i class="iconfont icon-sousuo" @click='linkToMovie(idx, subjects)'></i>
    <input style='display:block' class='search-ipt' type="text" v-model='query' placeholder='搜索'>
    <i class="iconfont icon-guanbi" v-show='query' @click='deleteQuery()'></i>
  </div>
  <ul>
    <li class="search-list" v-show='query' v-for='(item, index) in data' :key='index'>
      <i class="iconfont icon-dianyingpiaoiocn"></i> {{item.title}}
    </li>
  </ul>
  <p class="hotSearch" v-show='!query'>热门搜索</p>
  <ul>
    <li class="hotKey" v-for='(item, index) in subjects' v-show='!query' @click='addQuery(item.title, index)'>
      {{item.title}}
    </li>
  </ul>
  <home-swiper></home-swiper>
  <div class="main-container">
    <h2>{{title}}</h2>
    <div class='fade movies-container'>
      <div class="movies-layout" v-for='(item, index) in subjects' :key='index'>
        <router-link :to="{ name:'Movie', params: {id: item.id, result: subjects, idx: index} }">
          <img v-lazy="'https://images.weserv.nl/?url='+(item.images.large.substring( 7 ))" class="img-size">
        </router-link>
        <span class="intro-title">{{item.title}}</span>
        <span class="rating">评分 {{item.rating.average.toFixed(1)}}</span>
        <stars-num :stars.sysnc="item.rating.stars"></stars-num>
      </div>
    </div>
  </div>
  <mask-box></mask-box>
</div>
</template>

<script>
import HomeSwiper from '@/components/Swiper'
import StarsNum from '@/components/Stars'
import FooterBar from '@/components/Footer'
import MaskBox from '@/components/MaskBox'
export default {
  name: 'HelloWorld',
  components: {
    HomeSwiper,
    StarsNum,
    FooterBar,
    MaskBox,
  },
  data() {
    return {
      show: false,
      title: '正在热映',
      subjects: '',
      query: '',
      idx: null,
      data: '',
    }
  },
  created() {
    this.$http.get('api/movie/in_theaters?count=9').then((res) => {
      var result = res.data
      this.subjects = result.subjects
      console.log(result)
    })
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
    },
  },
  watch: {
    query() {
      this.$http.get('api/movie/search?q=' + this.query + '&count=5').then((res) => {
        const data = res.data.subjects;
        this.data = data;
        console.log(res.data);
        console.log(data);
      })
    }
  },
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
.hotKey
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
.search-list
  display: flex
  flex-direction: row
  justify-content: flex-start
  width: 100%
  height: 30px
  text-align: center
  line-height: 30px
  background: #eee
  border-bottom: 1px solid #fff
  overflow: hidden
  text-overflow: clip
  white-space: nowrap
  list-style: none
  border-radius: 5px
  color: #333
i
  &.icon-sousuo
    font-size: 20px
  &.icon-guanbi
    font-size: 14px
  &.icon-dianyingpiaoiocn
    display: inline-block
    width: 10%
    font-size: 24px
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
  margin-top: 20px
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
</style>

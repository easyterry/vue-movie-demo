<template>
<div class="hello">
  <div class="ipt-container">
    <input style='display:block' class='search-ipt' type="text" placeholder='搜索'>
  </div>
  <home-swiper></home-swiper>
  <div class="main-container">
    <h2>{{title}}</h2>
    <div class='fade movies-container'>
      <div class="movies-layout" v-for='(item, index) in subjects' :key='index'>
        <router-link :to="{ name:'Movie', params: {id: index, result: subjects} }">
          <img :src="'https://images.weserv.nl/?url='+(item.images.large.substring( 7 ))" class="img-size">
        </router-link>
        <span class="intro-title">{{item.title}}</span>
        <span class="rating">评分 {{item.rating.average.toFixed(1)}}</span>
        <stars-num :stars.sysnc="item.rating.stars"></stars-num>
      </div>
    </div>
    <!-- <input type="text" v-model='codeMa' @keyup.enter='checkCodeMa'>
    <input type="button" class="code-style" @click='createCode' v-model='checkCode'> -->
  </div>
  <div class="play-container">
    <img src="../assets/icon-play.png" width='25' height="25" v-show='status' @click='status = !status' alt="">
    <img src="../assets/icon-pause.png" width="25" height="25" v-show='!status' @click='status = !status' alt="">
  </div>
</div>
</template>

<script>
import HomeSwiper from '@/components/Swiper'
import StarsNum from '@/components/Stars'
export default {
  name: 'HelloWorld',
  components: {
    HomeSwiper,
    StarsNum
  },
  data() {
    this.$http.get('api/movie/in_theaters?count=9').then((res) => {
      var result = res.data
      this.subjects = result.subjects
      console.log(result)
    })
    return {
      show: false,
      status: true,
      title: '正在热映',
      subjects: '',
      iptValue: '',
      list: [],
      // checkCode: '',
      // codeMa: ''
    }
  },
  mounted() {

  },
  methods: {
    // createCode() {
    //   var code = ''
    //   var codeLength = 4
    //   var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D',
    //     'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    //     'T', 'U', 'V', 'W', 'X', 'Y', 'Z')
    //   for (var i = 0 i < codeLength i++) {
    //     var index = Math.floor(Math.random() * 36)
    //     code += random[index]
    //   }
    //   this.checkCode = code
    // },
    // checkCodeMa() {
    //   var upperCode = this.codeMa.toUpperCase()
    //   if (this.codeMa == '') {
    //     alert('请输入验证码!')
    //   } else if (upperCode !== this.checkCode) {
    //     alert('请输入正确验证码!')
    //     this.createCode()
    //     this.codeMa = ''
    //   } else {
    //     alert('正确!')
    //   }
    // },
    handleValue() {
      this.list.push(this.iptValue)
      this.iptValue = ''
    },
    handleDelete(index) {
      this.list.splice(index, 1)
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
.hello
  overflow: hidden
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
  padding-left: 30px
  background: #eee
  border-radius: 5px
  outline: none
  border: none
  height: 30px
  font-size: medium
  margin: 0 auto
  color: #333
.ipt-container
  display: flex
  justify-content: center
  width: 100%
  margin-top: 15px
.main-container
  margin-top: 30px
  margin-bottom: 50px
.main-container>span
  font-size: 20px
  font-weight: 600
.play-container
  display: flex
  justify-content: center
  align-items: center
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  height: 50px
  background-color: #5dbfec
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

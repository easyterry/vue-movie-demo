<template>
<div v-if='result'>
  <h2>{{result.title}}</h2>
  <h3>{{result.original_title}}</h3>
  <img :src="imgUrl + result.images.small.substring( 7 )" alt="">
  <stars-num :stars="result.rating.stars" :average="result.rating.average"></stars-num>
  <div class="details-info">
    <span class="rating-count">{{result.ratings_count}}人评价</span>
  </div>
  <div class="intro-box">
    <span v-for='(item, index) in result.genres' class="intro-info">{{item}} / </span>
    <span v-for='(item, index) in result.directors' class="intro-info">{{item.name}}(导演) / </span>
    <span v-for='(item, index) in result.casts' class="intro-info">{{item.name}} / </span>
  </div>
  <div class="summary" :class="{open: status}">
    <span class="intro-title">{{result.title}}剧情简介</span>
    <p class="summary-info" :class="{after: !status}">{{result.summary}}</p>
    <span class="spread" @click='spreadContent()' v-if='status == false'>(展开)
   </span>
  </div>
  <div>
    <span class="intro-title">影人</span>
    <div class="avatars-info">
      <div class="avatar-box" v-for='(item, index) in result.casts' :key='index' v-if='index <= 2'>
        <img class="sculpture" v-lazy="imgUrl + (item.avatars.large.substring( 7 ))">
        <span class="avatar-name">{{item.name}}</span>
        <span class="role">演员</span>
      </div>
    </div>
  </div>
  <div>
    <span class="intro-title">周边</span>
    <router-link :to="{ name: 'Shop' }">
      <div class="product-box">
        <img src="" alt="">
        <span></span>
      </div>
    </router-link>
  </div>
</div>
</template>

<script>
import StarsNum from '@/components/Stars'
import {
  Loading
} from 'element-ui'
export default {
  name: 'Movie',
  components: {
    StarsNum
  },
  data() {
    return {
      id: Number,
      result: '',
      imgUrl: 'https://images.weserv.nl/?url=',
      status: false,
    }
  },
  beforeCreate() {
    Loading.service({
      text: '内容呈现中...',
      spinner: 'el-icon-loading',
      lock: true,
      rating: null,
    });
  },
  created() {
    this.$http.get('/api/movie/subject/' + this.$route.params.id).then(res => {
      var result = res.data;
      this.result = result;
      console.log(this.result);
    })
  },
  mounted() {
    Loading.service().close();
  },
  methods: {
    spreadContent() {
      this.status = true;
    }
  }
}
</script>

<style lang="sass" scoped>
  h3
    color: #007722
  a
    text-decoration: none
  .details-info
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    font-size: 0
    margin-top: 5px
    span
      margin-left: 10px
      color: #999
      font-size: 14px
      line-height: 14px
  .rating-count
    display: block
  .intro-box
    width: 270px
    text-align: justify
    margin: 0 auto
    margin-top: 10px
  .intro-info
    font-size: 14px
    color: #333
  .summary-info
    position: relative
    margin-top: 10px !important
    margin-bottom: 0 !important
    line-height: 22px
    overflow: hidden
  .after::after
    content: "\02026"
    position: absolute
    bottom: 0
    right: 0
    display: inline-block
    width: 17px
    vertical-align: bottom
    background: -webkit-linear-gradient(left, transparent, #fff 10%)
  .open
    height: auto !important
  .spread
    color: #42bd56
  .content-style
    line-height: 1.5
    text-align: left
    font-size: 14px
  .avatars-info
    display: flex
    flex-direction: row
    justify-content: space-around
    align-items: center
    margin-bottom: 10px
  .avatar-box
    display: flex
    flex-direction: column
  .sculpture
    width: 75px
    height: 107px
    margin-top: 15px
  .summary
    width: 100%
    display: flex
    flex-direction: column
    height: 133px
    margin: 0 auto
    text-align: justify
  .intro-title
    display: block
    position: relative
    margin-left: 5px
    margin-top: 10px
    line-height: 25px
    text-align: left
    color: #aaa
  .avatar-name
    width: 76px
    overflow: hidden
    text-overflow: ellipsis
    white-space: nowrap
    font-size: 14px
    margin-top: 5px
  .role
    color: #aaa
    font-size: 14px
</style>

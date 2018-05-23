<template>
<div v-if='result'>
  <h2>{{result.title}}</h2>
  <img :src="imgUrl + result.images.small.substring( 7 )" alt="">
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
import {
  Loading
} from 'element-ui'
export default {
  name: 'Movie',
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
    });
  },
  created() {
    this.$http.get('/api/movie/subject/' + this.$route.params.id).then(res => {
      var result = res.data;
      this.result = result;
      console.log(this.result);
    })
  },
  mounted(){
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

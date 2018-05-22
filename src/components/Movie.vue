<template>
<div v-if='result'>
  <h2>{{result.title}}</h2>
  <img :src="imgUrl + result.images.small.substring( 7 )" alt="">
  <div class="summary">
    <span class="intro-title">{{result.title}}剧情简介</span>
    <p class="summary">{{result.summary}}</p>
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
export default {
  name: 'Movie',
  data() {
    return {
      id: Number,
      result: '',
      imgUrl: 'https://images.weserv.nl/?url=',
    }
  },
  created() {
    this.$http.get('/api/movie/subject/' + this.$route.params.id).then(res => {
      var result = res.data;
      this.result = result;
      console.log(this.result);
    })
  },
  methods: {

  }
}
</script>

<style lang="sass" scoped>
h3
  color: #007722
a
  text-decoration: none
.summary
  margin-top: 10px !important
  margin-bottom: 10px !important
  text-align: justify !important
  line-height: 24px
  color: #333
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
  margin: 0 auto
  text-align: center
.summary>span
  margin-top: 15px
.summary>span:nth-child(2)
  margin-left: 5px
  margin-bottom: 15px
.intro-title
  display: block
  position: relative
  margin-left: 5px
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

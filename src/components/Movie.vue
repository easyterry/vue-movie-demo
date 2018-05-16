<template>
<div v-if='result'>
  <h2>{{result[id].title}}</h2>
  <img :src="imgUrl + result[id].images.small.substring( 7 )" alt="">
  <div class="summary">
    <span class="intro-title">{{result[id].title}}剧情简介</span>
  </div>
  <div>
    <span class="intro-title">影人</span>
    <div class="avatars-info">
      <div class="avatar-box" v-for='(item, index) of result' :key='index' v-if='index <= 2'>
       <img class="sculpture" :src="imgUrl + result[id].casts[index].avatars.medium.substring( 7 )" alt="">
        <span class="avatar-name">{{result[id].casts[index].name}}</span>
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
      id: this.$route.params.id,
      result: this.$route.params.result,
      imgUrl: 'https://images.weserv.nl/?url=',
    }
  },
  mounted() {
    this.alertMsg();
  },
  methods: {
    alertMsg() {
      console.log(this.$route.params.result);
    }
  }
}
</script>

<style scoped>
h3 {
  color: #007722;
  font-weight:
}

a {
  text-decoration: none;
}

.content-style {
  line-height: 1.5;
  text-align: left;
  font-size: 14px;
}

.avatars-info {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
}

.avatar-box {
  display: flex;
  flex-direction: column;
}

.sculpture {
  width: 75px;
  height: 107px;
  margin-top: 15px;
}

.summary {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
}

.summary>span {
  margin-top: 15px;
}

.summary>span:nth-child(2) {
  margin-left: 5px;
  margin-bottom: 15px;
}

.intro-title {
  display: block;
  position: relative;
  margin-left: 5px;
  line-height: 25px;
  text-align: left;
  color: #aaa;
}

.avatar-name {
  width: 76px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 14px;
  margin-top: 5px;
}

.role {
  color: #aaa;
  font-size: 14px;
}
</style>

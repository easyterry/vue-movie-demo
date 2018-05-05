<template>
<div v-if='result&&content' class="">
  <h2>{{result[id].title}}</h2>
  <img :src="imgUrl + result[id].images.small.substring( 7 )" alt="">
  <div class="summary">
    <span class="intro-title">{{result[id].title}}剧情简介</span>
    <span class='content-style'>{{content.result[id].content1}}</span>
  </div>
  <div>
    <span class="intro-title">影人</span>
    <div class="avatars-info">
      <div class="avatar-box" v-for='(item, index) of result' :key='index'>
        <img class="sculpture" :src="imgUrl + result[id].casts[index].avatars.medium.substring( 7 )" alt="">
        <span class="avatar-name">{{result[id].casts[index].name}}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    this.$http.get('/api/movie/in_theaters?count=3').then(res => {
      var result = res.data.subjects;
      this.result = result;
    });
    this.$http.get('../../static/data.json').then(res => {
      console.log(res.data.result);
      var content = res.data;
      this.content = content;
    })
    return {
      id: this.$route.params.id,
      result: '',
      content: '',
      imgUrl: 'https://images.weserv.nl/?url='
    }
  },
  mounted() {

  }
}
</script>

<style scoped>
h3 {
  color: #007722;
  font-weight:
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
  display: flex;
  flex-direction: column;
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
</style>

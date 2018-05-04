<template>
<div v-if='result&&content' class="">
  <h2>{{result[id].title}}</h2>
  <img :src="'https://images.weserv.nl/?url='+result[id].images.small.substring( 7 )" alt="">
  <div class="">
    <h3>剧情简介</h3>
    <p>
      <span class='content-style'>{{content.result[id].content1}}</span>
    </p>
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
      content: ''
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
}
</style>

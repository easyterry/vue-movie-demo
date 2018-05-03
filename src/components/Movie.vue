<template>
<div v-if='result' class="">
  <img :src="'https://images.weserv.nl/?url='+result[id].images.small.substring( 7 )" alt="">
  <p>{{result[id].title}}</p>
</div>
</template>

<script>
export default {
  data() {
    this.$http.get('/api/movie/in_theaters?count=3').then(res => {
      var result = res.data.subjects;
      this.result = result;
    })
    return {
      id: this.$route.params.id,
      result: ''
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>

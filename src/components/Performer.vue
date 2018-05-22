<template lang="html">
  <div class="">
    <back-icon style="margin-top: 10px"></back-icon>
  </div>
</template>

<script>
import BackIcon from '@/components/Back'
export default {
  name: 'Performer',
  components:{
    BackIcon
  },
  data() {
    return {
      id: this.$route.params.id,
      result: this.$route.params.result
    }
  },
  mounted() {
    this.alertMsg();
    this.$http.get('/api/movie/celebrity/' + this.id).then((res) => {
      console.log(res.data);
    })
  },
  created(){

  },
  methods:{
    alertMsg(){
      console.log(this.$route.params.id + ' ' + this.$route.params.result);
    }
  }
}
</script>

<style lang="sass" scoped>
</style>

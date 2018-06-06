<template lang="html">
  <div class="">
    <back-icon style="margin-top: 10px"></back-icon>
    <div class="avatar">
      <span>{{this.$store.state.username}}</span>
    </div>
  </div>
</template>

<script>
import BackIcon from '@/components/Back'
export default {
  name: 'Personal',
  components:{
    BackIcon
  },
  data() {
    return {

    }
  },
  methods:{

  }
}
</script>

<style lang="sass" scoped>
  .avatar
    
</style>

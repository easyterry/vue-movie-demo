<template>
<div class="wrapper">
  <swiper :options="swiperOption" class="swiper-box">
    <swiper-slide v-for='(item, index) of swiperList' :key='index'>
      <img :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOption: {
        autoplay: {},
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/272344.jpg'
      }, {
        id: '002',
        imgUrl: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/277409.jpg'
      }, {
        id: '003',
        imgUrl: 'https://y.gtimg.cn/music/common/upload/MUSIC_FOCUS/273112.jpg'
      }]
    }
  }
}
</script>

<style scoped>
.wrapper >>> .swiper-pagination-bullet-active{
    background: #fff;
}
.swiper-box{
    margin-top: 20px;
}
img{
  height: 176px;
  width: 100%;
}
</style>

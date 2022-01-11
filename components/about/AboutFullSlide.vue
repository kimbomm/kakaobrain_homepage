<template>
  <swiper class="swiper about-full-slide" :options="swiperOption">
    <swiper-slide>
      <div class="slide">
        <img src="@/assets/images/about-slide_img_1.png" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <img src="@/assets/images/about-slide_img_1.png" />
      </div>
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>


    
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide,
    },
    data() {
      return {
        swiperOption: {
          // direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 0,
          mousewheel: false,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
      }
    },
  }
</script>
<style lang="scss" scoped>
  .about-full-slide{
    height:1500px;
    .slide{
      img{
        width:100%;
      }
    }
  }
  
  .swiper {
    position: relative;
    .swiper-pagination-fraction {
        top: 130px;
        left: 20px;
        width: auto;
      }
      .swiper-button-prev {
        left: 20px;
        top: 100px;
      }
      .swiper-button-next {
        left: 20px;
        top: 180px;
      }
      .swiper-button-prev:after {
        content: '↑';
        font-family: Inter;
        font-size: 16px;
        color: $gray-0;
      }
      .swiper-button-next:after {
        content: '↓';
        font-family: Inter;
        font-size: 16px;
        color: $gray-0;
      }
  }
</style>

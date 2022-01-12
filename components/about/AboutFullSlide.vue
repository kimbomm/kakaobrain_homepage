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
    .slide-control{
      
    }
      .swiper-pagination-fraction {
        display: flex;
        align-items: center;
        transform: translate(0,-50%);
        top:50%;
        left:60px;
        width: auto;
        font-size: 20px;
        color: $gray-0;
      }
      .swiper-button-prev {
        line-height: 130%;
        left: 20px;
        top:50%;
      }
      .swiper-button-next {
        left:100px;
        top:50%;
      }
      .swiper-button-prev:after {
        content: '';
        line-height: 130%;
        font-family: Inter;
        font-size: 20px;
        color: $gray-0;
      }
      .swiper-button-next:after {
        content: '';
        line-height: 130%;
        font-family: Inter;
        font-size: 20px;
        color: $gray-0;
      }
  }
</style>

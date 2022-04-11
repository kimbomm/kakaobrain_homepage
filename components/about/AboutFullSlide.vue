<template>
  <swiper
    v-if="list.length > 0"
    class="swiper about-full-slide"
    :options="swiperOption"
  >
    <swiper-slide v-for="(item, index) in list" :key="index">
      <div class="slide">
        <img :src="`${$config.baseURL}${item.Media.url}`" />
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<script>
  import { mapActions } from 'vuex'
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        list: [],
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
        }
      }
    },
    async mounted() {
      await this.init()
    },
    methods: {
      ...mapActions(['getLibraryCategory']),
      async init() {
        const res = await this.getLibraryCategory({
          category: 'aboutSlideImage',
          params: {
            offset: 0,
            limit: 99
          }
        })

        this.list = res.data.list
      }
    }
  }
</script>
<style lang="scss" scoped>
  .about-full-slide {
    height: auto;
    .slide {
      height: 1500px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .swiper {
    position: relative;
    .swiper-pagination-fraction {
      display: flex;
      align-items: center;
      transform: translate(0, -50%);
      top: 50%;
      left: 60px;
      width: auto;
      font-size: 20px;
      color: $gray-0;
    }
    .swiper-button-prev {
      line-height: 130%;
      left: 20px;
      top: 50%;
    }
    .swiper-button-next {
      left: 100px;
      top: 50%;
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

  @include pc-large {
    .about-full-slide {
      .slide {
        height: 2000px;
      }
    }

    .swiper {
      .swiper-pagination-fraction {
        left: 70px;
        font-size: 30px;
      }
      .swiper-button-prev {
        left: 20px;
      }
      .swiper-button-next {
        left: 140px;
      }
      .swiper-button-prev:after {
        font-size: 30px;
      }
      .swiper-button-next:after {
        font-size: 30px;
      }
    }
  }
  @include pc-4k {
    .about-full-slide {
      .slide {
        height: 3000px;
      }
    }

    .swiper {
      .swiper-pagination-fraction {
        left: 90px;
        font-size: 40px;
      }
      .swiper-button-prev {
        left: 20px;
      }
      .swiper-button-next {
        left: 190px;
      }
      .swiper-button-prev:after {
        font-size: 40px;
      }
      .swiper-button-next:after {
        font-size: 40px;
      }
    }
  }
  @include tablet {
    .about-full-slide {
      .slide {
        height: 800px;
      }
    }

    .swiper {
      .swiper-pagination-fraction {
        left: 60px;
        font-size: 20px;
      }
      .swiper-button-prev {
        left: 20px;
      }
      .swiper-button-next {
        left: 100px;
      }
      .swiper-button-prev:after {
        font-size: 20px;
      }
      .swiper-button-next:after {
        font-size: 20px;
      }
    }
  }
  @include mobile {
    .about-full-slide {
      .slide {
        height: 500px;
      }
    }

    .swiper {
      .swiper-pagination-fraction {
        left: 60px;
        font-size: 20px;
      }
      .swiper-button-prev {
        left: 20px;
      }
      .swiper-button-next {
        left: 100px;
      }
      .swiper-button-prev:after {
        font-size: 20px;
      }
      .swiper-button-next:after {
        font-size: 20px;
      }
    }
  }
</style>

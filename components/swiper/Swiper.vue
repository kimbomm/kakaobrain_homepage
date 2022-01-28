<template>
  <div class="story-telling">
    <swiper
      ref="mySwiper"
      class="swiper"
      :options="swiperOption"
      @reachEnd="onEdge"
    >
      <swiper-slide v-for="(content, index) in data.ContentItems" :key="index">
        <div
          class="slide"
          :style="`background-image: url(https://kakaobrain.loadingworks.com${content.Media.url})`"
        >
          <div class="back"></div>
          <div
            :class="`slide-con ${content.itemProp.position.vertical}-${content.itemProp.position.horizontal}`"
          >
            <div class="slide-tit">{{ content.subject }}</div>
            <div v-if="content.text" class="slide-txt">
              <p v-html="content.text.replaceAll('\n', '<br />')"></p>
            </div>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    <div class="story-detail" @click="storyList()">
      <button type="button" class="list"></button>
    </div>
    <!-- story pop -->
    <div class="story-pop" v-show="this.isStory">
      <div class="story-con">
        <ul>
          <li
            v-for="(content, index) in data.ContentItems"
            :key="index"
            class="list-item"
            @click="onClick(index)"
          >
            <div
              class="list-img"
              :style="`background-image: url(https://kakaobrain.loadingworks.com${content.Media.url})`"
            ></div>
            <div class="list-tit">{{ content.subject }}</div>
          </li>
        </ul>
      </div>
      <div class="story-close" @click="storyList()">
        <button type="button" class="list-close"></button>
      </div>
    </div>
    <!-- story pop //-->
  </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import Icon from '@/components/elements/Icon'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    components: {
      Swiper,
      SwiperSlide,
      Icon
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 0,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          on: {
            scroll: e => {
              // console.log('true::', this.mySwiper.activeIndex)
              if (this.mySwiper.activeIndex < this.mySwiper.slides.length - 1) {
                this.isEndSlide = false
              }
              this.isChange = true
            }
          }
        },
        isStory: false,
        timer: null,
        isChange: false,
        isEndSlide: false
      }
    },
    computed: {
      mySwiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    mounted() {
      window.addEventListener('wheel', this.onWheel)
    },
    beforeDestroy() {
      window.removeEventListener('wheel', this.onWheel)
    },
    methods: {
      onClick(index) {
        this.mySwiper.slideTo(index)
        this.storyList()
      },
      onWheel(e) {
        e.preventDefault
        if (this.isEndSlide && e.deltaY < 0 && window.scrollY > 0) {
          // console.log(e.deltaY)
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }
        if (this.timer !== null) {
          clearTimeout(this.timer)
        }

        const _this = this
        this.timer = setTimeout(function () {
          _this.isChange = false
        }, 66)

        if (this.isEndSlide && e.deltaY > 0) {
          if (this.isChange) {
            return
          } else {
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 0,
              behavior: 'smooth'
            })
          }
        }
      },
      storyList() {
        this.isStory = !this.isStory
      },
      onEdge() {
        this.isEndSlide = true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .story-telling {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  .swiper {
    height: 100%;
    width: 100%;
    color: $gray-0;
    // border: 5px solid blue;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      .slide {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        position: relative;
        &-con {
          position: absolute;
          z-index: 10;
          width: 100%;
          padding: 0 210px;
        }
        &-tit {
          font-size: 50px;
          font-weight: 900;
          margin-bottom: 40px;
          line-height: 120%;
        }
        &-txt {
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
          word-break: keep-all;
        }
        .back {
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
      }
    }
    .swiper-pagination {
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

  .story {
    &-detail {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      padding: 17px;
      background-color: $gray-0;
      border-radius: 50%;
      z-index: 10;
      cursor: pointer;
      .list {
        width: 26px;
        height: 26px;
        background: url('@/assets/images/icon-story.png') no-repeat 100%;
        background-size: 100%;
      }
    }
    &-pop {
      position: fixed;
      left: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      background-color: rgba(255, 255, 255, 0.7);
      z-index: 20;
    }
    &-con {
      width: getWidth(8);
      margin: 200px auto;
    }
    &-close {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      padding: 17px;
      background-color: $gray-0;
      border-radius: 50%;
      z-index: 10;
      cursor: pointer;
      .list-close {
        width: 26px;
        height: 26px;
        background: url('@/assets/images/icon-close__black.png') no-repeat 100%;
        background-size: 100%;
      }
    }
  }
  // pop list
  .list {
    &-img {
      max-width: 362px;
      margin: 0 auto 10px;
      padding-top: 56%;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
    &-tit {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 12px;
      line-height: 1.3;
      color: #fff;
    }
    &-item {
      width: getWidth(1);
      display: inline-block;
      vertical-align: top;
      margin-bottom: 80px;
      &:not(:nth-child(8n)) {
        margin-right: 20px;
      }
    }
  }

  @include pc-large {
    .swiper .swiper-slide .slide-con {
      padding: 0 270px;
    }
    .swiper .swiper-slide .slide-tit {
      font-size: 68px;
    }
    .swiper .swiper-slide .slide-txt {
      font-size: 22px;
    }
  }
  @include pc-4k {
    .swiper .swiper-slide .slide-con {
      padding: 0 400px;
    }
    .swiper .swiper-slide .slide-tit {
      font-size: 98px;
    }
    .swiper .swiper-slide .slide-txt {
      font-size: 32px;
    }
  }
  @include tablet {
    .swiper .swiper-slide .slide-con {
      padding: 0 120px;
    }
    .swiper .swiper-slide .slide-tit {
      font-size: 38px;
    }
    .swiper .swiper-slide .slide-txt {
      font-size: 14px;
    }
    .list .list-item {
      width: getWidth(2);
      margin-bottom: 50px;
    }
    .list .list-img {
      margin-bottom: 20px;
    }
    .list .list-tit {
      font-size: 12px;
    }
  }
  @include mobile {
    .swiper .swiper-slide .slide-con {
      padding: 0 20px;
    }
    .swiper .swiper-slide .slide-tit {
      font-size: 30px;
    }
    .swiper .swiper-slide .slide-txt {
      font-size: 16px;
    }
    .story-detail,
    .story-pop {
      display: none !important;
    }
  }
  // @media screen and (max-width: 3840px) {
  //   .story {
  //     &-pop {
  //       padding: 380px 0;
  //     }
  //   }
  //   .list {
  //     &-item {
  //       padding: 0 10px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 2560px) {
  //   .swiper {
  //     .swiper-slide {
  //       .slide {
  //         &-tit {
  //           font-size: 68px;
  //         }
  //         &-txt {
  //           font-size: 22px;
  //         }
  //       }
  //     }
  //   }
  //   .story {
  //     &-pop {
  //       padding: 200px 0;
  //     }
  //   }
  //   .list {
  //     &-tit {
  //       font-size: 18px;
  //     }
  //     &-item {
  //       margin-bottom: 100px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 1920px) {
  //   .swiper {
  //     .swiper-slide {
  //       .slide {
  //         &-tit {
  //           font-size: 50px;
  //         }
  //         &-txt {
  //           font-size: 16px;
  //         }
  //       }
  //     }
  //   }
  //   .list {
  //     &-tit {
  //       font-size: 12px;
  //     }
  //     &-item {
  //       margin-bottom: 80px;
  //       padding: 0 10px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 1024px) {
  //   .swiper {
  //     .swiper-slide {
  //       .slide {
  //         &-tit {
  //           font-size: 38px;
  //         }
  //         &-txt {
  //           font-size: 14px;
  //         }
  //       }
  //     }
  //   }
  //   .list {
  //     &-item {
  //       margin-bottom: 50px;
  //       padding: 0;
  //       &:not(:nth-child(4n)) {
  //         margin-right: 20px;
  //       }
  //     }
  //   }
  //   .gl-1 {
  //     width: calc(
  //       calc((100vw - 20px * 11) / 10) * 2 + 20px * (2 - 1)
  //     ) !important;
  //   }
  // }
  // @media screen and (max-width: 768px) {
  //   .swiper {
  //     .swiper-slide {
  //       .slide {
  //         &-tit {
  //           font-size: 30px;
  //         }
  //         &-txt {
  //           font-size: 16px;
  //         }
  //       }
  //     }
  //   }
  //   .story-detail {
  //     display: none;
  //   }
  // }
</style>

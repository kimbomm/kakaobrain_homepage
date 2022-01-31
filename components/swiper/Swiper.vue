<template>
  <div class="story-telling">
    <swiper
      v-show="!isMobile && viewPortWidth > 768"
      ref="mySwiper"
      class="swiper"
      :options="swiperOption"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(content, index) in data.ContentItems" :key="index">
        <div
          class="slide"
          :style="`background-image: url(https://kakaobrain.loadingworks.com${content.Media.url})`"
        >
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
    <div v-show="isMobile || viewPortWidth <= 768" class="mobile-story">
      <ul>
        <li
          v-for="(content, index) in data.ContentItems"
          :key="index"
          class="swiper-slide"
        >
          <div
            class="slide"
            :style="`background-image: url(https://kakaobrain.loadingworks.com${content.Media.url})`"
          >
            <div
              :class="`slide-con ${content.itemProp.position.vertical}-${content.itemProp.position.horizontal}`"
            >
              <div class="slide-tit">{{ content.subject }}</div>
              <div v-if="content.text" class="slide-txt">
                <p v-html="content.text.replaceAll('\n', '<br />')"></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
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
  import { mapState } from 'vuex'
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
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
        isStory: false,
        timer: null,
        isChange: false,
        isEndSlide: false,
        isMobile: false,
        isEventAdd: false,
        viewPortWidth: 0
      }
    },
    computed: {
      ...mapState({
        touchDevice: state => state.touchDevice
      }),
      mySwiper() {
        return this.$refs.mySwiper.$swiper
      },
      swiperSize() {
        return this.data.ContentItems && this.data.ContentItems.length
      }
    },
    async mounted() {
      await this.checkMobile()
      this.$nextTick(async () => {
        this.isEndSlide = this.isMobile || this.viewPortWidth <= 768
        this.$nuxt.$emit('onSlideEnd', this.isEndSlide)
        await this.resizeEvent()
        await window.addEventListener('resize', this.resizeEvent)
      })
    },
    async beforeDestroy() {
      await this.removeEvent()
    },
    methods: {
      async resizeEvent() {
        this.viewPortWidth = window.innerWidth
        if (this.isMobile || this.viewPortWidth <= 768) {
          await this.removeEvent()
        } else {
          await this.addEvent()
        }
      },
      addEvent() {
        if (!this.isEventAdd) {
          this.isEventAdd = true
          this.$nuxt.$emit('onSlideEnd', false)
          document
            .getElementsByClassName('swiper')[0]
            .addEventListener('wheel', this.onWheel)
        }
      },
      removeEvent() {
        if (this.isEventAdd) {
          this.isEventAdd = false
          this.$nuxt.$emit('onSlideEnd', true)
          document
            .getElementsByClassName('swiper')[0]
            .removeEventListener('wheel', this.onWheel)
        }
      },
      checkMobile() {
        const device = this.$device
        this.isMobile = device.iphone || device.androidPhone || device.mobile
      },
      onClick(index) {
        this.mySwiper.slideTo(index)
        this.isStory = false
      },
      onWheel(e) {
        if (!this.isChange) {
          this.isChange = true
          if (e.deltaY > 0) this.onClick(this.mySwiper.activeIndex + 1)
          if (e.deltaY < 0) this.onClick(this.mySwiper.activeIndex - 1)
        } else {
          e.preventDefault
        }
        if (this.timer !== null) {
          clearTimeout(this.timer)
        }

        const _this = this
        this.timer = setTimeout(function () {
          _this.isChange = false
        }, 66)
      },
      storyList() {
        this.isStory = !this.isStory
      },
      onSlideChange() {
        this.isEndSlide = this.swiperSize - 1 === this.mySwiper.activeIndex
        setTimeout(
          () => {
            this.$nuxt.$emit('onSlideEnd', this.isEndSlide)
          },
          this.isEndSlide ? 1000 : 0
        )
      }
    }
  }
</script>
<style lang="scss" scoped>
  .story-telling {
    position: relative;
    width: 100%;
  }
  .swiper {
    width: 100%;
    color: $gray-0;
    height: 100vh;
    // border: 5px solid blue;
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
    .swiper,
    .story-detail,
    .story-pop {
      display: none !important;
    }
  }

  .mobile-story {
    .swiper-slide {
      .slide-con {
        padding: 0 20px;
        transform: translateY(-50%) !important;
        top: 50% !important;
        left: 0 !important;
        width: 100%;
        color: $gray-0;
      }
    }
  }
</style>

<template>
  <div class="textflow" :key="refresh">
    <vue-marquee-slider
      id="marquee-slider"
      :speed="45000"
      :width="getSliderWidth()"
      :space="getSliderSpace()"
      v-if="data.length"
    >
      <div class="textbox" v-for="(item, index) in data" :key="index">
        <p class="txt" :style="titleStyle">
          {{ language === 'KR' ? item.contentKR : item.contentEN }}
        </p>
      </div>
    </vue-marquee-slider>
  </div>
</template>

<script>
  import Vue from 'vue'
  import VueMarqueeSlider from 'vue-marquee-slider'
  import { mapActions, mapState } from 'vuex'
  Vue.use(VueMarqueeSlider)
  export default {
    data() {
      return {
        data: [],
        refresh: 0,
        previousSpace: null,
        previousWidth: null
      }
    },
    computed: {
      ...mapState(['language', 'device']),
      titleStyle() {
        return {
          fontFamily: this.language === 'EN' ? 'Inter' : 'NotoSans KR'
        }
      }
    },
    async mounted() {
      await this.init()
      window.addEventListener('resize', this.getSliderSpace)
    },
    destroyed() {
      window.removeEventListener('resize', this.getSliderSpace)
    },

    methods: {
      ...mapActions(['getLibraryCategory']),
      async init() {
        const res = await this.getLibraryCategory({
          category: 'rollingText',
          params: {
            offset: 0,
            limit: 99
          }
        })

        this.data = res.data.list
      },

      getSliderSpace() {
        this.windowWidth = window.innerWidth
        let space = 400
        if (this.windowWidth >= 3840) {
          space = 400
        } else if (this.windowWidth >= 2560) {
          space = 270
        } else if (this.windowWidth > 1360) {
          space = 200
        } else if (this.windowWidth > 1024) {
          space = 200
        } else if (this.windowWidth > 768) {
          space = 120
        } else if (this.windowWidth > 374) {
          space = 120
        } else if (this.windowWidth < 374) {
          space = 40
        }
        if (space !== this.previousSpace) {
          this.previousSpace = space
          this.refresh += 1
        }

        return space
      },
      getSliderWidth() {
        this.windowWidth = window.innerWidth
        let width = 450
        if (this.windowWidth >= 3840) {
          width = 950
        } else if (this.windowWidth >= 2560) {
          width = 650
        } else if (this.windowWidth > 1360) {
          width = 450
        } else if (this.windowWidth > 1024) {
          width = 450
        } else if (this.windowWidth > 768) {
          width = 300
        } else if (this.windowWidth > 374) {
          width = 300
        } else if (this.windowWidth < 374) {
          width = 250
        }
        if (width !== this.previousWidth) {
          this.previousWidth = width
          this.refresh += 1
        }

        return width
      }
    }
  }
</script>

<style lang="scss" scoped>
  .textflow {
    width: 9451px;
    height: auto;

    #marquee-slider {
      .textbox {
        width: auto;
        height: auto;
        .txt {
          color: var(--black, #000);

          font-size: 60px;
          font-style: normal;
          font-weight: 900;
          line-height: 110%;
        }
      }
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .textflow {
      width: 9451px;

      margin-top: 234px;
      margin-bottom: 400px;
      #marquee-slider {
        .textbox {
          .txt {
          }
        }
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .textflow {
      position: relative;
      width: 12654px;

      margin-top: 340px;
      margin-bottom: 540px;

      #marquee-slider {
        .textbox {
          height: auto;
          .txt {
            font-size: 80px;
          }
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .textflow {
      width: 18897px;

      margin-top: 340px;
      margin-bottom: 500px;

      #marquee-slider {
        .textbox {
          margin-right: 300px;

          height: auto;
          .txt {
            font-size: 120px;
          }
        }
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .textflow {
      width: 6090px;

      top: 4599px;

      #marquee-slider {
        .textbox {
          height: auto;
          .txt {
            font-size: 40px;
          }
        }
      }
    }
  }
  //max-width: 768px
  @include mobile {
    .textflow {
      width: 6090px;
      height: auto;

      margin-bottom: 249;

      #marquee-slider {
        .textbox {
          height: auto;
          .txt {
            font-size: 40px;
          }
        }
      }
    }
  }
  @include mobile-small {
    .textflow {
      width: 3769px;
      height: 99px;
      top: 4308px;
      margin-bottom: 140px;

      #marquee-slider {
        .textbox {
          height: auto;

          .txt {
            height: auto;
            font-size: 30px;
          }
        }
      }
    }
  }
</style>

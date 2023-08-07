<template>
  <div class="textflow">
    <vue-marquee-slider
      id="marquee-slider"
      :speed="45000"
      :width="300"
      v-if="data.length"
    >
      <div class="textbox" v-for="(item, index) in data" :key="index">
        <p class="txt">{{ item.contentKR }}</p>
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
        refresh: 0
      }
    },
    computed: {
      ...mapState(['language', 'device'])
    },
    async mounted() {
      window.addEventListener('resize', this.getSliderSpace)
      await this.init()
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
      }

      // getSliderSpace() {
      //   this.refresh += 1
      //   this.windowWidth = window.innerWidth
      //   if (this.windowWidth > 1360) {
      //     console.log(1360)
      //     return 200
      //   } else if (this.windowWidth >= 2560) {
      //     console.log(2560)
      //     return 270
      //   } else if (this.windowWidth > 3840) {
      //     console.log(3850)
      //     return 400
      //   } else if (this.windowWidth > 1024) {
      //     console.log(1024)
      //     return 200
      //   } else if (this.windowWidth > 768) {
      //     console.log(768)
      //     return 120
      //   } else if (this.windowWidth > 374) {
      //     console.log(374)
      //     return 120
      //   } else if (this.windowWidth < 374) {
      //     console.log(40)
      //     return 40
      //   } else {
      //     return 200
      //   }
      // }
    }
  }
</script>

<style lang="scss" scoped>
  .textflow {
    width: 9451px;
    height: 198px;
    margin-top: 236px;
    margin-bottom: 300px;
    #marquee-slider {
      .textbox {
        height: 198px;
        .txt {
          color: var(--black, #000);
          font-family: Noto Sans KR;
          font-size: 45px;
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
      height: 198px;
      margin-top: 234px;
      margin-bottom: 400px;
      #marquee-slider {
        .textbox {
          height: 198px;
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
      height: 264px;
      margin-top: 340px;
      margin-bottom: 540px;

      #marquee-slider {
        .textbox {
          width: 430px;
          height: 400px;
          .txt {
            width: 430px;
            font-size: 60px;
          }
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .textflow {
      width: 18897px;
      height: 400px;
      margin-top: 340px;
      margin-bottom: 500px;

      #marquee-slider {
        .textbox {
          margin-right: 300px;
          width: 600px;
          height: 400px;
          .txt {
            width: 600px;
            font-size: 80px;
          }
        }
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .textflow {
      width: 6090px;
      height: 198px;
      margin-top: 150px;

      #marquee-slider {
        .textbox {
          height: 198px;
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
      margin-top: 220px;
      margin-bottom: 249;

      #marquee-slider {
        .textbox {
          height: 198px;
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
      margin-top: 125px;
      margin-bottom: 140px;

      #marquee-slider {
        .textbox {
          width: 200px;
          height: auto;

          .txt {
            width: 200px;
            height: auto;
            font-size: 30px;
          }
        }
      }
    }
  }
</style>

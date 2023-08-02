<template>
  <div class="textflow">
    <vue-marquee-slider id="marquee-slider" :speed="30000" v-if="data.length">
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
        data: []
      }
    },
    computed: {
      ...mapState(['language', 'device'])
    },
    async mounted() {
      await this.init()
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
  //max-width: 768px
  @include tablet {
  }
  //max-width: 374px
  @include mobile {
  }
  @include mobile-small {
  }
</style>

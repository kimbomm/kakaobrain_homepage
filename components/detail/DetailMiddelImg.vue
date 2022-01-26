<template>
  <div class="monthly l-ml-2 gl-7" v-if="isPc || isMob">
    <div class="detail-image">
      <img :src="srcPath" />
    </div>
    <div class="detail-text">{{ data.text }}</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailImg',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    data() {
      return {
        srcPath: null
      }
    },
    computed: {
      isPc() {
        return this.data.Media && window.innerWidth > 768
      },
      isMob() {
        return this.data.MobileMedia && window.innerWidth <= 768
      }
    },
    mounted() {
      this.setImagePath()
      window.addEventListener('resize', this.setImagePath)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setImagePath)
    },
    methods: {
      setImagePath() {
        let path = 'https://kakaobrain.loadingworks.com'

        if (window.innerWidth >= 768) {
          if (this.data.Media) {
            path += this.data.Media.url
          } else if (this.data.MobileMedia) {
            path += this.data.MobileMedia.url
          }
        } else {
          if (this.data.MobileMedia) {
            path += this.data.MobileMedia.url
          } else if (this.data.Media) {
            path += this.data.Media.url
          }
        }
        this.srcPath = path
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    margin-top: 50px;
    margin-bottom: 100px;
    .detail {
      &-image {
        img {
          width: 100%;
        }
      }
      &-text {
        margin-top: 10px;
        line-height: 150%;
        font-size: 12px;
        font-weight: 400;
        color: $gray-5;
      }
    }
  }

  @include pc-large {
    .monthly {
      margin-top: 200px;
      margin-bottom: 200px;
      .detail {
        &-text {
          font-size: 16px;
        }
      }
    }
  }

  @include pc-4k {
    .monthly {
      margin-top: 300px;
      margin-bottom: 300px;
    }
  }

  @include tablet {
    .monthly {
      margin-top: 100px;
      margin-bottom: 100px;
    }
    .gl-7 {
      width: calc(
        calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
      ) !important;
    }
  }
  @include mobile {
    .monthly {
      padding: 0 20px;
    }
    .gl-7 {
      width: 100% !important;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

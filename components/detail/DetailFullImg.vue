<template>
  <div class="monthly" v-if="isPc || isMob">
    <div class="detail-image">
      <img :src="srcPath" />
    </div>
    <div class="detail-text">{{ data.text }}</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailFullImg',
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
        let path = this.$config.baseURL

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
  .monthly {
    margin-bottom: 100px;
    padding: 0 20px;
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
      margin-bottom: 300px;
      .detail {
        &-text {
          font-size: 12px;
        }
      }
    }
  }

  @include tablet {
    .monthly {
      .detail {
        &-text {
          margin-top: 6px;
          font-size: 12px;
        }
      }
    }
  }
  @include mobile {
    .monthly {
      padding: 0;
      .detail {
        &-text {
          padding: 0 20px;
        }
      }
    }
  }
</style>

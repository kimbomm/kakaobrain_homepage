<template>
  <div class="monthly l-ml-2" v-if="isPc || isMob">
    <div class="detail-image gl-7">
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
    computed: {
      isPc() {
        return this.data.Media && window.innerWidth >= 768
      },
      isMob() {
        return this.data.MobileMedia && window.innerWidth < 768
      },
      srcPath() {
        let path = 'https://homeapi.stgkakaobrain.com'
        path =
          window.innerWidth >= 768
            ? path + `${this.data.Media.url}`
            : path + `${this.data.MobileMedia.url}`

        console.log(path)
        return path
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    margin-top: 200px;
    margin-bottom: 300px;
    .detail {
      &-text {
        font-size: 12px;
      }
      &-image {
        img {
          width: 100%;
        }
      }
    }
  }
  @include pc-4k {
    .monthly {
      margin-top: 400px;
      margin-bottom: 500px;
      .detail {
        &-image {
          img {
            width: 100%;
          }
        }
        &-text {
          margin-top: 10px;
          line-height: 150%;
          font-size: 24px;
          font-weight: 400;
          color: $gray-5;
        }
      }
    }
  }
  @include pc-large {
    .monthly {
      margin-top: 300px;
      margin-bottom: 400px;
      .detail {
        &-text {
          font-size: 16px;
        }
      }
    }
  }
  @include tablet {
    .monthly {
      margin-top: 100px;
      margin-bottom: 100px;
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
      margin-top: 110px;
      margin-bottom: 100px;
    }
    .gl-7 {
      width: 100% !important;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

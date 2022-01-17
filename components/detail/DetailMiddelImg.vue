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
    computed: {
      isPc() {
        return this.data.Media && window.innerWidth >= 768
      },
      isMob() {
        return this.data.MobileMedia && window.innerWidth < 768
      },
      srcPath() {
        let path = 'https://kakaobrain.loadingworks.com'
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

  @include pc-4k {
    .monthly {
      margin-top: 300px;
      margin-bottom: 300px;
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
    .gl-7 {
      width: 100% !important;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }

  // -----------------
  // .monthly {
  //   margin-top: 300px;
  //   margin-bottom: 300px;
  //   .detail {
  //     &-image {
  //       img {
  //         width: 100%;
  //       }
  //     }
  //     &-text {
  //       margin-top: 10px;
  //       line-height: 150%;
  //       font-size: 12px;
  //       font-weight: 400;
  //       color: $gray-5;
  //     }
  //   }
  // }
  // @media screen and (max-width: 2560px) {
  //   .monthly {
  //     margin-top: 200px;
  //     margin-bottom: 200px;
  //     .detail {
  //       &-text {
  //         font-size: 16px;
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 1920px) {
  //   .monthly {
  //     margin-top: 50px;
  //     margin-bottom: 100px;
  //     .detail {
  //       &-text {
  //         font-size: 12px;
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 1024px) {
  //   .monthly {
  //     margin-top: 100px;
  //     margin-bottom: 100px;
  //   }
  //   .gl-7 {
  //     width: calc(
  //       calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
  //     ) !important;
  //   }
  // }
  // @media screen and (max-width: 768px) {
  //   .gl-7 {
  //     width: 100% !important;
  //   }
  //   .l-ml-2 {
  //     margin-left: 0px !important;
  //   }
  // }
</style>

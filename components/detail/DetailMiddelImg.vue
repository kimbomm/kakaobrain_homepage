<template>
  <div class="monthly l-ml-2 gl-7">
    <div :class="`detail-image ${type}`">
      <img
        :src="
          srcPath
            ? `https://kakaobrain.loadingworks.com${this.srcPath}`
            : require(`@/assets/images/detail_img_3.png`)
        "
      />
    </div>
    <div class="detail-text">{{ text }}</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailImg',
    props: {
      srcPath: {
        type: String,
        default: '',
        required: false
      },
      text: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: '',
        required: false
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

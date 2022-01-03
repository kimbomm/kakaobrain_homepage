<template>
  <div :class="`monthly ${ml}`">
    <div class="detail gl-5">
      <div class="detail-subTit">{{ text }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DtaileTitle',
    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: '',
        required: false
      },
      ml: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  // .detail {
  //   &-subTit {
  //     font-size: 40px;
  //   }
  // }

  .detail {
    margin-bottom: 60px;
    &-subTit {
      line-height: 130%;
      font-size: 40px;
      font-weight: 900;
    }
  }

  @include pc-4k {
    .detail {
      &-subTit {
        font-size: 78px;
      }
    }
  }

  @include pc-large {
    .detail {
      &-subTit {
        font-size: 52px;
      }
    }
  }

  @include tablet {
    .detail {
      // margin: 0 auto 60px !important;
      margin-bottom: 60px;
      &-subTit {
        font-size: 32px;
      }
    }
    .gl-5 {
      width: calc(
        calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
      ) !important;
    }
    .l-ml-3 {
      margin-left: calc(
        calc((100vw - 20px * 11) / 10) * 2 + 20px * 2
      ) !important;
    }
  }

  @include mobile {
    .gl-5 {
      width: 100% !important;
    }
    .l-ml-3 {
      margin: 0 20px !important;
    }
  }

  //---------------------------------------------------

  // .detail {
  //   margin-bottom: 60px;
  //   &-subTit {
  //     line-height: 130%;
  //     font-size: 78px;
  //     font-weight: 900;
  //   }
  // }
  // @media screen and (max-width: 2560px) {
  //   .detail {
  //     &-subTit {
  //       font-size: 52px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 1920px) {
  //   .detail {
  //     &-subTit {
  //       font-size: 40px;
  //     }
  //   }
  // }
  // @media screen and (max-width: 1024px) {
  //   .detail {
  //     // margin: 0 auto 60px !important;
  //     margin-bottom: 60px;
  //     &-subTit {
  //       font-size: 32px;
  //     }
  //   }
  //   .gl-5 {
  //     width: calc(
  //       calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
  //     ) !important;
  //   }
  //   .l-ml-3 {
  //     margin-left: calc(
  //       calc((100vw - 20px * 11) / 10) * 2 + 20px * 2
  //     ) !important;
  //   }
  // }
  // @media screen and (max-width: 768px) {
  //   .gl-5 {
  //     width: 100% !important;
  //   }
  //   .l-ml-3 {
  //     margin: 0 20px !important;
  //   }
  // }
</style>

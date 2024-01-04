<template>
  <div class="about-title l-ml-2">
    <div class="about-con-tit3 gl-6" style="position: relative">
      <div v-html="data.title" class="tit"></div>
      <div class="hundra_icon">
        <img src="@/assets/images/100_icon.png" />
      </div>
    </div>
  </div>
</template>

<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutConTit3',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    padding: 0 20px;
    .about-con-tit3 {
      &.gl-6 {
        width: getWidth(6) !important;
      }
      display: flex;
      justify-content: space-between;

      .tit {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 900;
        font-size: 90px;
        line-height: 120%;
      }
      .hundra_icon {
        display: flex;

        img {
          width: auto;
          height: 143px;
        }
      }
    }
  }

  @include pc-large {
    .about-title {
      .about-con-tit3 {
        &.gl-6 {
          width: getWidth(6) !important;
        }

        .tit {
          font-size: 120px;
          height: auto;
        }

        .hundra_icon {
          img {
            width: auto;
            height: 150px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .about-title {
      .about-con-tit3 {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        .tit {
          font-size: 180px;
          height: auto;
        }

        .hundra_icon {
          img {
            width: auto;
            height: 225px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .about-title {
      .about-con-tit3 {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        .hundra_icon {
          img {
            width: auto;
            height: 80px;
          }
        }

        .tit {
          font-size: 80px;
        }
      }
    }
  }

  @include tablet {
    .about-title {
      .about-con-tit3 {
        width: fit-content !important;

        &.gl-6 {
          width: getWidth(6) !important;
        }

        .tit {
          font-size: 46px;
          height: auto;
        }

        .hundra_icon {
          img {
            width: auto;
            height: 57px;
          }
        }
      }
    }
  }

  @include mobile {
    .about-title {
      &.l-ml-2 {
        margin-left: getMargin(1) !important;
      }
      .about-con-tit3 {
        &.gl-6 {
          width: getWidth(7) !important;
        }

        .tit {
          font-size: 46px;
          height: auto;
        }

        .hundra_icon {
          img {
            width: auto;
            height: 57px;
          }
        }
      }
    }
  }

  @include mobile-small {
    .about-title {
      &.l-ml-2 {
        margin-left: getMargin(0) !important;
      }
      .about-con-tit3 {
        &.gl-6 {
          width: getWidth(10) !important;
        }

        .tit {
          font-size: 28px;
          height: auto;
        }
        .hundra_icon {
          img {
            width: auto;
            height: 34px;
          }
        }
      }
    }
  }
</style>

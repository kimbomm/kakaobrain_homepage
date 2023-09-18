<template>
  <div class="about-title l-ml-2">
    <div class="about-con-tit2 gl-6" style="position: relative">
      <div v-html="data.title" class="tit"></div>
      <div class="challenge_icon">
        <img src="@/assets/images/challenge_icon.png" />
      </div>
    </div>
  </div>
</template>

<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutConTit2',
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

    .about-con-tit2 {
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
      .challenge_icon {
        display: flex;

        align-items: flex-end;

        img {
          width: auto;
          height: 139px;
        }
      }
    }
  }

  @include pc-large {
    .about-title {
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(6) !important;
        }

        .tit {
          font-size: 120px;
          height: auto;
        }

        .challenge_icon {
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
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        .tit {
          font-size: 180px;
          height: auto;
        }

        .challenge_icon {
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
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        .challenge_icon {
          img {
            width: auto;
            height: 80px;
          }
        }

        .tit {
          font-size: 80px;
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  @include tablet {
    .about-title {
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        .tit {
          font-size: 46px;
          height: auto;
        }
        .challenge_icon {
          img {
            width: auto;
            height: 60px;
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
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(7) !important;
        }

        .tit {
          font-size: 46px;
          height: auto;
        }
        .challenge_icon {
          img {
            width: auto;
            height: 60px;
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
      .about-con-tit2 {
        &.gl-6 {
          width: getWidth(10) !important;
        }

        .tit {
          font-size: 28px;
          height: auto;
        }

        .challenge_icon {
          img {
            width: auto;
            height: 34px;
          }
        }
      }
    }
  }
</style>

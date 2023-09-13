<template>
  <div class="about-title">
    <div class="title-box gl-6 l-ml-2" style="position: relative">
      <div
        v-html="data.title"
        class="tit"
        style="display: flex; flex-direction: column"
      />
      <div class="easter-egg">
        <img src="@/assets/images/obj1.png" />
      </div>
    </div>
  </div>
</template>
<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutTitle',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    data() {
      return {}
    },
    components: {
      EasterEgg
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    padding: 0 20px 0 20px;
    width: fit-content !important;

    .title-box {
      position: relative;
      &.gl-6 {
        width: fit-content !important;
      }

      .tit {
        line-height: 90%;
        font-size: 200px;
        font-weight: 100;
      }
      .easter-egg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        img {
          width: auto;
          height: 147px;
        }
      }
    }
  }

  @include pc-large {
    .about-title {
      .title-box {
        &.gl-6 {
          //width: getWidth(8) !important;
          width: fit-content !important;
        }
        .easter-egg {
          img {
            width: auto;
            height: 195px;
          }
        }
        .tit {
          font-size: 267px;
        }
      }
    }
  }
  @include pc-4k {
    .about-title {
      .title-box {
        &.gl-6 {
          //width: getWidth(6) !important;
          width: fit-content !important;
        }
        .easter-egg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-45%, -50%);

          img {
            width: auto;
            height: 292px;
          }
        }
        .tit {
          font-size: 400px;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) and (max-width: 1500px) {
    .about-title {
      margin-top: 50px;
      .title-box {
        &.gl-6 {
          //width: fit-content !important;

          .easter-egg {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-25%, -50%);

            img {
              width: 50%;
              height: 50%;
            }
          }

          .tit {
            font-size: 106px;
            display: flex;
            justify-content: center;
          }
        }
      }
    }
  }
  @include tablet {
    .about-title {
      .title-box {
        width: fit-content !important;

        .easter-egg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-28%, -50%);

          img {
            width: 60%;
            height: 60%;
          }
        }
        .tit {
          font-size: 106px;
        }
      }
    }
  }
  @include mobile {
    .about-title {
      margin-top: 0px;
      .title-box {
        &.gl-6 {
          width: fit-content !important;
        }

        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }
        .tit {
          font-size: 80px;
        }
        .easter-egg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-25%, -50%);

          img {
            width: 50%;
            height: 50%;
          }
        }
      }
    }
  }

  @include mobile-small {
    .about-title {
      min-width: 360px;
      .title-box {
        &.gl-6 {
          //width: 100% !important;
          // display: inline-block
          width: fit-content !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(0) !important;
        }

        .tit {
          font-size: 50px;
          height: auto;
        }
        .easter-egg {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-25%, -50%);

          img {
            width: 50%;
            height: 50%;
          }
        }
      }
    }
  }
</style>

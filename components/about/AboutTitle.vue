<template>
  <div class="about-title l-ml-2">
    <div class="title-box gl-6" style="position: relative">
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
    padding: 0 20px;
    .title-box {
      position: relative;
      width: fit-content !important;
      &.gl-6 {
        //width: getWidth(8) !important;
        width: fit-content !important;
      }
      .easter-egg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .tit {
      line-height: 90%;
      font-size: 200px;
      font-weight: 100;
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
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-45%, -50%);

          img {
            width: 110%;
            height: 110%;
          }
        }
      }
      .tit {
        font-size: 267px;
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
          left: 390px;
          width: 110px;
          height: 110px;

          img {
            width: 100%;
            height: 100%;
          }
        }
        .tit {
          font-size: 400px;
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .about-title {
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

        max-width: 1024px;

        .tit {
          font-size: 16px;
          display: flex;
          justify-content: center;
        }
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
      }
    }
  }
  @include mobile {
    .about-title {
      min-width: 360px;
      .title-box {
        &.gl-6 {
          //width: 100% !important;
          // display: inline-block
          width: fit-content !important;

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

    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

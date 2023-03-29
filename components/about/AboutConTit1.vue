<template>
  <div class="about-title l-ml-2">
    <div class="about-con-tit1 gl-6" style="position: relative">
      <div v-html="data.title" class="tit"></div>
      <div class="focus_icon">
        <img src="@/assets/images/focus_icon.png" />
      </div>
    </div>
  </div>
</template>

<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutConTit1',
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
    .about-con-tit1 {
      position: relative;
      &.gl-6 {
        width: getWidth(8) !important;
        //width: fit-content !important;
      }
    }
    .tit {
      font-family: 'Inter';
      font-style: normal;
      font-weight: 900;
      font-size: 90px;
      line-height: 120%;
      width: 100%;
    }
    .focus_icon {
      // position: absolute;
      // height: 150px;
      // width: auto;
      // background-color: red;
      // //transform: translateY(-50%);
      // left: 61%;
      // top: 30%;

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 35%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 100%;
      img {
        // position: static;
        transform: translate(170%, 50%);
        width: auto;
        height: 143px;
      }
    }
  }

  @include pc-large {
    .about-title {
      .about-con-tit1 {
        &.gl-6 {
          //width: getWidth(8) !important;
          width: fit-content !important;

          .tit {
            font-size: 120px;
            height: auto;
          }

          .focus_icon {
            position: absolute;
            left: 170%;
            top: 50%;
            transform: translate(-25%, -50%);

            img {
              width: auto;
              height: 150px;
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .about-title {
      .about-con-tit1 {
        &.gl-6 {
          //width: getWidth(6) !important;
          width: fit-content !important;

          .tit {
            font-size: 180px;
            height: auto;
          }

          .focus_icon {
            position: absolute;
            left: 185%;
            top: 50%;
            transform: translate(-25%, -50%);

            img {
              width: auto;
              height: 225px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1500px) {
    .about-title {
      .about-con-tit1 {
        &.gl-6 {
          width: fit-content !important;
          .focus_icon {
            position: absolute;
            left: 200%;
            top: 50%;
            transform: translate(-25%, -50%);

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
  }
  @include tablet {
    .about-title {
      .about-con-tit1 {
        width: fit-content !important;

        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 46px;
            height: auto;
          }
          .focus_icon {
            position: absolute;
            left: 200%;
            top: 50%;
            transform: translate(-25%, -50%);

            img {
              width: auto;
              height: 60px;
            }
          }
        }
      }
    }
  }
  @include mobile {
    .about-title {
      .about-con-tit1 {
        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 28px;
            height: auto;
          }

          .focus_icon {
            position: absolute;
            left: 170%;
            top: -110%;
            transform: translate(-25%, -50%);

            img {
              width: auto;
              height: 34px;
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

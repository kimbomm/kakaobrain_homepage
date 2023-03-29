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
    }
    .hundra_icon {
      // position: absolute;
      // height: 150px;
      // width: auto;
      // background-color: red;
      // //transform: translateY(-50%);
      // left: 63%;
      // top: -40%;

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: -30%;
      left: 3%;
      transform: translateY(-50%);
      width: 100%;
      height: 100%;
      img {
        position: static;
        transform: translate(140%, 50%);
        width: auto;
        height: 143px;
      }
    }
  }

  @include pc-large {
    .about-title {
      .about-con-tit3 {
        &.gl-6 {
          //width: getWidth(8) !important;
          width: fit-content !important;
        }

        .tit {
          font-size: 120px;
          height: auto;
        }

        .hundra_icon {
          position: absolute;
          left: 300%;
          top: 0%;
          transform: translate(-25%, -50%);

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
          //width: getWidth(6) !important;
          width: fit-content !important;
        }
        .tit {
          font-size: 180px;
          height: auto;
        }

        .hundra_icon {
          position: absolute;
          left: 300%;
          top: 0%;
          transform: translate(-25%, -50%);

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
          width: fit-content !important;
          .hundra_icon {
            position: absolute;
            left: 320%;
            top: 0%;
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
      .about-con-tit3 {
        width: fit-content !important;

        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 46px;
            height: auto;
          }

          .hundra_icon {
            position: absolute;
            left: 340%;
            top: 0%;
            transform: translate(-25%, -50%);

            img {
              width: auto;
              height: 57px;
            }
          }
        }
      }
    }
  }
  @include mobile {
    .about-title {
      .about-con-tit3 {
        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 28px;
            height: auto;
          }
          .hundra_icon {
            position: absolute;
            left: 300%;
            top: 0%;
            transform: translate(-50%, -50%);

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

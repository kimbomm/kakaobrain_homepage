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
    .challenge_icon {
      // position: absolute;
      // height: 150px;
      // width: auto;
      // background-color: red;
      // //transform: translateY(-50%);
      // left: 61%;
      // top: 53%;

      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 55%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 100%;
      img {
        position: static;
        transform: translate(170%, 50%);
        width: auto;
        height: 139px;
      }
    }
  }

  @include pc-large {
    .about-title {
      .about-con-tit2 {
        &.gl-6 {
          //width: getWidth(8) !important;
          width: fit-content !important;
          .tit {
            font-size: 120px;
            height: auto;
          }

          .challenge_icon {
            position: absolute;
            left: 115%;
            top: 65%;
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
      .about-con-tit2 {
        &.gl-6 {
          //width: getWidth(6) !important;
          width: fit-content !important;
          .tit {
            font-size: 180px;
            height: auto;
          }

          .challenge_icon {
            position: absolute;
            left: 117%;
            top: 65%;
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
      .about-con-tit2 {
        &.gl-6 {
          width: fit-content !important;
          .challenge_icon {
            position: absolute;
            left: 125%;
            top: 70%;
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
      .about-con-tit2 {
        width: fit-content !important;

        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 46px;
            height: auto;
          }
          .challenge_icon {
            position: absolute;
            left: 130%;
            top: 70%;
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
      .about-con-tit2 {
        &.gl-6 {
          //width: 100% !important;
          //display: inline-block
          width: fit-content !important;

          .tit {
            font-size: 28px;
            height: auto;
          }

          .challenge_icon {
            position: absolute;
            left: 100%;
            top: 70%;
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

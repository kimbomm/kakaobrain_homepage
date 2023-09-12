<template>
  <div class="about-full-con-b">
    <div class="full-con">
      <img src="@/assets/images/about_uq_bg_2.png" />
      <div class="inner">
        <div class="con-tit gl-6 l-ml-2">
          <div class="condata" v-html="data.title"></div>
        </div>

        <div class="con-item">
          <div v-html="data.content"></div>
        </div>
      </div>
      <div class="container">
        <div class="imgbox">
          <img src="@/assets/images/about_impactful answer.png" />
        </div>
        <div class="imgbox2">
          <img src="@/assets/images/about_impactful answer2.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutFullConB',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-b {
    .full-con {
      position: relative;
      width: 100%;
      height: auto;
      min-height: 1689px;
      object-fit: cover;
      //padding: 400px 20px 400px;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;

        object-fit: cover;
      }

      .inner {
        position: relative;
        color: $gray-0;

        padding-top: 400px;
      }
      .con {
        &-tit {
          line-height: 120%;
          font-weight: 900;
          font-size: 90px;
          width: fit-content !important;
        }
        &-item {
          display: flex;
          justify-content: center;
          width: fit-content !important;
          padding-top: 100px;
          font-family: 'Noto Sans KR';
          margin-left: getMargin(3);
          margin-right: getMargin(2);
          font-size: 30px;
          line-height: 150%;
        }
      }
      .container {
        padding-top: 178px;
        padding-bottom: 400px;
        width: 100%;

        .imgbox {
          width: 100%;
          height: 100%;

          img {
            position: static;
            transform: translate(0, 0);
            width: 100%;
            max-height: 950px;
          }
        }
        .imgbox2 {
          display: none;
        }
      }
    }
  }

  @include pc-large {
    .about-full-con-b {
      .full-con {
        min-height: 2560px;
        // padding: 530px 20px 533px;
        .con {
          &-tit {
            margin-bottom: 150px;
            font-size: 120px;
          }
          &-item {
            font-size: 40px;
          }
        }
        .container {
          width: 100%;
          .imgbox {
            width: 100%;
            height: 100%;

            img {
              position: static;
              transform: translate(0, 0);
              width: 100%;
              max-height: 950px;
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .about-full-con-b {
      .full-con {
        min-height: 3409px;
        //padding: 800px 20px 845px;
        .con {
          &-tit {
            margin-bottom: 260px;
            font-size: 180px;
          }
          &-item {
            font-size: 40px;
          }
        }

        .container {
          width: 100%;
          .imgbox {
            width: 100%;
            height: 100%;

            img {
              position: static;
              transform: translate(0, 0);
              width: 100%;
              max-height: 1950px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .about-full-con-b {
      .full-con {
        .con {
          &-tit {
            font-size: 66px;
          }
          &-item {
            font-size: 30px;
          }
        }
        .item {
          &-tit {
            font-size: 35px;
          }
          &-sub-tit {
            font-size: 20px;
          }
          &-txt {
            font-size: 14px;
          }
        }
      }
    }
  }
  @include tablet {
    .about-full-con-b {
      .full-con {
        min-height: 923px;
        padding: 0px 0px 0px;

        .inner {
          padding-top: 140px;
          width: 100%;
          height: auto;
          .con-tit {
            font-size: 46px;
            width: fit-content !important;
            max-width: 683px;
            margin-bottom: 50px;
          }
          .con-item {
            font-size: 12px;
            padding-top: 0;
          }
        }
        // .item {
        //   &.gl-2 {
        //     width: getWidth(3) !important;
        //   }
        //   &-tit {
        //     font-size: 30px;
        //     margin-bottom: 70px;
        //   }
        //   &-txt-box {
        //     &:not(:last-child) {
        //       margin-bottom: 40px;
        //     }
        //   }
        //   &-sub-tit {
        //     font-size: 20px;
        //     margin-bottom: 10px;
        //   }
        //   &-txt {
        //     font-size: 14px;
        //   }
        // }
        // .container {
        //   .imgbox {
        //     display: none;
        //   }

        //   .imgbox2 {
        //     display: block;
        //     // position: absolute;
        //     top: 0px;

        //     img {
        //       height: 250px;
        //       width: auto;
        //       margin-top: 0px;
        //     }
        //   }
        // }

        .container {
          padding-top: 95px;
          padding-bottom: 150px;
          width: 100%;

          .imgbox {
            width: 100%;
            height: 100%;

            img {
              position: static;
              transform: translate(0, 0);
              width: 100%;
              max-height: 950px;
            }
          }
          .imgbox2 {
            display: none;
          }
        }
      }
    }
  }
  @include mobile {
    .about-full-con-b {
      .full-con {
        height: 100%;
        width: auto;
        padding: 0px 20px 111px;

        .inner {
          padding-top: 100px;

          .con {
            &-tit {
              font-size: 28px;
              margin-left: 0px !important;
              line-height: 120%;
              font-family: 'Noto Sans KR';

              // &.l-ml-2 {
              //   margin-left: 0px !important;
              //   width: getWidth(2) !important;
              // }
              // &.gl-6 {
              //   width: 100% !important;
              // }
            }
            &-item {
              flex-direction: column;
              padding-top: 0px;
              margin-left: getMargin(1) !important;
              margin-right: getMargin(0) !important;
              font-size: 14px;

              // &.l-ml-2 {
              //   margin-left: getMargin(1) !important;
              // }
            }
          }
        }
        // .item {
        //   &:not(:last-child) {
        //     margin-bottom: 100px;
        //   }
        //   &:last-child {
        //     margin-left: 0;
        //   }
        //   &.gl-2 {
        //     width: getWidth(9) !important;
        //   }
        //   &-tit {
        //     font-size: 26px;
        //     margin-bottom: 50px;
        //   }
        //   &-txt-box {
        //     &:not(:last-child) {
        //       margin-bottom: 40px;
        //     }
        //   }
        //   &-sub-tit {
        //     font-size: 18px;
        //     margin-bottom: 12px;
        //   }
        //   &-txt {
        //     font-size: 14px;
        //   }
        // }

        .container {
          margin-top: 111px;
          width: 100%;
          padding-bottom: 0;

          .imgbox {
            display: none;
          }

          .imgbox2 {
            display: block;
            //position: absolute;

            img {
              position: absolute;
              height: auto;
              width: 100%;
              padding-bottom: 0px;
            }
          }
        }
      }
    }
  }
</style>

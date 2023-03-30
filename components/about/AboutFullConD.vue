<template>
  <div class="about-full-con-d">
    <div class="full-con">
      <img src="@/assets/images/about_cul_bg_1.png" />
      <div class="inner">
        <div class="tit gl-8 l-ml-2">
          <div v-html="data.title"></div>
        </div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt">
            <div class="txt_subtitle" v-html="data.subtitle"></div>
            <div v-html="data.text"></div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="nav">
          <div class="column">
            <div class="rect">
              <p class="p-title">Focus on impact</p>
            </div>
            <div class="rect">
              <p class="p-title">Challenge<br />Confidence<br />Commitment</p>
            </div>
            <div class="rect">
              <p class="p-title">100:0</p>
            </div>
          </div>
          <div class="imgbox mNone">
            <img class="rect_1" src="@/assets/images/focus_icon2.png" />
            <img class="rect_2" src="@/assets/images/challenge_icon2.png" />
            <img class="rect_3" src="@/assets/images/100_icon2.png" />
          </div>
          <!-- <div class="imgbox2">
            <img class="rect_3" src="@/assets/images/diacritic-1.png" />
            <img class="rect_4" src="@/assets/images/diacritic-4.png" />
            <img class="rect_5" src="@/assets/images/diacritic-5.png" />
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutFullConD',
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

  .about-full-con-d {
    .full-con {
      position: relative;
      width: 100%;
      min-height: 1827px;
      padding: 400px 0;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      //
      .inner {
        position: relative;
        color: $gray-0;
        .tit {
          margin-bottom: 100px;
          padding: 0 20px;
          line-height: 120%;
          font-size: 90px;
          font-weight: 900;
        }
        .text-box {
          margin-bottom: 200px;
          padding: 0 20px;

          .txt_subtitle {
            font-size: 32px;
          }

          .txt {
            font-size: 22px;
            line-height: 150%;

            &:not(:last-child) {
              margin-bottom: 40px;
            }
          }
        }
        // .material {
        //   &-box {
        //     display: flex;
        //     justify-content: space-between;
        //     align-items: center;
        //   }
        //   &-item {
        //     position: relative;
        //     width: 280px;
        //     height: 280px;
        //     border: 2px solid $gray-0;
        //     border-radius: 50%;
        //     &:nth-child(2) {
        //       background-color: $gray-0;
        //       color: $gray-9;
        //     }
        //     .l-line {
        //       position: absolute;
        //       left: -120px;
        //       top: 50%;
        //       width: 120px;
        //       height: 2px;
        //       background-color: $gray-0;
        //       &::before {
        //         content: '';
        //         position: absolute;
        //         left: 0;
        //         top: 50%;
        //         transform: translate(-50%, -50%);
        //         width: 0;
        //         height: 0;
        //         border-top: 10px solid transparent;
        //         border-bottom: 10px solid transparent;
        //         border-right: 10px solid $gray-0;
        //       }
        //     }
        //     .r-line {
        //       position: absolute;
        //       right: -120px;
        //       top: 50%;
        //       width: 120px;
        //       height: 2px;
        //       background-color: $gray-0;
        //       &::before {
        //         content: '';
        //         position: absolute;
        //         right: 0;
        //         top: 50%;
        //         transform: translate(0, -50%);
        //         width: 0;
        //         height: 0;
        //         border-top: 10px solid transparent;
        //         border-bottom: 10px solid transparent;
        //         border-left: 10px solid $gray-0;
        //       }
        //     }
        //   }
        //   &-text {
        //     position: absolute;
        //     left: 50%;
        //     top: 50%;
        //     text-align: center;
        //     transform: translate(-50%, -50%);
        //     .tit {
        //       font-size: 20px;
        //       font-weight: 900;
        //       line-height: 110%;
        //       margin-bottom: 6px;
        //     }
        //     .txt {
        //       font-size: 14px;
        //       line-height: 120%;
        //     }
        //   }
        // }
      }
      .container {
        margin-top: 200px;
        .nav {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
          width: 100%;
          max-width: 1120px;
          min-width: 782px;
          margin: 0 auto;

          // top: 200px;
          // gap: 90px 60px;

          .rect {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: calc((100% - 140px) / 3);
            width: 280px;
            height: 280px;
            border-radius: 50%;
            border: 2px solid #ff5000;
            &:nth-child(2) {
              border: 2px solid #00ffd2;
            }
            &:nth-child(3) {
              border: 2px solid #ffc600;
            }

            .p-title {
              font-size: 20px;
              font-weight: 900;
              text-align: center;
              color: white;
            }
          }
        }
        .column {
          display: flex;
          justify-content: space-between;
          width: 100%;
        }
      }
      .imgbox {
        display: block;
        .rect_1 {
          position: absolute;
          height: 96px;
          width: auto;
          //transform: translateY(-50%);
          left: 23%;
          top: 7%;
        }
        .rect_2 {
          position: absolute;
          height: 88px;
          width: auto;
          //transform: translateY(-50%);
          left: 59%;
          top: 77%;
        }
        .rect_3 {
          position: absolute;
          height: 85px;
          width: auto;
          //transform: translateY(-50%);
          left: 83%;
          top: 5%;
        }
      }
      .imgbox2 {
        display: none;
      }
    }
  }

  @include pc-large {
    .about-full-con-d {
      .full-con {
        min-height: 2389px;
        padding: 530px 0;
        .inner {
          .tit {
            margin-bottom: 130px;
            font-size: 120px;
            &.gl-8 {
              width: getWidth(8);
            }
          }
          .text-box {
            margin-bottom: 220px;

            .txt_subtitle {
              font-size: 40px;
            }
            .txt {
              font-size: 30px;
              &:not(:last-child) {
                margin-bottom: 30px;
              }
            }
            &.gl-6 {
              width: getWidth(6);
            }
          }
          // .material {
          //   &-item {
          //     width: 376px;
          //     height: 376px;
          //     .l-line {
          //       left: -161px;
          //       width: 161px;
          //     }
          //     .r-line {
          //       right: -161px;
          //       width: 161px;
          //     }
          //   }
          //   &-text {
          //     .tit {
          //       font-size: 30px;
          //       margin-bottom: 6px;
          //     }
          //     .txt {
          //       font-size: 18px;
          //     }
          //   }
          // }
        }
        .container {
          margin-top: 200px;

          .nav {
            width: 100%;
            max-width: 1500px;
            min-width: 782px;
            margin: 0 auto;

            // top: 200px;
            // gap: 90px 60px;

            .rect {
              width: calc((100% - 188px) / 3);
              width: 376px;
              height: 376px;

              .p-title {
                font-size: 33px;
              }
            }
          }
          .column {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
        .imgbox {
          display: block;
          .rect_1 {
            position: absolute;
            height: 106px;

            left: 23%;
            top: 7%;
          }
          .rect_2 {
            position: absolute;
            height: 102px;
            width: auto;

            left: 59%;
            top: 77%;
          }
          .rect_3 {
            position: absolute;
            height: 105px;
            width: auto;
            left: 84%;
            top: 7%;
          }
        }
      }
    }
  }

  @include pc-4k {
    .about-full-con-d {
      .full-con {
        min-height: 3709px;
        padding: 800px 0;
        .inner {
          .tit {
            margin-bottom: 200px;
            font-size: 180px;
            &.gl-8 {
              width: getWidth(6);
            }
          }
          .text-box {
            margin-bottom: 330px;

            .txt_subtitle {
              font-size: 60px;
            }
            .txt {
              font-size: 46px;
              &:not(:last-child) {
                margin-bottom: 40px;
              }
            }
            &.gl-6 {
              width: getWidth(5);
            }
          }
          // .material {
          //   &-item {
          //     width: 500px;
          //     height: 500px;
          //     .l-line {
          //       left: -284px;
          //       width: 284px;
          //     }
          //     .r-line {
          //       right: -284px;
          //       width: 284px;
          //     }
          //   }
          //   &-text {
          //     .tit {
          //       font-size: 30px;
          //       margin-bottom: 6px;
          //     }
          //     .txt {
          //       font-size: 18px;
          //     }
          //   }
          // }
        }
        .container {
          margin-top: 340px;

          .nav {
            width: 100%;
            max-width: 2260px;
            min-width: 782px;
            margin: 0 auto;

            // top: 200px;
            // gap: 90px 60px;

            .rect {
              width: calc((100% - 141px) / 3);
              width: 664px;
              height: 664px;

              .p-title {
                font-size: 46px;
              }
            }
          }
          .column {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
        .imgbox {
          display: block;
          .rect_1 {
            position: absolute;
            height: 192px;
            left: 28%;
            top: 7%;
          }
          .rect_2 {
            position: absolute;
            height: 186px;
            width: auto;
            left: 61%;
            top: 77%;
          }
          .rect_3 {
            position: absolute;
            height: 191px;
            width: auto;
            left: 78%;
            top: 3%;
          }
        }
      }
    }
  }

  @media screen and (min-width: 4400px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 664px;
              height: 664px;
              .l-line {
                left: -284px;
                width: 284px;
              }
              .r-line {
                right: -284px;
                width: 284px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 1900px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 230px;
              height: 230px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1650px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 180px;
              height: 180px;
              .l-line {
                left: -80px;
                width: 80px;
              }
              .r-line {
                right: -80px;
                width: 80px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .tit {
            font-size: 60px;
          }
          .text-box {
            .txt {
              font-size: 20px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 150px;
              height: 150px;
              .l-line {
                left: -62px;
                width: 62px;
              }
              .r-line {
                right: -62px;
                width: 62px;
              }
            }
          }
        }
      }
    }
  }
  @include tablet {
    .about-full-con-d {
      .full-con {
        min-height: 1070px;
        padding: 200px 0px;
        .inner {
          .tit {
            margin-bottom: 50px;
            font-size: 46px;
          }

          .text-box {
            margin-bottom: 100px;
            .txt {
              .txt_subtitle {
                font-size: 16px;
              }
              font-size: 16px;
              &:not(:last-child) {
                margin-bottom: 20px;
              }
            }
          }
          // .material {
          //   &-item {
          //     width: 146px;
          //     height: 146px;
          //     .l-line {
          //       left: -62px;
          //       width: 62px;
          //       &::before {
          //         content: '';
          //         border-top: 7px solid transparent;
          //         border-bottom: 7px solid transparent;
          //         border-right: 7px solid $gray-0;
          //       }
          //     }
          //     .r-line {
          //       right: -62px;
          //       width: 62px;
          //       &::before {
          //         content: '';
          //         border-top: 7px solid transparent;
          //         border-bottom: 7px solid transparent;
          //         border-left: 7px solid $gray-0;
          //       }
          //     }
          //   }
          //   &-text {
          //     .tit {
          //       font-size: 15px;
          //       margin-bottom: 0px;
          //     }
          //     .txt {
          //       display: none;
          //     }
          //   }
          // }
        }
        .container {
          margin-top: 100px;

          .nav {
            width: 100%;
            max-width: 580px;
            min-width: 560px;
            margin: 0 auto;

            // top: 200px;
            // gap: 90px 60px;

            .rect {
              width: calc((100% - 18px) / 3);
              margin-left: 18px;
              width: 182px;
              height: 182px;

              .p-title {
                font-size: 15px;
              }
            }
          }
          .column {
            display: flex;
            justify-content: space-between;
            width: 100%;
          }
        }
        .imgbox {
          display: block;
          .rect_1 {
            position: absolute;
            height: 58px;
            left: 28%;
            top: 7%;
          }
          .rect_2 {
            position: absolute;
            height: 56px;
            width: auto;
            left: 61%;
            top: 77%;
          }
          .rect_3 {
            position: absolute;
            height: 58px;
            width: auto;
            left: 78%;
            top: 3%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 120px;
              height: 120px;
              .l-line {
                left: -50px;
                width: 50px;
              }
              .r-line {
                right: -50px;
                width: 50px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 850px) {
    .about-full-con-d {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 100px;
              height: 100px;
              .l-line {
                left: -40px;
                width: 40px;
              }
              .r-line {
                right: -40px;
                width: 40px;
              }
            }
          }
        }
      }
    }
  }

  @include mobile {
    .about-full-con-d {
      .full-con {
        min-height: 1400px;
        padding: 100px 0px;
        .inner {
          .tit {
            &.gl-8 {
              width: 100% !important;
            }
            margin-bottom: 30px;
            font-size: 28px;
            &.l-ml-2 {
              margin-left: 0 !important;
            }
          }
          .text-box {
            &.gl-6 {
              width: getWidth(9) !important;
            }
            &.l-ml-3 {
              margin-left: getMargin(1) !important;
            }
            margin-bottom: 100px;
            .txt {
              font-size: 16px;
              &:not(:last-child) {
                margin-bottom: 20px;
              }
            }
          }
          // .material {
          //   &.l-ml-2 {
          //     margin: 0 auto !important;
          //   }
          //   &-box {
          //     flex-direction: column;
          //   }
          //   &-item {
          //     width: 146px;
          //     height: 146px;
          //     &:nth-child(2) {
          //       margin: 42px 0;
          //     }
          //     .l-line {
          //       left: 50%;
          //       top: -32px;
          //       width: 1px;
          //       height: 32px;
          //       &::before {
          //         left: 50%;
          //         top: -4px;
          //         border-bottom: 5px solid $gray-0;
          //         border-left: 5px solid transparent;
          //         border-right: 5px solid transparent;
          //       }
          //     }
          //     .r-line {
          //       position: absolute;
          //       left: 50%;
          //       top: auto;
          //       // bottom:0px;
          //       bottom: -32px;
          //       width: 1px;
          //       height: 32px;
          //       &::before {
          //         content: '';
          //         position: absolute;
          //         left: auto;
          //         right: auto;
          //         top: auto;
          //         bottom: -12px;
          //         transform: translate(-50%, 0);
          //         border-top: 5px solid $gray-0;
          //         border-left: 5px solid transparent;
          //         border-right: 5px solid transparent;
          //       }
          //     }
          //   }
          //   &-text {
          //     .tit {
          //       font-size: 15px;
          //       margin: 0;
          //     }
          //   }
          // }
        }
        .container {
          margin-top: 60px;

          .nav {
            // width: 100%;
            // max-width: 560px;
            // min-width: 560px;
            // margin: 0 auto;

            // top: 200px;
            // gap: 90px 60px;

            .column {
              display: flex;
              flex-direction: column;
              //justify-content: center;
              align-items: center;
              height: auto;
              width: 360px;
              .rect {
                //width: calc((100% - 18px) / 3);
                width: 182px;
                height: 182px;
                display: flex;
                justify-content: center;
                margin-bottom: 18px;
                .p-title {
                  font-size: 15px;
                }
              }
            }
          }
        }
        .imgbox {
          display: block;
          .rect_1 {
            position: absolute;
            height: 58px;
            left: 20%;
            top: 5%;
          }
          .rect_2 {
            position: absolute;
            height: 56px;
            width: auto;
            left: 20%;
            top: 40%;
          }
          .rect_3 {
            position: absolute;
            height: 58px;
            width: auto;
            left: 20%;
            top: 72%;
          }
        }
      }
    }
  }
</style>

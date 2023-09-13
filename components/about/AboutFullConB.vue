<template>
  <div class="about-full-con-b">
    <div class="full-con">
      <div class="inner">
        <div class="con-tit gl-6 l-ml-2">
          <div class="condata" v-html="data.title"></div>
        </div>

        <div class="con-item">
          <div v-html="data.content"></div>
        </div>
      </div>
      <div class="container">
        <div class="imgbox gl-10">
          <img src="@/assets/images/uq_image.svg" />
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

      background-image: url('@/assets/images/about_uq_bg_2.png');
      background-size: cover;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      //padding: 400px 20px 400px;
      img {
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
        margin-top: 150px;
        .imgbox {
          width: 100%;
          height: 100%;

          img {
            position: static;
            transform: translate(0, 0);
            width: 100%;
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
        min-height: 2851px;
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
          margin-top: 200px;
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
        min-height: 3809px;
        .inner {
          position: relative;
          color: $gray-0;

          padding-top: 600px;
        }
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
      margin-bottom: 200px;
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
        .container {
          width: 100%;
          .imgbox {
            width: 100%;
            height: 50%;
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
  @include tablet {
    .about-full-con-b {
      .full-con {
        background-position: 50% 70%;
        min-height: 923px;
        .inner {
          padding-top: 140px;
          width: 100%;

          .con-tit {
            font-size: 46px;
            margin-bottom: 50px;
            &.gl-6 {
              width: getWidth(7) !important;
            }
          }
          .con-item {
            font-size: 12px;
            padding-top: 0;
          }
        }

        .container {
          margin-top: 80px;
          padding-bottom: 150px;
          width: 100%;

          .imgbox {
            width: 100%;
            height: auto;

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
        background-position: 50% 70%;
        min-height: 753px;
        .inner {
          padding-top: 140px;
          width: 100%;

          .con-tit {
            font-size: 30px;
            margin-bottom: 50px;
            &.gl-6 {
              width: getWidth(7) !important;
            }
          }
          .con-item {
            font-size: 12px;
            padding-top: 0;
          }
        }

        .container {
          margin-top: 80px;

          width: 100%;

          .imgbox {
            width: 100%;
            height: auto;
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
  @include mobile-small {
    .about-full-con-b {
      .full-con {
        min-height: 923px;
        width: auto;
        padding: 0px 20px 111px;

        .inner {
          padding-top: 100px;

          .con {
            &-tit {
              font-size: 28px;

              line-height: 120%;
              font-family: 'Noto Sans KR';

              &.l-ml-2 {
                margin-left: getMargin(0) !important;
              }
              &.gl-6 {
                width: getWidth(10) !important;
              }
            }
            &-item {
              flex-direction: column;
              padding-top: 0px;
              margin-left: getMargin(1) !important;
              margin-right: getMargin(0) !important;
              font-size: 14px;
            }
          }
        }

        .container {
          margin-top: 80px;
          width: 100%;
          padding-bottom: 0;

          .imgbox {
            display: none;
          }

          .imgbox2 {
            display: block;

            width: 100%;
            height: auto;

            img {
              position: absolute;

              width: 100%;
              padding-bottom: 0px;
            }
          }
        }
      }
    }
  }
</style>

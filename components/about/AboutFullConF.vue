<template>
  <div class="about-full-con-f">
    <div class="full-con">
      <!-- <img src="@/assets/images/about-full-conD_img_1.png"/> -->
      <div class="inner">
        <div class="tit gl-8 l-ml-2">
          <p v-html="data.title"></p>
        </div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt" v-html="data.text"></div>
        </div>
        <div class="material gl-6 l-ml-2">
          <!-- <img src="@/assets/images/material_3.png"/> -->
          <ul class="material-box">
            <li class="material-item">
              <div class="material-text">
                Principle of 100:0
                <!-- <div class="tit" >Principle of 100:0</div> -->
              </div>
            </li>
            <li class="material-item">
              <div class="material-text">
                Minimum principle
                <!-- <div class="tit">Minimum principle</div> -->
              </div>
              <div class="l-line"></div>
              <div class="r-line"></div>
            </li>
            <li class="material-item">
              <div class="material-text">
                The law of 1 cent
                <!-- <div class="tit">The law of 1 cent</div> -->
              </div>
            </li>
          </ul>

          <div class="material-box-bottom">
            <div class="b-line"></div>
            <div class="item">
              <div class="text">
                If it's ambiguous, I won't do it
                <!-- <div class="tit">If it's ambiguous, I won't do it</div> -->
              </div>
            </div>
          </div>
        </div>

        <div class="link l-ml-3">
          <div class="txt">{{ data.recruit }}</div>
          <button type="button" class="btn">
            <span>Go to →</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutFullConF',
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

  .about-full-con-f {
    .inner {
      .tit {
        margin-bottom: 100px;
        line-height: 120%;
        font-size: 90px;
        font-weight: 900;
      }
      .text-box {
        margin-bottom: 200px;
        .txt {
          font-size: 22px;
          line-height: 150%;
          &:not(:last-child) {
            margin-bottom: 40px;
          }
        }
      }

      .material {
        margin-bottom: 400px;
        &-box {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        &-item {
          position: relative;
          width: 280px;
          height: 280px;
          border: 2px solid $gray-9;
          border-radius: 50%;
          &:nth-child(2) {
            background-color: $gray-9;
            color: $gray-0;
          }
          .l-line {
            position: absolute;
            left: -120px;
            top: 50%;
            width: 120px;
            height: 1px;
            border: 1px solid $gray-9;
            &::before {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-50%, -50%);
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-right: 10px solid $gray-9;
            }
          }
          .r-line {
            position: absolute;
            right: -120px;
            top: 50%;
            width: 120px;
            height: 1px;
            border: 1px solid $gray-9;
            &::before {
              content: '';
              position: absolute;
              right: 0;
              top: 50%;
              transform: translate(0, -50%);
              width: 0;
              height: 0;
              border-top: 10px solid transparent;
              border-bottom: 10px solid transparent;
              border-left: 10px solid $gray-9;
            }
          }
        }
        &-text {
          position: absolute;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
          font-size: 20px;
          font-weight: 900;
          line-height: 110%;
          margin-bottom: 6px;
          .txt {
            font-size: 14px;
            line-height: 120%;
          }
        }

        .material-box-bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          .b-line {
            position: relative;
            height: 120px;
            width: 1px;
            margin-bottom: 20px;
            border: 1px solid $gray-9;
            &::before {
              content: '';
              position: absolute;
              left: 50%;
              bottom: 0px;
              transform: translate(-50%, 0);
              width: 0;
              height: 0;
              border-top: 10px solid $gray-9;
              border-left: 10px solid transparent;
              border-right: 10px solid transparent;
            }
          }
          .item {
            position: relative;
            width: 280px;
            height: 280px;
            border: 2px solid $gray-9;
            border-radius: 50%;
            .text {
              position: absolute;
              left: 50%;
              top: 50%;
              text-align: center;
              transform: translate(-50%, -50%);
              color: $gray-9;
              font-size: 20px;
              font-weight: 900;
              line-height: 110%;
              margin-bottom: 6px;
              .txt {
                font-size: 14px;
                line-height: 120%;
              }
            }
          }
        }
      }

      .link {
        .txt {
          margin-bottom: 60px;
          line-height: 130%;
          font-size: 20px;
        }
        .btn {
          width: 170px;
          height: 50px;
          padding: 16px 44px;
          border: 1px solid $gray-9;
          border-radius: 0px;
          box-sizing: border-box;
          line-height: 130%;
          font-size: 14px;
          font-style: normal;
        }
      }
    }
  }

  @include pc-large {
    .about-full-con-f {
      .inner {
        .tit {
          margin-bottom: 130px;
          font-size: 120px;
        }
        .text-box {
          margin-bottom: 260px;
          .txt {
            font-size: 40px;
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }

        .material {
          margin-bottom: 530px;
          &-item {
            width: 376px;
            height: 376px;
            .l-line {
              left: -161px;
              width: 161px;
            }
            .r-line {
              right: -161px;
              width: 161px;
            }
          }
          &-text {
            font-size: 30px;
            margin-bottom: 6px;
            // .tit{
            //   font-size:30px ;
            //   margin-bottom:6px ;
            // }
            .txt {
              font-size: 18px;
            }
          }

          .material-box-bottom {
            .b-line {
              height: 161px;
              margin-bottom: 26px;
            }
            .item {
              width: 376px;
              height: 376px;
              .text {
                font-size: 30px;
                // .tit{
                //   font-size:30px;
                // }
              }
            }
          }
        }

        .link {
          .txt {
            margin-bottom: 100px;
            font-size: 40px;
          }
          .btn {
            width: 270px;
            height: 80px;
            padding: 27px 29px;
            font-size: 20px;
          }
        }
      }
    }
  }

  @include pc-4k {
    .about-full-con-f {
      .inner {
        .tit {
          margin-bottom: 200px;
          font-size: 180px;
        }
        .text-box {
          margin-bottom: 330px;
          .txt {
            font-size: 60px;
            &:not(:last-child) {
              margin-bottom: 30px;
            }
          }
        }

        .material {
          margin-bottom: 800px;
          &-item {
            width: 568px;
            height: 568px;
            .l-line {
              left: -243px;
              width: 243px;
            }
            .r-line {
              right: -243px;
              width: 243px;
            }
          }
          &-text {
            font-size: 30px;
            // .tit{
            //   font-size:30px ;
            // }
          }

          .material-box-bottom {
            .b-line {
              height: 243px;
              margin-bottom: 40px;
            }
            .item {
              position: relative;
              width: 568px;
              height: 568px;
              .text {
                font-size: 30px;
                // .tit{
                //   font-size:30px ;
                // }
              }
            }
          }
        }

        .link {
          .txt {
            margin-bottom: 100px;
            font-size: 40px;
          }
          .btn {
            width: 270px;
            height: 80px;
            padding: 27px 29px;
            font-size: 20px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1900px) {
    .about-full-con-f {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 230px;
              height: 230px;
            }
            .material-box-bottom {
              .item {
                width: 230px;
                height: 230px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1650px) {
    .about-full-con-f {
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
            .material-box-bottom {
              .b-line {
                height: 80px;
              }
              .item {
                width: 180px;
                height: 180px;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .about-full-con-f {
      .inner {
        .tit {
          font-size: 70px;
        }
        .text-box {
          .txt {
            font-size: 20px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1300px) {
    .about-full-con-f {
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

            .material-box-bottom {
              .b-line {
                height: 62px;
                // margin-bottom:26px;
              }
              .item {
                width: 150px;
                height: 150px;
              }
            }
          }
        }
      }
    }
  }

  @include tablet {
    .about-full-con-f {
      .inner {
        .tit {
          margin-bottom: 50px;
          font-size: 40px;
        }
        .text-box {
          margin-bottom: 100px;
          .txt {
            font-size: 16px;
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }

        .material {
          &-item {
            width: 146px;
            height: 146px;
            .l-line {
              left: -62px;
              width: 62px;
              &::before {
                content: '';
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-right: 7px solid $gray-9;
              }
            }
            .r-line {
              right: -62px;
              width: 62px;
              &::before {
                content: '';
                border-top: 7px solid transparent;
                border-bottom: 7px solid transparent;
                border-left: 7px solid $gray-9;
              }
            }
          }
          &-text {
            font-size: 15px;
            margin-bottom: 0px;
            // .tit{
            //   font-size:15px ;
            //   margin-bottom:0px;
            // }
          }

          .material-box-bottom {
            .b-line {
              height: 62px;
              margin-bottom: 10px;
              &::before {
                content: '';
                border-top: 7px solid $gray-9;
                border-left: 7px solid transparent;
                border-right: 7px solid transparent;
              }
            }
            .item {
              width: 146px;
              height: 146px;
              .text {
                font-size: 15px;
                // .tit{
                //   font-size:15px;
                // }
              }
            }
          }
        }

        .link {
          .txt {
            margin-bottom: 50px;
            font-size: 16px;
          }
          .btn {
            width: 170px;
            height: 50px;
            padding: 16px 58px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .about-full-con-f {
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

            .material-box-bottom {
              .b-line {
                height: 50px;
                margin-bottom: 15px;
              }
              .item {
                width: 120px;
                height: 120px;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 830px) {
    .about-full-con-f {
      .full-con {
        .inner {
          .material {
            &-item {
              width: 115px;
              height: 115px;
              .l-line {
                left: -40px;
                width: 40px;
              }
              .r-line {
                right: -40px;
                width: 40px;
              }
            }
            .material-box-bottom {
              .b-line {
                height: 40px;
              }
              .item {
                width: 115px;
                height: 115px;
              }
            }
          }
        }
      }
    }
  }

  @include mobile {
    .about-full-con-f {
      .inner {
        padding: 0 20px;
        .tit {
          margin-bottom: 30px;
          font-size: 28px;
          &.gl-8 {
            width: 100% !important;
          }
          &.l-ml-2 {
            margin-left: 0px !important;
          }
        }
        .text-box {
          margin-bottom: 100px;
          &.gl-6 {
            width: getWidth(9) !important;
          }
          &.l-ml-3 {
            margin-left: getMargin(1) !important;
          }
          .txt {
            font-size: 16px;
            &:not(:last-child) {
              margin-bottom: 20px;
            }
          }
        }

        .material {
          position: relative;
          height: 594px;
          margin-bottom: 157px;
          &-box {
            flex-direction: column;
          }
          &-item {
            position: absolute;
            width: 146px !important;
            height: 146px !important;
            &:nth-child(1) {
              top: 0px;
            }
            &:nth-child(2) {
              top: 448px;
            }
            &:nth-child(3) {
              top: 130px;
            }
            .l-line {
              display: none;
              left: -62px;
              width: 62px;
            }
            .r-line {
              display: none;
              right: -62px;
              width: 62px;
            }
          }
          &-text {
            font-size: 15px;
            margin-bottom: 0px;
            // .tit{
            //   font-size:15px ;
            //   margin-bottom:0px;
            // }
          }

          .material-box-bottom {
            .b-line {
              position: absolute;
              top: 416px;
              height: 32px;
              margin-bottom: 0px;
              &::before {
                content: '';
                position: absolute;
                left: 50%;
                top: 0px;
                bottom: auto;
                transform: translate(-50%, 0);
                width: 0;
                height: 0;
                border-top: 0px;
                border-bottom: 5px solid $gray-9;
                border-left: 5px solid transparent;
                border-right: 5px solid transparent;
              }
            }
            .item {
              position: absolute;
              top: 260px;
              width: 146px !important;
              height: 146px !important;
              .text {
                font-size: 15px;
                // .tit{
                //   font-size:15px;
                // }
              }
            }
          }
        }

        .link {
          &.l-ml-3 {
            margin-left: getMargin(1) !important;
          }
          .txt {
            margin-bottom: 30px;
            font-size: 16px;
          }
          .btn {
            width: 188px;
            height: 50px;
            padding: 16px 48px;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

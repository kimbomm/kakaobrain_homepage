<template>
  <div class="about-full-con-a">
    <div class="full-con">
      <img src="@/assets/images/about_uq_bg_1.png" />
      <div class="inner">
        <div class="txt gl-8 l-ml-2" v-html="data.title"></div>
        <div class="sub-txt gl-6 l-ml-3" v-html="data.text"></div>
        <div class="sub-sub-txt gl-6 l-ml-3" v-html="data.subtext"></div>
      </div>
      <div class="container">
        <div class="nav">
          <div class="column">
            <div class="rect">
              <p class="p-title">Karlo</p>
              <p class="p-txt">
                이미지 생성 모델<br />신규 시장 발굴 및 제품 출시
              </p>
            </div>
            <div class="rect">
              <p class="p-title">HealthCare</p>
              <p class="p-txt">
                AI 판독 서비스 출시<br />네이처급 최첨단 기술 확보
              </p>
            </div>
            <div class="rect">
              <p class="p-title">Large-Scale Language</p>
              <p class="p-txt">언어모델 / 챗봇 기술 확보</p>
            </div>
          </div>
          <div class="column full">
            <div class="rect">
              <p class="p-title" style="margin-bottom: 69px; margin-top: 69px">
                Brain CLOUD
              </p>
            </div>
          </div>
          <div class="imgbox mNone">
            <img class="rect_1" src="@/assets/images/obj1.png" />
            <img class="rect_2" src="@/assets/images/diacritic-1.png" />
          </div>
          <div class="imgbox2">
            <img class="rect_3" src="@/assets/images/diacritic-1.png" />
            <img class="rect_4" src="@/assets/images/diacritic-4.png" />
            <img class="rect_5" src="@/assets/images/diacritic-5.png" />
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="description gl-6 l-ml-3" v-html="data.description"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutFullConA',
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

  .about-full-con-a {
    ul {
      list-style: none;
    }
    .full-con {
      position: relative;
      width: 100%;
      height: 100%;
      min-height: 2331px;
      object-fit: cover;

      // padding: 400px 20px 643px;
      // &::before {
      //   position: absolute;
      // }
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
        // object-fit:cover;
      }
      .inner {
        position: relative;
        padding-top: 400px;
        color: $gray-0;

        .txt {
          //margin-right: 20px;
          margin-bottom: 100px;
          margin-top: 50px;
          //padding-left: 50px;

          line-height: 120%;
          font-size: 90px;
          font-weight: 900;
          width: fit-content !important;
        }
        .sub-txt {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 800;
          line-height: 48px;
          font-size: 32px;
          text-transform: uppercase;
        }
        .sub-sub-txt {
          margin-top: 20px;
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 22px;
          line-height: 150%;
          width: 100%;
        }
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
            width: calc((100% - 130px) / 3);
            height: auto;
            background-color: #fff;
            border-radius: 140px;

            .p-title {
              margin-top: 44px;
              margin-bottom: 20px;
              font-size: 20px;
              font-weight: 900;
              text-align: center;
              :nth-child(4) {
                margin-bottom: 69px;
              }
            }

            .p-txt {
              font-size: 14px;
              margin-bottom: 39px;
              line-height: 1.5;
              text-align: center;
            }
          }
        }
        .column {
          display: flex;
          justify-content: space-between;
          width: 100%;
          &.full {
            margin-top: 65px;
            .rect {
              width: 100%;
            }
          }
        }
        .imgbox {
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          gap: 242px;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          width: 100%;
          height: 100%;
          img {
            position: static;
            transform: translate(0, 0);
            width: auto;
            max-height: 146.03px;
          }
        }
        .imgbox2 {
          display: none;
        }
      }
      .footer {
        //padding-top: 100px;
        display: flex;
        position: relative;
        top: 100px;
        color: white;
        width: 100%;
        height: auto;
        //max-width: 1120px;
        min-width: 581px;

        .description {
          font-family: 'Noto Sans KR';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
        }
      }
    }
  }

  @include pc-large {
    .about-full-con-a {
      .full-con {
        min-height: 2000px;
        padding: 30px 20px 863px;

        .inner {
          .txt {
            margin-right: 20px;
            margin-bottom: 130px;
            margin-top: 50px;
            line-height: 120%;
            font-size: 120px;
            font-weight: 900;
            width: 100%;
          }
          .sub-txt {
            font-size: 30px;
          }
          .sub-sub-txt {
            font-size: 26px;
          }
        }
        .container {
          .nav {
            max-width: 1504px;
            height: auto;

            .rect {
              .p-title {
                font-size: 26px;
              }
              .p-txt {
                font-size: 20px;
              }
            }

            .column {
              display: flex;
              justify-content: space-between;
              width: 100%;
              &.full {
                margin-top: 90px;
                .rect {
                  width: 100%;
                }
              }
            }
            .imgbox {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              gap: 312px;
              transform: translateY(-50%);
              width: 100%;
              height: auto;
              img {
                position: static;
                transform: translate(0, 0);
                width: auto;
                max-height: 186px;
              }
            }
          }
        }
        .footer {
          padding-top: 130px;
          display: flex;
          position: relative;
          //top: 100px;
          color: white;
          width: 100%;
          height: auto;
          //max-width: 1120px;
          min-width: 581px;

          .description {
            font-size: 26px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .about-full-con-a {
      .full-con {
        min-height: 3000px;
        padding: 800px 20px 1293px;
        .inner {
          .txt {
            margin-bottom: 190px;
            font-size: 180px;
            margin-right: 20px;
            margin-top: 50px;
            line-height: 120%;
            font-weight: 900;
            width: 100%;
          }
          .sub-txt {
            font-size: 46px;
          }
          .sub-sub-txt {
            font-size: 36px;
          }
        }
        .container {
          padding-top: 100px;
          .nav {
            max-width: 2272px;
            height: auto;

            .rect {
              .p-title {
                font-size: 36px;
              }
              .p-txt {
                font-size: 26px;
              }
            }

            .column {
              display: flex;
              justify-content: space-between;
              width: 100%;
              &.full {
                margin-top: 128px;
                .rect {
                  width: 100%;
                }
              }
            }
            .imgbox {
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              gap: 442px;
              transform: translateY(-50%);
              width: 100%;
              height: 100%;
              img {
                position: static;
                transform: translate(0, 0);
                width: auto;
                max-height: 265px;
              }
            }
          }
        }
        .footer {
          display: flex;
          position: relative;
          //top: 100px;
          color: white;
          width: 100%;
          height: auto;
          //max-width: 1120px;
          //min-width: 581px;
          .description {
            font-size: 36px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .about-full-con-a {
      .full-con {
        .inner {
          padding-top: 100px;
          .txt {
            font-size: 46px;
            margin-bottom: 50px;
          }
          .sub-txt {
            font-size: 20px;
          }
          .sub-sub-txt {
            font-size: 10px;
          }
        }
        .container {
          margin-top: 100px;

          .nav {
            max-width: 782px;
            .imgbox {
              gap: 159px;
              width: 100%;
              height: auto;
              margin-top: 0;
              img {
                position: static;
                transform: translate(0, 0);
                width: auto;
                max-height: 88px;
              }
            }
            .rect {
              width: calc((100% - 22px) / 3);
              height: 120px;

              .p-title {
                font-size: 16px;
              }

              .p-txt {
                font-size: 12px;
              }
            }
          }
          .column {
            &.full {
              margin-top: 22px;
            }
          }
        }

        .footer {
          display: flex;
          position: relative;
          //top: 100px;
          color: white;
          width: 100%;
          height: auto;
          //max-width: 1120px;
          min-width: 581px;

          .description {
            font-size: 12px;
          }
        }
      }
    }
  }
  @include tablet {
    .about-full-con-a {
      .full-con {
        min-height: 600px;
        padding: 140px 20px 221px;

        .inner {
          .txt {
            margin-bottom: 50px;
            font-size: 46px;
          }
          .sub-txt {
            font-size: 16px;
          }
          .sub-sub-txt {
            font-size: 12px;
          }
        }
        .container {
          margin-top: 100px;

          .nav {
            max-width: 768px;
            .imgbox {
              gap: 159px;
              width: 100%;
              height: auto;
              margin-top: 0;
              img {
                position: static;
                transform: translate(0, 0);
                width: auto;
                max-height: 88px;
              }
            }
            .rect {
              width: calc((100% - 19px) / 3);
              height: 120px;

              .p-title {
                font-size: 16px;
              }

              .p-txt {
                font-size: 12px;
              }
            }
          }

          .imgbox2 {
            display: none;
          }
          .column {
            &.full {
              margin-top: 22px;
            }
          }
        }

        .footer {
          .description {
            font-size: 12px;
          }
        }
      }
    }
  }
  @include mobile {
    .about-full-con-a {
      .full-con {
        min-height: 600px;
        padding: 0px 20px 252px;
        .inner {
          .txt {
            margin-top: 0px;
            margin-bottom: 60px;
            font-size: 28px;
            &.gl-8 {
              width: 100% !important;
            }
            &.l-ml-2 {
              margin-left: 0px !important;
            }
          }

          .sub-txt {
            font-size: 16px;
            line-height: 24px;
            &.gl-6 {
              width: getWidth(9) !important;
            }
            &.l-ml-3 {
              margin-left: getMargin(1) !important;
            }
          }
          .sub-sub-txt {
            font-size: 14px;
            margin-left: getMargin(1) !important;
            width: fit-content !important;
            max-width: 268px;
          }
        }
        .container {
          margin-top: 40px;

          .nav {
            .column {
              display: flex;
              flex-direction: column;
              justify-content: center;
              height: auto;
              width: 100%;

              .rect {
                width: 320px;
                max-height: 90px;
                border-radius: 140px;
                margin-bottom: 20px;
                background-color: #fff;
                .p-title {
                  font-size: 22px;
                  margin-bottom: 8px;
                }

                .p-txt {
                  font-size: 12px;

                  white-space: nowrap;
                }
              }
              &.full {
                height: auto;
                width: 320px;
                margin-top: 0;
                .rect {
                  width: 100%;
                }
              }
            }
            .mNone {
              display: none;
            }

            .imgbox2 {
              display: block;
              .rect_3 {
                position: absolute;
                height: 87px;
                width: auto;
                //transform: translateY(-50%);
                left: 37%;
                top: 94%;
              }
              .rect_4 {
                position: absolute;
                height: 88px;
                width: auto;
                //transform: translateY(-50%);
                left: 3%;
                top: 47%;
              }
              .rect_5 {
                position: absolute;
                height: 85px;
                width: auto;
                //transform: translateY(-50%);
                left: 40%;
                top: 20%;
              }
            }
          }
        }
        .footer {
          display: inline-block;
          width: 100px;
          .description {
            &.gl-6 {
              width: getWidth(9) !important;
              font-size: 14px;
              margin-left: getMargin(1) !important;
            }
          }
        }
      }
    }
  }
</style>

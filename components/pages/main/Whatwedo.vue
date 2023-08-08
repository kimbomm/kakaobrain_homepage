<template>
  <div class="question gl-6 l-ml-2">
    <div class="silk">
      <div class="uq-text" style="position: relative">
        <img
          src="@/assets/images/Whatwedo.svg"
          alt="whatwedo"
          style="display: flex; flex-direction: column; align-items: center"
        />
      </div>
    </div>
    <div class="question-content">
      <p v-html="subtitle[language][0]"></p>
    </div>
    <div class="container">
      <div class="wedobox">
        <div class="imgbox">
          <div class="llms">
            <div class="llmstext">
              <p class="wetitle" v-html="llmstext[language][0]"></p>
              <p id="wetext" v-html="llmstext[language][1]"></p>
            </div>
            <div class="LargeLanguageModels">
              <p>Large<br />Language<br />Models</p>
            </div>
            <a class="limsarrow" href="">
              <img src="@/assets/images/arrow.png" alt="llms_arrow" />
            </a>
          </div>
          <div class="content">
            <div class="karlo">
              <div class="karlotext">
                <p class="wetitle">Karlo</p>
                <p id="wetext" v-html="karlotext[language][0]"></p>
              </div>
              <div class="karloimg">
                <img src="@/assets/images/sandglass.png" alt="img_healthcare" />
              </div>
              <a class="karloarrow" href="">
                <img src="@/assets/images/arrow.png" alt="karlo_arrow" />
              </a>
            </div>
            <div class="healthcare">
              <div class="healthcaretext">
                <p class="wetitle">Health Care AI</p>
                <p id="wetext" v-html="aitext[language][0]"></p>
              </div>
              <div class="healthcareai">
                <p>Health<br />care<br />ai</p>
              </div>
              <a class="aiarrow" href="">
                <img src="@/assets/images/arrow.png" alt="ai_arrow" />
              </a>
            </div>
          </div>
        </div>
        <div class="ethics">
          <div class="ethicstext">
            <p class="wetitle">AI 윤리</p>
            <p id="wetext" v-html="ethicstext[language][0]"></p>
          </div>
          <div class="ethicsai">
            <p>ai<br />ethics</p>
          </div>
          <a class="ethicsarrow" href="">
            <img src="@/assets/images/ethics_arrow.png" alt="ethics_arrow" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        subtitle: {
          KR: [
            `우리의 혁신은 차별화된 요소 기술과 빅 모델 및 디지털 휴먼을 완성하는 AI 프론티어로서<br/>
            기술 커뮤니티에 기여하고, 사용 가치와 삶의 질을 높이는 새로운 서비스 영역을<br/>
            개척합니다.`
          ],
          EN: [
            `Our innovation is to contribute our world-leading technology on large-scale AI models and<br/>Digital Human to the tech community, and to create services that improve the value and quality of life.`
          ]
        },
        llmstext: {
          KR: [
            `카카오브레인 대규모 언어모델`,
            `한국어 대규모 언어모델을 만들어갑니다.<br>데이터수, 파라미터수 블라블라.`
          ],
          EN: [
            `카카오브레인 LLMs`,
            `한국어 대규모 언어모델을 만들어갑니다.<br>데이터수, 파라미터수 블라블라.`
          ]
        },
        karlotext: {
          KR: [
            `290M의 데이터셋으로 보다 사실적인 <br> 이미지 생성에 초점을 둔 Karlo 2.0`
          ],
          EN: [
            `290M의 데이터셋으로 보다 사실적인 <br> 이미지 생성에 초점을 둔 Karlo 2.0`
          ]
        },
        aitext: {
          KR: [
            `의료 영상 분야의 라지스케일 모델 AI CAD<br>와 신약 개발 AI를 통한 신약 개발 분야의<br> 게임 체인저`
          ],
          EN: [
            `의료 영상 분야의 라지스케일 모델 AI CAD<br>와 신약 개발 AI를 통한 신약 개발 분야의<br> 게임 체인저`
          ]
        },
        ethicstext: {
          KR: [
            `AI 원칙은 책임감 있는 기술 개발에 대한 우리의 약속을 설명하고<br> 우리가 추구하지 않을 특정 응용 분야를 설정하기 위해 노력합니다.`
          ],
          EN: [
            `AI 원칙은 책임감 있는 기술 개발에 대한 우리의 약속을 설명하고<br> 우리가 추구하지 않을 특정 응용 분야를 설정하기 위해 노력합니다.`
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    }
  }
</script>
<style lang="scss" scoped>
  //max-width: 1440px
  .question {
    &.gl-6 {
      width: getWidth(6) !important;
    }
    &.l-ml-2 {
      margin-left: getMargin(2) !important;
    }
    .silk {
      position: relative;
      .uq-text {
      }
    }
    &-content {
      margin-top: 30px;
      word-break: keep-all;
      p {
        color: #000;
        font-family: Noto Sans KR;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;
      }
    }
    .container {
      margin-top: 100px;

      .wedobox {
        .imgbox {
          display: flex;
          .wetitle {
            color: var(--white, #fff);
            font-family: Inter;
            font-size: 24px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%; /* 31.2px */
          }
          #wetext {
            color: var(--white, #fff);
            font-family: Noto Sans CJK KR;
            padding-top: 10px;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
          }
          .llms {
            background-image: url('@/assets/images/img_llms.png');
            background-size: cover;
            background-position: 50% 50%;
            position: relative;
            width: 382px;
            height: 700px;
            border-radius: 20px;
            .llmstext {
              position: absolute;
              top: 50px;
              left: 50px;
            }
            .LargeLanguageModels {
              position: absolute;
              top: 560px;
              left: 162px;
              color: white;
              text-align: right;
              opacity: 10%;
              font-family: Inter;
              font-size: 30px;
              font-style: normal;
              font-weight: 700;
              line-height: 100%; /* 30px */
              text-transform: uppercase;
            }

            .limsarrow {
              position: absolute;
              width: 36px;
              height: 18px;
              top: 632px;
              left: 50px;
              opacity: 0.20000000298023224px;
            }
          }
          .content {
            padding-left: 20px;

            .karlo {
              position: relative;
              background-image: url('@/assets/images/img_karlo.png');
              background-size: cover;
              background-position: 50% 50%;
              width: 393px;
              height: 380px;
              border-radius: 20px;

              .karlotext {
                position: absolute;
                width: 280px;
                left: 50px;
                top: 50px;
              }

              .karloimg {
                position: absolute;
                width: 140px;
                height: 70px;
                top: 260px;
                left: 192px;
              }
              .karloarrow {
                position: absolute;
                width: 36px;
                height: 18px;
                top: 312px;
                left: 50px;
                opacity: 0.20000000298023224px;
              }
            }

            .healthcare {
              margin-top: 20px;
              position: relative;
              background-image: url('@/assets/images/img_healthcare.png');
              background-size: cover;
              background-position: 50% 50%;
              width: 393px;
              height: 300px;
              border-radius: 20px;
              .healthcaretext {
                position: absolute;
                padding-top: 50px;
                left: 50px;
              }
              .healthcareai {
                position: absolute;
                width: 120px;
                top: 160px;
                left: 212px;
                text-align: right;
                font-family: Inter;
                font-size: 30px;
                font-style: normal;
                opacity: 10%;
                color: white;
                font-weight: 700;
                line-height: 100%; /* 30px */
                text-transform: uppercase;
              }

              .aiarrow {
                position: absolute;
                width: 36px;
                height: 18px;
                top: 232px;
                left: 50px;
                opacity: 0.20000000298023224px;
              }
            }
          }
        }
        .ethics {
          margin-top: 20px;
          position: relative;
          background-image: url('@/assets/images/img_ai.png');
          background-size: cover;
          background-position: 50% 50%;
          width: 784px;
          height: 225px;
          border-radius: 20px;
          .ethicstext {
            position: absolute;
            top: 50px;
            left: 50px;

            .wetitle {
              color: var(--black, #000);
              font-family: Inter;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 130%;
            }
            #wetext {
              color: var(--black, #000);
              font-family: Noto Sans CJK KR;
              padding-top: 10px;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%;
            }
          }

          .ethicsai {
            position: absolute;
            color: #d99c00;
            width: 112px;
            height: 60px;
            top: 115px;
            left: 622px;

            text-align: right;
            font-family: Inter;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 100%; /* 30px */
            text-transform: uppercase;
          }
          .ethicsarrow {
            position: absolute;

            width: 36px;
            height: 18px;
            top: 157px;
            left: 50px;
            opacity: 0.20000000298023224px;
          }
        }
      }
    }
  }

  @include pc-desktop {
    .question {
      margin-left: 400px;
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 180px;
          }
        }
      }
      &-content {
        margin-top: 30px;
        word-break: keep-all;
        p {
          font-size: 20px;
        }
      }
      .container {
        margin-top: 100px;
        width: 1120px;
        .wedobox {
          .imgbox {
            display: flex;
            .wetitle {
              font-size: 24px;
            }
            #wetext {
              font-size: 16px;
              width: 486px;
            }
            .llms {
              width: 550px;
              height: 700px;

              .llmstext {
                top: 50px;
                left: 50px;
              }
              .LargeLanguageModels {
                width: 170px;
                height: 90px;
                top: 560px;
                left: 330px;
                font-size: 30px;
              }

              .limsarrow {
                width: 36px;
                height: 18px;
                top: 632px;
                left: 50px;
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                width: 550px;
                height: 380px;

                .karlotext {
                  width: 404px;
                  left: 50px;
                  top: 50px;
                }

                .karloimg {
                  width: 140px;
                  height: 70px;
                  top: 260px;
                  left: 360px;
                }
                .karloarrow {
                  width: 36px;
                  height: 16px;
                  top: 312px;
                  left: 50px;
                }
              }

              .healthcare {
                width: 550px;
                height: 300px;

                .healthcaretext {
                  width: 404px;
                  padding-top: 50px;
                  left: 50px;
                }
                .healthcareai {
                  width: 120px;
                  height: 90px;
                  top: 160px;
                  left: 380px;

                  font-size: 30px;
                }

                .aiarrow {
                  width: 36px;
                  height: 18px;
                  top: 232px;
                  left: 50px;
                }
              }
            }
          }
          .ethics {
            width: 1120px;
            height: 225px;
            border-radius: 20px;
            .ethicstext {
              position: absolute;
              top: 50px;
              left: 50px;

              .wetitle {
                font-size: 24px;
              }
              #wetext {
                font-size: 16px;
              }
            }

            .ethicsai {
              width: 112px;
              height: 60px;
              top: 115px;
              left: 958px;

              font-size: 30px;
            }
            .ethicsarrow {
              width: 36px;
              height: 18px;
              top: 157px;
              left: 50px;
            }
          }
        }
      }
    }
  }

  @include pc-large {
    //min-width:2560px

    .question {
      margin-left: 528px;
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 240px;
          }
        }
      }
      &-content {
        margin-top: 40px;
        word-break: keep-all;
        p {
          font-size: 26px;
        }
      }
      .container {
        margin-top: 100px;
        width: 1504px;

        .wedobox {
          .imgbox {
            display: flex;
            .wetitle {
              font-size: 32px;
            }
            #wetext {
              font-size: 20px;
              width: 404px;
            }
            .llms {
              width: 742px;
              height: 930px;

              .llmstext {
                top: 60px;
                left: 60px;
              }
              .LargeLanguageModels {
                width: 226px;
                height: 120px;
                top: 750px;
                left: 456px;
                font-size: 40px;
              }

              .limsarrow {
                width: 48px;
                height: 24px;
                top: 846px;
                left: 60px;
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                width: 742px;
                height: 540px;

                .karlotext {
                  width: 404px;
                  left: 71px;
                  top: 60px;
                }

                .karloimg {
                  width: 160px;
                  height: 80px;
                  top: 400px;
                  left: 522px;
                }
                .karloarrow {
                  width: 48px;
                  height: 24px;
                  top: 456px;
                  left: 60px;
                }
              }

              .healthcare {
                background-position: 50% 50%;
                width: 742px;
                height: 370px;

                .healthcaretext {
                  padding-top: 60px;
                  left: 60px;
                }
                .healthcareai {
                  width: 160px;
                  height: 120px;
                  top: 190px;
                  left: 522px;

                  font-size: 40px;
                }

                .aiarrow {
                  width: 48px;
                  height: 24px;
                  top: 286px;
                  left: 60px;
                }
              }
            }
          }
          .ethics {
            width: 1504px;
            height: 300px;
            border-radius: 20px;
            .ethicstext {
              position: absolute;
              top: 60px;
              left: 60px;

              .wetitle {
                font-size: 32px;
              }
              #wetext {
                font-size: 20px;
              }
            }

            .ethicsai {
              width: 149px;
              height: 80px;
              top: 160px;
              left: 1295px;

              font-size: 40px;
            }
            .ethicsarrow {
              width: 48px;
              height: 24px;
              top: 216px;
              left: 60px;
            }
          }
        }
      }
    }
  }

  @include pc-4k {
    //min-width: 3840px
    .question {
      margin-left: 784px;
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 363px;
          }
        }
      }
      &-content {
        margin-top: 40px;
        word-break: keep-all;
        p {
          color: #000;
          font-family: Noto Sans KR;
          font-size: 40px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 56px */
        }
      }
      .container {
        margin-top: 200px;
        width: 2272px;
        .wedobox {
          .imgbox {
            display: flex;
            .wetitle {
              color: var(--white, #fff);
              font-family: Inter;
              font-size: 50px;
              font-style: normal;
              font-weight: 700;
              line-height: 130%; /* 65px */
            }
            #wetext {
              color: var(--white, #fff);
              font-family: Noto Sans CJK KR;
              font-size: 30px;
              width: 598px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 39px */
            }
            .llms {
              background-image: url('@/assets/images/img_llms.png');
              background-size: cover;
              background-position: 50% 50%;
              width: 1126px;
              height: 1380px;
              border-radius: 20px;
              .llmstext {
                position: absolute;
                top: 90px;
                left: 90px;
              }
              .LargeLanguageModels {
                position: absolute;
                width: 339px;
                height: 180px;
                top: 1110px;
                left: 697px;

                color: white;
                text-align: right;
                font-family: Inter;
                font-size: 60px;
                font-style: normal;
                font-weight: 700;
                line-height: 100%; /* 60px */
                text-transform: uppercase;
              }

              .limsarrow {
                position: absolute;
                width: 68p;
                height: 34px;
                top: 1256px;
                left: 90px;
                opacity: 0.20000000298023224px;
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                position: relative;
                background-image: url('@/assets/images/img_karlo.png');
                background-size: cover;
                background-position: 50% 50%;
                width: 1126px;
                height: 800px;
                border-radius: 20px;

                .karlotext {
                  position: absolute;
                  width: 605px;
                  left: 101px;
                  top: 90px;
                }

                .karloimg {
                  position: absolute;
                  width: 160px;
                  height: 80px;
                  top: 660px;
                  left: 906px;
                }
                .karloarrow {
                  position: absolute;
                  width: 68px;
                  height: 34px;
                  top: 676px;
                  left: 90px;
                  opacity: 0.20000000298023224px;
                }
              }

              .healthcare {
                margin-top: 20px;
                position: relative;
                background-image: url('@/assets/images/img_healthcare.png');
                background-size: cover;
                background-position: 50% 50%;
                width: 1126px;
                height: 560px;
                border-radius: 20px;
                .healthcaretext {
                  position: absolute;
                  padding-top: 90px;
                  left: 90px;
                }
                .healthcareai {
                  position: absolute;
                  width: 240px;
                  height: 180px;
                  top: 290px;
                  left: 796px;

                  font-size: 60px;
                }

                .aiarrow {
                  position: absolute;
                  width: 68px;
                  height: 34px;
                  top: 436px;
                  left: 90px;
                  opacity: 0.20000000298023224px;
                }
              }
            }
          }
          .ethics {
            margin-top: 20px;
            position: relative;
            background-image: url('@/assets/images/img_ai.png');
            background-size: cover;
            background-position: 50% 50%;
            width: 2272px;
            height: 453px;
            border-radius: 20px;
            .ethicstext {
              position: absolute;
              top: 90px;
              left: 90px;

              .wetitle {
                color: var(--black, #000);
                font-family: Inter;
                font-size: 50px;
                font-style: normal;
                font-weight: 700;
                line-height: 130%; /* 65px */
              }
              #wetext {
                color: var(--black, #000);
                font-family: Noto Sans CJK KR;
                font-size: 30px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%; /* 39px */
              }
            }

            .ethicsai {
              position: absolute;
              color: #d99c00;
              width: 223px;
              height: 120px;
              top: 243px;
              left: 1959px;

              text-align: right;
              font-family: Inter;
              font-size: 60px;
              font-style: normal;
              font-weight: 700;
              line-height: 100%; /* 40px */
              text-transform: uppercase;
            }
            .ethicsarrow {
              position: absolute;
              width: 68px;
              height: 34px;
              top: 329px;
              left: 90px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 5120px) {
    .question.gl-8 {
      &.gl-6 {
        width: getWidth(6) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }
    }
  }

  @include tablet {
    //max-width: 1024px
    .question {
      &.gl-6 {
        width: getWidth(8) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 120px;
          }
        }
      }
      &-content {
        margin-top: 30px;

        word-break: keep-all;
        p {
          font-size: 16px;
        }
      }
      .container {
        margin-top: 70px;
        width: 784px;
        .wedobox {
          .imgbox {
            display: flex;
            .wetitle {
              font-size: 24px;
            }
            #wetext {
              font-size: 14px;
            }
            .llms {
              width: 381px;
              height: 600px;

              .llmstext {
                top: 30px;
                left: 30px;
              }
              .LargeLanguageModels {
                position: absolute;
                width: 136px;
                height: 72px;
                top: 498px;
                left: 215px;
                font-size: 24px;
              }

              .limsarrow {
                width: 36px;
                height: 18px;
                top: 552px;
                left: 30px;
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                width: 382px;
                height: 330px;

                .karlotext {
                  width: 280px;
                  left: 30px;
                  top: 30px;
                }

                .karloimg {
                  width: 140px;
                  height: 70px;
                  top: 230px;
                  left: 212px;
                }
                .karloarrow {
                  width: 36px;
                  height: 18px;
                  top: 282px;
                  left: 30px;
                }
              }

              .healthcare {
                width: 382px;
                height: 250px;

                .healthcaretext {
                  padding-top: 30px;
                  left: 30px;
                }
                .healthcareai {
                  width: 96px;
                  height: 72px;
                  top: 148px;
                  left: 256px;
                  font-size: 24px;
                }

                .aiarrow {
                  width: 36px;
                  height: 18px;
                  top: 202px;
                  left: 30px;
                }
              }
            }
          }
          .ethics {
            width: 784px;
            height: 190px;

            .ethicstext {
              top: 30px;
              left: 30px;

              .wetitle {
                font-size: 24px;
              }
              #wetext {
                font-size: 16px;
              }
            }

            .ethicsai {
              width: 90px;
              height: 48px;
              top: 112px;
              left: 664px;

              font-size: 24px;
            }
            .ethicsarrow {
              width: 36px;
              height: 18px;
              top: 142px;
              left: 30px;
            }
          }
        }
      }
    }
  }

  @include mobile {
    //max-width: 768px
    .question {
      &.gl-6 {
        width: getWidth(6) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 120px;
          }
        }
      }
      &-content {
        margin-top: 30px;
        word-break: keep-all;
        p {
          width: 503px;
          font-size: 16px;
          line-height: 140%;
        }
      }
      .container {
        margin-top: 70px;
        width: 578px;
        .wedobox {
          .imgbox {
            display: flex;

            .wetitle {
              font-size: 24px;
            }
            #wetext {
              width: 503px;
              font-size: 14px;
              height: 66px;
            }
            .llms {
              position: absolute;
              width: 578px;
              height: 200px;

              .llmstext {
                top: 30px;
                left: 30px;
              }
              .LargeLanguageModels {
                top: 88px;
                left: 412px;
              }

              .limsarrow {
                top: 142px;
              }
            }
            .content {
              padding-left: 0px;
              margin-top: 220px;

              .karlo {
                width: 578px;
                height: 190px;
                .karlotext {
                  width: 280px;
                  left: 30px;
                  top: 30px;
                }

                .karloimg {
                  width: 146px;

                  top: 90px;
                  left: 408px;
                }
                .karloarrow {
                  top: 142px;
                  left: 30px;
                }
              }

              .healthcare {
                width: 578px;
                height: 190px;

                .healthcaretext {
                  padding-top: 30px;
                  left: 30px;
                  width: 283px;
                }
                .healthcareai {
                  top: 88px;
                  left: 452px;
                }

                .aiarrow {
                  top: 142px;
                }
              }
            }
          }
          .ethics {
            width: 578px;
            height: 190px;

            .ethicstext {
              top: 30px;
              left: 30px;

              .wetitle {
                font-size: 24px;
              }
              #wetext {
                font-size: 1px;
                line-height: 130%;
              }
            }

            .ethicsai {
              left: 458px;
            }
            .ethicsarrow {
              width: 36px;
              height: 18px;
              top: 142px;
              left: 30px;
            }
          }
        }
      }
    }
  }

  @include mobile-small {
    //max-width: 374px
    .question {
      &.gl-6 {
        width: getWidth(9) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(1.5) !important;
      }
      .silk {
        position: relative;
        .uq-text {
          img {
            width: auto;
            height: 80px;
          }
        }
      }
      &-content {
        margin-top: 30px;
        word-break: keep-all;
        p {
          width: 254px;
          font-size: 16px;
          line-height: 140%;
        }
      }
      .container {
        margin-top: 50px;
        width: 300px;
        .wedobox {
          .imgbox {
            display: flex;

            .wetitle {
              font-size: 20px;
            }
            #wetext {
              width: 212px;

              font-size: 14px;
            }
            .llms {
              position: absolute;
              width: 300px;
              height: 210px;

              .llmstext {
                top: 20px;
                left: 20px;
              }
              .LargeLanguageModels {
                width: 80px;
                height: 42px;
                top: 148px;
                left: 200px;
                font-size: 14px;
              }

              .limsarrow {
                top: 172px;
                left: 20px;
              }
            }
            .content {
              padding-left: 0px;
              margin-top: 220px;

              .karlo {
                width: 300px;
                height: 210px;
                .karlotext {
                  width: 212px;
                  left: 20px;
                  top: 20px;
                }

                .karloimg {
                  width: 72px;
                  height: 36px;
                  top: 154px;
                  left: 208px;
                  img {
                    width: 72px;
                    height: 36px;
                  }
                }
                .karloarrow {
                  top: 172px;
                  left: 20px;
                }
              }

              .healthcare {
                width: 300px;
                height: 210px;
                .healthcaretext {
                  padding-top: 20px;
                  left: 20px;
                  width: 283px;
                }
                .healthcareai {
                  width: 56px;
                  height: 42px;
                  top: 148px;
                  left: 224px;
                  font-size: 14px;
                }

                .aiarrow {
                  top: 172px;
                  left: 20px;
                }
              }
            }
          }
          .ethics {
            width: 300px;
            height: 210px;

            .ethicstext {
              width: 212px;
              top: 20px;
              left: 20px;

              .wetitle {
                font-size: 20px;
              }
              #wetext {
                font-size: 14px;
              }
            }

            .ethicsai {
              width: 52px;
              height: 28px;
              left: 228px;
              top: 162px;
              font-size: 14px;
            }
            .ethicsarrow {
              top: 172px;
              left: 20px;
            }
          }
        }
      }
    }
  }
</style>

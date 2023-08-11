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
    <div class="question-content gl-6">
      <p v-html="subtitle[language][0]"></p>
    </div>
    <!-- 링크들 다시 한번 점검 필요  -->
    <div class="container gl-6">
      <div class="wedobox">
        <div class="imgbox">
          <div class="llmscontent">
            <div class="llms gl-9">
              <div class="llmstext">
                <div>
                  <p class="wetitle" v-html="llmstext[language][0]"></p>
                  <p id="wetext" v-html="llmstext[language][1]"></p>
                </div>
              </div>
              <div class="LargeLanguageModels">
                <p>Large<br />Language<br />Models</p>
              </div>
              <a class="limsarrow" href="">
                <img src="@/assets/images/arrow.png" alt="llms_arrow" />
              </a>
            </div>
          </div>
          <div class="content">
            <div class="karlo gl-9">
              <div class="karlotext">
                <p class="wetitle">Karlo</p>
                <p id="wetext" v-html="karlotext[language][0]"></p>
              </div>
              <div class="karloimg">
                <img src="@/assets/images/sandglass.png" alt="img_healthcare" />
              </div>
              <a class="karloarrow" href="https://karlo.ai/" target="_blank">
                <img src="@/assets/images/arrow.png" alt="karlo_arrow" />
              </a>
            </div>
            <div class="healthcare gl-9">
              <div class="healthcaretext">
                <p class="wetitle">Health Care AI</p>
                <p id="wetext" v-html="aitext[language][0]"></p>
              </div>
              <div class="healthcareai">
                <p>Health<br />care<br />ai</p>
              </div>
              <a class="aiarrow" href="/b/healthcare">
                <img src="@/assets/images/arrow.png" alt="ai_arrow" />
              </a>
            </div>
          </div>
        </div>
        <div class="ethics gl-9">
          <div class="ethicstext">
            <p class="wetitle">AI 윤리</p>
            <p id="wetext" v-html="ethicstext[language][0]"></p>
          </div>
          <div class="ethicsai">
            <p>ai<br />ethics</p>
          </div>
          <a class="ethicsarrow" href="/ethics">
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
        width: getWidth(6) !important;
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
      &.gl-6 {
        width: getWidht(6) !important;
      }

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

          .llmscontent {
            .llms {
              &.gl-9 {
                width: getWidth(3) !important;
              }
              background-image: url('@/assets/images/img_llms.png');
              background-size: cover;
              background-position: 50% 50%;
              position: relative;
              height: 700px;
              border-radius: 20px;
              .llmstext {
                position: absolute;
                width: calc(100% - 40px);
                top: 50px;
                left: 50px;
              }
              .LargeLanguageModels {
                position: absolute;
                top: 560px;
                right: 50px;
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
          }
          .content {
            padding-left: 20px;

            .karlo {
              &.gl-9 {
                width: getWidth(3) !important;
              }
              position: relative;
              background-image: url('@/assets/images/img_karlo.png');
              background-size: cover;
              background-position: 50% 50%;
              height: 380px;
              border-radius: 20px;

              .karlotext {
                position: absolute;

                left: 50px;
                top: 50px;
              }

              .karloimg {
                position: absolute;
                width: 140px;
                height: 70px;
                top: 260px;
                right: 50px;
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
              &.gl-9 {
                width: getWidth(3) !important;
              }
              margin-top: 20px;
              position: relative;
              background-image: url('@/assets/images/img_healthcare.png');
              background-size: cover;
              background-position: 50% 50%;

              height: 300px;
              border-radius: 20px;
              .healthcaretext {
                position: absolute;
                padding-top: 50px;
                left: 50px;
              }
              .healthcareai {
                position: absolute;
                width: calc(100% - 40px);
                top: 160px;
                right: 50px;
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
          &.gl-9 {
            width: getWidth(6) !important;
          }
          margin-top: 20px;
          position: relative;
          background-image: url('@/assets/images/img_ai.png');
          background-size: cover;
          background-position: 50% 50%;

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
            right: 50px;

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

            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 700px;

                .llmstext {
                  top: 50px;
                  left: 50px;
                }
                .LargeLanguageModels {
                  width: 170px;
                  height: 90px;
                  top: 560px;

                  font-size: 30px;
                }

                .limsarrow {
                  width: 36px;
                  height: 18px;
                  top: 632px;
                  left: 50px;
                }
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
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
                }
                .karloarrow {
                  width: 36px;
                  height: 16px;
                  top: 312px;
                  left: 50px;
                }
              }

              .healthcare {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
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
            &.gl-9 {
              width: getWidth(6) !important;
            }
            height: 225px;

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
              right: 50px;
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
            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 930px;

                .llmstext {
                  top: 60px;
                  left: 60px;
                }
                .LargeLanguageModels {
                  width: 226px;
                  height: 120px;
                  top: 750px;
                  right: 60px;
                  font-size: 40px;
                }

                .limsarrow {
                  width: 48px;
                  height: 24px;
                  top: 846px;
                  left: 60px;
                }
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
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
                  right: 60px;
                }
                .karloarrow {
                  width: 48px;
                  height: 24px;
                  top: 456px;
                  left: 60px;
                }
              }

              .healthcare {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 370px;

                .healthcaretext {
                  padding-top: 60px;
                  left: 60px;
                }
                .healthcareai {
                  width: 160px;
                  height: 120px;
                  top: 190px;
                  right: 60px;

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
            &.gl-9 {
              width: getWidth(6) !important;
            }
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
              right: 60px;

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
      .silk {
        .uq-text {
          img {
            height: 363px;
          }
        }
      }
      &-content {
        margin-top: 40px;

        p {
          font-size: 40px;
        }
      }
      .container {
        margin-top: 200px;
        width: 2272px;
        .wedobox {
          .imgbox {
            display: flex;
            .wetitle {
              font-size: 50px;
            }
            #wetext {
              font-size: 30px;
              width: 598px;
            }

            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 1380px;

                .llmstext {
                  top: 90px;
                  left: 90px;
                }
                .LargeLanguageModels {
                  width: 339px;
                  height: 180px;
                  top: 1110px;
                  right: 90px;

                  font-size: 60px;
                }

                .limsarrow {
                  width: 68px;
                  height: 34px;
                  top: 1256px;
                  left: 90px;
                }
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 800px;

                .karlotext {
                  width: 605px;
                  left: 101px;
                  top: 90px;
                }

                .karloimg {
                  width: 160px;
                  height: 80px;
                  top: 660px;
                  right: 90px;
                }
                .karloarrow {
                  width: 68px;
                  height: 34px;
                  top: 676px;
                  left: 90px;
                }
              }

              .healthcare {
                &.gl-9 {
                  width: getWidth(3) !important;
                }

                height: 560px;

                .healthcaretext {
                  width: 352px;
                  padding-top: 90px;
                  left: 90px;
                }
                .healthcareai {
                  width: 240px;
                  height: 180px;
                  top: 290px;
                  right: 90px;
                  font-size: 60px;
                }

                .aiarrow {
                  width: 68px;
                  height: 34px;
                  top: 436px;
                  left: 90px;
                }
              }
            }
          }
          .ethics {
            &.gl-9 {
              width: getWidth(6) !important;
            }
            height: 453px;

            .ethicstext {
              position: absolute;
              top: 90px;
              left: 90px;

              .wetitle {
                font-size: 50px;
              }
              #wetext {
                font-size: 30px;
              }
            }

            .ethicsai {
              width: 223px;
              height: 120px;
              top: 243px;
              right: 90px;

              font-size: 60px;
            }
            .ethicsarrow {
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
            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(4) !important;
                }
                height: 600px;

                .llmstext {
                  top: 30px;
                  left: 30px;
                }
                .LargeLanguageModels {
                  width: 136px;
                  height: 72px;
                  top: 498px;
                  right: 30px;
                  font-size: 24px;
                }

                .limsarrow {
                  width: 36px;
                  height: 18px;
                  top: 552px;
                  left: 30px;
                }
              }
            }
            .content {
              padding-left: 20px;

              .karlo {
                &.gl-9 {
                  width: getWidth(4) !important;
                }
                height: 330px;

                .karlotext {
                  left: 30px;
                  top: 30px;
                }

                .karloimg {
                  width: 140px;
                  height: 70px;
                  top: 230px;
                  right: 30px;
                }
                .karloarrow {
                  width: 36px;
                  height: 18px;
                  top: 282px;
                  left: 30px;
                }
              }

              .healthcare {
                &.gl-9 {
                  width: getWidth(4) !important;
                }
                height: 250px;

                .healthcaretext {
                  padding-top: 30px;
                  left: 30px;
                }
                .healthcareai {
                  width: 96px;
                  height: 72px;
                  top: 148px;
                  right: 30px;
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
            &.gl-9 {
              width: getWidth(8) !important;
            }
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
              right: 30px;

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
          width: getWidth(7) !important;
          font-size: 16px;
          line-height: 140%;
        }
      }
      .container {
        margin-top: 70px;
        &.gl-6 {
          width: getWidth(8) !important;
        }
        .wedobox {
          .imgbox {
            display: flex;

            .llmscontent {
              .llms {
                position: absolute;
                &.gl-9 {
                  width: getWidth(8) !important;
                }
                height: 200px;

                .llmstext {
                  top: 30px;
                  left: 30px;
                  .wetitle {
                    font-size: 24px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }
                .LargeLanguageModels {
                  top: 88px;
                  right: 30px;
                }

                .limsarrow {
                  top: 142px;
                }
              }
            }
            .content {
              padding-left: 0px;
              margin-top: 220px;

              .karlo {
                &.gl-9 {
                  width: getWidth(8) !important;
                }
                height: 190px;
                .karlotext {
                  left: 30px;
                  top: 30px;
                  .wetitle {
                    font-size: 24px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }

                .karloimg {
                  width: 146px;

                  top: 90px;
                  right: 30px;
                }
                .karloarrow {
                  top: 142px;
                  left: 30px;
                }
              }

              .healthcare {
                &.gl-9 {
                  width: getWidth(8) !important;
                }
                height: 190px;

                .healthcaretext {
                  padding-top: 30px;
                  left: 30px;
                  .wetitle {
                    font-size: 24px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }
                .healthcareai {
                  top: 88px;

                  right: 30px;
                }

                .aiarrow {
                  top: 142px;
                }
              }
            }
          }
          .ethics {
            &.gl-9 {
              width: getWidth(8) !important;
            }
            height: 190px;

            .ethicstext {
              top: 30px;
              left: 30px;

              .wetitle {
                font-size: 24px;
              }
              #wetext {
                font-size: 16px;
                line-height: 130%;
              }
            }

            .ethicsai {
              right: 30px;
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
          &.gl-6 {
            width: getWidth(8) !important;
          }

          font-size: 16px;
          line-height: 140%;
        }
      }
      .container {
        margin-top: 50px;
        &.gl-6 {
          width: getWidth(9) !important;
        }
        .wedobox {
          gap: 10px;
          .imgbox {
            display: flex;

            .llmscontent {
              .llms {
                min-height: 210px;

                &.gl-9 {
                  width: getWidth(9) !important;
                }

                .llmstext {
                  top: 20px;
                  left: 20px;
                  min-height: 100px;

                  .wetitle {
                    font-size: 20px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }
                .LargeLanguageModels {
                  width: 80px;
                  height: 42px;
                  top: 148px;
                  right: 20px;
                  font-size: 14px;
                }

                .limsarrow {
                  top: 172px;
                  left: 20px;
                }
              }
            }
            .content {
              padding-left: 0px;
              margin-top: 220px;

              .karlo {
                min-height: 210px;
                &.gl-9 {
                  width: getWidth(9) !important;
                }
                .karlotext {
                  left: 20px;
                  top: 20px;
                  width: calc(100% - 40px);

                  .wetitle {
                    font-size: 20px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }

                .karloimg {
                  width: 72px;
                  height: 36px;
                  top: 154px;
                  right: 20px;
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
                min-height: 210px;
                margin-top: 10px;
                &.gl-9 {
                  width: getWidth(9) !important;
                }
                .healthcaretext {
                  padding-top: 20px;
                  left: 20px;
                  .wetitle {
                    font-size: 20px;
                  }
                  #wetext {
                    font-size: 14px;
                  }
                }
                .healthcareai {
                  width: 56px;
                  height: 42px;
                  top: 148px;
                  right: 20px;
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
            height: 210px;
            margin-top: 10px;
            &.gl-9 {
              width: getWidth(9) !important;
            }

            .ethicstext {
              .wetitle {
                font-size: 20px;
              }
              #wetext {
                font-size: 14px;
              }
            }

            .ethicsai {
              width: 52px;

              right: 20px;
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

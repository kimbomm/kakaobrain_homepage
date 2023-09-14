<template>
  <div class="question gl-6 l-ml-2">
    <div class="silk">
      <div class="uq-text" style="position: relative">
        <!-- <img
          src="@/assets/images/Whatwedo.svg"
          alt="whatwedo"
          style="display: flex; flex-direction: column; align-items: center"
        /> -->
        <p>What<br />we do.</p>
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
              <div class="llmstext gl-3">
                <div>
                  <p class="wetitle" v-html="llmstext[language][0]"></p>
                  <p class="wetext" v-html="llmstext[language][1]"></p>
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
              <div class="karlotext gl-3">
                <p class="wetitle" v-html="karlotext[language][0]"></p>
                <p class="wetext" v-html="karlotext[language][1]"></p>
              </div>
              <div class="karloimg">
                <img src="@/assets/images/sandglass.png" alt="img_healthcare" />
              </div>
              <a
                class="karloarrow"
                href="https://karlo.ai/about"
                target="_blank"
              >
                <img src="@/assets/images/arrow.png" alt="karlo_arrow" />
              </a>
            </div>
            <div class="healthcare gl-9">
              <div class="healthcaretext gl-3">
                <p class="wetitle" v-html="aitext[language][0]"></p>
                <p class="wetext" v-html="aitext[language][1]"></p>
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
          <div class="ethicstext gl-3">
            <p class="wetitle" v-html="ethicstext[language][0]"></p>
            <p class="wetext" v-html="ethicstext[language][1]"></p>
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
            `카카오브레인은 AI로 10억명 이상 유저들이 더 나은 삶을 살 수 있도록 하는 혁신을 불러일으키는 생각하지 못한 물음에 답하기 위해 도전합니다. 카카오브레인은 현재 초거대 AI 기반의 언어 및 이미지 생성 모델, AI 헬스케어 사업과 이 모든 영역을 가능케하는 인프라를 운영하고 있습니다.`
          ],
          EN: [
            `Kakao Brain challenges itself to answer unthinkable questions with innovative AI technology that will transform the lives of over 1 billion users. Kakao Brain currently operates a large language model, an AI image generation model, and an AI healthcare service, all of which is supported by our robust infrastructure.`
          ]
        },
        llmstext: {
          KR: [
            `대규모 언어모델`,
            `초거대 AI 기술을 기반으로 인간의 언어 문맥을 종합적으로 이해하여 인간의 의도에 따라 자유자재로 언어를 생성할 수 있는 모델`
          ],
          EN: [
            `Large Language Model`,
            `Our large language model takes a comprehensive understanding of human language context to generate fluent text according to user intent.`
          ]
        },
        karlotext: {
          KR: [
            `Karlo`,
            `Karlo는 자체 구축한 Coyo 데이터셋 기반으로 다양한 화풍과 스타일로 표현하는 이미지 생성 모델`
          ],
          EN: [
            `Karlo`,
            `Karlo is the generative image model trained on our own Coyo dataset. The model is capable of generating images in countless art styles.`
          ]
        },
        aitext: {
          KR: [
            `AI 헬스케어`,
            `초거대 AI 기반으로 의료 영상 분야의 AI CAD와 AI 신약개발을 하고 있는 게임 체인저`
          ],
          EN: [
            `AI Healthcare`,
            `A game changer in medical imaging. The large language model is engaged in AI Computer-Aided Diagnosis (CAD) and AI Drug Development.`
          ]
        },
        ethicstext: {
          KR: [
            `AI 윤리`,
            `AI 윤리 원칙은 책임감 있는 기술 개발을 위한 문화를 만듭니다. 이를 통해 우리 사회 윤리 안에서 책임감을 다하며, 이를 통해 인류의 편익과 행복을 추구합니다`
          ],
          EN: [
            `Ethics of AI`,
            `Adopting ethical principles in AI fosters a culture of responsibly developing technology. Through this process, we fulfill our social responsibility to promote the happiness and well-being of all. `
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
    padding-left: 20px;
    .silk {
      p {
        color: var(--black, #000);
        font-family: Inter;
        font-size: 70px;
        font-style: normal;
        font-weight: 600;
        line-height: 100%; /* 70px */
        text-transform: uppercase;
      }
    }
    &-content {
      margin-top: 30px;
      &.gl-6 {
        width: getWidth(6) !important;
      }
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
      &.gl-6 {
        width: getWidth(6) !important;
      }

      .wedobox {
        .imgbox {
          display: flex;

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
                &.gl-3 {
                  width: getWidth(2.5) !important;
                }

                .wetitle {
                  color: var(--white, #fff);
                  font-family: Inter;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 130%; /* 31.2px */
                }
                .wetext {
                  color: var(--white, #fff);
                  font-family: Noto Sans CJK KR;
                  padding-top: 10px;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                }
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
                font-weight: 600;
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
                &.gl-3 {
                  width: getWidth(2) !important;
                }

                .wetitle {
                  color: var(--white, #fff);
                  font-family: Inter;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 130%; /* 31.2px */
                }
                .wetext {
                  color: var(--white, #fff);
                  font-family: Noto Sans CJK KR;
                  padding-top: 10px;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                }
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
                &.gl-3 {
                  width: getWidth(2) !important;
                }

                .wetitle {
                  color: var(--white, #fff);
                  font-family: Inter;
                  font-size: 24px;
                  font-style: normal;
                  font-weight: 700;
                  line-height: 130%; /* 31.2px */
                }
                .wetext {
                  color: var(--white, #fff);
                  font-family: Noto Sans CJK KR;
                  padding-top: 10px;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 130%;
                }
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
                font-weight: 600;
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

            &.gl-3 {
              width: getWidth(3) !important;
            }

            .wetitle {
              color: black;
              font-family: Inter;
              font-size: 24px;
              font-style: normal;
              font-weight: 700;
              line-height: 130%; /* 31.2px */
            }
            .wetext {
              color: black;
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
            font-weight: 600;
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
          p {
            font-size: 90px;
          }
        }
      }
      &-content {
        margin-top: 30px;
        word-break: keep-all;
        &.gl-6 {
          width: getWidth(4) !important;
        }
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
              width: 266px;
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
          p {
            font-size: 120px;
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
        margin-top: 120px;
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

                  &.gl-3 {
                    width: getWidth(2) !important;
                  }
                  .wetitle {
                    font-size: 32px;
                  }
                  .wetext {
                    font-size: 20px;
                  }
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
                  left: 60px;
                  top: 60px;

                  &.gl-3 {
                    width: getWidth(2) !important;
                  }

                  .wetitle {
                    font-size: 32px;
                  }
                  .wetext {
                    font-size: 20px;
                  }
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

                  &.gl-3 {
                    width: getWidth(2) !important;
                  }

                  .wetitle {
                    font-size: 32px;
                  }
                  .wetext {
                    font-size: 20px;
                  }
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

              &.gl-3 {
                width: getWidth(2.5) !important;
              }

              .wetitle {
                font-size: 32px;
              }
              .wetext {
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
          p {
            font-size: 180px;
          }
        }
      }
      &-content {
        margin-top: 60px;

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

            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(3) !important;
                }
                height: 1380px;

                .llmstext {
                  top: 90px;
                  left: 90px;

                  .wetitle {
                    font-size: 50px;
                  }
                  .wetext {
                    font-size: 30px;
                  }
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
                  left: 90px;
                  top: 90px;

                  .wetitle {
                    font-size: 50px;
                  }
                  .wetext {
                    font-size: 30px;
                  }
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

                  .wetitle {
                    font-size: 50px;
                  }
                  .wetext {
                    font-size: 30px;
                  }
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
              .wetext {
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
          p {
            font-size: 60px;
          }
        }
      }
      &-content {
        margin-top: 30px;
        &.gl-6 {
          width: getWidth(6) !important;
          p {
            font-size: 16px;
            line-height: 140%;
          }
        }
      }
      .container {
        margin-top: 70px;
        width: 784px;

        .wedobox {
          .imgbox {
            display: flex;

            .llmscontent {
              .llms {
                &.gl-9 {
                  width: getWidth(4) !important;
                }
                height: 600px;

                .llmstext {
                  top: 30px;
                  left: 30px;
                  &.gl-3 {
                    width: getWidth(3) !important;
                  }

                  .wetitle {
                    font-size: 24px;
                  }
                  .wetext {
                    font-size: 14px;
                  }
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
                  &.gl-3 {
                    width: getWidth(3) !important;
                  }
                  .wetitle {
                    font-size: 24px;
                  }
                  .wetext {
                    font-size: 14px;
                  }
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
                  &.gl-3 {
                    width: getWidth(3) !important;
                  }
                  .wetitle {
                    font-size: 24px;
                  }
                  .wetext {
                    font-size: 14px;
                  }
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
              &.gl-3 {
                width: getWidth(5) !important;
              }

              .wetitle {
                font-size: 24px;
              }
              .wetext {
                font-size: 14px;
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
          p {
            font-size: 60px;
          }
        }
      }
      &-content {
        margin-top: 30px;

        &.gl-6 {
          width: getWidth(7) !important;

          p {
            font-size: 16px;
            line-height: 140%;
          }
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

                  &.gl-3 {
                    width: getWidth(5) !important;
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
                  &.gl-3 {
                    width: getWidth(4) !important;
                  }
                  .wetitle {
                    font-size: 24px;
                  }
                  .wetext {
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
                  &.gl-3 {
                    width: getWidth(4) !important;
                  }

                  .wetitle {
                    font-size: 24px;
                  }
                  .wetext {
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
              &.gl-3 {
                width: getWidth(6) !important;
              }

              .wetitle {
                font-size: 24px;
              }
              .wetext {
                font-size: 14px;
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
          p {
            font-size: 40px;
          }
        }
      }
      &-content {
        margin-top: 20px;
        word-break: keep-all;
        &.gl-6 {
          width: getWidth(8) !important;
        }
        p {
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
                  &.gl-3 {
                    width: getWidth(8) !important;
                  }
                  .wetitle {
                    font-size: 20px;
                  }
                  .wetext {
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
                  &.gl-3 {
                    width: getWidth(8) !important;
                  }

                  .wetitle {
                    font-size: 20px;
                  }
                  .wetext {
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
                  &.gl-3 {
                    width: getWidth(8) !important;
                  }
                  .wetitle {
                    font-size: 20px;
                  }
                  .wetext {
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
              left: 20px;
              &.gl-3 {
                width: getWidth(8) !important;
              }
              .wetitle {
                font-size: 20px;
              }
              .wetext {
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

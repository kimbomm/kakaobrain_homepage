<template>
  <div class="innovation">
    <div class="gl-6">
      <div class="content" width="100%">
        <div class="head">
          <div class="title" v-html="headtitle[language][0]"></div>
          <div class="subtitle" v-html="headsubtitle[language][0]"></div>
          <a>
            <p class="unthink">
              Unthinkable<br />Question<br />makes<br />impactful<br />answer
            </p>
          </a>
        </div>
        <div class="container">
          <div class="context">
            <div class="contitle">¹outstanding</div>
            <div class="consubtitle" v-html="outstanding[language][0]"></div>
          </div>
          <div class="context">
            <div class="contitle">²actualized</div>
            <div class="consubtitle" v-html="actualized[language][0]"></div>
          </div>
          <div class="context">
            <div class="contitle">³open</div>
            <div class="consubtitle" v-html="open[language][0]"></div>
          </div>
          <div class="context">
            <div class="contitle">⁴impactful</div>
            <div class="consubtitle" v-html="impactful[language][0]"></div>
          </div>
          <div class="vision-list">
            <div
              class="list-con"
              v-for="(data, index) in 4"
              :key="index"
              :data="data"
              :index="index"
            >
              <img
                :src="
                  require(`@/assets/images/about/visual_${index}_${NUMBER}.png`)
                "
              />
            </div>
          </div>
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
        NUMBER: 0,
        timer: null,
        isChange: false,
        setTime: [600, 800, 700, 600],
        headtitle: {
          KR: [`혁신은<br/>물음에서<br/>시작합니다.`],
          EN: [`Innovation<br/>begins with<br/> a question.`]
        },
        headsubtitle: {
          KR: [
            `카카오브레인은 ‘생각하지 물음’으로 부터 보편적 문제를 AI로 해결하여<br/>
             10억 명 이상의 사람의 삶에 영향을 주는 글로벌 기술 기업입니다.`
          ],
          EN: [
            `Kakao Brain is a global technology company that impacts the lives of more than 1 billion people <br/>
             by solving universal problems with AI`
          ]
        },

        outstanding: {
          KR: [
            `최고 수준의 전문가들이 모여, 모든 문제 해결의 근간이 되는 혁신적인 기술을 개발합니다.`
          ],
          EN: [
            `We bring together the best minds to develop the innovative technologies that are at the root of every problem.`
          ]
        },
        actualized: {
          KR: [
            `기술 기반의 비즈니스 영역을 개척하고, 삶의 질을 높이는 서비스로 실체화 합니다.`
          ],
          EN: [
            `We pioneer technology-based business areas and materialize them into services that improve the quality of life.`
          ]
        },
        open: {
          KR: [
            `기술 노하우를 공개하고 공유하여, AI 생태계에 기여하고 새로운 가치를 창출합니다.`
          ],
          EN: [
            `We open and share our technical know-how to contribute to the AI ecosystem and create new value.`
          ]
        },
        impactful: {
          KR: [
            `모든 사람이 더 나은 삶을 살 수 있도록, 세상의 가치 있는 변화를 주도합니다.`
          ],
          EN: [
            `Driving valuable change in the world to make life better for everyone.`
          ]
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    mounted() {
      this.scrollBody.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        const _this = this
        if (this.timer !== null) {
          clearTimeout(this.timer)
          this.handleCircle(true)
        }

        this.timer = setTimeout(function () {
          _this.handleCircle(false)
        }, 200)
      },
      handleCircle(isScroll) {
        if (isScroll) {
          if (!this.isChange) {
            this.NUMBER = Math.floor(Math.random() * 5) + 1
            this.isChange = true
            setTimeout(() => {
              this.isChange = false
            }, this.setTime[this.index])
          }
        } else {
          this.NUMBER = 0
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .innovation {
    width: 1320px;
    height: 1617px;
    top: 3896px;
    left: 20px;
    border-radius: 20px;
    background: #eff1f6;

    .content {
      .head {
        display: flex;
        width: 890px;
        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        padding-top: 300px;
        padding-left: 268px;

        .title {
          color: var(--black, #000);
          font-family: Noto Sans KR;
          font-size: 70px;
          font-style: normal;
          font-weight: 900;
          line-height: 110%;
          align-self: stretch;
        }

        .subtitle {
          color: #000;
          font-family: Noto Sans KR;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 28px */
        }
        .unthink {
          position: absolute;
          width: 333px;

          height: 230px;
          transform: translate(210%, -150%);

          color: var(--surface-3, #e8ecf1);
          text-align: right;
          font-family: Inter;
          font-size: 46px;
          font-style: normal;
          font-weight: 800;
          line-height: 100%; /* 46px */
          text-transform: uppercase;
        }
      }
      .container {
        width: 890px;
        height: 540px;

        top: 160px;
        left: 268px;

        .context {
          margin-bottom: 80px;
          &:nth-child(4) {
            margin-bottom: 0px;
          }

          .contitle {
            color: var(--black, #000);
            font-feature-settings: 'calt' off;
            font-family: Inter;
            font-size: 36px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          .consubtitle {
            color: var(--black, #000);
            font-feature-settings: 'calt' off;
            font-family: Noto Sans KR;
            padding-top: 10px;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 20.8px */
          }
        }
        .vision-list {
          position: relative;
          width: 280px;
          height: auto;
          transform: translate(193%, -53%);
          z-index: -1;
          .list-con {
            img {
              margin: -50px 0 0 0;
              width: 280px;
              height: 280px;
            }
          }
        }
      }
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .innovation {
      width: 1880px;
      height: 1988px;
      top: 4377px;
      left: 20px;

      .content {
        .head {
          width: 1120px;

          gap: 30px;
          padding-top: 400px;
          padding-left: 380px;

          .title {
            font-size: 90px;
          }

          .subtitle {
            font-size: 20px;
          }
          .unthink {
            width: 434px;

            height: 300px;
            transform: translate(245%, -140%);

            font-size: 60px;
          }
        }
        .container {
          width: 1120px;
          height: 540px;
          left: 380px;

          .context {
            margin-bottom: 80px;
            &:nth-child(4) {
              margin-bottom: 0px;
            }

            .contitle {
              font-size: 36px;
            }
            .consubtitle {
              font-size: 16px;
            }
          }
          .vision-list {
            position: relative;
            width: 280px;
            height: auto;
            transform: translate(293%, -31%);
            z-index: -1;
            .list-con {
              img {
                margin: -50px 0 0 0;
                width: 280px;
                height: 280px;
              }
            }
          }
        }
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .innovation {
      width: 2520px;
      height: 2498px;
      top: 5759px;

      .content {
        .head {
          width: 1120px;

          gap: 40px;
          padding-top: 540px;
          padding-left: 512px;

          .title {
            width: 1120px;
            font-size: 120px;
            height: 396px;
          }

          .subtitle {
            width: 990px;
            font-size: 26px;
          }
          .unthink {
            width: 564px;

            height: 390px;
            transform: translate(255%, -140%);

            font-size: 78px;
          }
        }
        .container {
          width: 1120px;
          height: 710px;
          left: 512px;

          .context {
            margin-bottom: 110px;
            &:nth-child(4) {
              margin-bottom: 0px;
            }

            .contitle {
              font-size: 46px;
            }
            .consubtitle {
              font-size: 22px;
            }
          }
          .vision-list {
            width: 380px;

            transform: translate(293%, -41%);
            z-index: -1;
            .list-con {
              img {
                margin: -68px 0 0 0;
                width: 380px;
                height: 380px;
              }
            }
          }
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .innovation {
      width: 3800px;
      height: 3724px;
      top: 8542px;

      .content {
        .head {
          width: 1508px;

          gap: 60px;
          padding-top: 800px;
          padding-left: 764px;

          .title {
            width: 1508px;

            font-size: 180px;
            height: 594px;
          }

          .subtitle {
            width: 1333px;
            font-size: 40px;
          }
          .unthink {
            width: 564px;
            height: 390px;

            transform: translate(435%, -220%);
            font-size: 78px;
          }
        }
        .container {
          width: 1508px;
          height: 1508px;
          left: 764px;

          .context {
            margin-bottom: 170px;
            &:nth-child(4) {
              margin-bottom: 0px;
            }

            .contitle {
              font-size: 70px;
            }
            .consubtitle {
              font-size: 32px;
              width: 1508px;
            }
          }
          .vision-list {
            width: 578px;

            transform: translate(293%, -41%);
            z-index: -1;
            .list-con {
              img {
                margin: -100px 0 0 0;
                width: 578px;
                height: 578px;
              }
            }
          }
        }
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .innovation {
      width: 984px;
      height: 1372px;
      top: 3077px;
      margin-left: 20px;
      .content {
        .head {
          width: 482px;
          gap: 30px;
          padding-top: 200px;
          padding-left: 201px;

          .title {
            width: 482px;
            font-size: 60px;
          }

          .subtitle {
            width: 500px;
            font-size: 16px;
          }
          .unthink {
            width: 289px;
            height: 200px;

            transform: translate(170%, -150%);
            font-size: 40px;
          }
        }
        .container {
          width: 583px;
          height: 516px;
          left: 201px;

          .context {
            margin-bottom: 80px;

            .contitle {
              font-size: 32px;
            }
            .consubtitle {
              font-size: 14px;
              width: 583px;
            }
          }
          .vision-list {
            width: 180px;

            transform: translate(293%, -49%);
            z-index: -1;
            .list-con {
              img {
                margin: -30px 0 0 0;
                width: 180px;
                height: 180px;
              }
            }
          }
        }
      }
    }
  }
  //max-width: 768px
  @include mobile {
    .innovation {
      width: 728px;
      height: 1420px;
      top: 3263px;
      margin-left: 20px;
      .content {
        .head {
          padding-left: 150px;

          .title {
          }

          .subtitle {
            width: 500px;
          }
          .unthink {
            transform: translate(100%, -150%);
          }
        }
        .container {
          width: 503px;
          height: 588px;
          left: 150px;

          .context {
            margin-bottom: 80px;

            .contitle {
              font-size: 32px;
            }
            .consubtitle {
              padding-top: 12px;
              font-size: 14px;
              width: 300px;
            }
          }
          .vision-list {
            width: 180px;

            transform: translate(180%, -55%);
            z-index: -1;
            .list-con {
              img {
                margin: -30px 0 0 0;
                width: 180px;
                height: 180px;
              }
            }
          }
        }
      }
    }
  }
  //max-width: 374px
  @include mobile-small {
    .innovation {
      width: 320px;
      height: 1092px;
      top: 3091px;

      .content {
        .head {
          width: 254px;
          padding-top: 140px;
          padding-left: 33px;
          gap: 20px;
          .title {
            font-size: 40px;
            z-index: 1;
          }

          .subtitle {
            width: 254px;
          }
          .unthink {
            width: 188px;
            height: 133px;
            font-size: 26px;
            transform: translate(50%, -195%);
          }
        }
        .container {
          width: 254px;
          height: 472px;
          left: 33px;
          top: 100px;

          .context {
            margin-bottom: 40px;

            .contitle {
              font-size: 26px;
            }
            .consubtitle {
              padding-top: 12px;
              font-size: 14px;
              width: 254px;
            }
          }
          .vision-list {
            width: 110px;
            transform: translate(130%, -63%);
            z-index: -1;
            .list-con {
              img {
                margin: -20px 0 0 0;
                width: 110px;
                height: 110px;
              }
            }
          }
        }
      }
    }
  }
</style>

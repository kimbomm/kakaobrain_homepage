<template>
  <div class="innovation gl-10">
    <div class="gl-6">
      <div class="content l-pl-2">
        <div class="head gl-8">
          <div class="text">
            <div class="title" v-html="headtitle[language][0]"></div>
            <div class="unthink">
              Unthinkable<br />Question<br />makes<br />impactful<br />answer
            </div>
          </div>
          <div class="subtitle" v-html="headsubtitle[language][0]"></div>
        </div>
        <div class="container gl-8">
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
          EN: [`Innovation<br/>begins with a<br/> question.`]
        },
        headsubtitle: {
          KR: [
            `카카오브레인은 ‘생각하지 물음’으로 부터 보편적 문제를 AI로 해결하여<br/>
             10억 명 이상의 사람의 삶에 영향을 주는 글로벌 기술 기업입니다.`
          ],
          EN: [
            `Kakao Brain is a global technology company <br/> that impacts the lives of more than 1 billion people
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
    height: 1617px;
    // top: 3896px;
    margin-left: 20px;
    position: relative;
    border-radius: 20px;
    background: #eff1f6;
    &.gl-10 {
      width: getWidth(10);
    }

    .content {
      &.l-pl-2 {
        padding-left: getMargin(1.9) !important;
      }
      .head {
        &.gl-8 {
          width: getWidth(8) !important;
        }
        display: flex;

        flex-direction: column;
        align-items: flex-start;
        gap: 30px;
        padding-top: 300px;

        .text {
          width: 100%;

          display: flex;
          justify-content: space-between;

          .title {
            color: var(--black, #000);
            font-family: Noto Sans KR;
            font-size: 70px;
            font-style: normal;
            font-weight: 900;
            line-height: 110%;
          }

          .unthink {
            width: 333px;
            height: 230px;
            color: var(--surface-3, #e8ecf1);
            text-align: right;
            font-family: Inter;
            font-size: 46px;
            font-style: normal;
            font-weight: 800;
            line-height: 100%;

            text-transform: uppercase;
          }
        }

        .subtitle {
          color: #000;
          font-family: Noto Sans KR;
          font-size: 20px;
          font-style: normal;
          font-weight: 400;
          line-height: 140%; /* 28px */
        }
      }
      .container {
        height: 540px;
        top: 160px;

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
      }
      .vision-list {
        position: absolute;
        width: 280px;
        height: auto;
        bottom: 0;
        right: 268px;
        margin: 0 0 -140px 0;
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
  //min-width: 1361px
  @include pc-desktop {
    .innovation {
      height: 1988px;
      // top: 4377px;
      margin-left: 20px;

      .content {
        .head {
          width: 1120px;
          gap: 30px;
          padding-top: 400px;

          .text {
            .title {
              font-size: 90px;
            }
            .unthink {
              width: 434px;
              height: 300px;
              font-size: 60px;
            }

            .subtitle {
              font-size: 20px;
            }
          }
        }
        .container {
          width: 1120px;
          height: 540px;

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
        }
        .vision-list {
          width: 280px;
          height: auto;
          right: 380px;
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
  //min-width:2560px
  @include pc-large {
    .innovation {
      height: 2498px;

      .content {
        .head {
          width: 1120px;

          gap: 40px;
          padding-top: 540px;

          .text {
            .title {
              width: 1120px;
              font-size: 120px;
              height: 396px;
            }
            .unthink {
              width: 564px;

              height: 390px;

              font-size: 78px;
            }

            .subtitle {
              width: 990px;
              font-size: 26px;
            }
          }
        }
        .container {
          width: 1120px;
          height: 710px;

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
        }
        .vision-list {
          width: 380px;
          right: 508px;
          margin: 0 0 -190px 0;
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
  //min-width: 3840px
  @include pc-4k {
    .innovation {
      height: 3724px;

      .content {
        .head {
          width: 1508px;

          gap: 60px;
          padding-top: 800px;

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

            font-size: 78px;
          }
        }
        .container {
          width: 1508px;
          height: 1508px;

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
        }
        .vision-list {
          width: 578px;
          right: 784px;
          margin: 0 0 -289px 0;
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

  @media screen and (min-width: 5120px) {
    .innovation {
      &.gl-10 {
        width: getWidth(10);
      }

      .content {
        &.l-pl-2 {
          padding-left: getMargin(2) !important;
        }
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .innovation {
      height: 1372px;

      .content {
        .head {
          gap: 30px;
          padding-top: 200px;

          &.gl-8 {
            width: getWidth(8) !important;
          }
          .text {
            position: relative;
            .title {
              font-size: 60px;
              z-index: 1;
            }

            .subtitle {
              font-size: 16px;
              position: relative;
            }
            .unthink {
              position: absolute;
              width: 289px;
              height: 200px;
              font-size: 40px;
              top: 0;
              right: 0;
            }
          }
        }
        .container {
          height: 516px;

          .context {
            margin-bottom: 80px;

            .contitle {
              font-size: 32px;
            }
            .consubtitle {
              font-size: 14px;
            }
          }
        }

        .vision-list {
          width: 180px;
          right: 100px;
          margin: 0 0 -90px 0;
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
  //max-width: 768px
  @include mobile {
    .innovation {
      height: 1520px;

      .content {
        .head {
          .text {
            .title {
            }

            .subtitle {
              width: 500px;
            }
            .unthink {
            }
          }
        }
        .container {
          height: 588px;

          .context {
            margin-bottom: 80px;

            .contitle {
              font-size: 32px;
            }
            .consubtitle {
              padding-top: 12px;
              font-size: 14px;
            }
          }
        }
        .vision-list {
          width: 180px;
          right: 75px;

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
  //max-width: 374px
  @include mobile-small {
    .innovation {
      height: 1152px;

      .content {
        &.l-pl-2 {
          padding-left: getMargin(1) !important;
        }
        .head {
          &.gl-8 {
            width: getWidth(9) !important;
          }

          padding-top: 140px;
          gap: 20px;
          .text {
            width: 100%;
            position: relative;
            .title {
              font-size: 40px;
              z-index: 1;
            }

            .subtitle {
              width: 254px;
              font-size: 12px;
              position: relative;
              z-index: 1;
            }
            .unthink {
              position: absolute;
              width: 188px;
              height: 133px;
              font-size: 26px;
              top: 0;
              right: 0;
            }
          }
        }
        .container {
          &.gl-8 {
            width: getWidth(8) !important;
          }
          min-height: 472px;

          top: 100px;

          .context {
            margin-bottom: 40px;

            .contitle {
              font-size: 26px;
            }
            .consubtitle {
              padding-top: 12px;
              font-size: 14px;
            }
          }
        }
        .vision-list {
          width: 110px;
          right: 34px;
          margin: 0 0 -55px 0;
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
</style>

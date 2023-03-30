<template>
  <div class="question gl-8">
    <div class="silk">
      <div class="uq-text gl-8" style="position: relative">
        <img
          src="@/assets/images/UnthinkableQuestion.svg"
          alt="Unthinkable Question 텍스트 이미지"
          style="display: flex; flex-direction: column; align-items: center"
        />
        <div class="egg">
          <img src="@/assets/images/obj1.png" />
        </div>
      </div>
    </div>

    <div class="question-content">
      <p v-html="translation[language][0]"></p>
      <p class="gl-8" v-html="translation[language][1]"></p>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    components: {
      EasterEgg
    },
    data() {
      return {
        translation: {
          KR: [
            `카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다.`,
            `우리의 혁신은 차별화된 요소 기술과 빅 모델 및<br class="mo-only"/> 디지털 휴먼을 완성하는 AI
            프론티어로서<br /> 기술 커뮤니티에 기여하고, 사용 가치와 삶의 질을<br class="mo-only"/> 높이는
            새로운 서비스 영역을 개척합니다.`
          ],
          EN: [
            `Innovation at Kakao Brain starts<br>with questions from its krew members`,
            `Our innovation is to contribute our world-leading technology on large-scale AI models and<br/>Digital Human to the tech community, and to create services that improve the value and quality of life.`
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
  .question {
    margin: 0 auto;
    .silk {
      position: relative;
      .uq-text {
        img {
          width: 100%;
        }
        .egg {
          position: absolute;
          left: 85%;
          top: 45%;
          transform: translate(0%, 21%);
          height: 45%;
          width: 16%;

          &-item {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            z-index: 0;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            &:nth-of-type(2) {
              right: 115px;
              border: 1px solid #fd5000;
              z-index: 3;
            }
            &:nth-of-type(3) {
              right: 40px;
              border: 1px solid #ffd200;
              z-index: 2;
            }
            &:nth-of-type(4) {
              right: 0;
              background: radial-gradient(
                49.99% 49.99% at 49.99% 49.99%,
                #e31a82 33.87%,
                #4b25b0 100%
              );
              z-index: 1;
            }
          }
        }
      }
    }
    &-content {
      margin-top: 40px;
      word-break: keep-all;
      p:nth-child(1) {
        font-size: 40px;
        line-height: 1.3;
        margin-bottom: 10px;
      }
      p:nth-child(2) {
        font-size: 18px;
        line-height: 1.4;
      }
    }
  }

  @include pc-large {
    .question {
      &-content {
        margin-top: 70px;
        p:nth-child(1) {
          font-size: 54px;
          margin-bottom: 20px;
        }
        p:nth-child(2) {
          font-size: 24px;
        }
      }
    }
    .egg {
      &-item {
        width: 200px;
        height: 200px;
        &:nth-of-type(2) {
          right: 115px;
        }
        &:nth-of-type(3) {
          right: 40px;
        }
      }
      .easter-egg {
        right: 338px;
        width: 200px;
        height: 200px;
      }
    }
  }

  @include pc-4k {
    .question {
      .silk {
        .uq-text {
          &.gl-8 {
            width: getWidth(6) !important;
          }
        }
      }
      &-content {
        p:nth-child(1) {
          font-size: 84px;
        }
        p:nth-child(2) {
          font-size: 38px;
          &.gl-8 {
            width: getWidth(6) !important;
          }
        }
      }
    }
    .egg {
      &-item {
        width: 300px;
        height: 300px;
        &:nth-of-type(2) {
          right: 180px;
        }
        &:nth-of-type(3) {
          right: 69px;
        }
      }
      .easter-egg {
        right: 516px;
        width: 300px;
        height: 300px;
      }
    }
  }

  @media screen and (min-width: 5120px) {
    .question.gl-8 {
      width: getWidth(7) !important;
      margin-left: getMargin(2);
    }
  }

  @include tablet {
    .question {
      &-content {
        margin-top: 40px;
        p:nth-child(1) {
          font-size: 18px;
        }
        p:nth-child(2) {
          font-size: 8px;
        }
      }
    }
    .egg {
      &-item {
        width: 80px;
        height: 80px;
        &:nth-of-type(2) {
          right: 58px;
        }
        &:nth-of-type(3) {
          right: 19px;
        }
      }
      .easter-egg {
        right: 120px;
        width: 80px;
        height: 80px;
      }
    }
  }
  @include mobile {
    .question {
      width: fit-content !important;
      padding: 0 20px;
      max-width: 362px;
      .silk {
        .uq-text {
          &.gl-8 {
            width: 100% !important;
          }
          .egg {
            position: absolute;
            //margin-top: 16px;
            justify-content: center;
            left: 50%;
            top: 50%;
            transform: translate(160%, 130%);

            img {
              position: static;
              transform: translate(0, 0);
              width: auto;
              height: 50px;
            }
          }
        }
      }
      &-content {
        margin-top: 111px;
        p:nth-child(1) {
          font-size: 20px;
          font-weight: 700;
          width: 320px;
        }
        p:nth-child(2) {
          font-size: 14px;
          width: 100% !important;
          &.gl-8 {
            width: 100% !important;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="question gl-8">
    <div class="silk">
      <!-- <img
        src="@/assets/images/main_uq.png"
        alt="Unthinkable Question 텍스트 이미지"
      /> -->
      <div class="uq-text gl-8">
        <img
          src="@/assets/images/main_uq.png"
          alt="Unthinkable Question 텍스트 이미지"
        />
      </div>
      <div class="egg">
        <EasterEgg />
        <div class="egg-item"></div>
        <div class="egg-item"></div>
        <div class="egg-item"></div>
      </div>
    </div>
    <div class="question-content">
      <p>카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다.</p>
      <p class="gl-4">
        우리의 혁신은 차별화된 요소 기술과 빅 모델 및 디지털 휴먼을 완성하는 AI
        프론티어로서 기술 커뮤니티에 기여하고, 사용 가치와 삶의 질을 높이는
        새로운 서비스 영역을 개척합니다.
      </p>
    </div>
  </div>
</template>
<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    components: {
      EasterEgg
    }
  }
</script>
<style lang="scss" scoped>
  .question {
    margin: 0 auto;
    .silk {
      position: relative;
      .uq-text{
        img {
          width: 100%;
        }
      }
    }
    &-content {
      margin-top: 40px;
      padding-left: 20px;
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
  .egg {
    position: absolute;
    right: 0;
    bottom: 0;
    display: inline-flex;
    align-items: center;
    height: 50%;
    .easter-egg {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 180px;
      z-index: 4;
    }
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

  @include pc-large {
    .question {
      &-content {
        margin-top: 70px;
        padding-left: 0;
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
        .uq-text{
          &.gl-8{
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
          font-size: 30px;
        }
        p:nth-child(2) {
          font-size: 18px;
          &.gl-4{
            width: getWidth(8) !important;
          }
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
      width: 100% !important;
      padding: 0 20px;
      &-content {
        margin-top: 50px;
        padding-left: 0;
        p:nth-child(1) {
          font-size: 20px;
        }
        p:nth-child(2) {
          font-size: 14px;
          width: 90% !important;
        }
      }
    }
    .egg {
      position: relative;
      width: 100%;
      height: 50px;
      margin-top: 20px;
      justify-content: flex-end;
      &-item {
        width: 50px;
        height: 50px;
        &:nth-of-type(2) {
          right: 58px;
        }
        &:nth-of-type(3) {
          right: 19px;
        }
      }
      .easter-egg {
        right: 120px;
        width: 50px;
        height: 50px;
      }
    }
  }
</style>

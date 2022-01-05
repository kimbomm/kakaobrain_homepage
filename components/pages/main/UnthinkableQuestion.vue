<template>
  <div class="question gl-8">
    <div class="silk">
      <div>
        <div>
          <span>Unth</span>
          <span class="text-gradient">!</span>
          <span>nkable</span>
        </div>
      </div>
      <div>
        <div>
          <span class="text-gradient">Q</span>
          <span>uestion</span>
        </div>
        <div class="egg">
          <EasterEgg />
          <div class="egg-item"></div>
          <div class="egg-item"></div>
          <div class="egg-item"></div>
        </div>
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
      > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 200px;
        width: 100%;
        span {
          font-family: 'Silk', sans-serif;
          letter-spacing: -40px;
          font-weight: 500;
          font-size: 240px;
          line-height: 200px;
          &.text-gradient {
            // display: inline-block;
            background: linear-gradient(to top, #0e95d6, #e3c718);
            color: transparent;
            -webkit-background-clip: text;
          }
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
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 150px;
    .easter-egg {
      position: absolute;
      top: 0;
      right: 180px;
      z-index: 1;
    }
    &-item {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      z-index: 0;
      position: absolute;
      top: 0;
      &:nth-of-type(2) {
        right: 115px;
        border: 1px solid #fd5000;
      }
      &:nth-of-type(3) {
        right: 40px;
        border: 1px solid #ffd200;
      }
      &:nth-of-type(4) {
        right: 0;
        background: radial-gradient(
          49.99% 49.99% at 49.99% 49.99%,
          #e31a82 33.87%,
          #4b25b0 100%
        );
      }
    }
  }
</style>

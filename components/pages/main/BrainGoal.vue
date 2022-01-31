<template>
  <div class="goal">
    <div class="gl-6">
      <div class="goal-title">
        <span>Unthinkable question makes impactful answer.</span>
      </div>
      <div class="goal-desp">
        <p>
          카카오브레인은 생각하지 못한 물음으로부터 기술을 발전시키고,
          <br />
          모두의 생활을 변화시킵니다.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .goal {
    height: 1500px;
    margin-left: 20px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      &:before {
        content: '';
        display: inline-block;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/images/ic_circle_4.png');
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(0, -50%);
        z-index: 0;
      }
      &:after {
        content: '';
        display: inline-block;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/images/ic_circle_5.png');
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-100%, -50%);
        z-index: 0;
      }
    }
    &-title {
      text-transform: uppercase;
      font-size: 110px;
      line-height: 0.9;
      font-weight: 900;
      color: $surface-1;
      position: relative;
      z-index: 1;
    }
    &-desp {
      margin-top: 100px;
      p {
        text-align: right;
        font-family: 'NotoSansKR', sans-serif;
        font-size: 30px;
        line-height: 1.3;
        color: #fff;
        word-break: keep-all;
      }
    }
  }
  @include pc-large {
    .goal {
      height: 2000px;
      &-title {
        font-size: 146px;
      }
      &-desp {
        p {
          font-size: 40px;
        }
      }
    }
  }
  @include pc-4k {
    .goal {
      height: 3000px;
      > div {
        position: relative;
        &:before {
          width: 500px;
          height: 500px;
        }
        &:after {
          width: 500px;
          height: 500px;
        }
      }
      &-title {
        font-size: 216px;
      }
      &-desp {
        margin-top: 200px;
        p {
          font-size: 62px;
        }
      }
    }
  }
  @include tablet {
    .goal {
      height: 1000px;
      > div {
        position: relative;
        &:before {
          width: 160px;
          height: 160px;
        }
        &:after {
          width: 160px;
          height: 160px;
        }
      }
      &-title {
        font-size: 60px;
      }
      &-desp {
        margin-top: 60px;
        p {
          font-size: 20px;
        }
      }
    }
  }
  @include mobile {
    .goal {
      height: 670px;
      margin-left: 0;
      > div {
        position: relative;
        &:before {
          width: 118px;
          height: 118px;
          transform: translate(0, -120%);
        }
        &:after {
          width: 118px;
          height: 118px;
          transform: translate(-100%, -120%);
        }
      }
      &-title {
        font-size: 30px;
      }
      &-desp {
        margin-top: 20px;
        p {
          font-size: 14px;
        }
        br {
          display: none;
        }
      }
    }
  }
</style>

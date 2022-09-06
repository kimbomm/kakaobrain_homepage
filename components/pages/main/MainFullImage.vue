<template>
  <div class="full-image">
    <div>
      <!-- <img src="@/assets/images/main_img_dummy.jpeg" /> -->
    </div>
    <div>
      <span>Core Value → </span>
      <span class="s-weight">¹</span><span>outstanding</span>
      <span class="s-weight">²</span><span>actualized</span>
      <span class="s-weight">³</span><span>open</span>
      <span class="s-weight">⁴</span><span>impactful</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .full-image {
    padding-left: 20px;
    font-size: 0;
    > div {
      &:nth-child(1) {
        position: relative;
        height: 1500px;
        background-image: url('@/assets/images/main_img_dummy.jpeg');
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
      }
      &:nth-child(2) {
        margin-left: getMargin(2);
        margin-top: 20px;
        span {
          font-weight: 600;
          font-size: 40px;
          line-height: 1.1;
          &.s-weight {
            font-weight: 100;
          }
        }
      }
    }
  }
  @include pc-large {
    .full-image {
      > div {
        &:nth-child(1) {
          height: 2000px;
        }
        &:nth-child(2) {
          span {
            font-size: 48px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .full-image {
      > div {
        &:nth-child(1) {
          height: 3000px;
        }
        &:nth-child(2) {
          margin-top: 40px;
          span {
            font-size: 72px;
          }
        }
      }
    }
  }
  @include tablet {
    .full-image {
      > div {
        &:nth-child(1) {
          height: 1000px;
        }
        &:nth-child(2) {
          margin-top: 20px;
          span {
            font-size: 20px;
          }
        }
      }
    }
  }
  @include mobile {
    .full-image {
      padding: 0 20px;
      > div {
        &:nth-child(1) {
          height: 470px;
        }
        &:nth-child(2) {
          margin-left: 0;
          margin-top: 10px;
          span {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>

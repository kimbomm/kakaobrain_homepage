<template>
  <div class="full-image">
    <div>
      <img src="@/assets/images/main_img_dummy.jpeg" />
    </div>
    <div class="gl-8 l-ml-2">
      <span>Core Value → ¹outstanding²actualized³open⁴impactful</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  // @import '/assets/scss/functions.scss';
  @import '/assets/scss/mixins.scss';
  .full-image {
    padding: 0 20px;
    > div {
      &:nth-child(1) {
        position: relative;
        height: 1500px;
        img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          max-width: 100%;
          max-height: 100%;
        }
      }
      &:nth-child(2) {
        margin-top: 20px;
        font-weight: 600;
        font-size: 40px;
        line-height: 1.1;
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
          font-size: 48px;
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
          font-size: 72px;
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
          font-size: 20px;
        }
      }
    }
  }
  @include mobile {
    .full-image {
      padding: 0;
      > div {
        &:nth-child(1) {
          height: 470px;
        }
        &:nth-child(2) {
          width: 100% !important;
          margin-left: 0 !important;
          margin-top: 10px;
          font-size: 12px;
        }
      }
    }
  }
</style>

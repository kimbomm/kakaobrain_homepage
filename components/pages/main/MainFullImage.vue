<template>
  <div class="full-image">
    <div>
      <!-- <img src="@/assets/images/main_img_dummy.jpeg" /> -->
    </div>
    <div class="gl-8 l-ml-2">
      <span>Core Value → <span class="s-weight">¹</span>outstanding<span class="s-weight">²</span>actualized<span class="s-weight">³</span>open<span class="s-weight">⁴</span>impactful</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .full-image {
    padding-left: 20px;
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
        margin-top: 20px;
        font-weight: 600;
        font-size: 40px;
        line-height: 1.1;
      }
    }
    .s-weight{
      font-weight:100;
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
      padding: 0 20px;
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

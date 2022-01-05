<template>
  <div class="full-image">
    <div>
      <img src="@/assets/images/main_img_dummy.jpeg" />
    </div>
    <div class="gl-6">
      <span>Core Value → ¹outstanding²actualized³open⁴impactful</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .full-image {
    padding-left: 20px;
    > div {
      &:nth-child(1) {
        img {
          width: 100%;
        }
      }
      &:nth-child(2) {
        margin: 20px auto 0;
        font-weight: 600;
        font-size: 40px;
        line-height: 1.1;
      }
    }
  }
</style>

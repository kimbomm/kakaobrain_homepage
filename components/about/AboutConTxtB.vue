<template>
  <div class="about-con-txt-b gl-5 l-ml-3">
    <p v-html="data.text"></p>
  </div>
</template>
<script>
  export default {
    name: 'AboutConTxtB',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .about-con-txt-b {
    padding: 0 20px;
    line-height: 130%;
    font-size: 30px;
  }
  @include pc-large {
    .about-con-txt-b {
      font-size: 40px;
    }
  }
  @include pc-4k {
    .about-con-txt-b {
      font-size: 60px;
    }
  }
  @include tablet {
    .about-con-txt-b {
      font-size: 18px;
    }
  }
  @include mobile {
    .about-con-txt-b {
      font-size: 16px;
      &.l-ml-3 {
        margin-left: getMargin(1) !important;
      }
      &.gl-5 {
        width: getWidth(9) !important;
      }
    }
  }
</style>

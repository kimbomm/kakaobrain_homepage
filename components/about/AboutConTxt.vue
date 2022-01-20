<template>
  <div class="about-con-txt gl-6 l-ml-3">
    People looking for unexpected answers from unthinkable questions, kakaobrain
    krews share with you the new journey and stories they are making with AI.
  </div>
</template>
<script>
  export default {
    name: 'AboutConTxt'
  }
</script>
<style lang="scss" scoped>
  .about-con-txt {
    padding: 0 20px;
    line-height: 130%;
    font-size: 30px;
  }
  @include pc-large {
    .about-con-txt {
      font-size: 40px;
    }
  }
  @include pc-4k {
    .about-con-txt {
      font-size: 60px;
    }
  }
  @include tablet {
    .about-con-txt {
      font-size: 18px;
    }
  }
  @include mobile {
    .about-con-txt {
      font-size: 16px;
      &.l-ml-3 {
        margin-left: getMargin(1) !important;
      }
      &.gl-6 {
        width: getWidth(9) !important;
      }
    }
  }
</style>

<template>
  <div class="about-con-sub-txt3 gl-6 l-ml-3">
    <div v-html="data.text"></div>
  </div>
</template>
<script>
  export default {
    name: 'AboutConSubTxt3',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .about-con-sub-txt3 {
    padding: 0 20px;
    line-height: 130%;
    font-size: 20px;
  }
  @include pc-large {
    .about-con-sub-txt3 {
      font-size: 40px;
    }
  }
  @include pc-4k {
    .about-con-sub-txt3 {
      font-size: 60px;
    }
  }
  @include tablet {
    .about-con-sub-txt3 {
      font-size: 18px;
    }
  }
  @include mobile {
    .about-con-sub-txt3 {
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

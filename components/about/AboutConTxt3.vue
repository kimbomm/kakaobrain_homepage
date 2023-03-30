<template>
  <div class="about-con-txt3 gl-6 l-ml-3">
    <div v-html="data.text"></div>
  </div>
</template>

<script>
  export default {
    name: 'AboutConTxt3',
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
  .about-con-txt3 {
    padding: 0 0 0 20px;
    line-height: 130%;
    font-size: 30px;
  }
  @include pc-large {
    .about-con-txt3 {
      font-size: 40px;
      padding-bottom: 30px;
    }
  }
  @include pc-4k {
    .about-con-txt3 {
      font-size: 60px;
      padding-bottom: 200px;
    }
  }
  @include tablet {
    .about-con-txt3 {
      font-size: 18px;
    }
  }
  @include mobile {
    .about-con-txt3 {
      font-size: 16px;

      &.l-ml-3 {
        margin-left: getMargin(1) !important;
        margin-bottom: 50px;
      }
      &.gl-6 {
        width: getWidth(9) !important;
      }
    }
  }
</style>

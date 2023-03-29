<template>
  <div class="about-con-txt gl-6 l-ml-3">
    <p v-html="data.text"></p>
  </div>
</template>

<script>
  export default {
    name: 'AboutConTxt',
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
  .about-con-txt {
    padding: 0 0 0 20px;
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

<template>
  <div class="about-con-sub-tit l-ml-3">
    <p v-html="data.title"></p>
  </div>
</template>
<script>
  export default {
    name: 'AboutConSubTit',
    props: {
      data: {
        type: Object,
        default: () => [],
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

  .about-con-sub-tit {
    line-height: 110%;
    padding: 0 20px;
    font-size: 40px;
    font-weight: 600;
  }

  @include pc-large {
    .about-con-sub-tit {
      font-size: 52px;
    }
  }
  @include pc-4k {
    .about-con-sub-tit {
      font-size: 72px;
      padding-bottom: 60px;
    }
  }

  @include tablet {
    .about-con-sub-tit {
      font-size: 24px;
    }
  }
  @include mobile {
    .about-con-sub-tit {
      &.l-ml-3 {
        margin-left: getMargin(1) !important;
      }
      font-size: 20px;
    }
  }
</style>

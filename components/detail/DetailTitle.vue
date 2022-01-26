<template>
  <div class="monthly l-ml-2">
    <div class="detail gl-6">
      <div class="detail-title">{{ text }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DtaileTitle',
    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
      type: {
        type: String,
        default: '',
        required: false
      },
      ml: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .detail {
    margin-bottom: 60px;
    &-title {
      line-height: 120%;
      font-size: 90px;
      font-weight: 900;
      word-break: keep-all;
    }
  }

  @include pc-large {
    .detail {
      margin-bottom: 100px;
      &-title {
        font-size: 120px;
      }
    }
  }

  @include pc-4k {
    .detail {
      margin-bottom: 150px;
      &-title {
        font-size: 180px;
      }
    }
  }
  @include tablet {
    .detail {
      margin-bottom: 40px;
      &-title {
        font-size: 50px;
      }
    }
  }

  @include mobile {
    .detail {
      padding: 0 20px;
      margin-bottom: 20px;
      &-title {
        font-size: 30px;
      }
    }
    .gl-6 {
      width: 100% !important;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

<template>
  <div class="detail-title">{{ text }}</div>
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
  .detail-title {
    margin-left: getMargin(2);
    width: getWidth(6);
    line-height: 120%;
    font-size: 90px;
    font-weight: 900;
    word-break: keep-all;
  }

  @include pc-large {
    .detail-title {
      font-size: 120px;
    }
  }

  @include pc-4k {
    .detail-title {
      font-size: 180px;
    }
  }
  @include tablet {
    .detail-title {
      font-size: 50px;
    }
  }

  @include mobile {
    .detail-title {
      width: 100%;
      margin-left: 0;
      font-size: 30px;
    }
  }
</style>

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
    margin-bottom: 60px;
    width: getWidth(6);
    line-height: 120%;
    font-size: 90px;
    font-weight: 900;
    word-break: keep-all;
  }

  @include pc-large {
    .detail-title {
      font-size: 120px;
      margin-bottom: 100px;
    }
  }

  @include pc-4k {
    .detail-title {
      font-size: 180px;
      margin-bottom: 150px;
    }
  }
  @include tablet {
    .detail-title {
      font-size: 50px;
      margin-bottom: 40px;
    }
  }

  @include mobile {
    .detail-title {
      width: 100%;
      margin-left: 0;
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
</style>

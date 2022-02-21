<template>
  <div class="detail-subTit">{{ data.text }}</div>
</template>
<script>
  export default {
    name: 'DtaileTitle',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      },
      text: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail-subTit {
    width: getWidth(5);
    margin-left: getMargin(3);
    line-height: 130%;
    font-weight: 900;
    font-size: 40px;
    line-height: 1.3;
    margin-bottom: calc(40px * 1.3);
  }

  @include pc-large {
    .detail-subTit {
      font-size: 52px;
      margin-bottom: calc(52px * 1.3);
    }
  }

  @include pc-4k {
    .detail-subTit {
      font-size: 78px;
      margin-bottom: calc(78px * 1.3);
    }
  }

  @include tablet {
    .detail-subTit {
      font-size: 32px;
      margin-bottom: calc(32px * 1.3);
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .detail-subTit {
      width: 100%;
      margin-left: 0;
      font-size: 26px;
      margin-bottom: calc(26px * 1.3);
    }
  }
</style>

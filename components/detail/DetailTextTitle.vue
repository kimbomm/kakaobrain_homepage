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
    font-size: map-get($font, h2);
    line-height: 1.3;
    margin-bottom: calc(#{map-get($font, h2)}* 1.3);
  }

  @include pc-large {
    .detail-subTit {
      font-size: map-get($font-large, h2);
      margin-bottom: calc(#{map-get($font-large, h2)} * 1.3);
    }
  }

  @include pc-4k {
    .detail-subTit {
      font-size: map-get($font-4k, h2);
      margin-bottom: calc(#{map-get($font-4k, h2)} * 1.3);
    }
  }

  @include tablet {
    .detail-subTit {
      font-size: map-get($font-tablet, h2);
      margin-bottom: calc(#{map-get($font-tablet, h2)} * 1.3);
      margin-left: getMargin(2);
    }
  }
  @include mobile {
    .detail-subTit {
      width: 100%;
      margin-left: 0;
      font-size: map-get($font-mobile, h2);
      margin-bottom: calc(#{map-get($font-mobile, h2)} * 1.3);
    }
  }
</style>

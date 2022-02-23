<template>
  <div :class="classBind">{{ text }}</div>
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
      contentProp: {
        type: Object
      }
    },
    computed: {
      classBind() {
        let classList = ['detail-title']
        if (
          this.contentProp &&
          Object.keys(this.contentProp).includes('isTitleH2') &&
          this.contentProp.isTitleH2
        ) {
          classList.push('detail-title__h2')
        }
        return classList.join(' ')
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
    font-size: map-get($font, h1);
    font-weight: 900;
    word-break: keep-all;
    &__h2 {
      font-size: map-get($font, h1-sub);
    }
  }

  @include pc-large {
    .detail-title {
      font-size: map-get($font-large, h1);
      margin-bottom: 100px;
      &__h2 {
        font-size: map-get($font-large, h1-sub);
      }
    }
  }

  @include pc-4k {
    .detail-title {
      font-size: map-get($font-4k, h1);
      margin-bottom: 150px;
      &__h2 {
        font-size: map-get($font-4k, h1-sub);
      }
    }
  }
  @include tablet {
    .detail-title {
      font-size: map-get($font-tablet, h1);
      margin-bottom: 40px;
      &__h2 {
        font-size: map-get($font-tablet, h1-sub);
      }
    }
  }

  @include mobile {
    .detail-title {
      width: 100%;
      margin-left: 0;
      font-size: map-get($font-mobile, h1);
      margin-bottom: 20px;
      &__h2 {
        font-size: map-get($font-mobile, h1-sub);
      }
    }
  }
</style>

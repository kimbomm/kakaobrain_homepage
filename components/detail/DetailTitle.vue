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
          Object.keys(this.contentProp).includes('isTitleH2')
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
    font-size: 90px;
    font-weight: 900;
    word-break: keep-all;
    &__h2 {
      font-size: 40px;
    }
  }

  @include pc-large {
    .detail-title {
      font-size: 120px;
      margin-bottom: 100px;
      &__h2 {
        font-size: 52px;
      }
    }
  }

  @include pc-4k {
    .detail-title {
      font-size: 180px;
      margin-bottom: 150px;
      &__h2 {
        font-size: 78px;
      }
    }
  }
  @include tablet {
    .detail-title {
      font-size: 50px;
      margin-bottom: 40px;
      &__h2 {
        font-size: 32px;
      }
    }
  }

  @include mobile {
    .detail-title {
      width: 100%;
      margin-left: 0;
      font-size: 30px;
      margin-bottom: 20px;
      &__h2 {
        font-size: 26px;
      }
    }
  }
</style>

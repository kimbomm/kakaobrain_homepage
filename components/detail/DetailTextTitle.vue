<template>
  <div class="monthly l-ml-3">
    <div class="detail gl-5">
      <div class="detail-subTit">{{ data.text }}</div>
    </div>
  </div>
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
  @import '@/assets/scss/mixins.scss';

  .detail {
    margin-bottom: 30px;
    &-subTit {
      line-height: 130%;
      font-size: 40px;
      font-weight: 900;
    }
  }

  @include pc-large {
    .detail {
      &-subTit {
        font-size: 52px;
      }
    }
  }

  @include pc-4k {
    .detail {
      &-subTit {
        font-size: 78px;
      }
    }
  }

  @include tablet {
    .detail {
      &-subTit {
        font-size: 32px;
      }
    }
    .l-ml-3 {
      margin-left: calc(
        calc((100vw - 20px * 11) / 10) * 2 + 20px * 2
      ) !important;
    }
  }
  @include mobile {
    .detail {
      // padding: 0 20px;
      &-subTit {
        font-size: 26px;
      }
    }
    .gl-5 {
      width: 100% !important;
    }
    .l-ml-3 {
      margin-left: 0px !important;
    }
  }
</style>

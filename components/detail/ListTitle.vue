<template>
  <div class="monthly l-ml-2">
    <div class="list gl-6">
      <div class="list-title">{{ text }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ListTitle',
    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .list {
    margin-bottom: 60px;
    &-title {
      line-height: 120%;
      font-size: 90px;
      font-weight: 900;
      word-break: keep-all;
    }
  }

  @include pc-4k {
    .list {
      margin-bottom: 120px !important;
      &-title {
        font-size: 164px !important;
      }
    }
  }
  @include pc-large {
    .list {
      margin-bottom: 80px;
      &-title {
        font-size: 110px;
      }
    }
  }
  @include tablet {
    .list {
      margin-bottom: 40px;
      &-title {
        font-size: 50px;
      }
    }
  }

  @include mobile {
    .list {
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

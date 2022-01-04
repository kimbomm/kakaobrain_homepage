<template>
  <div class="monthly l-ml-3">
    <div :class="`detail ${type}`">
      <div class="detail-item">{{ text }}</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailTextItem',
    props: {
      text: { type: String, default: '', required: true },
      type: { type: String, default: '', required: false }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    margin-bottom: 10px;
    .detail {
      &-item {
        line-height: 150%;
        font-size: 16px;
        font-weight: 400;
        &::before {
          content: '❖';
          display: inline-block;
          margin-right: 5px;
        }
      }
    }
  }

  @include mobile {
    .l-ml-3 {
      margin-left: 0px !important;
    }
  }

  //----------------------------------------
  // .monthly {
  //   margin-bottom: 10px;
  //   .detail {
  //     &-item {
  //       line-height: 150%;
  //       font-size: 16px;
  //       font-weight: 400;
  //       &::before {
  //         content: '❖';
  //         display: inline-block;
  //         margin-right: 5px;
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 768px) {
  //   .l-ml-3 {
  //     margin-left: 0px !important;
  //   }
  // }
</style>

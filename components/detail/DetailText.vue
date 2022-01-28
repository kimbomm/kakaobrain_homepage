<template>
  <div class="monthly l-ml-3">
    <div class="detail gl-5">
      <div class="detail-text">
        <p
          v-if="data.itemType === 'pagaraph'"
          v-html="data.text.replaceAll('\n', '<br />')"
        ></p>
        <a v-else :href="data.codeLinks.linkUrl" target="_blank">{{
          data.codeLinks.title
        }}</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'DetailText',
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    margin-bottom: 30px;
    .detail {
      &-text {
        line-height: 150%;
        font-size: 16px;
        font-weight: 400;
      }
      a {
        text-decoration: underline;
      }
    }
  }

  @include pc-large {
    .monthly {
      .detail {
        &-text {
          font-size: 22px;
        }
      }
    }
  }

  @include pc-4k {
    .monthly {
      .detail {
        &-text {
          font-size: 32px;
        }
      }
    }
  }

  @include tablet {
    .monthly {
      .detail {
        &-text {
          font-size: 14px;
        }
      }
    }
    .l-ml-3 {
      margin-left: getMargin(2) !important;
    }
    .gl-5 {
      width: getWidth(6) !important;
    }
  }

  @include mobile {
    .monthly {
      padding: 0 20px;
      .detail {
        &-text {
          font-size: 16px;
        }
      }
    }
    .gl-5 {
      width: 100% !important;
    }
    .l-ml-3 {
      margin-left: 0 !important;
    }
  }
</style>

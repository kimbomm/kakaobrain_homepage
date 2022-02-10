<template>
  <div class="slogan gl-7 l-ml-2">
    <div class="slogan-title">
      <span>{{ data.title }}</span>
    </div>
    <div class="slogan-text">
      <template v-for="(item, idx) in data.text">
        <span :key="idx" :class="item.bold ? 'txt-b' : ''">{{
          item.content
        }}</span>
      </template>
    </div>
    <div class="slogan-desp">
      <p>{{ data.desp }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        require: true,
        default: () => {}
      }
    },
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .slogan {
    &-title {
      font-size: 16px;
      margin-bottom: 100px;
    }
    &-text {
      word-break: keep-all;
      margin-bottom: 40px;
      span {
        font-size: 120px;
        font-weight: 100;
        font-style: italic;
        &.txt-b {
          font-weight: 900;
          font-style: normal;
        }
      }
    }
    &-desp {
      font-size: 20px;
      line-height: 1.3;
    }
  }
  @include pc-large {
    .slogan {
      &-title {
        font-size: 22px;
      }
      &-text {
        span {
          font-size: 160px;
        }
      }
      &-desp {
        font-size: 26px;
      }
    }
  }
  @include pc-4k {
    .slogan {
      &-title {
        font-size: 34px;
        margin-bottom: 200px;
      }
      &-text {
        margin-bottom: 70px;
        span {
          font-size: 242px;
        }
      }
      &-desp {
        font-size: 38px;
      }
    }
  }
  @include tablet {
    .slogan {
      width: getWidth(8) !important;
      &-title {
      }
      &-text {
        span {
          font-size: 60px;
        }
      }
      &-desp {
      }
    }
  }
  @include mobile {
    .slogan {
      margin-left: 0 !important;
      width: 100% !important;
      padding: 0 20px;
      &-title {
        font-size: 12px;
        margin-bottom: 40px;
      }
      &-text {
        margin-bottom: 20px;
        span {
          font-size: 38px;
        }
      }
      &-desp {
        font-size: 14px;
      }
    }
  }
</style>

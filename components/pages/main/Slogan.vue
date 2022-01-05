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
    <div class="slogan-desp gl-3">
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
    padding: 0 20px;
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
</style>

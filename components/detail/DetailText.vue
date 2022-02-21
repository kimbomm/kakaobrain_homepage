<template>
  <div class="detail-text">
    <p
      v-if="data.itemType === 'pagaraph'"
      v-html="data.text.replace(/\n/g, '<br />')"
    ></p>
    <a v-else :href="data.codeLinks.linkUrl" target="_blank">{{
      data.codeLinks.title
    }}</a>
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
  .detail-text {
    width: getMargin(5);
    margin-left: getMargin(3);
    line-height: 150%;
    font-size: 16px;
    font-weight: 400;
    word-break: keep-all;
    a {
      text-decoration: underline;
    }
  }

  @include pc-large {
    .detail-text {
      font-size: 22px;
    }
  }

  @include pc-4k {
    .detail-text {
      font-size: 32px;
    }
  }

  @include tablet {
    .detail-text {
      width: getWidth(6);
      margin-left: getMarin(2);
      font-size: 14px;
    }
  }

  @include mobile {
    .detail-text {
      width: 100%;
      margin-left: 0;
      font-size: 16px;
    }
  }
</style>

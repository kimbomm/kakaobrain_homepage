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
    },
    mounted() {
      console.log(this.data.text)
    }
  }
</script>
<style lang="scss" scoped>
  .detail-text {
    width: getMargin(5);
    margin-left: getMargin(3);
    line-height: 150%;
    font-size: map-get($font, defualt);
    font-weight: 400;
    word-break: keep-all;
    a {
      text-decoration: underline;
    }
  }

  @include pc-large {
    .detail-text {
      font-size: map-get($font-large, defualt);
    }
  }

  @include pc-4k {
    .detail-text {
      font-size: map-get($font-4k, defualt);
    }
  }

  @include tablet {
    .detail-text {
      width: getWidth(6);
      margin-left: getMargin(2);
      font-size: map-get($font-tablet, defualt);
    }
  }

  @include mobile {
    .detail-text {
      width: 100%;
      margin-left: 0;
      font-size: map-get($font-mobile, defualt);
    }
  }
</style>

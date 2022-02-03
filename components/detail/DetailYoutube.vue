<template>
  <div class="youtube">
    <iframe
      :src="`https://www.youtube.com/embed/${data.itemProp.youtube.id}`"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  .youtube {
    position: relative;
    width: getWidth(6);
    padding-top: 33%;
    margin: 100px auto;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

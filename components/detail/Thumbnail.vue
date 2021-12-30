<template>
  <div class="monthly">
    <div :class="`detail-thumbnail gl-9`">
      <img
        :src="
          srcPath
            ? require(`${this.srcPath}`)
            : require(`@/assets/images/monthly_img_1.png`)
        "
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Thumbnail',
    props: {
      srcPath: {
        type: String,
        default: '',
        required: false
      },
      type: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail {
    &-thumbnail {
      img {
        width: 100%;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .gl-9 {
      width: 100% !important;
    }
  }
</style>

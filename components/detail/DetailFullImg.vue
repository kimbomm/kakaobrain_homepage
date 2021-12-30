<template>
  <div class="monthly">
    <div class="detail-image">
      <img
        :src="
          srcPath
            ? require(`${this.srcPath}`)
            : require(`@/assets/images/detail_img_2.png`)
        "
      />
    </div>
    <div class="detail-text">{{ text }}</div>
  </div>
</template>
<script>
  export default {
    name: 'DetailImg',
    props: {
      srcPath: {
        type: String,
        default: '',
        required: false
      },
      text: {
        type: String,
        default: '',
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .monthly {
    margin-bottom: 300px;
    .detail {
      &-image {
        img {
          width: 100%;
        }
      }
      &-text {
        margin-top: 10px;
        line-height: 150%;
        font-size: 12px;
        font-weight: 400;
        color: $gray-5;
      }
    }
  }
  @media screen and (max-width: 2560px) {
    .monthly {
      margin-bottom: 200px;
      .detail {
        &-text {
          font-size: 16px;
        }
      }
    }
  }
  @media screen and (max-width: 1920px) {
    .monthly {
      margin-bottom: 100px;
      .detail {
        &-text {
          font-size: 12px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .monthly {
      .detail {
        &-text {
          margin-top: 6px;
          font-size: 12px;
        }
      }
    }
  }
</style>

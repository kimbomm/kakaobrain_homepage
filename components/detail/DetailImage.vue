<template>
  <div v-if="isPc || isMob" :class="classBind">
    <div class="image">
      <img :src="srcPath" />
    </div>
    <div v-if="!this.isThumbnail && data.text" class="detail-text">
      {{ data.text }}
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      },
      isThumbnail: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        srcPath: null
      }
    },
    computed: {
      classBind() {
        return {
          'detail-image': true,
          'detail-image__thumbnail': this.isThumbnail,
          'detail-image__default':
            !this.isThumbnail && this.data.itemProp.imageAlign !== 'full'
        }
      },
      isPc() {
        return this.data.Media && window.innerWidth > 768
      },
      isMob() {
        return this.data.MobileMedia && window.innerWidth <= 768
      }
    },
    mounted() {
      this.setImagePath()
      window.addEventListener('resize', this.setImagePath)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setImagePath)
    },
    methods: {
      setImagePath() {
        let path = this.$config.baseURL

        if (window.innerWidth >= 768) {
          if (this.data.Media) {
            path += this.data.Media.url
          } else if (this.data.MobileMedia) {
            path += this.data.MobileMedia.url
          }
        } else {
          if (this.data.MobileMedia) {
            path += this.data.MobileMedia.url
          } else if (this.data.Media) {
            path += this.data.Media.url
          }
        }
        this.srcPath = path
      }
    }
  }
</script>
<style lang="scss" scoped>
  .detail-image {
    padding: 0 20px;
    margin-bottom: 100px;
    &__thumbnail {
      padding: 0;
      margin-bottom: 0;
      width: getWidth(9);
      .image {
        height: 600px;
      }
    }
    &__default {
      width: getWidth(7);
      padding: 0;
      margin-top: 50px;
      margin-left: getMargin(2);
    }
    img {
      width: 100%;
    }
  }
  .detail-text {
    margin-top: 10px;
    line-height: 150%;
    font-size: 12px;
    font-weight: 400;
    color: $gray-5;
  }

  @include pc-large {
    .detail-image {
      margin-bottom: 200px;
      &__thumbnail {
        .image {
          height: 804px;
        }
      }
      &__default {
        margin-top: 200px;
      }
    }
    .detail-text {
      font-size: 16px;
    }
  }
  @include pc-4k {
    .detail-image {
      margin-bottom: 300px;
      &__thumbnail {
        .image {
          height: 1206px;
        }
      }
      &__default {
        margin-top: 300px;
      }
    }
    .detail-text {
      font-size: 12px;
    }
  }
  @include tablet {
    .detail-image {
      &__thumbnail {
        .image {
          height: 330px;
        }
      }
      &__default {
        width: getWidth(6);
      }
    }
    .detail-text {
      margin-top: 6px;
      font-size: 12px;
    }
  }
  @include mobile {
    .detail-image {
      padding: 0;
      &__thumbnail {
        width: 100%;
        .image {
          height: 330px;
        }
      }
      &__default {
        width: 100%;
        margin-left: 0;
      }
    }
    .detail-text {
      padding: 0 20px;
    }
  }
</style>

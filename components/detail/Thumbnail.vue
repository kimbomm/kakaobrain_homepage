<template>
  <div class="monthly">
    <div :class="`detail-thumbnail gl-9`">
      <img :src="srcPath" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Thumbnail',
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        srcPath: null
      }
    },
    computed: {
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
        let path = 'https://kakaobrain.loadingworks.com'

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
  @import '@/assets/scss/mixins.scss';

  .monthly {
    .detail {
      &-thumbnail {
        margin-bottom: 60px;
        img {
          width: 100%;
        }
      }
    }
  }

  @include pc-4k {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom: 145px !important;
        }
      }
    }
  }
  @include pc-large {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom: 100px;
        }
      }
    }
  }

  @include tablet {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom: 100px;
        }
      }
    }
  }
  @include mobile {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom: 60px;
        }
      }
    }

    .gl-9 {
      width: 100% !important;
    }
  }
</style>

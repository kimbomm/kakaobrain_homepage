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
  @import '@/assets/scss/mixins.scss';

  .monthly {
    .detail {
      &-thumbnail {
        margin-bottom:60px;
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
          margin-bottom:145px !important;
        }
      }
    }
  }
  @include pc-large {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom:100px;
        }
      }
    }
  }
  
  @include tablet {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom:100px;
        }
      }
    }
  }
  @include mobile {
    .monthly {
      .detail {
        &-thumbnail {
          margin-bottom:60px;
        }
      }
    }
    
    .gl-9 {
      width: 100% !important;
    }
  }

  //----------------------------

  // .detail {
  //   &-thumbnail {
  //     img {
  //       width: 100%;
  //     }
  //   }
  // }
  // @media screen and (max-width: 768px) {
  //   .gl-9 {
  //     width: 100% !important;
  //   }
  // }
</style>

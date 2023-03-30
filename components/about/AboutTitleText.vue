<template>
  <div class="about-title-text">
    <div class="txt-con">
      <div class="txt" v-html="data.text"></div>
    </div>
    <div class="txt-scroll">
      <span> scroll</span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutTitleText',
    props: {
      // text:{
      //   type:String,
      //   default:'',
      //   required:true
      // }
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  .about-title-text {
    width: getWidth(6);
    margin-left: getMargin(3);
    .txt-con {
      margin-bottom: 60px;
    }
    .txt {
      line-height: 150%;
      font-size: 16px;
    }
    .txt-scroll {
      line-height: 150%;
      font-size: 16px;
    }
  }
  @include pc-large {
    .about-title-text {
      .txt-con {
        margin-bottom: 80px;
      }
      .txt {
        font-size: 22px;
      }
      .txt-scroll {
        font-size: 22px;
      }
    }
  }

  @include pc-4k {
    .about-title-text {
      .txt-con {
        margin-bottom: 130px;
      }
      .txt {
        font-size: 32px;
      }
      .txt-scroll {
        font-size: 32px;
      }
    }
  }

  @include tablet {
    .about-title-text {
      width: getWidth(5);
      margin-left: getMargin(2);
      .txt-con {
        margin-bottom: 60px;
      }
      .txt {
        font-size: 12px;
        br {
          display: none;
        }
      }
      .txt-scroll {
        font-size: 16px;
      }
    }
  }
  @include mobile {
    .about-title-text {
      width: auto;
      margin-left: getMargin(1);
      .txt-con {
        margin-bottom: 40px;
      }
      .txt {
        font-size: 14px;
      }
      .txt-scroll {
        font-size: 16px;
      }
    }
  }
</style>

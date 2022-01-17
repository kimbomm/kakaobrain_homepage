<template>
  <div class="about-title-text gl-5 l-ml-3">
    <div class="txt-con">
      <div class="txt">{{Atext}}</div>
      <div class="txt">{{Btext}}</div>
      <div class="txt">{{Ctext}}</div>
    </div>
    <div class="txt-scroll">
      <nuxt-link to="" > scroll</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutTitleText',
  props:{
    Atext:{
      type:String,
      default:'',
      required:true,
    },
    Btext:{
      type:String,
      default:'',
      required:true,
    },
    Ctext:{
      type:String,
      default:'',
      required:true,
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .about-title-text{
    padding: 0 20px;
    .txt-con{
      margin-bottom:60px;
    }
    .txt{
      line-height: 150%;
      font-size:16px;
    }
    .txt-scroll{
      line-height: 150%;
      font-size:16px;
    }
  }
  @include pc-4k {
    .about-title-text{
      .txt-con{
        margin-bottom:130px !important;
      }
      .txt{
        font-size:32px !important;
      }
      .txt-scroll{
        font-size:32px !important;
      }
    }
  }
  @include pc-large {
    .about-title-text{
      .txt-con{
        margin-bottom:80px;
      }
      .txt{
        font-size:22px;
      }
      .txt-scroll{
        font-size:22px;
      }
    }
  }
  @include tablet {
    .about-title-text{
      .txt-con{
        margin-bottom:60px;
      }
      .txt{
        font-size:16px;
      }
      .txt-scroll{
        font-size:16px;
      }
    }
    .gl-5{
      width: getWidth(6) !important;
    }
    .l-ml-3{
      margin-left: getMargin(2) !important;
    }
  }
  @include mobile {
    .about-title-text{
      .txt-con{
        margin-bottom:40px;
      }
      .txt{
        font-size:14px;
      }
      .txt-scroll{
        font-size:14px;
      }
    }
    
    .gl-5{
      width: getWidth(9) !important;
    }
    .l-ml-3{
      margin-left: getMargin(1) !important;
    }
  }
</style>



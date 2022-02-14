<template>
  <div class="about-large-logo l-ml-2">
    <div class="tit">Word mark</div>
    <img src="@/assets/images/kakao-logo-large.png">
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scped>
  @import '@/assets/scss/mixins.scss';
  .about-large-logo{
    max-width:1120px;
    padding: 0 20px;
    .tit{
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 130%;
      color:$surface-8;
    }
    img{
      width:100%;
    }
  }

  @include pc-large {
    .about-large-logo{
      max-width:1504px;
      .tit{
        margin-bottom: 20px;
        font-size: 20px;
      }
    }

  }
  @include pc-4k {
    .about-large-logo{
      max-width:2272px !important;
      .tit{
        margin-bottom: 20px;
        font-size: 30px !important;
      }
    }
  }
  @include tablet {
    .about-large-logo{
      max-width:582px;
      .tit{
        font-size: 14px;
      }
    }

  }
  @include mobile {
    .about-large-logo{
      width:100% !important;
      // width:320px;
      // height:80px ;
      &.l-ml-2{
        margin-left:0px !important;
      }
      .tit{
        font-size: 14px;
      }
    }

  }
</style>
<template>
  <div class="about-title l-ml-2">
    <div class="tit gl-8">{{text}}<div class="string">{{bold}}</div></div>
  </div>
</template>
<script>
export default {
  name:'AboutTitle',
  props:{
    text:{
      type:String,
      default:'',
      required: true
    },
    bold:{
      type:String,
      default:'',
      required: true
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title{
    padding: 0 20px;
    .tit{
      position: relative;
      line-height: 90%;
      font-size:200px;
      font-weight:100;
      .string{
        font-weight:900;
      }
      &::before{
        content:"";
        position: absolute;
        left:40%;
        top:50%;
        width:150px;
        height:150px;
        transform: translate(-50%, -50%);
        background: url('@/assets/images/about-tit_img.png') no-repeat;
        background-size: 100%;
        border-radius: 50%;
        box-shadow:-30px 50px 80px rgba(0,0,0,0.5);
      }
    }
  }
  @include pc-4k {
    .about-title{
      .tit{
        font-size:400px !important;
        &::before{
          width:300px !important;
          height:300px !important;
        }
      }
    }
  }
  @include pc-large {
    
    .about-title{
      .tit{
        font-size:267px;
        &::before{
          width:200px;
          height:200px;
        }
      }
    }
  }
  @include tablet {
  
    .about-title{
      .tit{
        font-size:106px;
        &::before{
          width:80px;
          height:80px;
        }
      }
    }
  }
  @include mobile {
    
    .about-title{
      .tit{
        font-size: 50px;
        &::before{
          width:50px;
          height:50px;
        }
      }
    }
    .gl-8{
      width:100% !important;
    }
    .l-ml-2{
      margin-left:0px !important;
    }
  }
</style>
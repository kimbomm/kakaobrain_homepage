<template>
  <div class="about-full-con-e">
    <div class="full-con">
      <img src="@/assets/images/about-full-conE_img_1.png">
      <div class="inner">
        <div class="con-tit gl-8 l-ml-2">
          <div>We aim for horizontal communication.</div>
        </div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt">{{Atext}}</div>
          <div class="txt">{{Btext}}</div>
        </div>
        <div class="material gl-6 l-ml-2">
          <img src="@/assets/images/material_2.png"/>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConE',
  props:{
    Atext:{
      type:String,
      default:'',
      required:true
    },
    Btext:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-e{
    .full-con{
      position: relative;
      width:100%;
      height:2091px;
      &::before{
        position: absolute;
      }
      img{
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      
      .inner{
        position: absolute;
        top:400px;
        color:$gray-0;

        .con{
          &-tit{
            margin-bottom:200px;
            line-height: 120%;
            font-weight: 900;
            font-size:90px;
          }
        }
        .text-box{
          margin-bottom:200px;
          .txt{
            font-size: 22px;
            line-height: 150%;
            &:not(:last-child){
              margin-bottom:40px;
            }
          }
        }
        .material{
          img{
            position: static;
            transform: translate(0);
            width:100%;
          }
        }

      }
      
    }
  }
</style>
<template>
  <div class="about-full-con-d">
    <div class="full-con">
      <img src="@/assets/images/about-full-conD_img_1.png"/>
      <div class="inner">
        <div class="tit gl-8 l-ml-2">{{tit}}</div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt">{{Atext}}</div>
        </div>
        <div class="material gl-6 l-ml-2">
          <img src="@/assets/images/material_1.png"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConD',
  props:{
    tit:{
      type:String,
      default:'',
      required:true
    },
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

  .about-full-con-d{
    .full-con{
      position: relative;
      width:100%;
      height:1827px;
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
//
      .inner{
        position: absolute;
        top:400px;
        color:$gray-0;
        .tit{
          margin-bottom:100px;
          line-height:120%;
          font-size:90px;
          font-weight:900;
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
//
    }
  }
</style>
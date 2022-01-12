<template>
  <div class="about-full-con-f">
    <div class="full-con">
      <!-- <img src="@/assets/images/about-full-conD_img_1.png"/> -->
      <div class="inner">
        <div class="tit gl-8 l-ml-2">{{tit}}</div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt">{{Atext}}</div>
        </div>
        <div class="material gl-6 l-ml-2">
          <img src="@/assets/images/material_3.png"/>
        </div>
        
        <div class="link l-ml-3">
          <div class="txt">Click the button below to see our detailed culture and recruitment.</div>
          <button type="button" class="btn">
            <span>Go to →</span>
          </button> 
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConF',
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

  .about-full-con-f{
    .inner{
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
        margin-bottom: 400px;
        img{
          position: static;
          transform: translate(0);
          width:100%;
        }
      }
      .link{
        .txt{
          margin-bottom:60px;
          line-height: 130%;
          font-size: 20px;
        }
        .btn{
          width: 170px;
          height: 50px;
          padding:16px 44px;
          border:1px solid $gray-9;
          border-radius: 0px;
          box-sizing: border-box;
          line-height: 130%;
          font-size: 14px;
          font-style:normal;
        }
      }
    }
  }
</style>
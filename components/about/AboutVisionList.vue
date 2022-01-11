<template>
  <div class="vision-list">
    <div class="list-con">
     <div class="list-img">
       <img src="@/assets/images/vision_img.png"/>
     </div>
     <div class="list-txt gl-8">
       <div class="txt"><span class="num">{{num}}</span>{{txt}}</div>
       <div class="sub-txt l-ml-1 gl-4">{{subtxt}}</div>
     </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutVisionList',
  props:{
    txt:{
      type: String,
      default: '',
      required: true
    },
    num:{
      type: String,
      default: '',
      required: true
    },
    subtxt:{
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
<style lang="scss" scoped>
  .vision-list{
    .list-con{
      position: relative;
      width:500px;
      margin: 0 auto;
    }
    .list-img{
      width:500px;
      height:500px;
      img{
        width:100%;
      }
    }
    .list-txt{
      position: absolute;
      left: -310px;
      top:50%;
      transform: translate(0, -50%);
      .txt{
        font-size:100px;
        font-weight:600;
        line-height: 121px;
        margin-bottom: 40px;
        .num{
          font-weight:100;
        }
      }
      .sub-txt{
        font-size:30px;
        line-height: 130%;
      }
    }
  }
</style>
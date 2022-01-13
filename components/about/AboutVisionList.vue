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
  @include pc-4k {
    .vision-list{
      .list-con{
        width:990px !important;
      }
      .list-img{
        width:990px !important;
        height:990px !important;
      }
      .list-txt{
        left: -1025px !important;
        .txt{
          font-size:214px !important;
          margin-bottom: 100px !important;
        }
        .sub-txt{
          font-size:60px !important;
        }
      }
    }
  
  }
  @include pc-large {
    .vision-list{
      .list-con{
        width:660px ;
      }
      .list-img{
        width:660px;
        height:660px;
      }
      .list-txt{
        left: -422px ;
        .txt{
          font-size:140px;
          margin-bottom: 50px;
        }
        .sub-txt{
          font-size:40px ;
        }
      }
    }
  }
  @include tablet {
    .vision-list{
      .list-con{
        width:300px ;
      }
      .list-img{
        width:300px;
        height:300px;
      }
      .list-txt{
        left: -141px ;
        .txt{
          font-size:60px;
          line-height: 73px; 
          margin-bottom: 30px;
        }
        .sub-txt{
          font-size:18px ;
        }
      }
    }
  }

  @include mobile {
    .vision-list{
      .list-con{
        width:200px ;
      }
      .list-img{
        width:200px;
        height:200px;
      }
      .list-txt{
        left: -60px ;
        .txt{
          font-size:30px;
          line-height: 36px;
          margin-bottom: 20px;
        }
        .sub-txt{
          font-size:16px ;
          &.l-ml-1{
            // margin-left:0px !important;
          }
          &.gl-4{
            width: getWidth(6) !important;
          }
        }
      }
    }
  }
</style>
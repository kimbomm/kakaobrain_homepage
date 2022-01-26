<template>
  <div class="about-full-con-b">
    <div class="full-con">
      <img src="@/assets/images/about-full-conB_img.png">
      <div class="inner">
        <div class="con-tit gl-6 l-ml-2">
          <div class="">
            Create the impact<br/>of the world in a way that<br/>no one has thought of.
          </div>
        </div>
        <div class="con-item l-ml-2">
          <div class="item gl-2">
            <div class="item-tit">Open Research.</div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Create Novel Algorithm</div>
              <div class="item-txt">Prospect future deep learning prior research and<br/>develop original algorithms to lay the foundation for new<br/>challenges.</div>
            </div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Develop Commercial-le vel Model</div>
              <div class="item-txt">By conducting application research and further expanding the model scale, we complete the technology and digital human necessary for service development.</div>
            </div>
          </div>
          <div class="item gl-2 l-ml-1">
            <div class="item-tit">Open Studio.</div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Make Impact Product</div>
              <div class="item-txt">Based on its own technology portfolio, it develops high value-added services that improve the quality of life of all users.</div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConB'
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-b{
    .full-con{
      position: relative;
      width:100%;
      padding: 400px 20px 400px;
      img{
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      
      .inner{
        position: relative;
        color:$gray-0;
      }
      .con{
        &-tit{
          margin-bottom:200px;
          line-height: 120%;
          font-weight: 900;
          font-size:90px;
        }
        &-item{
          display: flex;
        }
      }
      .item{
        &-tit{
          margin-bottom:70px;
          line-height: 110%;
          font-weight:600;
          font-size:44px;
        }
        &-txt-box{
          line-height: 150%;
          &:not(:last-child){
            margin-bottom:40px;
          }
        }
        &-sub-tit{
          line-height: 110%;
          font-size:20px;
          font-weight:600;
          margin-bottom:10px;
        }
        &-txt{
          line-height: 150%;
          font-size:14px;
          font-weight:400;
        }
      }
    }
  }
  @include pc-4k {
    
    .about-full-con-b{
      .full-con{
        padding: 800px 20px 845px !important;
        .con{
          &-tit{
            margin-bottom:400px !important;
            font-size:180px !important;
          }
        }
        .item{
          &-tit{
            margin-bottom:130px !important;
            font-size:80px !important;
          }
          &-txt-box{
            &:not(:last-child){
              margin-bottom:125px !important;
            }
          }
          &-sub-tit{
            font-size:40px !important;
            margin-bottom:30px !important;
          }
          &-txt{
            font-size:30px !important;
          }
        }
      }
    }
  }
  @include pc-large {
    
    .about-full-con-b{
      .full-con{
        padding: 530px 20px 533px;
        .con{
          &-tit{
            margin-bottom:260px;
            font-size:120px;
          }
        }
        .item{
          &-tit{
            margin-bottom:90px;
            font-size:52px;
          }
          &-txt-box{
            &:not(:last-child){
              margin-bottom:50px;
            }
          }
          &-sub-tit{
            font-size:28px;
            margin-bottom:14px;
          }
          &-txt{
            font-size:20px;
          }
        }
      }
    }
  }
  @include tablet {
     
    .about-full-con-b{
      .full-con{
        padding: 200px 20px 200px;
        .con{
          &-tit{
            font-size:46px;
            margin-bottom:165px;
          }
        }
        .item{
          &.gl-2{
            width: getWidth(3) !important;
          }
          &-tit{
            font-size:30px;
            margin-bottom:70px;
          }
          &-txt-box{
            &:not(:last-child){
              margin-bottom:40px;
            }
          }
          &-sub-tit{
            font-size:20px;
            margin-bottom:10px;
          }
          &-txt{
            font-size:14px;
          }
        }
      }
    }
  }
  @include mobile {
    .about-full-con-b{
      .full-con{
        padding: 107px 20px 100px;
        .con{
          &-tit{
            font-size:28px;
            margin-bottom:100px;
            &.l-ml-2{
              margin-left:0px !important;
            }
            &.gl-6{
              width:100% !important;
            }
          }
          &-item{
            flex-direction: column;
            &.l-ml-2{
              margin-left: getMargin(1) !important;
            }
          }
          
        }
        .item{
          &:not(:last-child){
            margin-bottom:100px;
          }
          &.l-ml-1{
            margin-left:0px !important;
          }
          &.gl-2{
            width: getWidth(9) !important;
          }
          &-tit{
            font-size:26px;
            margin-bottom:50px;
          }
          &-txt-box{
            &:not(:last-child){
              margin-bottom:40px;
            }
          }
          &-sub-tit{
            font-size:18px;
            margin-bottom:12px;
          }
          &-txt{
            font-size:14px;
          }
        }
      }
    }
  }
</style>
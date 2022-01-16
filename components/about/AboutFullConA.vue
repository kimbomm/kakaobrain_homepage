<template>
  <div class="about-full-con-a">
    <div class="full-con">
      <img src="@/assets/images/about-full_img.png">
      <div class="inner ">
        <div class="txt gl-8 l-ml-2">We develop technology from unthinkable questions & change everyone's lives.</div>
        <div class="sub-txt gl-6 l-ml-3">Unthinkable question makes impactful answer.</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConA'
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-a{
    .full-con{
      position: relative;
      width:100%;
      padding: 400px 20px 643px;
      // &::before{
      //   position: absolute;
      // }
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
        // position: absolute;
        // top:400px;
        color:$gray-0;
        .txt{
          margin-bottom:100px;
          line-height:120%;
          font-size:90px;
          font-weight:900;
        }
        .sub-txt{
          line-height:150%;
          font-size:22px;
          font-weight:400;
        }
      }
    }
  }
  @include pc-4k {
  
    .about-full-con-a{
      .full-con{
        padding: 800px 20px 1293px;
        .inner{
          .txt{
            margin-bottom:190px !important;
            font-size:180px !important;
          }
          .sub-txt{
            font-size:46px !important;
          }
        }
      }
    }
  }
  @include pc-large {
  
    .about-full-con-a{
      .full-con{
        padding: 530px 20px 863px;
        .inner{
          .txt{
            margin-bottom:130px;
            font-size:120px;
          }
          .sub-txt{
            font-size:30px;
          }
        }
      }
    }
  }
  @include tablet {
  
    .about-full-con-a{
      .full-con{
        padding: 140px 20px 221px;
        .inner{
          .txt{
            margin-bottom:50px;
            font-size:46px;
          }
          .sub-txt{
            font-size:16px;
          }
        }
      }
    }
  }
  @include mobile {
  
    .about-full-con-a{
      .full-con{
        padding: 100px 20px 252px;
        .inner{
          .txt{
            margin-bottom:30px;
            font-size:28px;
            &.l-ml-2{
              margin-left:0px !important;
            }
          }
          .sub-txt{
            font-size:16px;
            &.l-ml-3{
              margin-left: getMargin(1) !important;
            }
          }
        }
      }
    }
  }
</style>
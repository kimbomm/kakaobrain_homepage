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
      height:1500px;
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
        position: absolute;
        top:400px;
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
        height:3000px !important;
        .inner{
          top:800px !important;
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
        height:2000px;
        .inner{
          top:530px;
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
        height:600px;
        .inner{
          top:140px;
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
        height:600px;
        .inner{
          top:100px;
          .txt{
            margin-bottom:30px;
            font-size:28px;
          }
          .sub-txt{
            font-size:16px;
          }
        }
      }
    }
  }
</style>
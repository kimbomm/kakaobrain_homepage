<template>
  <div class="about-title l-ml-2">
    <div class="title-box gl-6">
      <div class="tit " v-html="data.title"> </div>
      <EasterEgg />
    </div>
  </div>
</template>
<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutTitle',
    props:{
      data:{
        type:Object,
        default:() => [],
        require:true
      }
    },
    data() {
      return {}
    },
    components: {
      EasterEgg
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    padding: 0 20px;
    .title-box{
      position: relative;
      &.gl-6{
        width: getWidth(8) !important;
      }
      .easter-egg{
        position: absolute;
        // left: 50%;
        left:485px;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: -30px 50px 80px rgba(0, 0, 0, 0.5);
      }
    }
    .tit {
      line-height: 90%;
      font-size: 200px;
      font-weight: 100;
    }
  }

  @include pc-large {
    .about-title {
      .title-box{
        &.gl-6{
          width: getWidth(8) !important;
        }
        .easter-egg {
          left:652px;
          width: 200px;
          height: 200px;
        }
      }
      .tit {
        font-size: 267px;
      }
    }
  }
  @include pc-4k {
    .about-title {
      .title-box{
        &.gl-6{
          width: getWidth(6) !important;
        }
        .easter-egg {
          left:1268px;
          width: 300px;
          height: 300px;
        }
      }
      .tit {
        font-size: 400px;
      }
    }
  }
  @media screen and (max-width:1500px) {
    .about-title {
      .title-box{
        .easter-egg {
          left:390px;
          width: 110px;
          height: 110px;
        }
      }
      .tit {
        font-size: 140px;
      }
    }
  }
  @include tablet {
    .about-title {
      .title-box{
        .easter-egg {
          left:251px;
          width: 80px;
          height: 80px;
        }
      }
      .tit {
        font-size: 106px;
        .easter-egg {
          width: 80px;
          height: 80px;
        }
      }
    }
  }
  @include mobile {
    .about-title {
      .title-box{
        .easter-egg {
          left: 155px;
          width: 50px;
          height: 50px;
        }
        &.gl-6 {
          width: 100% !important;
          display: inline-block;
        }
      }
      .tit {
        font-size: 50px;
      }
    }
    
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

<template>
  <div class="about-title l-ml-2">
    <div class="tit gl-8">
      Unthinkable
      <span class="string">Question.</span>
      <EasterEgg />
    </div>
  </div>
</template>
<script>
  import EasterEgg from '@/components/elements/EasterEgg'
  export default {
    name: 'AboutTitle',
    components: {
      EasterEgg
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    padding: 0 20px;
    .tit {
      position: relative;
      line-height: 90%;
      font-size: 200px;
      font-weight: 100;
      .string {
        display: block;
        font-weight: 900;
      }
      .easter-egg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: -30px 50px 80px rgba(0, 0, 0, 0.5);
      }
      // &::before {
      //   content: '';
      //   background: url('@/assets/images/about-tit_img.png') no-repeat;
      //   background-size: 100%;
      //   border-radius: 50%;
      // }
    }
  }

  @include pc-large {
    .about-title {
      .tit {
        font-size: 267px;
        .easter-egg {
          width: 200px;
          height: 200px;
        }
      }
    }
  }
  @include pc-4k {
    .about-title {
      .tit {
        font-size: 400px;
        .easter-egg {
          width: 300px;
          height: 300px;
        }
      }
    }
  }
  @include tablet {
    .about-title {
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
      .tit {
        font-size: 50px;
        .easter-egg {
          width: 50px;
          height: 50px;
        }
      }
    }
    .gl-8 {
      width: auto !important;
      display: inline-block;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
  }
</style>

<template lang="">
  <div>
    <AboutTitle />
    <AboutTitleText 
      :text="`kakaobrain is...</br>As an AI frontier that completes differentiated element technology,
      big models, and digital humans, it contributes to the<br />
      technology community and pioneers new service areas that enhance the
      value of use and quality of life.`"
    />
    <AboutFullConA />
    <div class="vision-list-con">
      <AboutVisionList
        v-for="(data, index) in visionList"
        :key="index"
        :data="data"
        :index="index"
      />
    </div>
    <AboutFullConB />
    <AboutConTit />
    <AboutConTxt />
    <AboutLargeLogo />
    <AboutFullConC />
    <AboutFullSlide />
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import AboutTitle from '@/components/about/AboutTitle'
  import AboutTitleText from '@/components/about/AboutTitleText'
  import AboutFullConA from '@/components/about/AboutFullConA'
  import AboutVisionList from '@/components/about/AboutVisionList'
  import AboutFullConB from '@/components/about/AboutFullConB'
  import AboutConTit from '@/components/about/AboutConTit'
  import AboutConTxt from '@/components/about/AboutConTxt'
  import AboutLargeLogo from '@/components/about/AboutLargeLogo'
  import AboutFullConC from '@/components/about/AboutFullConC'
  import AboutFullSlide from '@/components/about/AboutFullSlide'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      AboutTitle,
      AboutTitleText,
      AboutFullConA,
      AboutVisionList,
      AboutFullConB,
      AboutConTit,
      AboutConTxt,
      AboutLargeLogo,
      AboutFullConC,
      AboutFullSlide
    },
    data() {
      return {
        visionList: [
          {
            num: '¹',
            txt: 'outstanding',
            subtxt:
              'Top-notch experts gather to develop innovative technologies that are the basis for solving all problems.'
          },
          {
            num: '²',
            txt: 'actualized',
            subtxt:
              'It pioneers technology-based business areas and materializes them into services that improve quality of life.'
          },
          {
            num: '³',
            txt: 'open',
            subtxt:
              '기술 노하우를 공개하고 공유하여, AI 생태계에 기여하고 새로운 가치를 창출합니다.'
          },
          {
            num: '⁴',
            txt: 'impactful',
            subtxt:
              '모든 사람이 더 나은 삶을 살 수 있도록, 세상의 가치 있는 변화를 주도합니다.'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    margin-top: 300px;
    margin-bottom: 60px;
  }
  .about-title-text {
    margin-bottom: 204px;
  }
  .about-full-con-a {
    margin-bottom: 420px;
  }
  .vision-list-con {
    .vision-list {
      margin-bottom: 200px;
    }
    margin-bottom: 420px;
  }
  .about-full-con-b {
    margin-bottom: 400px;
  }
  .about-con-tit {
    margin-bottom: 100px;
  }
  .about-con-txt {
    margin-bottom: 300px;
  }
  .about-large-logo {
    margin-bottom: 400px;
  }

  @include pc-large {
    .about-title {
      margin-top: 400px;
      margin-bottom: 80px;
    }
    .about-title-text {
      margin-bottom: 268px;
    }
    .about-full-con-a {
      margin-bottom: 530px;
    }
    .vision-list-con {
      .vision-list {
        margin-bottom: 260px;
      }
      margin-bottom: 530px;
    }
    .about-full-con-b {
      margin-bottom: 530px;
    }
    .about-con-tit {
      margin-bottom: 130px;
    }
    .about-con-txt {
      margin-bottom: 430px;
    }
    .about-large-logo {
      margin-bottom: 530px;
    }
  }

  @include pc-4k {
    .about-title {
      margin-top: 600px;
      margin-bottom: 130px;
    }
    .about-title-text {
      margin-bottom: 388px;
    }
    .about-full-con-a {
      margin-bottom: 800px;
    }
    .vision-list-con {
      .vision-list {
        margin-bottom: 360px;
      }
      margin-bottom: 800px;
    }
    .about-full-con-b {
      margin-bottom: 800px;
    }
    .about-con-tit {
      margin-bottom: 180px;
    }
    .about-con-txt {
      margin-bottom: 678px;
    }
    .about-large-logo {
      margin-bottom: 800px;
    }
  }
  @include tablet {
    .about-title {
      margin-top: 195px;
      margin-bottom: 60px;
    }
    .about-title-text {
      margin-bottom: 143px;
    }
    .about-full-con-a {
      margin-bottom: 200px;
    }
    .vision-list-con {
      .vision-list {
        margin-bottom: 100px;
      }
      margin-bottom: 200px;
    }
    .about-full-con-b {
      margin-bottom: 200px;
    }
    .about-con-tit {
      margin-bottom: 50px;
    }
    .about-con-txt {
      margin-bottom: 100px;
    }
    .about-large-logo {
      margin-bottom: 200px;
    }
  }
  @include mobile {
    .about-title {
      margin-top: 158px;
      margin-bottom: 40px;
    }
    .about-title-text {
      margin-bottom: 80px;
    }
    .about-full-con-a {
      margin-bottom: 100px;
    }
    .vision-list-con {
      .vision-list {
        margin-bottom: 80px;
      }
      margin-bottom: 100px;
    }
    .about-full-con-b {
      margin-bottom: 100px;
    }
    .about-con-tit {
      margin-bottom: 30px;
    }
    .about-con-txt {
      margin-bottom: 100px;
    }
    .about-large-logo {
      margin-bottom: 100px;
    }
  }
</style>

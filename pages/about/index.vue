<template>
  <div>
    <div class="top-section">
      <BreadCrumb :data="breadcrumb" :full="true" />
      <AboutTitle :data="aboutTitle" />
      <div class="top-text">
        <AboutTitleText :data="data.aboutTitleText" />
      </div>
    </div>
    <AboutFullConA :data="data.aboutConA" />
    <div class="vision-list-con">
      <AboutVisionList
        v-for="(data, index) in data.visionList"
        :key="index"
        :data="data"
        :index="index"
      />
    </div>
    <AboutFullConB :data="data.aboutConB" />
    <AboutConTit :data="data.aboutConTitData" />
    <AboutConTxtB :data="data.aboutConTxtBData" />
    <AboutLargeLogo />
    <AboutFullConC :data="data.aboutConC" />
    <AboutFullSlide />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import AboutTitle from '@/components/about/AboutTitle'
  import AboutTitleText from '@/components/about/AboutTitleText'
  import AboutFullConA from '@/components/about/AboutFullConA'
  import AboutVisionList from '@/components/about/AboutVisionList'
  import AboutFullConB from '@/components/about/AboutFullConB'
  import AboutConTit from '@/components/about/AboutConTit'
  import AboutConTxtB from '@/components/about/AboutConTxtB'
  import AboutLargeLogo from '@/components/about/AboutLargeLogo'
  import AboutFullConC from '@/components/about/AboutFullConC'
  import AboutFullSlide from '@/components/about/AboutFullSlide'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      BreadCrumb,
      AboutTitle,
      AboutTitleText,
      AboutFullConA,
      AboutVisionList,
      AboutFullConB,
      AboutConTit,
      AboutConTxtB,
      AboutLargeLogo,
      AboutFullConC,
      AboutFullSlide
    },
    data() {
      return {
        // data: null,
        aboutTitle: {
          title: 'Unthinkable <span class="string">Question.</span>'
        },
        aboutTitleText: {
          text: 'kakaobrain is...</br>As an AI frontier that completes differentiated element technology, big models, and digital humans, it contributes to the<br/>technology community and pioneers new service areas that enhance the value of use and quality of life.'
        },
        aboutConTitData: {
          title: 'Our Brand'
        },
        aboutConTxtBData: {
          text: 'People looking for unexpected answers from unthinkable questions, kakaobrain krews share with you the new journey and stories they are making with AI.'
        },

        breadcrumb: [
          { text: 'About', sub: 'about', link: '' },
          { text: 'Introduce', sub: 'sub', link: '/about' },
          { text: 'Yeah!!!', sub: '', link: '' }
        ],

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
    },
    computed: {
      ...mapState({
        language: state => state.language,
        questionData: state => state.translation.ABOUT.question
      }),
      data() {
        let data = this.questionData[this.language]
        return data
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .top-section{
    // height:100vh;
    .top-text{
      padding: 0 20px;
    }
  }
  .about-title {
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
  .about-con-txt-b {
    margin-bottom: 300px;
  }
  .about-large-logo {
    margin-bottom: 400px;
  }

  @include pc-large {
    .about-title {
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
    .about-con-txt-b {
      margin-bottom: 430px;
    }
    .about-large-logo {
      margin-bottom: 530px;
    }
  }

  @include pc-4k {
    .about-title {
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
    .about-con-txt-b {
      margin-bottom: 678px;
    }
    .about-large-logo {
      margin-bottom: 800px;
    }
  }
  @include tablet {
    .about-title {
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
    .about-con-txt-b {
      margin-bottom: 100px;
    }
    .about-large-logo {
      margin-bottom: 200px;
    }
  }
  @include mobile {
    .about-title {
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
    .about-con-txt-b {
      margin-bottom: 100px;
    }
    .about-large-logo {
      margin-bottom: 100px;
    }
  }
</style>

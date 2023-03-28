<template>
  <div class="layout-about">
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="top-section">
      <AboutConTit :data="data.aboutTitle" />
      <div class="top-text">
        <AboutTitleText :data="data.aboutTitleText" />
      </div>
    </div>
    <AboutFullConD :data="data.aboutConD" />
    <div class="culture-text-box">
      <AboutConTit1 :data="data.aboutConTit1" />
      <AboutConTxt :data="data.aboutConTxt" />
      <AboutConSubTit :data="data.aboutConSubTit" />
      <AboutConSubTxt :data="data.aboutConSubTxt" />
    </div>
    <div class="culture-text-box">
      <AboutConTit2 :data="data.aboutConTit2" />
      <AboutConTxt2 :data="data.aboutConTxt2" />
      <AboutConSubTit2 :data="data.aboutConSubTit2" />
      <AboutConSubTxt2 :data="data.aboutConSubTxt2" />
    </div>
    <div class="culture-text-box">
      <AboutConTit3 :data="data.aboutConTit3" />
      <AboutConTxt3 :data="data.aboutConTxt3" />
      <AboutConSubTit3 :data="data.aboutConSubTit3" />
      <AboutConSubTxt3 :data="data.aboutConSubTxt3" />
    </div>

    <!-- <AboutFullConE :data="data.aboutConE" /> -->
    <AboutFullConF :data="data.aboutConF" />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import AboutTitle from '@/components/about/AboutTitle'
  import AboutTitleText from '@/components/about/AboutTitleText'
  import AboutFullConD from '@/components/about/AboutFullConD'
  import AboutConTit from '@/components/about/AboutConTit'
  import AboutConTit1 from '@/components/about/AboutConTit1'
  import AboutConTxt from '@/components/about/AboutConTxt'
  import AboutConSubTit from '@/components/about/AboutConSubTit'
  import AboutConSubTxt from '@/components/about/AboutConSubTxt'
  import AboutConTit2 from '@/components/about/AboutConTit2'
  import AboutConTxt2 from '@/components/about/AboutConTxt2'
  import AboutConSubTit2 from '@/components/about/AboutConSubTit2'
  import AboutConSubTxt2 from '@/components/about/AboutConSubTxt2'
  import AboutConTit3 from '@/components/about/AboutConTit3'
  import AboutConTxt3 from '@/components/about/AboutConTxt3'
  import AboutConSubTit3 from '@/components/about/AboutConSubTit3'
  import AboutConSubTxt3 from '@/components/about/AboutConSubTxt3'
  import AboutFullConE from '@/components/about/AboutFullConE'
  import AboutFullConF from '@/components/about/AboutFullConF'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    head() {
      return {
        meta: [
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://kakaobrain.com/culture'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${process.env.BASE_URL}/meta/meta_homepage_about.png`
          }
        ]
      }
    },
    components: {
      BreadCrumb,
      AboutTitle,
      AboutTitleText,
      AboutFullConD,
      AboutConTit,
      AboutConTxt,
      AboutConSubTit,
      AboutFullConE,
      AboutFullConF,
      AboutConTit1,
      AboutConSubTxt,
      AboutConTit2,
      AboutConTxt2,
      AboutConSubTit2,
      AboutConSubTxt2,
      AboutConTit3,
      AboutConTxt3,
      AboutConSubTit3,
      AboutConSubTxt3
    },
    data() {
      return {
        breadcrumb: [
          { text: 'About', sub: 'about', link: '' },
          { text: 'Culture', sub: 'sub', link: '/about/culture' },
          { text: 'Yeah!!!', sub: '', link: '' }
        ]
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        cultureData: state => state.translation.ABOUT.culture
      }),
      data() {
        let data = this.cultureData[this.language]
        return data
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top-section {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .top-text {
      padding: 0 20px;
    }
  }
  .about-title {
    margin-bottom: 60px;
  }
  .about-full-con-d {
    margin-bottom: 400px;
  }
  .culture-text-box {
    margin-bottom: 400px;

    .about-con-tit {
      margin-bottom: 100px;
    }
    .about-con-txt {
      margin-bottom: 100px;
    }
    .about-con-sub-tit {
      margin-bottom: 30px;
    }
    .about-con-tit2 {
      margin-bottom: 100px;
    }
    .about-con-txt2 {
      margin-bottom: 100px;
    }
    .about-con-sub-tit2 {
      margin-bottom: 30px;
    }
    .about-con-tit3 {
      margin-bottom: 100px;
    }
    .about-con-txt3 {
      margin-bottom: 100px;
    }
    .about-con-sub-tit3 {
      margin-bottom: 30px;
    }
  }
  .about-full-con-e {
    margin-bottom: 400px;
  }

  @include pc-large {
    .about-title {
      margin-bottom: 80px;
    }
    .about-full-con-d {
      margin-bottom: 530px;
    }
    .culture-text-box {
      margin-bottom: 530px;
      .about-con-tit {
        margin-bottom: 130px;
      }
      .about-con-txt {
        margin-bottom: 130px;
      }
      .about-con-sub-tit {
        margin-bottom: 40px;
      }
    }

    .about-full-con-e {
      margin-bottom: 530px;
    }
  }

  @include pc-4k {
    .about-title {
      margin-bottom: 130px;
    }
    .about-full-con-d {
      margin-bottom: 800px;
    }
    .culture-text-box {
      margin-bottom: 800px;

      .about-con-tit {
        margin-bottom: 200px;
      }
      .about-con-txt {
        margin-bottom: 200px;
      }
      .about-con-sub-tit {
        margin-bottom: 30px;
      }
    }

    .about-full-con-e {
      margin-bottom: 800px;
    }
  }

  @include tablet {
    .top-section {
      display: block;
      height: auto;
    }
    .about-title {
      margin-bottom: 60px;
    }
    .about-full-con-d {
      margin-bottom: 200px;
    }
    .culture-text-box {
      margin-bottom: 200px;
      .about-con-tit {
        margin-bottom: 50px;
      }
      .about-con-txt {
        margin-bottom: 50px;
      }
      .about-con-sub-tit {
        margin-bottom: 20px;
      }
    }

    .about-full-con-e {
      margin-bottom: 200px;
    }
  }
  @include mobile {
    .top-section {
      display: block;
      height: auto;
      margin-top: 60px;
    }
    .bread-crumb {
      padding: 0 20px;
    }
    .about-title {
      margin-bottom: 40px;
    }
    .about-title-text {
      margin-bottom: 80px;
    }
    .about-full-con-d {
      margin-bottom: 100px;
    }
    .culture-text-box {
      margin-bottom: 100px;
      .about-con-tit {
        margin-bottom: 30px;
      }
      .about-con-txt {
        margin-bottom: 50px;
      }
      .about-con-sub-tit {
        margin-bottom: 24px;
      }
    }

    .about-full-con-e {
      margin-bottom: 100px;
    }
  }
</style>

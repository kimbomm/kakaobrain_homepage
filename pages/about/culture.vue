<template>
  <div class="layout-about">
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="top-section">
      <AboutTitle :data="data.aboutTitle" />
      <div class="top-text">
        <AboutTitleText :data="data.aboutTitleText" />
      </div>
    </div>
    <AboutFullConD :data="data.aboutConD" />
    <div class="culture-text-box">
      <AboutConTit :data="data.aboutConTit" />
      <AboutConTxt :data="data.aboutConTxt" />
      <AboutConSubTit :data="data.aboutConSubTit" />
      <AboutConTxt :data="data.aboutConTxt2" />
    </div>
    <AboutFullConE :data="data.aboutConE" />
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
  import AboutConTxt from '@/components/about/AboutConTxt'
  import AboutConSubTit from '@/components/about/AboutConSubTit'
  import AboutFullConE from '@/components/about/AboutFullConE'
  import AboutFullConF from '@/components/about/AboutFullConF'
  export default {
    mixins: [mixinGlobal],
    name: 'index',
    components: {
      BreadCrumb,
      AboutTitle,
      AboutTitleText,
      AboutFullConD,
      AboutConTit,
      AboutConTxt,
      AboutConSubTit,
      AboutFullConE,
      AboutFullConF
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

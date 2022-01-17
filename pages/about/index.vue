<template lang="">
  <div>
    <AboutTitle text="Unthinkable" bold="Question." />
    <AboutTitleText
      Atext="kakaobrain is..."
      Btext=" As an AI frontier that completes differentiated element technology, big models, and digital humans, it contributes to the"
      Ctext="technology community and pioneers new service areas that enhance the value of use and quality of life."
    />
    <AboutFullConA />
    <div class="vision-list-con">
      <AboutVisionList
        num="¹"
        txt="outstanding"
        subtxt="Top-notch experts gather to develop innovative technologies that are the basis for solving all problems."
      />
      <AboutVisionList
        num="²"
        txt="actualized"
        subtxt="It pioneers technology-based business areas and materializes them into services that improve quality of life."
      />
    </div>
    <AboutFullConB />
    <AboutConTit text="Our Brand"/>
    <AboutConTxt text="People looking for unexpected answers from unthinkable questions, kakaobrain krews share with you the new journey and stories they are making with AI."/>
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
  
  @include pc-4k {
  
    .about-title {
      margin-top: 600px !important;
      margin-bottom: 130px !important;
    }
    .about-title-text {
      margin-bottom: 388px !important;
    }
    .about-full-con-a {
      margin-bottom: 800px !important;
    }
    .vision-list-con {
      .vision-list {
        margin-bottom: 360px !important;
      }
      margin-bottom: 800px !important;
    }
    .about-full-con-b {
      margin-bottom: 800px !important;
    }
    .about-con-tit {
      margin-bottom: 180px !important;
    }
    .about-con-txt {
      margin-bottom: 678px !important;
    }
    .about-large-logo {
      margin-bottom: 800px !important;
    }
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

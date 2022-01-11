<template lang="">
  <div>
    <AboutTitle text="Unthinkable" bold="Question."/>
    <AboutTitleText
     Atext="kakaobrain is..."
     Btext=" As an AI frontier that completes differentiated element technology, big models, and digital humans, it contributes to the" 
     Ctext="technology community and pioneers new service areas that enhance the value of use and quality of life."
    />
    <AboutFullConA/>
    <div class="vision-list-con">
      <AboutVisionList
       num="¹"
       txt="outstanding"
       subtxt="Top-notch experts gather to develop innovative technologies that are the basis for solving all problems."
      />
      <AboutVisionList
       num="¹"
       txt="outstanding"
       subtxt="Top-notch experts gather to develop innovative technologies that are the basis for solving all problems."
      />
    </div>
    <AboutFullConB/>
    <AboutConTit/>
    <AboutConTxt/>
    <AboutLargeLogo/>
    <AboutFullConC/>
    <AboutFullSlide/>
  </div>
</template>
<script>

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
      AboutFullSlide,
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title{
    margin-top:300px;
    margin-bottom:60px;
  }
  .about-title-text{
    margin-bottom:204px;
  }
  .about-full-con-a{
    margin-bottom:420px;
  }
  .vision-list-con{
    .vision-list{
      margin-bottom:200px;
    }
    margin-bottom:420px;
  }
  .about-full-con-b{
    margin-bottom:400px;
  }
  .about-con-tit{
    margin-bottom:100px;
  }
  .about-con-txt{
    margin-bottom:328px;
  }
  .about-large-logo{
    margin-bottom:400px;
  }
</style>
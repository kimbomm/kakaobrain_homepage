<template lang="">
  <div>
    <AboutTitle :data="aboutTitle"/>
    <AboutTitleText :data="aboutTitleText"/>
    <AboutFullConD/>
    <div class="culture-text-box">
      <AboutConTit :data="aboutConTit"/>
      <AboutConTxt :data="aboutConTxt"/>
      <AboutConSubTit :data="aboutConSubTit"/>
      <AboutConTxt :data="aboutConTxt2"/>
    </div>
    <AboutFullConE/>
    <AboutFullConF/>

  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
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
      AboutTitle,
      AboutTitleText,
      AboutFullConD,
      AboutConTit,
      AboutConTxt,
      AboutConSubTit,
      AboutFullConE,
      AboutFullConF,
    },
    data(){
      return{
        aboutTitle:{
            title:'Our way<span class="string">of working.</span>',
        },
        aboutTitleText:{
          text:'kakaobrain krew are given a lot of good opportunities to grow self-directed, and we find out how we are doing to grow</br>together through great colleagues.'
        },
        aboutTitleText:{
          text:'kakaobrain krew are given a lot of good opportunities to grow self-directed, and we find out how we are doing to grow</br>together through great colleagues.'
        },
        aboutConTit:{
          title:'We immerse ourselves and work self-directedly.'
        },
        aboutConTxt:{
          text:'We need to be able to experiment and change faster than anywhere else, and we need to be interested in and challenge new things and paths that no one has ever been to. So we are not afraid of failure. Performance includes not only success but also meaningful failure. As there are many situations where you have to maximize individual creativity by asking questions on your own without just moving on, self-direction to find and solve problems on your own is required first.'
        },
        aboutConSubTit:{
          title:'Why would we do this?'
        },
        aboutConTxt2:{
          text:'This is the first question we have to ask. We create our own driving force. I always think first, ask questions, and move in order to lead without being dragged around by work. In this way, we aim to judge ourselves with the trust that we can best judge our own work and do our own work.'
        }
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
  .about-full-con-d {
    margin-bottom: 400px;
  }
  .culture-text-box{
    margin-bottom:400px;

    .about-con-tit {
      margin-bottom: 100px;
    }
    .about-con-txt {
      margin-bottom: 100px;
    }
    .about-con-sub-tit{
      margin-bottom:30px;
    }
  }
  .about-full-con-e{
    margin-bottom:400px;
  }

  @include pc-4k {
    .about-title {
      margin-top: 600px !important;
      margin-bottom: 130px !important;
    }
    .about-title-text {
      margin-bottom: 388px !important;
    }
    .about-full-con-d {
      margin-bottom: 800px !important;
    }
    .culture-text-box{
      margin-bottom:800px !important;

      .about-con-tit {
        margin-bottom: 200px !important;
      }
      .about-con-txt {
        margin-bottom: 200px !important;
      }
      .about-con-sub-tit{
        margin-bottom:30px !important;
      }
    }

    .about-full-con-e{
      margin-bottom:800px !important;
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
    .about-full-con-d {
      margin-bottom: 530px;
    }
    .culture-text-box{
      margin-bottom:530px;
      .about-con-tit {
        margin-bottom: 130px;
      }
      .about-con-txt {
        margin-bottom: 130px;
      }
      .about-con-sub-tit{
        margin-bottom:40px;
      }
    }

    .about-full-con-e{
      margin-bottom:530px;
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
    .about-full-con-d {
      margin-bottom: 200px;
    }
    .culture-text-box{
      margin-bottom:200px;
      .about-con-tit {
        margin-bottom: 50px;
      }
      .about-con-txt {
        margin-bottom: 50px;
      }
      .about-con-sub-tit{
        margin-bottom:20px;
      }
    }

    .about-full-con-e{
      margin-bottom:200px;
    }
  }
  @include mobile {
    .about-title {
      margin-top: 156px;
      margin-bottom: 40px;
    }
    .about-title-text {
      margin-bottom: 80px;
    }
    .about-full-con-d {
      margin-bottom: 100px;
    }
    .culture-text-box{
      margin-bottom:100px;
      .about-con-tit {
        margin-bottom: 30px;
      }
      .about-con-txt {
        margin-bottom: 50px;
      }
      .about-con-sub-tit{
        margin-bottom:24px;
      }
    }

    .about-full-con-e{
      margin-bottom:100px;
    }
  }
</style>

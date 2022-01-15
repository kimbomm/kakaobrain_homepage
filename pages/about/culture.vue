<template lang="">
  <div>
    <AboutTitle text="Our way" bold="of working." />
    <AboutTitleText
      Atext="kakaobrain krew are given a lot of good opportunities to grow self-directed, and we find out how we are doing to grow together through great colleagues."
      Btext=""
      Ctext=""
    />
    <AboutFullConD
      tit="We disclose and share for better results."
      Atext="The monopoly of information can be power and can reduce crew autonomy by creating a vertical communication structure. However, sharing information can increase work autonomy and increase the effect of collective intelligence. So we use collaborative tools such as Notion, Slack, Google Workspace, and GitHub for sharing/disclosure, and make it accessible and participated by anyone.
      It's a 'work' that needs to be shared/disclosed, but sharing is not the final purpose. We constantly think about how to work efficiently and help each other grow together.
      It also keeps security for the right public culture and shares it only with the crew."
      Btext=""
    />
    <div class="culture-text-box">
      <AboutConTit text="We immerse ourselves and work self-directedly."/>
      <AboutConTxt text="We need to be able to experiment and change faster than anywhere else, and we need to be interested in and challenge new things and paths that no one has ever been to. So we are not afraid of failure. Performance includes not only success but also meaningful failure.
        As there are many situations where you have to maximize individual creativity by asking questions on your own without just moving on, self-direction to find and solve problems on your own is required first."
      />
      <AboutConSubTit text="Why would we do this?"/>
      <AboutConTxt text="This is the first question we have to ask. We create our own driving force. I always think first, ask questions, 
        and move in order to lead without being dragged around by work. In this way, we aim to judge ourselves with 
        the trust that we can best judge our own work and do our own work."
      />
    </div>
    <AboutFullConE
      Atext="It means a culture of freely expressing opinions in discussions. During the discussion process, anyone can clarify their thoughts, and regardless of their status, discussions are made &#34;horizontally&#34; on the topic of discussion. In addition, all suggestions can be made directly to the representative, and the public forum is always held."
      Btext="The thoughts and opinions of members delivered through 'horizontal' discussions can lead to better decision-makers. If there comes a moment when you have to take responsibility and make a &#34;choice&#34; because it is difficult to make decisions with further discussions, each determined decision maker will make the final decision."
    />
    <AboutFullConF
      tit="We want to take maximum autonomy with the least principle."
      Atext="We aim to minimize the principles of organizational culture if possible so that it feels as if there is no organizational culture, and to make everything autonomously through our discussions as much as possible.
        With this minimum principle, we can go back autonomously. Therefore, our culture of sharing and creating systems and principles without artificially creating them applies not only in our work but also in our company's welfare."
      Btext=""
    />

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

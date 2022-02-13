<template>
  <div class="main">
    <IssueSlider />
    <UnthinkableQuestion />
    <TextFlow />
    <Slogan :data="sloganData1" />
    <MainFullImage />
    <Slogan :data="sloganData2" />
    <SlotMachine />
    <Slogan :data="sloganData3" />
    <InnovationList />
    <BrainGoal />
    <ArchiveList />
    <TeamBrain />
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import IssueSlider from '@/components/pages/main/IssueSlider'
  import UnthinkableQuestion from '@/components/pages/main/UnthinkableQuestion'
  import TextFlow from '@/components/pages/main/TextFlow'
  import Slogan from '@/components/pages/main/Slogan'
  import MainFullImage from '@/components/pages/main/MainFullImage'
  import SlotMachine from '@/components/pages/main/SlotMachine'
  import InnovationList from '@/components/pages/main/InnovationList'
  import BrainGoal from '@/components/pages/main/BrainGoal'
  import ArchiveList from '@/components/pages/main/ArchiveList'
  import TeamBrain from '@/components/pages/main/TeamBrain'
  export default {
    mixins: [mixinGlobal],
    components: {
      IssueSlider,
      UnthinkableQuestion,
      TextFlow,
      Slogan,
      MainFullImage,
      SlotMachine,
      InnovationList,
      BrainGoal,
      ArchiveList,
      TeamBrain
    },
    data() {
      return {
        sloganData1: {
          title: 'What We Do',
          text: [
            { content: "Create <span class='br'>the world's</span> <span class='br'>mouth in a way</span> that", bold: true },
            { content: ' no one has <span class="br">thought of.</span>', bold: false }
          ],
          desp: '<span class="br">누구도 생각하지 못했던 방식으로</span> 세상의 임팩트를 만듭니다.'
        },
        sloganData2: {
          title: 'What is your Question?',
          text: [
            { content: 'We are looking ', bold: true },
            { content: '<span class="br">for answers</span> ', bold: false },
            { content: '<span class="br">to numerous</span> <span class="br">questions</span> ', bold: true },
            { content: 'in the world.', bold: false }
          ],
          desp: '<span class="br">우리는 세상의 수많은 질문들에 대한</span> 해답을 찾고 있습니다.'
        },
        sloganData3: {
          title: 'Our Innovation',
          text: [
            { content: 'WE ', bold: false },
            { content: 'CONT', bold: true },
            { content: '<span class="R">R</span> ', bold: false },
            { content: 'IBUTE <span class="br">TO THE WORLD</span> FROM A ', bold: true },
            { content: 'UNIQUE <span class="br">& SPECIAL</span> ', bold: false },
            { content: 'PERSPECTIVE.', bold: true }
          ],
          desp: 'AI로 불가능한 영역에 적극적으로 도전하는 <span class="br">스타트업의 마인드로 카카오브레인만이 할 수 있는</span> <span class="br">AI 선행 연구와 기술 개발을 진행해 더 나은 세상을</span> 만드는데 기여하고자 합니다.'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .main {
    padding-top: 200px;
    .question {
      margin-top: 436px;
    }
    .slogan {
      margin-top: 500px;
    }
    .full-image {
      margin-top: 100px;
    }
    .machine-wrap {
      margin-top: 100px;
    }
    .innovation {
      margin-top: 100px;
    }
    .main-archive {
      margin-top: 500px;
    }
    .team {
      margin-top: 500px;
    }
  }
  @include pc-large {
    .main {
      padding-top: 300px;
      .question {
        margin-top: 990px;
      }
      .slogan {
        margin-top: 990px;
      }
      .machine-wrap {
        margin-top: 200px;
      }
      .main-archive {
        margin-top: 700px;
      }
      .team {
        margin-top: 700px;
      }
    }
  }
  @include pc-4k {
    .main {
      padding-top: 260px;
      .question {
        margin-top: 1500px;
      }
      .slogan {
        margin-top: 1500px;
      }
      .machine-wrap {
        margin-top: 442px;
      }
      .innovation {
        margin-top: 200px;
      }
      .main-archive {
        margin-top: 1000px;
      }
      .team {
        margin-top: 1500px;
      }
    }
  }
  @include tablet {
    .main {
      padding-top: 200px;
      .question {
        margin-top: 400px;
      }
      .slogan {
        margin-top: 400px;
      }
      .innovation {
        margin-top: 100px;
      }
      .main-archive {
        margin-top: 300px;
      }
      .team {
        margin-top: 400px;
      }
    }
  }
  @include mobile {
    .main {
      padding-top: 130px;
      .question {
        margin-top: 240px;
      }
      .slogan {
        margin-top: 240px;
      }
      .full-image {
        margin-top: 40px;
      }
      .machine-wrap {
        margin-top: 40px;
        margin-bottom:372px;
      }
      .innovation {
        margin-top: 40px;
      }
      .main-archive {
        margin-top: 300px;
      }
      .team {
        margin-top: 200px;
      }
    }
  }
</style>

<template>
  <div class="main">
    <IssueSlider />
    <UnthinkableQuestion />
    <TextFlow />
    <Slogan :data="sloganData1" />
    <MainFullImage />
    <Slogan :data="sloganData2" />
    <Slogan :data="sloganData3" />
    <InnovationList />
    <BrainGoal />
    <ArchiveList />
  </div>
</template>
<script>
  import IssueSlider from '@/components/pages/main/IssueSlider'
  import UnthinkableQuestion from '@/components/pages/main/UnthinkableQuestion'
  import TextFlow from '@/components/pages/main/TextFlow'
  import Slogan from '@/components/pages/main/Slogan'
  import MainFullImage from '@/components/pages/main/MainFullImage'
  import InnovationList from '@/components/pages/main/InnovationList'
  import BrainGoal from '@/components/pages/main/BrainGoal'
  import ArchiveList from '@/components/pages/main/ArchiveList'
  export default {
    components: {
      IssueSlider,
      UnthinkableQuestion,
      TextFlow,
      Slogan,
      MainFullImage,
      InnovationList,
      BrainGoal,
      ArchiveList
    },
    data() {
      return {
        sloganData1: {
          title: 'What We Do',
          text: [
            { content: "Create the world's mouth in a way that", bold: true },
            { content: ' no one has thought of.', bold: false }
          ],
          desp: '누구도 생각하지 못했던 방식으로 세상의 임팩트를 만듭니다.'
        },
        sloganData2: {
          title: 'What is your Question?',
          text: [
            { content: 'We are looking ', bold: true },
            { content: 'for answers ', bold: false },
            { content: 'to numerous questions ', bold: true },
            { content: 'in the world.', bold: false }
          ],
          desp: '우리는 세상의 수많은 질문들에 대한 해답을 찾고 있습니다.'
        },
        sloganData3: {
          title: 'Our Innovation',
          text: [
            { content: 'WE ', bold: false },
            { content: 'CONTRIBUTE TO THE WORLD FROM A ', bold: true },
            { content: 'UNIQUE & SPECIAL ', bold: false },
            { content: 'PERSPECTIVE.', bold: true }
          ],
          desp: 'AI로 불가능한 영역에 적극적으로 도전하는 스타트업의 마인드로 카카오브레인만이 할 수 있는 AI 선행 연구와 기술 개발을 진행해 더 나은 세상을 만드는데 기여하고자 합니다.'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '/assets/scss/mixins.scss';
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
    .innovation {
      margin-top: 100px;
    }
    .archive {
      margin-top: 500px;
    }
  }
  @include pc-4k {
    .main {
      padding-top: 260px;
    }
  }
  @include pc-large {
    .main {
      padding-top: 300px;
    }
  }
</style>

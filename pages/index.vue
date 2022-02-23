<template>
  <div ref="main" class="main">
    <IssueSlider />
    <UnthinkableQuestion />
    <TextFlow />
    <div class="slogan-area">
      <Slogan :data="sloganData1" />
    </div>
    <MainFullImage />
    <div class="slogan-wrap">
      <Slogan :data="sloganData2" />
    </div>
    <SlotMachine
      ref="slot"
      :flag.sync="scroll.slot.flag"
      :start.sync="scroll.slot.start"
      :end.sync="scroll.slot.end"
    />
    <div class="slogan-wrap">
      <Slogan :data="sloganData3" />
    </div>
    <InnovationList
      ref="innovation"
      :flag.sync="scroll.innovation.flag"
      :start.sync="scroll.innovation.start"
      :end.sync="scroll.innovation.end"
    />
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
            {
              content:
                "We create <span class='br'>an impact</span> <span class='br'>in the world</span>",
              bold: true
            },
            {
              content: 'with unthinkable questions.',
              bold: false
            }
          ]
          // desp: '<span class="br">누구도 생각하지 못했던 방식으로</span> 세상의 임팩트를 만듭니다.'
        },
        sloganData2: {
          title: 'What is your Question?',
          text: [
            { content: 'We are looking ', bold: true },
            { content: '<span class="br">for answers</span> ', bold: false },
            {
              content:
                '<span class="br">to numerous</span> <span class="br">questions</span> ',
              bold: true
            },
            { content: 'in the world.', bold: false }
          ]
          // desp: '<span class="br">우리는 세상의 수많은 질문들에 대한</span> 해답을 찾고 있습니다.'
        },
        sloganData3: {
          title: 'Our Innovation',
          text: [
            { content: 'WE ', bold: false },
            { content: 'CONT', bold: true },
            { content: '<span class="R">R</span> ', bold: false },
            {
              content: 'IBUTE <span class="br">TO THE WORLD</span> FROM A ',
              bold: true
            },
            {
              content: 'UNIQUE <span class="br">& SPECIAL</span> ',
              bold: false
            },
            { content: 'PERSPECTIVE.', bold: true }
          ]
          // desp: 'AI로 불가능한 영역에 적극적으로 도전하는 <span class="br">스타트업의 마인드로 카카오브레인만이 할 수 있는</span> <span class="br">AI 선행 연구와 기술 개발을 진행해 더 나은 세상을</span> 만드는데 기여하고자 합니다.'
        },
        stopFlag: false,
        scroll: {
          slot: {
            flag: false,
            start: true,
            end: false
          },
          innovation: {
            flag: false,
            start: true,
            end: false
          }
        }
      }
    },
    mounted() {
      this.$refs.main.addEventListener('wheel', this.onWheel)
    },
    methods: {
      async onWheel(e) {
        // e.preventDefault()
        if (this.stopFlag) {
          e.preventDefault()
        }
        await this.slotScroll(e)
        await this.innovationScroll(e)
      },
      slotScroll(e) {
        const wheelY = e.deltaY
        const ref = this.$refs.slot
        const scrollCenter = window.scrollY + window.innerHeight / 2
        const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2

        if (
          this.scroll.slot.flag &&
          ((wheelY > 0 && this.scroll.slot.end) ||
            (wheelY < 0 && this.scroll.slot.start))
        ) {
          this.stopFlag = false
          this.scroll.slot.flag = false
          setTimeout(() => {
            ref.setSlot()
          }, 1000)
        } else if (
          !this.scroll.slot.flag &&
          ((wheelY > 0 && !this.scroll.slot.end) ||
            (wheelY < 0 && !this.scroll.slot.start)) &&
          refCenter > window.scrollY &&
          refCenter < window.scrollY + window.innerHeight
        ) {
          window.scrollTo(0, refCenter - window.innerHeight / 2)
          this.stopFlag = true
          this.$nextTick(() => {
            this.scroll.slot.flag = true
          })
        }
      },
      innovationScroll(e) {
        const wheelY = e.deltaY
        const ref = this.$refs.innovation
        const scrollCenter = window.scrollY + window.innerHeight / 2
        const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2

        if (
          this.scroll.innovation.flag &&
          ((wheelY > 0 && this.scroll.innovation.end) ||
            (wheelY < 0 && this.scroll.innovation.start))
        ) {
          this.stopFlag = false
          this.scroll.innovation.flag = false
        } else if (
          !this.scroll.innovation.flag &&
          ((wheelY > 0 && !this.scroll.innovation.end) ||
            (wheelY < 0 && !this.scroll.innovation.start)) &&
          refCenter > window.scrollY &&
          refCenter < window.scrollY + window.innerHeight
        ) {
          window.scrollTo(0, refCenter - window.innerHeight / 2)
          this.stopFlag = true
          this.$nextTick(() => {
            this.scroll.innovation.flag = true
          })
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
    .slogan-area {
      padding: 0 20px;
    }
    .slogan-wrap {
      padding: 0 20px;
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
      .slogan-wrap {
        margin-top: 1000px;
        // margin-top: 990px;
      }
      .full-image {
        margin-top: 100px;
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
      .slogan-wrap {
        margin-top: 1500px;
      }
      .full-image {
        margin-top: 442px;
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
      .slogan-wrap {
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
      padding-top: 96px;
      .question {
        margin-top: 240px;
      }
      .slogan-wrap {
        margin-top: 240px;
      }
      .full-image {
        margin-top: 40px;
      }
      .machine-wrap {
        margin-top: 40px;
        margin-bottom: 372px;
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

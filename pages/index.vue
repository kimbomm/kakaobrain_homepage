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
  import { mapState } from 'vuex'
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
    head: {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://kakaobrain.com/metaimg.png'
        }
      ]
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
        },
        isScrollUp: null,
        touchInfo: {
          start: null,
          end: null
        },
        state: {
          slotFinish: true
        }
      }
    },
    computed: {
      ...mapState(['device'])
    },
    async mounted() {
      this.scrollBody.addEventListener('wheel', this.onScroll)
      window.addEventListener('touchstart', this.touchStart)
      window.addEventListener('touchmove', this.touchMove)
      window.addEventListener('touchend', this.onScroll)
      this.$nuxt.$on('home-reset', this.scrollReset)
      this.$nuxt.$emit('scrollLock', false)
      // this.scrollControl(document.querySelector('body'), 'enable')
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('wheel', this.onScroll)
      window.removeEventListener('touchstart', this.onTouchStart)
      window.removeEventListener('touchmove', this.onTouchMove)
      window.removeEventListener('touchend', this.onScroll)
      this.$nuxt.$off('home-reset', this.scrollReset)
      this.$nuxt.$emit('scrollLock', false)
      // this.scrollControl(document.querySelector('body'), 'enable')
    },
    methods: {
      scrollReset() {
        this.stopFlag = false
        this.scroll = {
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
        this.isScrollUp = null
        this.touchInfo = {
          start: null,
          end: null
        }
        this.$refs.slot.setSlot(true)
      },
      touchStart(e) {
        this.touchInfo.start = e.touches[0].clientY
      },
      touchMove(e) {
        this.touchInfo.end = e.touches[0].clientY
      },
      async onScroll(e) {
        // console.log(e.deltaY)
        if (this.device.touch || window.innerWidth <= 1024) return false
        if (e.type !== 'wheel') {
          this.isScrollUp = this.touchInfo.end < this.touchInfo.start
        }
        if (this.stopFlag) {
          this.$nuxt.$emit('scrollLock', true)
          // this.scrollControl(document.querySelector('body'), 'block')
        }
        await this.slotScroll(e)
        await this.innovationScroll(e)
      },
      setState(type, target) {
        switch (type) {
          case 'stop':
            this.stopFlag = true
            this.scroll[target].flag = true
            this.$nuxt.$emit('scrollLock', true)
            break
          case 'go':
            this.stopFlag = false
            this.scroll[target].flag = false
            this.$nuxt.$emit('scrollLock', false)
            break
        }
      },
      chkCondition(type, event, target) {
        let condition = false
        const targetInfo = this.scroll[target]
        // console.log(event.deltaY, targetInfo.start, targetInfo.end)
        switch (type) {
          case 'stop':
            condition =
              event.type === 'wheel'
                ? !targetInfo.flag &&
                  ((event.deltaY > 0 && !targetInfo.end) ||
                    (event.deltaY < 0 && !targetInfo.start))
                : !targetInfo.flag &&
                  ((this.isScrollUp && !targetInfo.end) ||
                    (!this.isScrollUp && !targetInfo.start))
            break
          case 'go':
            condition =
              event.type === 'wheel'
                ? targetInfo.flag &&
                  ((event.deltaY > 0 && targetInfo.end) ||
                    (event.deltaY < 0 && targetInfo.start))
                : targetInfo.flag &&
                  ((this.isScrollUp && targetInfo.end) ||
                    (!this.isScrollUp && targetInfo.start))
            break
        }
        return condition
      },
      async slotScroll(e) {
        const ref = this.$refs.slot
        const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2
        const scrollCenter = this.scrollBody.scrollTop + window.innerHeight / 2

        if (await this.chkCondition('go', e, 'slot')) {
          this.setState('go', 'slot')
        } else if (
          (await this.chkCondition('stop', e, 'slot')) &&
          refCenter > scrollCenter - 20 &&
          refCenter < scrollCenter + 20
        ) {
          await this.setState('stop', 'slot')
          await this.scrollBody.scrollTo({
            top: refCenter - window.innerHeight / 2,
            behavior: 'smooth'
          })
          this.$nextTick(() => {
            this.state.slotFinish = false
          })
        } else {
          if (
            !this.stopFlag &&
            !this.state.slotFinish &&
            (this.scrollBody.scrollTop + window.innerHeight <=
              ref.$el.offsetTop ||
              this.scrollBody.scrollTop >=
                ref.$el.offsetTop + ref.$el.offsetHeight)
          ) {
            ref.setSlot()
            this.state.slotFinish = true
          }
        }
      },
      async innovationScroll(e) {
        const ref = this.$refs.innovation
        const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2
        const scrollCenter = this.scrollBody.scrollTop + window.innerHeight / 2

        if (await this.chkCondition('go', e, 'innovation')) {
          await this.setState('go', 'innovation')
        } else if (
          (await this.chkCondition('stop', e, 'innovation')) &&
          refCenter > scrollCenter - 20 &&
          refCenter < scrollCenter + 20
        ) {
          await this.setState('stop', 'innovation')
          await this.scrollBody.scrollTo({
            top: refCenter - window.innerHeight / 2,
            behavior: 'smooth'
          })
          await this.$nextTick(() => {
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
    margin-bottom: 500px;
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
      margin-top: 440px;
    }
  }
  @include pc-large {
    .main {
      padding-top: 300px;
      margin-bottom: 670px;
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
        margin-top: 640px;
      }
    }
  }
  @include pc-4k {
    .main {
      padding-top: 260px;
      margin-bottom: 1000px;
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
        margin-top: 1440px;
      }
    }
  }
  @include tablet {
    .main {
      padding-top: 200px;
      margin-bottom: 400px;
      .question {
        margin-top: 400px;
      }
      .slogan-wrap {
        margin-top: 400px;
      }
      .machine-wrap {
        margin-top: 100px;
      }
      .innovation {
        margin-top: 100px;
      }
      .main-archive {
        margin-top: 300px;
      }
      .team {
        margin-top: 340px;
      }
    }
  }
  @include mobile {
    .main {
      padding-top: 96px;
      margin-bottom: 200px;
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
        & + .slogan-wrap {
          margin-top: 372px;
        }
      }
      .innovation {
        margin-top: 40px;
      }
      .main-archive {
        margin-top: 300px;
      }
      .team {
        margin-top: 140px;
      }
    }
  }
</style>

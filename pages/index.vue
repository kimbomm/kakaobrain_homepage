<template>
  <div ref="main" class="main">
    <IssueSlider />
    <Whatwedo />
    <PublicationList />
    <InnovationVision />
    <TextFlow />
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import IssueSlider from '@/components/pages/main/IssueSlider'
  import Whatwedo from '@/components/pages/main/Whatwedo'
  import TextFlow from '@/components/pages/main/TextFlow'
  import Slogan from '@/components/pages/main/Slogan'
  import MainFullImage from '@/components/pages/main/MainFullImage'
  import SlotMachine from '@/components/pages/main/SlotMachine'
  import InnovationList from '@/components/pages/main/InnovationList'
  import InnovationVision from '@/components/pages/main/InnovationVision'
  import ArchiveList from '@/components/pages/main/ArchiveList'
  import PublicationList from '@/components/pages/main/PublicationList'
  export default {
    mixins: [mixinGlobal],
    components: {
      IssueSlider,
      Whatwedo,
      TextFlow,
      Slogan,
      MainFullImage,
      SlotMachine,
      InnovationList,
      InnovationVision,
      ArchiveList,
      PublicationList
    },
    head() {
      return {
        meta: [
          {
            hid: 'og:description',
            property: 'og:description',
            content:
              'Our innovation is to contribute our world-leading technology on large-scale AI models and Digital Human to the tech community, and to create services that improve the value and quality of life.'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${process.env.BASE_URL}/metaimg.png`
          }
        ]
      }
    },
    data() {
      return {
        // sloganData1: {
        //   title: 'What We Do',
        //   text: [
        //     {
        //       content:
        //         "We create <span class='br'>an impact</span> <span class='br'>in the world</span>",
        //       bold: true
        //     },
        //     {
        //       content: 'with unthinkable questions.',
        //       bold: false
        //     }
        //   ]
        //   // desp: '<span class="br">누구도 생각하지 못했던 방식으로</span> 세상의 임팩트를 만듭니다.'
        // },
        // sloganData2: {
        //   title: 'What is your Question?',
        //   text: [
        //     { content: 'We are looking ', bold: true },
        //     { content: '<span class="br">for answers</span> ', bold: false },
        //     {
        //       content:
        //         '<span class="br">to numerous</span> <span class="br">questions</span> ',
        //       bold: true
        //     },
        //     { content: 'in the world.', bold: false }
        //   ]
        //   // desp: '<span class="br">우리는 세상의 수많은 질문들에 대한</span> 해답을 찾고 있습니다.'
        // },
        // sloganData3: {
        //   title: 'Our Innovation',
        //   text: [
        //     { content: 'WE ', bold: false },
        //     { content: 'CONT', bold: true },
        //     { content: '<span class="R">R</span> ', bold: false },
        //     {
        //       content: 'IBUTE <span class="br">TO THE WORLD</span> FROM A ',
        //       bold: true
        //     },
        //     {
        //       content: 'UNIQUE <span class="br">& SPECIAL</span> ',
        //       bold: false
        //     },
        //     { content: 'PERSPECTIVE.', bold: true }
        //   ]
        //   // desp: 'AI로 불가능한 영역에 적극적으로 도전하는 <span class="br">스타트업의 마인드로 카카오브레인만이 할 수 있는</span> <span class="br">AI 선행 연구와 기술 개발을 진행해 더 나은 세상을</span> 만드는데 기여하고자 합니다.'
        // },
        // stopFlag: false,
        // scroll: {
        //   slot: {
        //     flag: false,
        //     start: true,
        //     end: false
        //   },
        //   innovation: {
        //     flag: false,
        //     start: true,
        //     end: false
        //   }
        // },
        // isScrollUp: null,
        // touchInfo: {
        //   start: null,
        //   end: null
        // },
        // state: {
        //   slotFinish: true
        // }
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
      // async onScroll(e) {
      //   // console.log(e.deltaY)
      //   if (this.device.touch || window.innerWidth <= 1024) return false
      //   if (e.type !== 'wheel') {
      //     this.isScrollUp = this.touchInfo.end < this.touchInfo.start
      //   }
      //   if (this.stopFlag) {
      //     this.$nuxt.$emit('scrollLock', true)
      //     // this.scrollControl(document.querySelector('body'), 'block')
      //   }
      //   await this.slotScroll(e)
      //   await this.innovationScroll(e)
      // },
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
      }
      // async slotScroll(e) {
      //   const ref = this.$refs.slot
      //   const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2
      //   const scrollCenter = this.scrollBody.scrollTop + window.innerHeight / 2

      //   if (await this.chkCondition('go', e, 'slot')) {
      //     this.setState('go', 'slot')
      //   } else if (
      //     (await this.chkCondition('stop', e, 'slot')) &&
      //     refCenter > scrollCenter - 20 &&
      //     refCenter < scrollCenter + 20
      //   ) {
      //     await this.setState('stop', 'slot')
      //     await this.scrollBody.scrollTo({
      //       top: refCenter - window.innerHeight / 2,
      //       behavior: 'smooth'
      //     })
      //     this.$nextTick(() => {
      //       this.state.slotFinish = false
      //     })
      //   } else {
      //     if (
      //       !this.stopFlag &&
      //       !this.state.slotFinish &&
      //       (this.scrollBody.scrollTop + window.innerHeight <=
      //         ref.$el.offsetTop ||
      //         this.scrollBody.scrollTop >=
      //           ref.$el.offsetTop + ref.$el.offsetHeight)
      //     ) {
      //       ref.setSlot()
      //       this.state.slotFinish = true
      //     }
      //   }
      // }
      // async innovationScroll(e) {
      //   const ref = this.$refs.innovation
      //   const refCenter = ref.$el.offsetTop + ref.$el.offsetHeight / 2
      //   const scrollCenter = this.scrollBody.scrollTop + window.innerHeight / 2

      //   if (await this.chkCondition('go', e, 'innovation')) {
      //     await this.setState('go', 'innovation')
      //   } else if (
      //     (await this.chkCondition('stop', e, 'innovation')) &&
      //     refCenter > scrollCenter - 20 &&
      //     refCenter < scrollCenter + 20
      //   ) {
      //     await this.setState('stop', 'innovation')
      //     await this.scrollBody.scrollTo({
      //       top: refCenter - window.innerHeight / 2,
      //       behavior: 'smooth'
      //     })
      //     await this.$nextTick(() => {
      //       this.scroll.innovation.flag = true
      //     })
      //   }
      // }
    }
  }
</script>
<style lang="scss" scoped>
  //min-width:1360px
  .main {
    margin-top: 126px;

    .issue-slider {
      top: 0px;
      bottom: 0px;
    }

    .question {
      margin-top: 300px;
    }

    .innovation {
      margin-top: 300px;
    }
    .textflow {
      margin-top: 236px;
      margin-bottom: 300px;
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .main {
      margin-top: 120px;

      .issue-slider {
        top: 0px;
        bottom: 0px;
      }
      .question {
        margin-top: 400px;
      }
      .innovation {
        margin-top: 400px;
      }
      .textflow {
        margin-top: 234px;
        margin-bottom: 400px;
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .main {
      margin-top: 160px;

      .issue-slider {
        top: 0px;
        bottom: 0px;
      }
      .question {
        margin-top: 540px;
      }
      .innovation {
        margin-top: 547px;
      }
      .textflow {
        margin-top: 340px;
        margin-bottom: 540px;
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .main {
      margin-top: 237px;

      .question {
        margin-top: 803px;
      }

      .innovation {
        margin-top: 800px;
      }

      .textflow {
        margin-top: 500px;
        margin-bottom: 800px;
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .main {
      margin-top: 80px;

      .issue-slider {
        top: 0px;
        bottom: 0px;
      }
      .question {
        margin-top: 200px;
      }
      .innovation {
        margin-top: 200px;
      }
      .textflow {
        margin-top: 150px;
        margin-bottom: 150px;
      }
    }
  }
  //max-width: 768px
  @include mobile {
    .main {
      margin-top: 80px;

      .issue-slider {
        top: 0px;
        bottom: 0px;
      }
      .question {
        margin-top: 200px;
      }

      .innovation {
        margin-top: 200px;
      }
      .textflow {
        margin-top: 125px;
      }
    }
  }
  //max-width: 374px
  @include mobile-small {
    .main {
      margin-top: 110px;
      .issue-slider {
        top: 0px;
        bottom: 0px;
      }
      .question {
        margin-top: 140px;
      }
      .innovation {
        margin-top: 140px;
      }
      .textflow {
        margin-top: 125px;
      }
    }
  }
</style>

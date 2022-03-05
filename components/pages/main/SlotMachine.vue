<template>
  <div class="machine-wrap">
    <div ref="machine" class="machine">
      <div ref="slot-contents" class="slot-contents">
        <div class="slot-image">
          <div ref="slot-image">
            <template v-for="(itemIndex, idx) in slot">
              <img
                :key="itemIndex"
                :src="
                  require(`@/assets/images/slot/${data[itemIndex].image}.jpg`)
                "
                alt=""
                :class="{
                  'active-to-top': idx === activeIndex && wheelDir > 0,
                  'active-to-bottom': idx === activeIndex && wheelDir < 0,
                  'prev-active-to-top': idx === prevIndex && wheelDir > 0,
                  'prev-active-to-bottom': idx === prevIndex && wheelDir < 0
                }"
              />
              <!-- 'wait-up': idx === upIndex,
                  'wait-bottom': idx === bottomIndex -->
            </template>
          </div>
        </div>
        <div class="slot-text">
          <div ref="slot-text">
            <template v-for="itemIndex in slot">
              <p :key="itemIndex">
                {{ data[itemIndex].txt[language] }}
              </p>
            </template>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="slogan-text">
      Our innovation is starts with all the krew's questions.
    </div> -->
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      flag: {
        type: Boolean,
        default: false
      },
      start: {
        type: Boolean,
        default: true
      },
      end: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        data: [
          // {
          //   txt: {
          //     KR: '사과는 왜 떨어지는 걸까?',
          //     EN: '사과는 왜 떨어지는 걸까?'
          //   },
          //   image: 'slot_0'
          // },
          {
            txt: {
              KR: '우리 아이 건강 상담을 AI가 해줄 수 는 없을까?',
              EN: 'Can AI provide health counseling for my child?'
            },
            image: 'slot_1'
          },
          // {
          //   txt: {
          //     KR: '나는 왜 태어났나?',
          //     EN: '나는 왜 태어났나?',
          //   },
          //   image: 'slot_2'
          // },
          {
            txt: {
              KR: 'AI가 수능을 볼 수 있을까?',
              EN: 'Can AI take the SAT?'
            },
            image: 'slot_3'
          },
          {
            txt: {
              KR: '인공신경망은 사람의 지능을 뛰어넘을 수 있을까?',
              EN: 'Can artificial neural networks surpass human intelligence?'
            },
            image: 'slot_4'
          },
          {
            txt: {
              KR: '나와 친구같은 AI가 있으면 어떨까?',
              EN: 'What if I had an AI bestie?'
            },
            image: 'slot_5'
          },
          // {
          //   txt: {
          //     KR: '우리는 오늘을 왜 사는걸까?',
          //     EN: '우리는 오늘을 왜 사는걸까?',
          //   }, image: 'slot_6'
          // },
          {
            txt: {
              KR: '팬데믹 시대의 세상을 좀 더 안전하게 만들 수 없을까?',
              EN: 'Can we make the world a little safer in a pandemic?'
            },
            image: 'slot_7'
          },
          // {
          //   txt: {
          //     KR: '왜 사람은 일해야 하는가?',
          //     EN: '왜 사람은 일해야 하는가?',
          //   },
          //   image: 'slot_8'
          // },
          {
            txt: {
              KR: '최고의 언어모델을 100배 더 좋게 만들 수 있을까?',
              EN: 'Can we make the best language model 100 times better?'
            },
            image: 'slot_9'
          },
          // {
          //   txt: {
          //     KR: '우주의 시작은?',
          //     EN: 'Where did the universe begin?'
          //   },
          //   image: 'slot_10'
          // },
          {
            txt: {
              KR: '세상 모든 사람에게 주치의가 있을 수 있을까?',
              EN: 'Can everyone in the world have a family doctor?'
            },
            image: 'slot_11'
          },
          {
            txt: {
              KR: 'AI로 집값을 잡을 수 있을까?',
              EN: 'Can AI be used to control house prices?'
            },
            image: 'slot_12'
          },
          {
            txt: {
              KR: 'AI가 사람의 마음을 치료할 수 있을까?',
              EN: 'Can AI cure the human mind?'
            },
            image: 'slot_13'
          },
          {
            txt: {
              KR: 'AI가 생활을 위협할까?',
              EN: 'Will AI threaten our lives?'
            },
            image: 'slot_14'
          },
          // {
          //   txt: {
          //     KR: '초거대 인공지능은 뭘까?',
          //     EN: '초거대 인공지능은 뭘까?',
          //   },
          //   image: 'slot_15'
          // },
          // {
          //   txt: {
          //     KR: '한번도 보지 못한 것을 떠올릴 수는 없을까?',
          //     EN: '한번도 보지 못한 것을 떠올릴 수는 없을까?',
          //   },
          //   image: 'slot_16'
          // },
          {
            txt: {
              KR: '1억년 후 세상을 예측할 수 있을까?',
              EN: 'Can we predict the world 100 million years from now?'
            },
            image: 'slot_17'
          }
          // {
          //   txt: {
          //     KR: '코로나는 언제 끝날까?',
          //     EN: '코로나는 언제 끝날까?',
          //   },
          //   image: 'slot_18'
          // }
        ],
        slotLength: 5,
        isChanged: true,
        prevIndex: 0,
        activeIndex: 0,
        slot: [],
        wheelDir: 1,
        wheelInfo: {
          deltaY: null
        },
        isScrollUp: null,
        prevY: 0,
        slotChange: true
      }
    },
    computed: {
      ...mapState(['language', 'device'])
    },
    watch: {
      flag(val) {
        if (val) {
          this.isChanged = false
        }
      }
    },
    mounted() {
      this.scrollBody.addEventListener('scroll', this.onWheel)
      this.scrollBody.addEventListener('wheel', this.onWheel)
      this.setSlot()
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('scroll', this.onWheel)
      this.scrollBody.removeEventListener('wheel', this.onWheel)
    },
    methods: {
      onWheel(e) {
        if (
          (this.device.touch || window.innerWidth <= 1024) &&
          e.type === 'scroll'
        ) {
          this.isScrollUp =
            this.scrollBody.scrollTop > this.prevY &&
            this.scrollBody.scrollTop !== 0
          const ref = this.$refs['slot-contents']
          const refCenter = ref.offsetTop + ref.offsetHeight / 2
          for (let i = 0; i < this.slotLength; i++) {
            if (
              refCenter >=
                this.scrollBody.scrollTop +
                  (window.innerHeight * i) / this.slotLength &&
              refCenter <=
                this.scrollBody.scrollTop +
                  (window.innerHeight * (i + 1)) / this.slotLength
            ) {
              if (this.activeIndex === this.slotLength - 1 - i) {
                return false
              }
              this.activeIndex = this.slotLength - 1 - i
              if (this.isScrollUp) {
                this.wheelDir = 1
                this.prevIndex =
                  this.activeIndex === 0 ? 0 : this.activeIndex - 1
              } else {
                this.wheelDir = -1
                this.prevIndex = this.activeIndex + 1
              }

              const targetText = this.$refs['slot-text']
              targetText.style = `transform: translateY(-${
                targetText.offsetHeight * (this.activeIndex / this.slotLength)
              }px)`
              this.slotChange = false
            }
          }
          if (
            !this.slotChange &&
            (this.scrollBody.scrollTop + window.innerHeight < ref.offsetTop ||
              this.scrollBody.scrollTop > ref.offsetTop + ref.offsetHeight)
          ) {
            this.setSlot()
            this.slotChange = true
          }
          this.prevY = this.scrollBody.scrollTop
        } else if (e.type === 'wheel') {
          if (this.wheelSpeed(e) && this.flag && !this.isChanged) {
            e.preventDefault()
            if (e.deltaY > 0) {
              this.wheelDir = 1
              this.onMove('up')
            } else {
              this.wheelDir = -1
              this.onMove('down')
            }
          }
        }
      },
      onMove(type) {
        const targetText = this.$refs['slot-text']
        this.isChanged = true
        switch (type) {
          case 'up':
            if (this.activeIndex < this.slotLength - 1) {
              this.prevIndex = this.activeIndex
              this.activeIndex++
            }
            break
          case 'down':
            if (this.activeIndex > 0) {
              this.prevIndex = this.activeIndex
              this.activeIndex = this.activeIndex - 1
            }
            break
        }
        targetText.style = `transform: translateY(-${
          targetText.offsetHeight * (this.activeIndex / this.slotLength)
        }px)`

        setTimeout(() => {
          this.changeState()
        }, 1000)
      },
      wheelSpeed(e) {
        const isStart =
          !this.isChanged && this.wheelInfo.deltaY < Math.abs(e.deltaY)
        this.wheelInfo.deltaY = Math.abs(e.deltaY)
        return isStart
      },
      changeState() {
        this.isChanged = false
        this.$emit('update:start', this.activeIndex === 0)
        this.$emit('update:end', this.activeIndex === this.slotLength - 1)
      },
      setSlot(isTop) {
        this.slot = []
        for (let i = 0; i < this.slotLength; i++) {
          this.slot.push(this.getRandomNum())
        }
        if (isTop) {
          const targetText = this.$refs['slot-text']
          this.prevIndex = 0
          this.activeIndex = 0
          targetText.style = `transform: translateY(-${
            targetText.offsetHeight * (this.activeIndex / this.slotLength)
          }px)`
        }
      },
      getRandomNum() {
        const num = Math.floor(Math.random() * (this.data.length - 1))
        if (this.slot.includes(num)) {
          return this.getRandomNum()
        } else {
          return num
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .slot-enter {
    transform: translateY(100%);
  }
  .slot-leave-to {
    transform: translateY(-100%);
  }
  .machine {
    // position: relative;
    background-color: $surface-2;
    margin: 0 20px;
    // height: 1500px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slot-contents {
    width: 100%;
    height: 500px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .slot-image {
      overflow: hidden;
      width: 500px;
      height: 100%;
      border-radius: 50%;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate3d(-50%, 0, 0);
    }
    img {
      position: absolute;
      display: block;
      height: 500px;
      transition: top 0.3s ease-out;
      animation-timing-function: cubic-bezier(0.94, 0.22, 0.42, 0.83);
      animation-duration: 1000ms;
      animation-fill-mode: both;
      top: -100%;
      left: -100%;
      &.prev-active-to-top {
        animation-name: 'prev-slot-to-top';
        left: 0 !important;
        z-index: 0;
      }
      &.prev-active-to-bottom {
        animation-name: 'prev-slot-to-bottom';
        left: 0 !important;
        z-index: 0;
      }
      &.active-to-bottom {
        animation-name: 'slot-to-bottom';
        left: 0;
        z-index: 1;
      }
      &.active-to-top {
        animation-name: 'slot-to-top';
        left: 0;
        z-index: 1;
      }
    }
  }
  .slot-text {
    position: relative;
    z-index: 0;
    width: 100%;
    height: calc(160px * 1.1 * 5);
    overflow: hidden;
    > div {
      transition: transform 1s cubic-bezier(0.94, 0.22, 0.42, 0.83);
    }
    p {
      overflow: hidden;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
      height: calc(160px * 1.1 * 5);
      font-size: 160px;
      font-weight: 900;
      line-height: 1.1;
    }
  }
  .slogan-text {
    margin-top: 20px;
    margin-left: getMargin(2);
    padding-left: 20px;
    font-size: 40px;
    font-weight: 600;
    line-height: 110%;
  }
  @include pc-large {
    .machine {
      // height: 2000px;
    }
    .slot-contents {
      height: 600px;
      img {
        height: 600px;
      }
      .slot-image {
        width: 600px;
      }
    }
    .slot-text {
      height: calc(210px * 1.1 * 5);
      p {
        height: calc(210px * 1.1 * 5);
        font-size: 210px;
      }
    }
    .slogan-text {
      font-size: 48px;
    }
  }
  @include pc-4k {
    .machine {
      // height: 3000px;
    }
    .slot-contents {
      height: 900px;
      img {
        height: 900px;
      }
      .slot-image {
        width: 900px;
      }
    }
    .slot-text {
      height: calc(320px * 1.1 * 5);
      p {
        height: calc(320px * 1.1 * 5);
        font-size: 320px;
      }
    }
    .slogan-text {
      font-size: 72px;
    }
  }
  @include tablet {
    .machine {
      height: 700px;
    }
    .slot-contents {
      height: 300px;
      img {
        animation-duration: 500ms;
        height: 300px;
      }
      .slot-image {
        width: 300px;
      }
    }
    .slot-text {
      height: calc(90px * 1.1 * 5);
      > div {
        transition-duration: 500ms;
      }
      p {
        height: calc(90px * 1.1 * 5);
        font-size: 90px;
      }
    }
    .slogan-text {
      font-size: 20px;
    }
  }
  @include mobile {
    .machine {
      padding: 0;
      height: 460px;
    }
    .slot-contents {
      height: 140px;
      img {
        height: 140px;
      }
      .slot-image {
        width: 140px;
      }
    }
    .slot-text {
      height: calc(28px * 1.1 * 5);
      p {
        height: calc(28px * 1.1 * 5);
        font-size: 28px;
      }
    }
    .slogan-text {
      display: none;
    }
  }
</style>

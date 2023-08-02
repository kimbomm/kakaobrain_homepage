<template>
  <div v-if="data.length > 0" class="machine-wrap">
    <div ref="machine" class="machine">
      <div ref="slot-contents" class="slot-contents">
        <div class="slot-image">
          <div ref="slot-image">
            <template v-for="(itemIndex, idx) in slot">
              <img
                :key="itemIndex"
                :src="`${$config.baseURL}${data[itemIndex].Media.url}`"
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
                {{
                  language === 'KR'
                    ? data[itemIndex].contentKR
                    : data[itemIndex].contentEN
                }}
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
  import { mapState, mapActions } from 'vuex'
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
        data: [],
        slotLength: 0,
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
    async mounted() {
      await this.init()
      await this.setSlot()
      await this.scrollBody.addEventListener('scroll', this.onWheel)
      await this.scrollBody.addEventListener('wheel', this.onWheel)
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('scroll', this.onWheel)
      this.scrollBody.removeEventListener('wheel', this.onWheel)
    },
    methods: {
      ...mapActions(['getLibraryCategory']),
      async init() {
        const res = await this.getLibraryCategory({
          category: 'rollingText',
          params: {
            offset: 0,
            limit: 99
          }
        })

        this.data = res.data.list

        this.slotLength = this.data.length > 5 ? 5 : this.data.length
      },
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
        const num = Math.floor(Math.random() * this.data.length)

        if (this.slot.includes(num) || num === this.data.length) {
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
        -webkit-animation-name: 'prev-slot-to-top';
        left: 0 !important;
        z-index: 1;
      }
      &.prev-active-to-bottom {
        -webkit-animation-name: 'prev-slot-to-bottom';
        left: 0 !important;
        z-index: 1;
      }
      &.active-to-bottom {
        -webkit-animation-name: 'slot-to-bottom';
        left: 0;
        z-index: 1;
      }
      &.active-to-top {
        -webkit-animation-name: 'slot-to-top';
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

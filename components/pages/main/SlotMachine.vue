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
                  active: idx === activeIndex,
                  'prev-active': idx === prevIndex,
                  'wait-up': idx === upIndex,
                  'wait-bottom': idx === bottomIndex
                }"
              />
            </template>
          </div>
        </div>
        <div class="slot-text">
          <div ref="slot-text">
            <template v-for="itemIndex in slot">
              <p :key="itemIndex">
                {{ data[itemIndex].txt }}
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
          { txt: '사과는 왜 떨어지는 걸까?', image: 'slot_0' },
          {
            txt: '우리 아이 건강 상담을 AI가 해줄 수 는 없을까?',
            image: 'slot_1'
          },
          { txt: '나는 왜 태어났나?', image: 'slot_2' },
          { txt: 'AI가 수능을 볼 수 있을까?', image: 'slot_3' },
          {
            txt: '인공신경망은 사람의 지능을 뛰어넘을 수 있을까?',
            image: 'slot_4'
          },
          { txt: '나와 친구같은 AI가 있으면 어떨까?', image: 'slot_5' },
          { txt: '우리는 오늘을 왜 사는걸까?', image: 'slot_6' },
          {
            txt: '팬데믹 시대의 세상을 좀 더 안전하게 만들 수 없을까?',
            image: 'slot_7'
          },
          { txt: '왜 사람은 일해야 하는가?', image: 'slot_8' },
          {
            txt: '최고의 언어모델을 100배 더 좋게 만들 수 있을까?',
            image: 'slot_9'
          },
          { txt: '우주의 시작은?', image: 'slot_10' },
          {
            txt: '세상 모든 사람에게 주치의가 생길 수 있을까?',
            image: 'slot_11'
          },
          { txt: 'AI로 집값을 잡을 수 있을까?', image: 'slot_12' },
          { txt: 'AI가 사람의 마음을 치료할 수 있을까?', image: 'slot_13' },
          { txt: 'AI가 생활을 위협할까?', image: 'slot_14' },
          { txt: '초거대 인공지능은 뭘까?', image: 'slot_15' },
          {
            txt: '한번도 보지 못한 것을 떠올릴 수는 없을까?',
            image: 'slot_16'
          },
          { txt: '1억년 후 세상을 예측할 수 있을까?', image: 'slot_17' },
          { txt: '코로나는 언제 끝날까?', image: 'slot_18' }
        ],
        slotLength: 5,
        isChanged: true,
        prevIndex: null,
        activeIndex: 0,
        upIndex: null,
        bottomIndex: 1,
        slot: [],
        lastScrollTop: 0,
        timer: null
      }
    },
    watch: {
      flag(val) {
        if (val) {
          setTimeout(() => {
            this.isChanged = false
          }, 1000)
        }
      }
    },
    mounted() {
      window.addEventListener('wheel', this.onScroll)
      this.setSlot()
    },
    beforeDestroy() {
      window.removeEventListener('wheel', this.onScroll)
    },
    methods: {
      onScroll(e) {
        const targetText = this.$refs['slot-text']
        const _this = this

        if (this.timer !== null) {
          // 움직임
          clearTimeout(this.timer)
          if (!_this.isChanged && _this.flag) {
            _this.isChanged = true
            if (e.deltaY > 0) {
              if (_this.activeIndex < _this.slotLength - 1) {
                _this.prevIndex = _this.activeIndex
                _this.activeIndex++
                _this.upIndex = _this.prevIndex
                _this.bottomIndex =
                  _this.activeIndex + 1 === _this.slotLength
                    ? null
                    : _this.activeIndex + 1
              }
            } else {
              if (_this.activeIndex > 0) {
                _this.prevIndex = _this.activeIndex
                _this.activeIndex = _this.activeIndex - 1
                _this.upIndex =
                  _this.activeIndex === 0 ? null : _this.activeIndex - 1
                _this.bottomIndex = _this.prevIndex
              }
            }
            targetText.style = `transform: translateY(-${
              targetText.offsetHeight * (_this.activeIndex / _this.slotLength)
            }px)`
            _this.setImage()
          }
        }

        this.timer = setTimeout(function () {
          // 멈춤
          // console.log('멈춤')
          _this.isChanged = false
          _this.$emit('update:start', _this.activeIndex === 0)
          _this.$emit('update:end', _this.activeIndex === _this.slotLength - 1)
        }, 500)
      },
      setImage() {
        setTimeout(() => {
          this.prevIndex = null
        }, 350)
      },
      setSlot() {
        this.slot = []
        for (let i = 0; i < this.slotLength; i++) {
          this.slot.push(this.getRandomNum())
        }
      },
      delSlot() {
        this.slot = []
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
    height: 1500px;
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
      transform: translateX(-50%);
    }
    img {
      position: absolute;
      display: block;
      height: 500px;
      transition: top 0.3s linear;
      top: -100%;
      left: -100%;
      &.prev-active {
        top: 0 !important;
        left: 0 !important;
        z-index: 0;
      }
      &.active {
        top: 0;
        left: 0;
        z-index: 1;
      }
      &.wait-up {
        top: -100%;
      }
      &.wait-bottom {
        top: 100%;
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
      transition: transform 0.3s linear;
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
      transition: transform 0.3s linear;
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
      height: 2000px;
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
      height: 3000px;
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
        height: 300px;
      }
      .slot-image {
        width: 300px;
      }
    }
    .slot-text {
      height: calc(90px * 1.1 * 5);
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

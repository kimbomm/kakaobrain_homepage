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
                  require(`@/assets/images/slot/${data[itemIndex].image}.svg`)
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
        isChanged: false,
        prevIndex: 0,
        activeIndex: 0,
        upIndex: null,
        bottomIndex: null,
        slot: [],
        lastScrollTop: 0
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
      this.setSlot()
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll(e) {
        const target = this.$refs['slot-contents']
        const targetImage = this.$refs['slot-image']
        const targetText = this.$refs['slot-text']

        const targetCenter = target.offsetTop + target.offsetHeight / 2
        if (
          targetCenter <= window.scrollY + window.innerHeight &&
          targetCenter >= window.scrollY + window.innerHeight * 0.75
        ) {
          this.isChanged = false
          this.prevIndex = window.scrollY > this.lastScrollTop ? null : 1
          this.activeIndex = 0
          this.upIndex = null
          this.bottomIndex = 1

          targetText.style = `transform: translateY(0)`
        } else if (
          targetCenter <= window.scrollY + window.innerHeight * 0.75 &&
          targetCenter >= window.scrollY + window.innerHeight * 0.5
        ) {
          this.isChanged = false
          this.prevIndex = window.scrollY > this.lastScrollTop ? 0 : 2
          this.activeIndex = 1
          this.upIndex = 0
          this.bottomIndex = 2

          targetText.style = `transform: translateY(-${
            targetText.offsetHeight * 0.25
          }px)`
        } else if (
          targetCenter <= window.scrollY + window.innerHeight * 0.5 &&
          targetCenter >= window.scrollY + window.innerHeight * 0.25
        ) {
          this.isChanged = false
          this.prevIndex = window.scrollY > this.lastScrollTop ? 1 : 3
          this.activeIndex = 2
          this.upIndex = 1
          this.bottomIndex = 3

          targetText.style = `transform: translateY(-${
            targetText.offsetHeight * 0.5
          }px)`
        } else if (
          targetCenter <= window.scrollY + window.innerHeight * 0.25 &&
          targetCenter >= window.scrollY + window.innerHeight * 0
        ) {
          this.isChanged = false
          this.prevIndex = window.scrollY > this.lastScrollTop ? 2 : 3
          this.activeIndex = 3
          this.upIndex = 2
          this.bottomIndex = null

          targetText.style = `transform: translateY(-${
            targetText.offsetHeight * 0.75
          }px)`
        } else if (
          target.offsetTop > window.scrollY + target.offsetHeight ||
          window.scrollY > target.offsetTop + target.offsetHeight
        ) {
          this.setSlot()
        }
        this.setImage()
        this.lastScrollTop = window.scrollY
      },
      setImage() {
        setTimeout(() => {
          this.prevIndex = null
        }, 350)
      },
      setSlot() {
        if (!this.isChanged) {
          this.slot = []
          for (let i = 0; i < 4; i++) {
            this.slot.push(this.getRandomNum())
          }
          this.isChanged = true
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
    height: calc(160px * 3);
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
      font-size: 160px * 0.7;
      height: calc(160px * 3);
      font-weight: 900;
      transition: transform 0.3s linear;
      line-height: 110%;
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
      height: calc(210px * 3);
      p {
        font-size: 210px * 0.7;
        height: calc(210px * 3);
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
      height: calc(320px * 3);
      p {
        font-size: 320px * 0.7;
        height: calc(320px * 3);
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
      height: calc(90px * 3);
      p {
        font-size: 90px * 0.7;
        height: calc(90px * 3);
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
      height: calc(28px * 3);
      p {
        font-size: 28px * 0.7;
        height: calc(28px * 3);
      }
    }
    .slogan-text {
      display: none;
    }
  }
</style>

<template>
  <div class="machine">
    <div class="slot-contents">
      <div class="slot-image">
        <img
          :src="require(`@/assets/images/slot/${data[0].image}.svg`)"
          alt=""
        />
      </div>
      <div class="slot-text">
        <p>{{ data[0].txt }}</p>
      </div>
    </div>
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
        slot: []
      }
    },
    mounted() {
      this.setSlot()
    },
    methods: {
      setSlot() {
        for (let i = 0; i < 4; i++) {
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
  .machine {
    padding: 0 20px;
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
    img {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 100%;
    }
  }
  .slot-text {
    position: relative;
    z-index: 0;
    p {
      font-family: 'NotoSansKR';
      font-size: 160px;
      font-weight: 900;
    }
  }
</style>

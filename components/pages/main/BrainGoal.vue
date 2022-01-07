<template>
  <div class="goal">
    <div class="gl-6">
      <div class="goal-title">
        <span>Unthinkable question makes impactful answer.</span>
      </div>
      <div class="goal-desp">
        <p>
          카카오브레인은 생각하지 못한 물음으로부터 기술을 발전시키고,
          <br />
          모두의 생활을 변화시킵니다.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .goal {
    height: 1500px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    > div {
      position: relative;
      &:before {
        content: '';
        display: inline-block;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/images/ic_circle_4.png');
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(0, -50%);
        z-index: 0;
      }
      &:after {
        content: '';
        display: inline-block;
        width: 200px;
        height: 200px;
        background-image: url('@/assets/images/ic_circle_5.png');
        background-size: cover;
        background-position: center center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-100%, -50%);
        z-index: 0;
      }
    }
    &-title {
      text-transform: uppercase;
      font-size: 110px;
      line-height: 0.9;
      font-weight: 900;
      color: $surface-1;
      position: relative;
      z-index: 1;
    }
    &-desp {
      margin-top: 100px;
      p {
        text-align: right;
        font-family: 'NotoSansKR', sans-serif;
        font-size: 30px;
        line-height: 1.3;
        color: #fff;
      }
    }
  }
</style>

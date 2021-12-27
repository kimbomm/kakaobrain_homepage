<template>
  <button
    ref="btn-top"
    class="btn-top"
    @click="toScrollTop()"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <img
      v-if="interval"
      :src="require(`@/assets/images/top/gotop_img_${NUMBER}.png`)"
      alt="최상단으로 가기"
    />
  </button>
</template>
<script>
  export default {
    data() {
      return {
        interval: null,
        NUMBER: Math.floor(Math.random() * 15) + 1
      }
    },
    mounted() {},
    methods: {
      toScrollTop() {
        window.scrollTo(0, 0)
      },
      onMouseEnter() {
        this.interval = setInterval(this.onChangeImage, 200)
      },
      onMouseLeave() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
        }
      },
      onChangeImage() {
        this.NUMBER = Math.floor(Math.random() * 15) + 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  .btn-top {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 0;
    text-align: center;
    overflow: hidden;
    z-index: 2;
    padding: 0;
    background-color: transparent;
    border: 1px #000 solid;
    &:after {
      content: '';
      display: block;
      height: 126px;
      width: 66px;
      background: url('@/assets/images/icon-top_b.svg') no-repeat 50%;
      background-size: 100%;
      position: absolute;
      left: 50%;
      top: 50%;
      right: 0;
      bottom: 0;
      transform: translate(-50%, -50%);
    }
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 2560px) {
    .btn-top {
      width: 200px;
      height: 200px;
      &:after {
        width: 44px;
        height: 84px;
      }
    }
  }
  @media screen and (max-width: 1920px) {
    .btn-top {
      width: 150px;
      height: 150px;
      &:after {
        width: 34px;
        height: 65px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .btn-top {
      width: 80px;
      height: 80px;
      &:after {
        width: 18px;
        height: 34px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .btn-top {
      width: 50px;
      height: 50px;
      &:after {
        width: 11px;
        height: 21px;
      }
    }
  }
</style>

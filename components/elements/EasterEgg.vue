<template>
  <div class="easter-egg" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
    <img
      :src="require(`@/assets/images/easter-egg/easteregg_img_${NUMBER}.png`)"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        interval: null,
        NUMBER: 0
      }
    },
    methods: {
      onMouseEnter() {
        this.interval = setInterval(this.onChangeImage, 200)
      },
      onMouseLeave() {
        if (this.interval) {
          clearInterval(this.interval)
          this.interval = null
          this.NUMBER = 0
        }
      },
      onChangeImage() {
        this.NUMBER = Math.floor(Math.random() * 15) + 1
      }
    }
  }
</script>
<style lang="scss" scoped>
  .easter-egg {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 30px 30px 50px -10px rgba(0,0,0,0.2);
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>

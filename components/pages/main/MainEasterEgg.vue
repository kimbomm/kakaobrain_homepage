<template>
  <div class="easter-egg">
    <img
      :src="
        require(`@/assets/images/easter-egg/main/easteregg_main_${order}_${NUMBER}.jpg`)
      "
    />
  </div>
</template>
<script>
  export default {
    props: {
      order: {
        type: Number,
        default: 0,
        require: false
      },
      sec: {
        type: Number,
        default: 5000,
        require: false
      }
    },
    data() {
      return {
        interval: null,
        NUMBER: 0
      }
    },
    mounted() {
      this.interval = setInterval(this.onChangeImage, this.sec)
    },
    beforeDestroy() {
      clearInterval(this.interval)
      this.interval = null
      this.NUMBER = 0
    },
    methods: {
      onChangeImage() {
        this.NUMBER = Math.floor(Math.random() * 4)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .easter-egg {
    position: relative;
    width: 190px;
    height: 190px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }
</style>

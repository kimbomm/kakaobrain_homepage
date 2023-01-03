<template>
  <div class="canvas">
    <img class="view" :src="maskingSrc" />
    <canvas style="display: none;" id="canvas" width="1024" height="1024" ref="canvas" />
    <img class="mark" ref="mark" style="display: none;" src="@/assets/images/playground/symbol/karlo_symbol_mark.png" />
  </div>
</template>
<script>
export default {
  props: {
    base64Data: {
      default: '',
    }
  },
  data() {
    return {
      context: null,
      maskingSrc: null,
    }
  },
  mounted() {
    this.context = this.$refs.canvas.getContext('2d')
    this.$nextTick(() => {
      this.onLoad()
    })
  },
  methods: {
    onLoad() {
      const image = new Image()
      const mark = this.$refs.mark
      image.onload = () => {
        this.context.drawImage(image, 0, 0, 1024, 1024)
        this.context.drawImage(mark, 930, 930, 54, 54)

        this.maskingSrc = this.$refs.canvas.toDataURL()
      }
      if (!this.base64Data.includes(';base64,')) {
        image.src = `data:image/png;base64,${this.base64Data}`
      } else {
        image.src = this.base64Data
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/techplayground/demo/karloCanvas.scss';
</style>

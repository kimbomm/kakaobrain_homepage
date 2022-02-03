<template>
  <!-- wrap에 white 클래스 추가하면 글씨색이 흰색으로 변경됩니다 -->
  <div class="wrap">
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer v-if="isFooterShow" />
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  export default {
    components: {
      Header,
      Footer
    },
    data() {
      return {
        isFooterShow: false
      }
    },
    created() {
      this.$nuxt.$on('onSlideEnd', this.onSlideEnd)
    },
    async mounted() {
      await this.$store.commit('setIsDark', false)
      await this.checkDevice()
    },
    beforeDestroy() {
      this.$nuxt.$off('onSlideEnd', this.onSlideEnd)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice'
      }),
      onSlideEnd(value) {
        this.isFooterShow = value
      },
      checkDevice() {
        const device = this.$device
        const isTouchDevice =
          device.ipad ||
          device.iphone ||
          device.android ||
          device.androidPhone ||
          device.mobile

        this.setTouchDevice(isTouchDevice)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrap {
    background-color: $gray-9;
  }
</style>

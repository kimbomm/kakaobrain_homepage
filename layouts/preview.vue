<template>
  <div class="wrap">
    <div class="l-pages">
      <div class="container">
        <Nuxt />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {},
    computed: {
      ...mapState({
        touchDevice: state => state.touchDevice
      })
    },
    created() {},
    async mounted() {
      await this.checkDevice()
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice'
      }),
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
  @import '@/assets/scss/mixins.scss';
  .wrap {
    background-color: $surface-1;
    overflow-x: hidden;
  }
</style>

<template>
  <div :class="classBind" @mouseup="pageClick()" @touchend="pageClick()">
    <playground-header />
    <Nuxt />
    <playground-footer />
  </div>
</template>
<script>
  import Vue from 'vue'
  import {v4 as uuidv4 } from 'uuid'
  import PlaygroundHeader from '@/components/layouts/playground/Header'
  import PlaygroundFooter from '@/components/layouts/playground/Footer'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      PlaygroundHeader,
      PlaygroundFooter,
    },
    data() {
      return {
        scrollLock: false,
        prevY: 0,
        touchInfo: {
          start: null,
          end: null
        }
      }
    },
    computed: {
      ...mapState({
        device: state => state.device
      }),
      classBind() {
        let classList = ['wrap']
        if (this.device.touch && !this.device.mobile) {
          classList.push('device-tablet')
        } else if (this.device.touch && this.device.mobile) {
          classList.push('device-mobile')
        }
        return classList.join(' ')
      },
      route() {
        return this.$route.path
      }
    },
    watch: {},
    created() {
      this.$nuxt.$on('scrollLock', this.onScrollLock)
    },
    beforeMount() {
      Vue.prototype.scrollBody = document.querySelector('.wrap')
      Vue.prototype.scrollLock = false
    },
    async mounted() {
      if (!sessionStorage.getItem('BrainPlayGroundUuidv4')) {
        const uuid = await uuidv4()
        await this.sessionStorage.setItem('BrainPlayGroundUuidv4', uuid)
      }
      await this.checkDevice()
    },
    beforeDestroy() {
      this.$nuxt.$off('scrollLock', this.onScrollLock)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
      }),
      onScrollLock(value) {
        this.scrollLock = value
      },
      checkDevice() {
        const device = this.$device
        const isMobile = device.iphone || device.androidPhone || device.mobile
        const isTouchDevice =
          device.ipad ||
          device.iphone ||
          device.android ||
          device.androidPhone ||
          device.mobile

        this.setTouchDevice({
          touch: isTouchDevice,
          mobile: isMobile
        })
      },
      onWheel(e) {
        e.preventDefault()
        if (this.scrollLock) return false
      },
      pageClick(e) {
        this.$nuxt.$emit('pageClick', e)
      }
    }
  }
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/layout.scss';
</style>

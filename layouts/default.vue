<template>
  <div :class="classBind">
    <div class="l-pages">
      <FilterList v-if="!isStoryPage" />
      <Header />
      <div class="container">
        <Nuxt />
      </div>
      <Footer v-if="isFooterShow" />
    </div>
    <template v-if="!isStoryPage">
      <CardinalPoints />
      <TopButton />
    </template>
  </div>
</template>
<script>
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  import FilterList from '@/components/elements/filter/FilterList'
  import CardinalPoints from '@/components/elements/button/CardinalPoints'
  import TopButton from '@/components/elements/button/TopButton'
  import { mapState, mapMutations } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      FilterList,
      CardinalPoints,
      TopButton
    },
    data() {
      return {
        isStoryPage: false,
        isFooterShow: true,
        isMouseWheel: false,
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
    watch: {
      route(val) {
        if (val) {
          this.setIsScrollUp(false)
        }
      }
    },
    created() {
      this.$nuxt.$on('story-page', this.onStoryPage)
      this.$nuxt.$on('onSlideEnd', this.onSlideEnd)
    },
    beforeMount() {
      const language = localStorage.getItem('language')
      if (language) {
        this.setLanguage(language)
      }
    },
    async mounted() {
      await this.$store.commit('setIsDark', true)
      await this.checkDevice()
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.checkDevice)
      window.addEventListener('touchstart', this.touchStart)
      window.addEventListener('touchmove', this.touchMove)
      window.addEventListener('touchend', this.touchEnd)
    },
    beforeDestroy() {
      this.$nuxt.$off('story-page', this.onStoryPage)
      this.$nuxt.$off('onSlideEnd', this.onSlideEnd)
      window.removeEventListener('scroll', this.onScroll)
      window.removeEventListener('resize', this.checkDevice)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
        setLanguage: 'setLanguage',
        setIsScrollUp: 'setIsScrollUp'
      }),
      onStoryPage(value) {
        this.isStoryPage = value
      },
      onSlideEnd(value) {
        this.isFooterShow = value
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
      onScroll() {
        if (window.scrollY > this.prevY && window.scrollY !== 0) {
          this.setIsScrollUp(true)
        } else {
          this.setIsScrollUp(false)
        }
        this.prevY = window.scrollY
      },
      touchStart(e) {
        this.touchInfo.start = e.touches[0].clientY
      },
      touchMove(e) {
        this.touchInfo.end = e.touches[0].clientY
      },
      touchEnd() {
        this.setIsScrollUp(this.touchInfo.end < this.touchInfo.start)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrap {
    background-color: $surface-1;
    overflow-x: hidden;
  }
</style>

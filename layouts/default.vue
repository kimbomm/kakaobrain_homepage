<template>
  <div class="wrap">
    <div class="l-pages">
      <FilterList v-if="!isStoryPage" />
      <Header :class="{ 'is-hide': isMouseWheel }" />
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
        isMouseWheel: false
      }
    },
    computed: {
      ...mapState({
        touchDevice: state => state.touchDevice,
        list: state => state.innovation.list
      })
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
      window.addEventListener('wheel', this.onWheel)
    },
    beforeDestroy() {
      this.$nuxt.$off('story-page', this.onStoryPage)
      this.$nuxt.$off('onSlideEnd', this.onSlideEnd)
      window.removeEventListener('wheel', this.onWheel)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
        setLanguage: 'setLanguage'
      }),
      onStoryPage(value) {
        this.isStoryPage = value
      },
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
      },
      onWheel(e) {
        if (e.wheelDelta > 0) {
          this.isMouseWheel = false
        } else {
          this.isMouseWheel = true
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrap {
    background-color: $surface-1;
    overflow-x: hidden;
  }
  .header {
    transition: all 0.5s linear;
    &.is-hide {
      opacity: 0;
      transform: translateY(-100%);
    }
  }
  @include tablet {
    .header.is-hide {
      opacity: 1;
      transform: initial;
    }
  }
</style>

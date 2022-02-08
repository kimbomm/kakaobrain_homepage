<template>
  <div class="wrap">
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
        isFooterShow: true
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
    },
    beforeDestroy() {
      this.$nuxt.$off('story-page', this.onStoryPage)
      this.$nuxt.$off('onSlideEnd', this.onSlideEnd)
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

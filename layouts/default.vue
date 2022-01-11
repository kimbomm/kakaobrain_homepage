<template>
  <div class="wrap">
    <div class="l-pages">
      <FilterList />
      <Header />
      <div class="container">
        <Nuxt />
      </div>
      <Footer />
    </div>
    <CardinalPoints />
    <TopButton />
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
    computed: {
      ...mapState({
        touchDevice: state => state.touchDevice,
        list: state => state.innovation.list
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
  @include mobile {
    .l-pages {
      padding: 0 20px;
    }
  }
</style>

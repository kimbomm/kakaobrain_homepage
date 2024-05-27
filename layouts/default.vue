<template>
  <div>
    <div :class="classBind" @click="pageClick">
      <div class="l-pages">
        <FilterList v-if="!isStoryPage" />
        <transition name="fade">
          <SearchPage v-if="isSearchShow" />
        </transition>
        <Header />
        <div class="container">
          <Nuxt />
        </div>
        <Footer v-if="isFooterShow" :class="{ footer__story: isStoryPage }" />
      </div>
      <CardinalPoints v-show="!isStoryPage" />
      <TopButton v-show="!isStoryPage" />
    </div>
    <Popup v-if="privacyPopup" @close="privacyPopup = false" />
  </div>
</template>
<script>
  import Popup from '@/components/Popup.vue'
import CardinalPoints from '@/components/elements/button/CardinalPoints'
import TopButton from '@/components/elements/button/TopButton'
import FilterList from '@/components/elements/filter/FilterList'
import Footer from '@/components/layouts/Footer'
import Header from '@/components/layouts/Header'
import SearchPage from '@/components/pages/search/index'
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      FilterList,
      CardinalPoints,
      TopButton,
      SearchPage,
      Popup
    },
    data() {
      return {
        scrollLock: false,
        isStoryPage: false,
        isFooterShow: true,
        isSearchShow: false,
        prevY: 0,
        touchInfo: {
          start: null,
          end: null
        },
        privacyPopup: false
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
      },
    },
    created() {
      // this.isFooterShow = this.route == '/search' ? false : true
      this.$nuxt.$on('scrollLock', this.onScrollLock)
      this.$nuxt.$on('story-page', this.onStoryPage)
      this.$nuxt.$on('onSlideEnd', this.onSlideEnd)
      this.$nuxt.$on('onSearch', this.onSearch)
    },
    beforeMount() {
      Vue.prototype.scrollBody = document.querySelector('.wrap')
      Vue.prototype.scrollLock = false
      const language = this.$cookies.get('brain_home_language')
      if (language) {
        this.setLanguage(language)
      }
    },
    async mounted() {
      await this.$store.commit('setIsDark', true)
      await this.checkDevice()
      this.scrollBody.addEventListener('scroll', this.onScroll)
      this.scrollBody.addEventListener('wheel', this.onWheel)
      this.scrollBody.addEventListener('resize', this.checkDevice)

      this.privacyPopup = new Date() <= new Date('2024-06-03')
    },
    beforeDestroy() {
      this.$nuxt.$off('story-page', this.onStoryPage)
      this.$nuxt.$off('onSlideEnd', this.onSlideEnd)
      // this.scrollBody.removeEventListener('scroll', this.onScroll)
      // this.scrollBody.removeEventListener('wheel', this.onWheel)
      // this.scrollBody.removeEventListener('resize', this.checkDevice)
    },
    methods: {
      ...mapMutations({
        setTouchDevice: 'setTouchDevice',
        setLanguage: 'setLanguage',
        setIsScrollUp: 'setIsScrollUp'
      }),
      onScrollLock(value) {
        this.scrollLock = value
      },
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
      onWheel(e) {
        e.preventDefault()
        if (this.scrollLock) return false
        this.scrollBody.scrollTop += Math.floor(e.deltaY) * 0.3
        if (this.scrollBody.scrollTop < 0) this.scrollBody.scrollTop = 0
        if (this.scrollBody.scrollTop > this.scrollBody.scrollHeight)
          this.scrollBody.scrollTop = this.scrollBody.scrollHeight
      },
      onScroll() {
        if (
          this.scrollBody.scrollTop > this.prevY &&
          this.scrollBody.scrollTop !== 0
        ) {
          this.setIsScrollUp(true)
        } else {
          this.setIsScrollUp(false)
        }
        this.prevY = this.scrollBody.scrollTop
      },
      pageClick(e) {
        if (
          (e.target.offsetParent &&
            !e.target.offsetParent.classList.contains('menu-item')) ||
          !e.target.offsetParent
        ) {
          this.$nuxt.$emit('closeMenu', true)
        }
      },
      onSearch(val) {
        this.isSearchShow = val
        this.onScrollLock(val)
        this.setIsScrollUp(false)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .wrap {
    background-color: $surface-1;
    overflow-x: hidden;
  }
  .footer__story {
    padding-top: 500px;
    background-color: $gray-9;
    ::v-deep {
      .footer-bottom {
        color: $gray-0;
      }
      .b-symbol {
        background-image: url('~/assets/images/b-w-symbol.png');
      }
      .menu-list {
        color: $gray-0;
      }
    }
  }
  .search {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    overflow: auto;
    z-index: 3;
  }
  @include pc-large {
    .footer__story {
      padding-top: 700px;
    }
  }
  @include pc-4k {
    .footer__story {
      padding-top: 1000px;
    }
  }
  @include tablet {
    .footer__story {
      padding-top: 200px;
    }
  }
  @include mobile {
    .footer__story {
      padding-top: 100px;
      background-color: $gray-0;
      ::v-deep {
        .footer-bottom {
          color: $gray-9;
        }
        .b-symbol {
          background-image: url('~/assets/images/b-symbol.svg');
        }
        .menu-list {
          color: $gray-9;
        }
      }
    }
  }
</style>

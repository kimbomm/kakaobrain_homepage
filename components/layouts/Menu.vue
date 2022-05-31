<template>
  <div class="menu">
    <div v-if="!isSearchShow" :class="classBind">
      <div class="menu-list">
        <ul :class="{ 'menu-enter': isHover }">
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            class="menu-item"
            @mouseenter=";(hoverIndex = index), (isHover = true)"
            @mouseleave="isHover = false"
          >
            <button type="button" class="txt" @click="openMenu(index)">
              <sup
                v-if="
                  Object.keys(count).includes(menu.category) &&
                  count[menu.category]
                "
                class="num"
                >{{ count[menu.category] }}</sup
              >
              {{ menu.name }}
            </button>
            <ul
              v-show="clickIndex === index"
              :ref="`subMenu-${index}`"
              :id="`subMenu-${index}`"
              :class="`subMenu-${index}`"
            >
              <li v-for="subMenu in menu.sub" :key="subMenu.category">
                <a
                  v-if="subMenu.target"
                  :href="subMenu.link"
                  :target="subMenu.target"
                >
                  <!-- @click.prevent="clickIndex = null" -->
                  {{ subMenu.name }}
                </a>
                <nuxt-link v-else exact :to="subMenu.link">
                  {{ subMenu.name }}
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div
      :class="{
        'common-menu': true,
        'hide-target': true,
        'is-hide': isScrollUp,
        'is-search': isSearchShow
      }"
    >
      <template v-if="!isSearchShow">
        <button class="common-search" @click="onSearch(true)">검색하기</button>
        <button
          :class="`btn-lang ${cookieLang}`"
          @click="selectLang(cookieLang === 'KR' ? 'EN' : 'KR')"
        ></button>
      </template>
      <template v-else>
        <button class="btn-search-close" @click="onSearch(false)">
          검색창닫기
        </button>
      </template>
    </div>
    <button
      v-if="!isSearchShow"
      :class="{ 'menu-btn': true, 'hide-target': true, 'is-hide': isScrollUp }"
      @click="setIsMenuOpen(true)"
      title="메뉴 열기"
    ></button>
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import MobMenu from '@/components/layouts/MobMenu'
  export default {
    components: {
      MobMenu
    },
    data() {
      return {
        isMenu: false,
        isAnimation: false,
        isHover: false,
        hoverIndex: null,
        clickIndex: null,
        languageList: [
          { name: 'English', value: 'EN' },
          { name: 'Korean', value: 'KR' }
        ],
        pageData: {
          offset: 0,
          limit: 0,
          contentType: 'ALL',
          targetLang: 'EN'
        },
        isSearchShow: false
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isDark: state => state.isDark,
        isFilterMenuOpen: state => state.isFilterMenuOpen,
        isScrollUp: state => state.isScrollUp,
        isMenuOpen: state => state.isMenuOpen,
        count: state => state.count
      }),
      classBind() {
        let classList = ['menu', 'menu-outer', 'hide-target']
        if (this.isFilterMenuOpen || !this.isDark) {
          classList.push('menu__light')
        }
        if (this.isScrollUp) {
          classList.push('is-hide')
        }

        return classList.join(' ')
      },
      cookieLang() {
        return this.$cookies.get('brain_home_language') || this.language
      }
    },
    watch: {
      isMenuOpen(val) {
        if (val) {
          this.$nuxt.$emit('scrollLock', true)
          setTimeout(() => {
            this.isAnimation = true
          }, 300)
        } else {
          this.isAnimation = false
          this.$nuxt.$emit('scrollLock', false)
        }
      },
      $route: {
        deep: true,
        handler(val) {
          if (this.isSearchShow) {
            this.onSearch(false)
          }
        }
      }
    },
    created() {
      this.$nuxt.$on('closeMenu', this.closeMenu)
      this.$nuxt.$on('onSearch', val => {
        this.isSearchShow = val
        if (!val) {
          this.setKeyword(null)
        }
      })
    },
    async mounted() {
      await this.init()
    },
    beforeDestroy() {
      this.$nuxt.$off('closeMenu', this.closeMenu)
      this.$nuxt.$off('onSearch', val => {
        this.isSearchShow = val
      })
    },
    methods: {
      ...mapMutations({
        setLanguage: 'setLanguage',
        setIsMenuOpen: 'setIsMenuOpen',
        setKeyword: 'setKeyword'
      }),
      ...mapActions({
        getCount: 'getCount'
      }),
      async init() {
        this.pageData.targetLang = this.language
        const keys = Object.keys(this.count)
        keys.forEach(async category1 => {
          await this.getCount({
            category1,
            pageData: this.pageData
          })
        })
      },
      async selectLang(lang) {
        this.$cookies.set('brain_home_language', lang)
        await this.setLanguage(lang)

        this.$nextTick(() => {
          if (
            this.$route.path === '/contents' ||
            this.$route.path === '/contents/'
          ) {
            this.$nuxt.$emit('langChange')
          } else {
            window.location.reload(true)
          }
        })
      },
      openMenu(index) {
        if (this.clickIndex === index) {
          this.clickIndex = null
        } else {
          this.clickIndex = index
          this.$nextTick(() => {
            const menu = this.$refs[`subMenu-${index}`][0]
            const subMenuPos =
              menu.parentElement.offsetLeft +
              menu.parentElement.offsetWidth / 2 +
              menu.offsetWidth / 2
            if (subMenuPos > window.innerWidth) {
              menu.style.left = `calc(50% - ${
                subMenuPos - window.innerWidth + 20
              }px)`
            }
          })
        }
      },
      closeMenu() {
        if (this.clickIndex >= 0) {
          this.clickIndex = null
        }
      },
      onSearch(val) {
        this.$nuxt.$emit('onSearch', val)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .animation {
    opacity: 0;
    animation-duration: 1s;
    animation-fill-mode: both;
    animation-timing-function: ease-out;
    &.delay-0 {
      animation-delay: 0.1s;
    }
    &.delay-1 {
      animation-delay: 0.1s;
    }
    &.delay-2 {
      animation-delay: 0.3s;
    }
    &.delay-3 {
      animation-delay: 0.4s;
    }
    &.delay-4 {
      animation-delay: 0.5s;
    }
  }
  .fade-up {
    animation-name: fadeUp;
  }
  .menu {
    z-index: 10;
    display: flex;
    &-item {
      position: relative;
      display: inline-block;
      font-weight: 900;
      &:not(:last-child) {
        margin-right: 30px;
      }
      .num {
        font-weight: 400;
      }
      .txt {
        font-size: 16px;
        font-weight: 900;
        font-family: 'Inter';
      }
      button {
        padding: 0px;
        background-color: rgba(0, 0, 0, 0);
        color: $gray-9;
      }
      ul {
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        padding: 10px 30px;
        border-radius: 78px;
        background-color: #000;
        display: flex;
        white-space: nowrap;
        li {
          margin-right: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
        a {
          font-size: 14px;
          line-height: 2.1;
          color: #fff;
          font-weight: 400;
          &.nuxt-link-active,
          &:hover {
            color: $brain-yellow;
          }
        }
      }
    }
    .menu-enter {
      .menu-item {
        button {
          color: $gray-5;
        }
        &:hover {
          button {
            color: #000;
          }
        }
      }
    }
    &__light {
      .menu-item button {
        color: #fff;
      }
      & + .menu-btn {
        background-image: url('~/assets/images/mob_menu-w.svg');
      }
    }
  }
  .menu-btn {
    display: none;
    width: 40px;
    height: 40px;
    background-image: url('~/assets/images/mob_menu.svg');
    background-size: cover;
    background-position: center center;
  }
  .common-menu {
    font-size: 0;
    margin-left: 30px;
    padding-top: 3px;
    &.is-search {
      margin-right: 0;
    }
    button {
      width: 20px;
      height: 20px;
      margin-right: 10px;
      background-size: cover;
      background-repeat: no-repeat;
      text-indent: -9999px;
      font-size: 0;
      vertical-align: middle;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  @include pc-large {
    .menu-item {
      .txt {
        font-size: 22px;
      }
    }
    .common-menu {
      margin-left: 36px;
      padding-top: 5px;
      button {
        width: 26px;
        height: 26px;
      }
    }
  }
  @include pc-4k {
    .menu-item {
      .txt {
        font-size: 34px;
      }
    }
    .common-menu {
      padding-top: 6px;
      button {
        width: 40px;
        height: 40px;
      }
    }
  }
  @include tablet {
    .menu.menu-outer {
      display: none;
    }
    .hide {
      display: none !important;
    }
    .menu-btn {
      display: block;
    }
    .common-menu {
      margin-left: 0;
      margin-right: 5px;
      padding-top: 0;
      button {
        width: 40px;
        height: 40px;
      }
    }
  }
  @include mobile {
    .menu-btn {
      position: absolute;
      top: 13px;
      right: 15px;
      width: 30px;
      height: 30px;
    }
    .common-menu {
      margin-right: 35px;
      button {
        width: 30px;
        height: 30px;
      }
    }
  }
</style>

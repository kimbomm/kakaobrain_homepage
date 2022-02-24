<template>
  <div class="menu">
    <div :class="classBind">
      <div class="menu-list">
        <ul>
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            class="menu-item"
            @mouseenter="hideMenu(true)"
          >
            <button type="button">
              <!-- <span v-if="menu.alarm" class="num">{{ menu.alarm }}</span> -->
              <span class="txt">{{ menu.name }}</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <button
      :class="{ 'menu-btn': true, 'is-hide': isScrollUp }"
      @click="hideMenu(true)"
      title="메뉴 열기"
    ></button>
    <transition name="slide">
      <div v-if="this.isMenu" class="hide" @mouseleave="hideMenu(false)">
        <div class="lang">
          <ul>
            <li
              v-for="(item, index) in languageList"
              :key="index"
              :class="`lang-item animation delay-${index} ${
                isAnimation ? 'fade-up' : ''
              }`"
            >
              <button
                :class="item.value === language ? 'is-active' : ''"
                @click="selectLang(item.value)"
              >
                {{ item.name }}
              </button>
            </li>
          </ul>
        </div>
        <div class="menu">
          <ul>
            <li
              v-for="(menu, index) in menus"
              :key="`menu-${index}`"
              class="menu-item"
            >
              <!-- <span v-if="menu.alarm" class="num">{{ menu.alarm }}</span> -->
              <span :class="`animation ${isAnimation ? 'fade-up' : ''}`">{{
                menu.name
              }}</span>
              <ul class="sub">
                <li
                  v-for="(subMenu, idx) in menu.sub"
                  :key="`sub-${idx}`"
                  :class="`sub-item animation delay-${idx} ${
                    isAnimation ? 'fade-up' : ''
                  }`"
                  @click="hideMenu(false)"
                >
                  <template v-if="subMenu.name !== 'Principle'">
                    <nuxt-link :to="subMenu.link">{{ subMenu.name }}</nuxt-link>
                  </template>
                  <template v-else>
                    <a :href="principleLink" target="_blank">{{
                      subMenu.name
                    }}</a>
                  </template>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </transition>
    <transition name="slide">
      <MobMenu v-if="this.isMenu" @onClose="hideMenu(false)" />
    </transition>
  </div>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import MobMenu from '@/components/layouts/MobMenu'
  export default {
    components: {
      MobMenu
    },
    data() {
      return {
        isMenu: false,
        isAnimation: false,
        languageList: [
          { name: 'English', value: 'EN' },
          { name: 'Korean', value: 'KR' }
        ]
      }
    },
    watch: {
      isMenu(val) {
        if (val) {
          setTimeout(() => {
            this.isAnimation = true
          }, 300)
        } else {
          this.isAnimation = false
        }
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isDark: state => state.isDark,
        isFilterMenuOpen: state => state.isFilterMenuOpen,
        isScrollUp: state => state.isScrollUp
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
      principleLink() {
        let link =
          'https://www.kakaocorp.com/page/responsible/aiEthics?lang=KOR&tab=all'
        if (this.language === 'EN') {
          link =
            'https://www.kakaocorp.com/page/responsible/aiEthics?lang=ENG&tab=all'
        }
        return link
      }
    },
    methods: {
      ...mapMutations({
        setLanguage: 'setLanguage'
      }),
      hideMenu(value) {
        this.isMenu = value
      },
      async selectLang(lang) {
        localStorage.setItem('language', lang)
        await this.setLanguage(lang)
        await this.$forceUpdate()
        // location.href = '/'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-30%);
  }
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
    &-item {
      display: inline-block;
      font-weight: 900;
      &:not(:last-child) {
        margin-right: 30px;
      }
      .num {
        padding-right: 6px;
        vertical-align: top;
        font-size: 12px;
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
  .mob-menu {
    transition: all 0.3s ease-in-out;
  }
  .hide {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: all 0.3s ease-in-out;
    .lang {
      position: absolute;
      right: 30px;
      top: 20px;
      z-index: 10;
      cursor: pointer;
      &-item {
        font-size: 12px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
        button {
          color: $gray-0;
          &.is-active,
          &:hover {
            color: $brain-yellow;
          }
        }
      }
    }
    text-align: center;
    .menu {
      // position: fixed;
      // left: 0;
      // right: 0;
      // top: 0;
      padding: 90px 0 84px;
      background-color: $gray-9;
      &-item {
        text-align: left;
        vertical-align: top;
        color: $gray-0;
        font-size: 22px;
        line-height: 1.3;
        &:not(:last-child) {
          margin-right: 50px;
        }
      }
    }
    .sub {
      margin-top: 30px;
      &-item {
        font-size: 14px;
        line-height: 2.3;
        font-weight: 400;
        a {
          position: relative;
          color: $gray-0;
          &:before {
            content: '';
            position: absolute;
            display: inline-block;
            bottom: -2px;
            left: 0;
            height: 1px;
            background-color: #fff;
            width: 40%;
            opacity: 0;
            transition: all 0.3s ease-out;
          }
          &:hover {
            &:before {
              width: 100%;
              opacity: 1;
            }
          }
        }
      }
    }
  }

  @include pc-large {
    .menu-item {
      .txt {
        font-size: 22px;
      }
    }
  }
  @include pc-4k {
    .menu-item {
      .txt {
        font-size: 34px;
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
  }
  @include mobile {
    .menu-btn {
      position: absolute;
      top: 13px;
      right: 15px;
      width: 30px;
      height: 30px;
    }
  }
</style>

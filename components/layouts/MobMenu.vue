<template>
  <transition name="slide">
    <div v-if="isMenuOpen" class="mob-menu">
      <div class="mob-menu-top">
        <img src="@/assets/images/logo-w.png" />
        <button class="menu-btn" @click="onClose">
          <img
            src="@/assets/images/mob_menu_close.png"
            alt="모바일 메뉴 닫기 이미지"
          />
        </button>
      </div>
      <div class="mob-menu-content">
        <ul class="menu-list">
          <li
            v-for="(menu, index) in menus"
            :key="`menu-${index}`"
            :class="`animation delay-${index} ${isAnimation ? 'fade-up' : ''}`"
            v-if="index < 5"
          >
            <button
              :class="`${
                active.includes(index) ? 'is-active ' : ''
              }menu-toggle ${index === 1 || index === 4 ? 'hide-toggle' : ''} `"
              @click="onClick(index)"
            >
              <span class="menu-name">
                <a
                  v-if="menu.name === 'Carrers'"
                  :href="menu.link"
                  target="_blank"
                >
                  {{ menu.name }}</a
                >

                <a v-if="menu.name === 'News'" :href="menu.link">
                  {{ menu.name }}</a
                >

                <sup
                  v-if="
                    Object.keys(count).includes(menu.category) &&
                    count[menu.category]
                  "
                  class="num"
                >
                  {{ count[menu.category] }}
                </sup>
                <a v-if="menu.name != 'Carrers' && menu.name != 'News'">{{
                  menu.name
                }}</a>
              </span>
            </button>
            <ul class="sub-menu" v-if="index !== 1 && index !== 4">
              <li
                v-for="(subMenu, idx) in menu.sub"
                :key="`sub-${idx}`"
                @click="onClose"
              >
                <a :href="subMenu.link" :target="subMenu.target">
                  {{ subMenu.name }}
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <!-- <div class="etc-menu">
          <a
            href="https://careers.kakaobrain.com/"
            target="_blank"
            :class="`tag-link animation delay-4 ${
              isAnimation ? 'fade-up' : ''
            }`"
            @click="onClose()"
          >
            Careers
          </a>
        </div> -->

        <MobMenuFooter @onClose="onClose" />
      </div>
    </div>
  </transition>
</template>
<script>
  import { mapState, mapMutations } from 'vuex'
  import Icon from '@/components/elements/Icon'
  import MobMenuFooter from '@/components/layouts/MobMenuFooter'
  export default {
    components: {
      Icon,
      MobMenuFooter
    },
    data() {
      return {
        active: [],
        isAnimation: false,
        languageList: [
          { name: 'English', value: 'EN' },
          { name: 'Korean', value: 'KR' }
        ]
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isMenuOpen: state => state.isMenuOpen,
        count: state => state.count
      }),
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
    mounted() {
      setTimeout(() => {
        this.isAnimation = true
      }, 300)
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      this.isAnimation = false
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapMutations(['setIsMenuOpen', 'setLanguage']),
      onScroll(e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      },

      onClose() {
        this.setIsMenuOpen(false)
      },
      onClick(idx) {
        this.active.includes(idx)
          ? (this.active = this.active.filter(item => item != idx))
          : this.active.push(idx)
      },
      async selectLang(lang) {
        localStorage.setItem('language', lang)
        await this.setLanguage(lang)
        await window.location.reload(true)
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
      animation-delay: 0.2s;
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
    -webkit-animation-name: fadeUp;
    -moz-animation-name: fadeUp;
    -ms-animation-name: fadeUp;
  }
  .mob-menu {
    transition: all 0.3s ease-in-out;
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 20;
    background-color: #000;
    color: #fff;
    &-top {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      // height: 46px;
      display: flex;
      justify-content: space-between;
      // align-items: center;
      align-items: flex-start;
      padding: 16px 20px 0 20px;
      img {
        width: 84px;
      }
      button {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
        }
      }
    }
    &-content {
      margin-top: 46px;
      height: calc(100% - 46px);
      padding: 0 20px 50px 20px;
      margin-left: getMargin(2);
      overflow-y: auto;
    }
  }
  .menu-list {
    margin-top: 140px;
    > li {
      margin-top: 60px;
      &:first-child {
        margin-top: 0;
      }
      &:last-child .sub-menu {
        padding-bottom: 0px;
      }
    }
  }
  .sub-menu {
    display: none;
    margin-top: 25px;
    padding-bottom: 40px;
    li {
      font-size: 20px;
      line-height: 1.3;
      font-weight: 400;
      height: 50px;
      display: flex;
      align-items: center;
      a {
        color: #fff;
      }
    }
  }
  .menu-toggle {
    color: #fff;

    &:after {
      content: '▼';
      transform: rotate(180deg);
      margin-left: 10px;
    }
    &.is-active {
      &:after {
        content: '▲';
      }
      & + .sub-menu {
        display: block;
      }
    }
  }
  .hide-toggle {
    &:after {
      display: none;
    }
  }

  .menu-name {
    font-size: 24px;
    font-weight: 900;
  }
  .menu-num {
    font-size: 18px;
    font-weight: 300;
    position: relative;
    top: -7px;
    left: -2px;
  }
  .etc-menu {
    margin-top: 60px;
    .tag-link {
      display: inline-block;
      padding: 10px 20px;
      background: #fff;
      border-radius: 100px;
      font-size: 14px;
      line-height: 1.3;
      color: #000;
    }
  }
  @include tablet {
    .mob-menu {
      display: block;
    }
  }
  @include mobile {
    .lang {
      margin-top: 50px;
      &-item {
        margin-bottom: 17px;
        font-size: 16px;
      }
    }
    .mob-menu {
      &-top {
        align-items: center;
        padding: 0 15px 0 20px;
        height: 56px;
        // height: 51px;
        span {
          font-size: 18px;
        }
        button {
          // position: absolute;
          // top: 13px;
          // right: 15px;
          width: 30px;
          height: 30px;
        }
      }
      &-content {
        margin-top: 56px;
        height: calc(100% - 56px);
        margin-left: getMargin(1);
      }
    }
    .sub-menu {
      margin-top: 25px;
    }
    .menu-list {
      margin-top: 116px;
    }
    .etc-menu {
      .tag-link {
        padding: 8px 16px;
      }
    }
  }
</style>

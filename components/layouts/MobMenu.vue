<template>
  <div class="mob-menu">
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
        >
          <button
            :class="`${active.includes(index) ? 'is-active ' : ''}menu-toggle`"
            @click="onClick(index)"
          >
            <span class="menu-name">{{ menu.name }}</span>
            <!-- <span v-if="menu.alarm" class="menu-num">{{ menu.alarm }}</span> -->
          </button>
          <ul class="sub-menu">
            <li
              v-for="(subMenu, idx) in menu.sub"
              :key="`sub-${idx}`"
              @click="onClose"
            >
              <template v-if="subMenu.name !== 'Principle'">
                <nuxt-link :to="subMenu.link">{{ subMenu.name }}</nuxt-link>
              </template>
              <template v-else>
                <a :href="principleLink" target="_blank">{{ subMenu.name }}</a>
              </template>
            </li>
          </ul>
        </li>
      </ul>
      <MobMenuFooter @onClose="onClose" />
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
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
        isAnimation: false
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language
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
      onScroll(e) {
        e.preventDefault()
        e.stopPropagation()
        return false
      },
      onClose() {
        this.$emit('onClose')
      },
      onClick(idx) {
        this.active.includes(idx)
          ? (this.active = this.active.filter(item => item != idx))
          : this.active.push(idx)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes fadeUp {
    from {
      transform: translateY(10%);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .animation {
    opacity: 0;
    animation-duration: 0.3s;
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
  .mob-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
  @include tablet {
    .mob-menu {
      display: block;
    }
  }
  @include mobile {
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
  }
</style>

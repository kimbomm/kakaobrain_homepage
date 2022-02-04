<template>
  <div>
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
    <button class="menu-btn" @click="hideMenu(true)" title="메뉴 열기"></button>

    <div v-if="this.isMenu" class="hide" @mouseleave="hideMenu(false)">
      <div class="lang">
        <ul>
          <li
            v-for="(item, index) in languageList"
            :key="index"
            class="lang-item"
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
            <span>{{ menu.name }}</span>
            <ul class="sub">
              <li
                v-for="(subMenu, idx) in menu.sub"
                :key="`sub-${idx}`"
                class="sub-item"
              >
                <nuxt-link :to="subMenu.link">{{ subMenu.name }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <MobMenu v-if="this.isMenu" @onClose="hideMenu(false)" />
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
        languageList: [
          { name: 'English', value: 'en' },
          { name: 'Korean', value: 'ko' }
        ]
      }
    },
    computed: {
      ...mapState({
        menus: state => state.menus,
        language: state => state.language,
        isDark: state => state.isDark,
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      classBind() {
        let classList = ['menu', 'menu-outer']
        if (this.isFilterMenuOpen || !this.isDark) {
          classList.push('menu__light')
        }

        return classList.join(' ')
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
        await this.setLanguage(lang)
        await this.$router.push('/main')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu {
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
    width: 30px;
    height: 30px;
    background-image: url('~/assets/images/mob_menu.svg');
    background-size: cover;
    background-position: center center;
  }

  .hide {
    .lang {
      position: fixed;
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
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      padding: 90px 0 84px;
      background-color: $gray-9;
      &-item {
        text-align: left;
        vertical-align: top;
        color: $gray-0;
        font-size: 14px;
        &:not(:last-child) {
          margin-right: 50px;
        }
        // &:nth-child(2) .sub {
        //   margin-left: 23px;
        // }
        // &:nth-child(3) .sub {
        //   margin-left: 20px;
        // }
        // &:nth-child(4) .sub {
        //   margin-left: 12px;
        // }
        // &:nth-child(5) .sub {
        //   margin-left: 20px;
        // }
      }
    }
    .sub {
      margin-top: 30px;
      &-item {
        // line-height:23px;
        font-size: 14px;
        font-weight: 400;
        &:not(:last-child) {
          margin-bottom: 8px;
        }
        a {
          color: $gray-0;
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
</style>

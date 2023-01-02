<template>
  <header>
    <div class="header-menu">
      <div class="select-button">
        <button @click="onFocus()" @blur="onBlur()">
          <span v-if="activePage === 0" class="playground">kakaobrain playground</span>
          <span v-else-if="activePage === 1" class="karlo">
            <img src="@/assets/images/playground/symbol/symbol-3.png" />
            <span>Karlo</span>
          </span>
        </button>
        <ul v-if="isFocus" class="selectbox-list">
          <li>
            <button :class="{ 'is-active': activePage === 0 }" @click="onPageMove(0)">
              Playground
              <img src="@/assets/images/icons/ic_arrow_right_gray.png" />
            </button>
          </li>
          <li>
            <button :class="{ 'is-active': activePage === 1 }" @click="onPageMove(1)">Karlo</button>
          </li>
        </ul>
      </div>
      <ul class="menus">
        <li v-for="menu in menus[activePage]" :key="menu.name">
          <nuxt-link :to="menu.link" exact @click.native="onLink(menu.value)">{{ menu.name }}</nuxt-link>
        </li>
      </ul>
    </div>
    <div>
      <button
        :class="`btn-lang ${cookieLang} pc-only`"
        @click="selectLang(cookieLang === 'KR' ? 'EN' : 'KR')"
      ></button>
      <button class="btn-menu mo-only" @click="isMenuOpen = !isMenuOpen"></button>
    </div>
    <div v-if="isMenuOpen" class="mobile-menu mo-only">
      <button
        :class="`btn-lang ${cookieLang}`"
        @click="selectLang(cookieLang === 'KR' ? 'EN' : 'KR')"
      ></button>
      <ul class="menus">
        <li v-for="menu in menus[activePage]" :key="menu.name">
          <nuxt-link :to="menu.link" exact @click.native="onLink(menu.value)">{{ menu.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      isMenuOpen: false,
      isFocus: false,
      activePage: 0,
      menus: [
        [
          {
            name: 'home',
            link: '/techplayground',
            value: 0,
          },
          {
            name: 'karlo',
            link: '/techplayground/karlo',
            value: 1,
          }
        ],
        [
          {
            name: 'home',
            link: '/techplayground/karlo',
            value: 1,
          },
          {
            name: 'demo',
            link: '/techplayground/karlo/demo',
            value: 1,
          }
        ],
      ]
    }
  },
  computed: {
    ...mapState({
      language: state => state.language
    }),
    cookieLang() {
      return this.$cookies.get('brain_home_language') || this.language
    }
  },
  watch: {
    $route(to, from) {
      this.setActivePage(to.path)
      document.querySelector('.wrap').scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  },
  created() {
    this.setActivePage(this.$route.path)
  },
  mounted() {
    this.$nuxt.$on('pageClick', () => {
      if (this.isFocus) {
        this.onBlur()
      }
    })
  },
  methods: {
    ...mapMutations({
        setLanguage: 'setLanguage'
    }),
    setActivePage(path) {
      if (path.includes('karlo')) {
        this.activePage = 1
      }
    },
    onFocus() {
      this.menuClose()
      this.isFocus = !this.isFocus
    },
    onBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 300)
    },
    onPageMove(index) {
      if (this.activePage === index) return false
      this.activePage = index
      switch (index) {
        case 0:
          this.$router.push('/techplayground')
          break
        case 1:
          this.$router.push('/techplayground/karlo')
          break
      }
    },
    onLink(value) {
      this.menuClose()
      this.activePage = value
    },
    async selectLang(lang) {
      this.$cookies.set('brain_home_language', lang)
      await this.setLanguage(lang)
      this.menuClose()
    },
    menuClose() {
      if (this.isMenuOpen) {
        this.isMenuOpen = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/header.scss';
</style>
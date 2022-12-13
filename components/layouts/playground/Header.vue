<template>
  <header>
    <div class="header-menu">
      <div class="select-button">
        <button>
          <span class="playground">kakaobrain playground</span>
        </button>
        <!-- <ul class="select-list">
          <li>
            <button></button>
          </li>
        </ul> -->
      </div>
      <ul class="menus">
        <li v-for="menu in menus[activePage]" :key="menu.name">
          <nuxt-link :to="menu.link" exact>{{ menu.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      activePage: 0,
      menus: [
        [
          {
            name: 'home',
            link: '/techplayground'
          },
          {
            name: 'karlo',
            link: '/techplayground/karlo'
          }
        ]
      ]
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/header.scss';
</style>
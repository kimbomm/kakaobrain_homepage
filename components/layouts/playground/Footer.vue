<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-menus">
        <li v-for="menu in menus" :key="menu.name">
          <nuxt-link v-if="!menu.target" :to="menu.link">{{ menu.name }}</nuxt-link>
          <a v-else :href="menu.link" target="_blank">{{ menu.name }}</a>
        </li>
      </ul>
      <div class="ref">
        <button>관련사이트</button>
      </div>
      <div class="copyright">
        Kakao Brain Corp. ⓒ All Rights Reserved
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      menus: [
        { name: 'main', link: '#', target: '' },
        { name: 'contract', link: '#', target: '_blank' },
        { name: 'privacy policy', link: '#', target: '_blank' },
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/footer.scss';
</style>
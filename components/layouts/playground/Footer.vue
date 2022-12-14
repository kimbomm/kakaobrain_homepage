<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-menus">
        <li>
          <nuxt-link :to="'#'">main</nuxt-link>
        </li>
        <li>
          <a href="mailto:bizdev@kakaobrain.com">contract</a>
        </li>
        <li>
          <a href="https://kakaobrain.com/privacy" target="_blank">privacy policy</a>
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
    return {}
  }
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/footer.scss';
</style>
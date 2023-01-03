<template>
  <footer class="footer">
    <div class="container">
      <ul class="footer-menus">
        <li>
          <nuxt-link to="/techplayground">main</nuxt-link>
        </li>
        <li>
          <a href="mailto:bizdev@kakaobrain.com">contact</a>
        </li>
        <!-- <li>
          <a href="https://kakaobrain.com/privacy" target="_blank">privacy policy</a>
        </li> -->
      </ul>
      <div class="ref">
        <button @click="onFocus()" @blur="onBlur()">Family Site</button>
        <ul v-if="isFocus">
          <li><a href="https://kakaobrain.com/" target="_blank">Kakao Brain</a></li>
          <li><a href="https://careers.kakaobrain.com/" target="_blank">Kakao Brain Careeers</a></li>
          <li><a href="https://tech.kakao.com/blog/" target="_blank">Kakao Brain Blog</a></li>
          <li><a href="https://bdiscover.kakaobrain.com/" target="_blank">B^ DISCOVER</a></li>
        </ul>
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
      isFocus: false
    }
  },
  methods: {
    onFocus() {
      this.isFocus = !this.isFocus
    },
    onBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 300)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/footer.scss';
</style>
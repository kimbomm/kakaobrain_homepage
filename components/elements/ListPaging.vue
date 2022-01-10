<template lang="">
  <div class="paging">
    <div class="paging-prev"><nuxt-link to="" class="link"></nuxt-link></div>
    <div class="paging-num">
      <ul>
        <li><nuxt-link to="" class="link">1</nuxt-link></li>
        <li><nuxt-link to="" class="link">2</nuxt-link></li>
        <li><nuxt-link to="" class="link">3</nuxt-link></li>
        <li><nuxt-link to="" class="link">4</nuxt-link></li>
        <li><nuxt-link to="" class="link">5</nuxt-link></li>
      </ul>
    </div>
    <div class="paging-next"><nuxt-link to="" class="link"></nuxt-link></div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  
  .paging{
    &-prev{
      font-size:16px;
    }
  }
</style>
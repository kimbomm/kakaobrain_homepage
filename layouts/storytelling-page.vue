<template>
  <!-- wrap에 white 클래스 추가하면 글씨색이 흰색으로 변경됩니다 -->
  <div class="wrap white">
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  export default {
    components: {
      Header,
      Footer
    }
  }
</script>
<style lang="scss" scoped>
  .white {
    background-color: $gray-9;
  }
</style>

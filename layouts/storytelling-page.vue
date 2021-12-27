<template>
  <div class="wrap">
    storytelling-page
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
<style lang="scss" scoped></style>

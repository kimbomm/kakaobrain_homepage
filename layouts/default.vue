<template>
  <div class="wrap">
    <div class="l-pages">
      <Header />
      <div class="container">
        <Nuxt />
      </div>
      <Footer />
    </div>
  </div>
</template>
<script>
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  import { mapState } from 'vuex'
  export default {
    components: {
      Header,
      Footer
    },
    computed: {
      ...mapState({
        list: state => state.innovation.list
      })
    },
    created() {
      // console.log(this)
    }
  }
</script>
<style lang="scss" scoped></style>

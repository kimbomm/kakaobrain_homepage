<template>
  <div class="wrap">
    <div class="l-pages">
      <FilterList />
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
  import FilterList from '@/components/elements/filter/FilterList'
  import { mapState } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      FilterList
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

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
    <CardinalPoints />
    <TopButton />
  </div>
</template>
<script>
  import Header from '@/components/layouts/Header'
  import Footer from '@/components/layouts/Footer'
  import FilterList from '@/components/elements/filter/FilterList'
  import CardinalPoints from '@/components/elements/button/CardinalPoints'
  import TopButton from '@/components/elements/button/TopButton'
  import { mapState } from 'vuex'
  export default {
    components: {
      Header,
      Footer,
      FilterList,
      CardinalPoints,
      TopButton
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
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  @include mobile {
    .l-pages{
      padding:0 20px;
    }
  }

</style>

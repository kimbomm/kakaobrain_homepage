<template>
  <div class="wrap">
    <Header />
    <div class="container">
      <Nuxt />
    </div>
    <Footer />
  </div>
</template>
<script>
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import { mapState, mapGetters } from "vuex"
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
<style lang="scss" scoped>

</style>
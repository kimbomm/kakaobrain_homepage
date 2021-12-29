<template>
  <header :class="classBind">
    <h1 class="b-logo">
      <nuxt-link to="/homepage">
        <img
          :src="require(`@/assets/images/logo.png`)"
          alt="카카오 브레인 로고"
        />
      </nuxt-link>
    </h1>
    <div class="header-con">
      <div class="header-item">Unthinkable Question</div>
    </div>
    <Menu />
  </header>
</template>
<script>
  import { mapState } from 'vuex'
  import Menu from '@/components/layouts/Menu'
  export default {
    components: {
      Menu
    },
    computed: {
      ...mapState({
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      classBind() {
        let classList = ['header']
        if (this.isFilterMenuOpen) {
          classList.push('header__light')
        }

        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    font-size: 0px;
    position: relative;
    z-index: 3;
    &-con {
      position: fixed;
      left: 400px;
      top: 20px;
      z-index: 3;
      transition: all 0.5s ease-in-out;
    }
    &-item {
      font-size: 16px;
    }
    &__light {
      .header-con {
        color: #fff;
      }
    }
  }
</style>

<template>
  <header class="header">
    <h1 class="b-logo">
      <nuxt-link to="/homepage">
        <img
          class="black-logo"
          :src="require(`@/assets/images/logo.png`)"
          alt="카카오 브레인 로고"
        />
        <img
          class="white-logo"
          :src="require(`@/assets/images/logo-w.png`)"
          alt="카카오 브레인 로고"
        />
      </nuxt-link>
    </h1>
    <div class="header-con l-ml-2">
      <div class="header-item">Unthinkable Question</div>
    </div>
    <Menu />
  </header>
</template>
<script>
  import Menu from '@/components/layouts/Menu'
  export default {
    components: {
      Menu
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    font-size: 0px;
    &-con {
      position: fixed;
      top: 20px;
      z-index: 3;
      transition: all 0.5s ease-in-out;
    }
    &-item {
      font-size: 16px;
    }
    .white-logo {
      display: none !important;
    }
  }

  .white {
    .white-logo {
      display: block !important;
    }
    .black-logo {
      display: none !important;
    }
    .header-item {
      color: $gray-0;
    }
  }
</style>

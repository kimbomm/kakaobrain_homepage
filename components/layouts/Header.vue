<template>
  <header :class="classBind">
    <div class="header-top">
      <h1 class="b-logo gl-2">
        <nuxt-link to="/">
          <img
            v-if="isFilterMenuOpen || !isDark"
            src="@/assets/images/logo-w.png"
          />
          <img v-else src="@/assets/images/logo.png" />
        </nuxt-link>
      </h1>
      <div class="header-con">
        <div class="header-item">Unthinkable Question</div>
      </div>
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
        isDark: state => state.isDark,
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      classBind() {
        let classList = ['header']
        if (this.isFilterMenuOpen || !this.isDark) {
          classList.push('header__light')
        }

        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    font-size: 16px;
    line-height: 1.3;
    &-top {
      display: flex;
    }
    .b-logo {
      font-weight: 900;
      img {
        width: 80px;
        height: 20px;
      }
    }
    &-con {
      margin-left: 20px;
      z-index: 3;
    }
    &-item {
      font-size: 16px;
    }
    &__light {
      color: $gray-0;
      .header-item {
        color: $gray-0;
      }
    }
  }

  @include pc-large {
    .header,
    .header-item {
      font-size: 22px;
    }
    .header {
      .b-logo {
        img {
          width: 108px;
          height: 27px;
        }
      }
    }
  }
  @include pc-4k {
    .header,
    .header-item {
      font-size: 34px;
    }
    .header {
      .b-logo {
        img {
          width: 176px;
          height: 44px;
        }
      }
    }
  }
  @include tablet {
    .header,
    .header-item {
      top: 16px;
      font-size: 16px;
    }
    .header {
      .b-logo {
        img {
          width: 84px;
          height: 21px;
        }
      }
    }
  }
  @include mobile {
    .header {
      top: 0;
      left: 0;
      width: 100%;
      height: 56px;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .header,
    .header-item {
      font-size: 18px;
      &-con {
        display: none;
      }
    }
  }
</style>

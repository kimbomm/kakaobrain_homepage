<template>
  <header :class="classBind">
    <div class="header-top">
      <h1 class="b-logo gl-2">
        <nuxt-link to="/main">
          <span>kakaobrain</span>
          <!-- <img
						class="black-logo"
						:src="require(`@/assets/images/logo.png`)"
						alt="카카오 브레인 로고"
					/>
					<img
						class="white-logo"
						:src="require(`@/assets/images/logo-w.png`)"
						alt="카카오 브레인 로고"
					/> -->
        </nuxt-link>
      </h1>
      <div class="header-con gl-2">
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
  @import '/assets/scss/mixins.scss';
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
    }
    &-con {
      margin-left: 20px;
      z-index: 3;
    }
    &-item {
      font-size: 16px;
    }
    &__light {
      color: #fff;
      .header-item {
        color: $gray-0;
      }
    }
  }

  @include pc-large {
    .header {
      font-size: 22px;
    }
  }
  @include pc-4k {
    .header {
      font-size: 34px;
    }
  }
  @include tablet {
    .header {
      top: 16px;
      font-size: 16px;
    }
  }
  @include mobile {
    .header {
      top: 13px;
      right: 15px;
      font-size: 18px;
      &-con {
        display: none;
      }
    }
  }
</style>

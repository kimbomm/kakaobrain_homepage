<template>
  <div :class="classBind">
    <button class="selector" @click="onOpenFilter">
      <span class="text">All</span>
      <span class="arrow">▲</span>
    </button>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'FilterSelector',
    computed: {
      ...mapState({
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      classBind() {
        let classList = ['filter']
        if (this.isFilterMenuOpen) {
          classList.push('is-active')
        }

        return classList.join(' ')
      }
    },
    methods: {
      ...mapActions(['changeFilterMenuOpen']),
      onOpenFilter() {
        this.isFilterMenuOpen
          ? this.changeFilterMenuOpen(false)
          : this.changeFilterMenuOpen(true)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .filter {
    .selector {
      cursor: pointer;
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      color: #000;
      line-height: 1.2;
      background-color: transparent;
    }
    .text {
      font-size: 90px;
      font-weight: 900;
    }
    .arrow {
      font-size: 20px;
      margin-left: 36px;
      transition: transform 0.3s linear;
    }
    &.is-active {
      .arrow {
        transform: rotate(180deg);
      }
    }
  }
  @include pc-4k {
    .filter {
      .text {
        font-size: 164px !important;
      }
      .arrow {
        font-size: 40px !important;
        margin-left: 56px !important;
      }
    }
  }
  @include pc-large {
    .filter {
      .text {
        font-size: 110px;
      }
      .arrow {
        font-size: 20px;
        margin-left: 36px;
      }
    }
  }
  @include tablet {
    .filter {
      .text {
        font-size: 50px;
      }
    }
  }
  @include mobile {
    .filter {
      .text {
        font-size:30px;
      }
      .arrow {
        font-size: 10px;
        margin-left: 20px;
      }
    }
  }
</style>

<template>
  <div :class="classBind">
    <button class="selector" @click="onOpenFilter">
      <span class="text">{{ filterText }}</span>
      <span class="arrow">▲</span>
    </button>
  </div>
</template>
<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'FilterSelector',
    props: {
      category: {
        type: String,
        default: '',
        require: true
      },
      list: {
        type: Array,
        default: () => [],
        require: true
      }
    },
    computed: {
      ...mapState({
        filterList: state => state.filterList,
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      // ...mapGetters({
      //   newsCategory: 'newsCategory'
      // }),
      classBind() {
        let classList = ['filter']
        if (this.isFilterMenuOpen) {
          classList.push('is-active')
        }

        return classList.join(' ')
      },
      filterText() {
        return this.list.length === 0
          ? 'All'
          : `${this.list.length} of ${this.filterList.length}`
      }
    },
    methods: {
      ...mapActions(['changeFilterMenuOpen']),
      onOpenFilter() {
        this.isFilterMenuOpen
          ? this.changeFilterMenuOpen(false)
          : (this.$nuxt.$emit('scrollLock', true),
            this.changeFilterMenuOpen(true))
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
      font-size: map-get($font, h1);
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
  @include pc-4k {
    .filter {
      .text {
        font-size: 164px;
      }
      .arrow {
        font-size: 40px;
        margin-left: 56px;
      }
    }
  }

  @include tablet {
    .filter {
      .text {
        font-size: map-get($font-tablet, h1);
      }
    }
  }
  @include mobile {
    .filter {
      .text {
        font-size: map-get($font-mobile, h1);
      }
      .arrow {
        font-size: 10px;
        margin-left: 20px;
      }
    }
  }
</style>

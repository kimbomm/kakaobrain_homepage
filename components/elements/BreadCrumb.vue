<template>
  <div :class="classBind">
    <ul>
      <li v-for="(item, index) in data" :key="index">
        <Sticker
          :text="item.text"
          :sub="item.sub"
          :link="item.link"
          :isDark="isDark"
        />
      </li>
    </ul>
  </div>
</template>
<script>
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    props: {
      data: {
        type: Array,
        default: () => [],
        require: false
      },
      full: {
        type: Boolean,
        default: false,
        require: false
      },
      isDark: {
        type: Boolean,
        default: true,
        require: false
      }
    },
    components: {
      Sticker
    },
    computed: {
      classBind() {
        return {
          'bread-crumb': true,
          'bread-crumb__full': this.full
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .bread-crumb {
    li {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .btn {
      margin-right: 0;
    }
    &__full {
      // padding: 100px 20px 142px;
      // #77번 이슈 처리하면서 주석
      padding: 100px 20px 98px;
    }
  }
  @include pc-large() {
    .bread-crumb {
      &__full {
        padding: 130px 20px 222px;
      }
    }
  }
  @include pc-4k() {
    .bread-crumb {
      &__full {
        padding: 200px 20px 322px;
      }
    }
  }
  @include tablet() {
    .bread-crumb {
      &__full {
        padding: 100px 20px 38px;
      }
      li {
        margin-bottom: 4px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
  @include mobile {
    .bread-crumb {
      &.gl-1 {
        width: 100% !important;
      }
      li {
        display: inline-flex;
        // margin-bottom: 20px;
        margin-bottom:6px;
        margin-right: 4px;
      }
      &__full {
        padding: 76px 20px 60px;
      }
    }
  }
</style>

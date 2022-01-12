<template>
  <div class="bread-crumb gl-1">
    <ul>
      <li v-for="(item, index) in tags" :key="index">
        <Sticker :text="item.tag" />
      </li>
    </ul>
  </div>
</template>
<script>
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    props: {
      tags: {
        type: Array,
        default: () => [],
        require: false
      }
    },
    components: {
      Sticker
    }
  }
</script>
<style lang="scss" scoped>
  @import '/assets/scss/mixins.scss';
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
  }
  @include mobile {
    .bread-crumb {
      &.gl-1 {
        width: 100% !important;
      }
      li {
        display: inline-flex;
        margin-bottom: 20px;
        margin-right: 4px;
      }
    }
  }
</style>

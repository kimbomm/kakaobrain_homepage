<template>
  <div class="bread-crumb gl-1">
    <ul>
      <li>
        <Sticker text="Research" sub="research" />
      </li>
      <li>
        <Sticker text="E." sub="sub" />
      </li>
    </ul>
  </div>
</template>
<script>
  import Sticker from '@/components/elements/button/Sticker'
  export default {
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

<template>
  <button
    ref="tag"
    class="tag"
    :disabled="!data.link"
    @click="onClick(data.link)"
  >
    <span class="tag-name">{{ data.tag }}</span>
  </button>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {}
    },
    methods: {
      onClick(link) {}
    }
  }
</script>
<style lang="scss" scoped>
  .tag {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 182px;
    padding: 30px 50px;
    border-radius: 100px;
    border: 1px solid #000000;
    position: relative;
    &:disabled {
      background-color: inherit;
      border-color: inherit;
      color: inherit;
      cursor: initial;
    }
    &:hover {
      border-color: $brain-orange;
      background-color: $brain-orange;
      color: #fff;
    }
    &-name {
      font-size: 70px;
      line-height: 130%;
      white-space: nowrap;
    }
  }
  @include pc-4k {
    .tag {
      padding: 40px 80px;
      height: 267px;
      &-name {
        font-size: 144px;
      }
    }
  }
  @include tablet {
    .tag {
      padding: 16px 30px;
      height: 76px;
      &-name {
        font-size: 34px;
      }
    }
  }
  @include mobile {
    .tag {
      padding: 9px 16px 8px;
      height: 38px;
      &-name {
        font-size: 16px;
      }
    }
  }
</style>

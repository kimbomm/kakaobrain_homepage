<template>
  <button type="button" :class="`btn ${sub}`">
    <span class="txt">{{ text }}</span>
  </button>
</template>
<script>
  export default {
    name: 'Sticker',
    props: {
      text: {
        type: String,
        default: '',
        required: true
      },
      sub: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    word-break: break-all;
    &.sub {
      background-color: $gray-9;
      border: none;
      color: $gray-0;
    }
    &.docu {
      background-color: $brain-orange;
      border: none;
      color: $gray-0;
      .txt {
        &::before {
          content: '☀';
          display: inline-block;
          padding-right: 2px;
        }
      }
    }
    &.studio {
      background-color: $brain-magenta;
      border: none;
      color: $gray-0;
      .txt {
        &::before {
          content: '❖';
          display: inline-block;
          padding-right: 2px;
        }
      }
    }
    &.research {
      background-color: $brain-mint;
      border: none;
      color: $gray-0;
      .txt {
        &::before {
          content: '★';
          display: inline-block;
          padding-right: 2px;
        }
      }
    }
    &.tech {
      background-color: $brain-purple;
      border: none;
      color: $gray-0;
      .txt {
        &::before {
          content: '■';
          display: inline-block;
          padding-right: 2px;
        }
      }
    }
  }
</style>

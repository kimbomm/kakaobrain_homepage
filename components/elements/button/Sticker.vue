<template>
  <div class="sticker">
    <button type="button" :class="`btn ${sub}`" :disabled="!sub ? true : false">
      <span class="txt">{{ text }}</span>
    </button>
  </div>
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
      },
      link: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin-right: 0;
    margin-bottom: 10px;
    padding: 8px 14px;
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

  @include pc-4k {
    .btn {
      padding: 14px 24px;
      .txt {
        font-size: 28px !important;
      }
    }
  }

  @include pc-large {
    .btn {
      .txt {
        font-size: 18px;
      }
    }
  }

  @include tablet {
    .sticker {
      display: inline-block;
    }
    .btn {
      margin-bottom: 4px;
      .txt {
        font-size: 10px;
      }
    }
  }
  @include mobile {
    .sticker {
      display: inline-block;
    }
    .btn {
      padding: 4px 10px;
      margin-bottom: 0px;
    }
  }
</style>

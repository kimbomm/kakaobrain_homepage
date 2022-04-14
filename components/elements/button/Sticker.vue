<template>
  <div class="sticker">
    <button
      type="button"
      :class="classBind"
      :disabled="!link ? true : false"
      @click="onClick"
    >
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
        // docu, studio, tech, research
        type: String,
        default: '',
        required: false
      },
      link: {
        type: String,
        default: '',
        required: false
      },
      isDark: {
        type: Boolean,
        default: true,
        require: false
      }
    },
    computed: {
      classBind() {
        return {
          btn: true,
          [this.sub]: this.sub,
          'is-white': !this.isDark
        }
      }
    },
    methods: {
      onClick() {
        if (this.link) {
          this.$router.push(this.link)
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .btn {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 34px;
    padding: 8px 14px;
    white-space: nowrap;
    &.is-white {
      background-color: transparent;
      border-color: $gray-0;
      color: $gray-0;
    }
    &:disabled {
      cursor: initial;
    }
    &.sub {
      background-color: $gray-9;
      border: none;
      color: $gray-0;
      &.is-white {
        color: $gray-9;
        background-color: $gray-0;
      }
    }
    &.about {
      background-color: $brain-yellow;
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
    &.log_b {
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

  @include pc-large {
    .btn {
      height: 39px;
      .txt {
        font-size: 18px;
      }
    }
  }

  @include pc-4k {
    .btn {
      height: 64px;
      padding: 14px 24px;
      .txt {
        font-size: 28px !important;
      }
    }
  }

  @include tablet {
    .sticker {
      display: inline-block;
    }
    .btn {
      height: 29px;
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
      height: 21px;
      padding: 4px 10px;
    }
  }
</style>

<template>
  <ul class="hash-list">
    <li v-for="(item, index) in hashList" :key="index">
      <span class="hash">{{ item.text }}</span>
    </li>
  </ul>
</template>
<script>
  export default {
    props: {
      size: {
        trpe: String,
        default: ''
      },
      hashList: {
        type: Array,
        default: () => []
      }
    },
    computed: {
      classBind() {
        const classList = ['hash-list']
        if (this.size === 'sm') {
          classList.push('sm')
        }

        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .hash-list {
    display: flex;
    flex-wrap: wrap;
    li {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
    .hash {
      &:before {
        content: '#';
      }
      font-size: 14px;
      color: $gray-9;
      line-height: 1.3;
      &.sm {
        font-size: 12px;
      }
      &.lg {
        font-size: 14px;
      }
    }
  }
  @include pc-large {
    .hash-list {
      .hash {
        font-size: 18px;
        &.sm {
          font-size: 16px;
        }
        &.lg {
          font-size: 18px;
        }
      }
    }
  }
  @include pc-4k {
    .hash-list {
      .hash {
        font-size: 24px;
        &.sm {
          font-size: 24px;
        }
        &.lg {
          font-size: 24px;
        }
      }
    }
  }
  @include tablet {
    .hash-list {
      .hash {
        font-size: 14px;
        &.sm {
          font-size: 12px;
        }
        &.sm {
          font-size: 18px;
        }
      }
    }
  }
  @include mobile {
    .hash-list {
      .hash {
        font-size: 12px;
        &.sm {
          font-size: 12px;
        }
        &.sm {
          font-size: 12px;
        }
      }
    }
  }
</style>

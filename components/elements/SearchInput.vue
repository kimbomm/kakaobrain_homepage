<template>
  <div class="block">
    <div class="input-icon">
      <button class="btn-search" @click="$emit('search', value)"></button>
    </div>
    <div class="input-area">
      <input
        type="text"
        v-model="inputVal"
        @keyup.enter="$emit('search', value)"
        :placeholder="placeHolder"
        @change="onChange"
      />
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        inputVal: '',
        placeHolder: 'What are you looking for?'
      }
    },
    mounted() {
      this.inputVal = this.value
    },
    methods: {
      onChange() {
        this.$emit('update:value', this.inputVal)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    border-bottom: 3px solid #000;
    padding-bottom: 30px;
    display: flex;
    justify-content: space-between;
  }
  .input {
    &-icon {
      flex: 0 0 34px;
      height: 34px;

      .btn-search {
        width: 100%;
        height: 100%;
        background-image: url('@/assets/images/icon-search__lg.png');
        background-size: cover;
      }
    }
    &-area {
      height: 34px;
      flex: 0 0 calc(100% - 74px);
      input {
        width: 100%;
        font-size: 26px;
        line-height: 1.3;
        font-weight: 600;
        color: $gray-9;
        &::placeholder {
          color: $surface-5;
        }
      }
    }
  }
  @include pc-large {
    .block {
      border-bottom-width: 4px;
    }
    .input {
      &-icon {
        flex: 0 0 45px;
        height: 45px;
      }
      &-area {
        height: 44px;
        flex: 0 0 calc(100% - 95px);
        input {
          font-size: 34px;
        }
      }
    }
  }
  @include pc-large {
    .block {
      border-bottom-width: 6px;
      padding-bottom: 40px;
    }
    .input {
      &-icon {
        flex: 0 0 70px;
        height: 70px;
      }
      &-area {
        height: 66px;
        flex: 0 0 calc(100% - 100px);
        input {
          font-size: 44px;
        }
      }
    }
  }

  @include tablet {
    .block {
      border-bottom-width: 2px;
      padding-bottom: 10px;
    }
    .input {
      &-icon {
        flex: 0 0 30px;
        height: 30px;
      }
      &-area {
        height: 29px;
        flex: 0 0 calc(100% - 40px);
        input {
          font-size: 22px;
        }
      }
    }
  }

  @include mobile {
    .input {
      &-icon {
        flex: 0 0 22px;
        height: 22px;
      }
      &-area {
        height: 21px;
        flex: 0 0 calc(100% - 30px);
        input {
          font-size: 16px;
        }
      }
    }
  }
</style>

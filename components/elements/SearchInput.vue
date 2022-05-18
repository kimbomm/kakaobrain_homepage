<template>
  <div class="block">
    <div class="input-icon">
      <button class="btn-search" @click="$emit('search', value)"></button>
    </div>
    <div class="input-area">
      <input type="text" v-model="value" :placeholder="placeHolder" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        placeHolder: 'What are you looking for?'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .block {
    border-bottom: 3px solid #000;
    height: 65px;
    display: flex;
    justify-content: space-between;
    gap: 40px;
  }
  .input {
    &-icon {
      flex: 0 0 34px;
      height: 34px;
      .btn-search {
        width: 100%;
        height: 100%;
        background: url('@/assets/images/icon-magnifying-glass.svg') no-repeat;
      }
    }
    &-area {
      height: 34px;
      flex: 0 0 calc(100% - 74px);
      input {
        width: 100%;
        font-size: map-get($font-mobile, h2);
        font-weight: 700;
        &::placeholder {
          color: $surface-5;
        }
      }
    }
  }
</style>

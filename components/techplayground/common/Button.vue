<template>
  <button
    :class="classBind"
    :disabled="disabled"
  >{{ text }}</button>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    full: {
      default: false
    },
    disabled: {
      default: false
    },
    theme: {
      // dark
      type: String,
      default: ''
    }
  },
  computed: {
    classBind() {
      const classList = ['button']
      if (this.full) {
        classList.push('button__full')
      }
      if (this.theme) {
        classList.push(`button__${this.theme}`)
      }
      return classList.join(' ')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/techplayground/common/button.scss';
</style>
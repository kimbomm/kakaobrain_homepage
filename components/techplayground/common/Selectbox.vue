<template>
  <div :class="classBind">
    <button :disabled="disabled" @click="onFocus" @blur="onBlur()">
      <span v-if="!value" class="placeholder">선택하기</span>
      <span>{{ selectedItem.name }}</span>
    </button>
    <ul v-if="isFocus" class="selectbox-list">
      <li v-for="item in selectList" :key="item.value">
        <button :class="{ 'active': item.value === value }" @click="onSelect(item)">{{ item.name }}</button>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      default: null
    },
    selectList: {
      type: Array,
      default: () => []
    },
    size: {
      default: ''
    },
    disabled: {
      default: false
    }
  },
  data() {
    return {
      isFocus: false
    }
  },
  computed: {
    classBind() {
      const classList = ['selectbox']
      if (this.size) classList.push(`size__${this.size}`)
      return classList.join(' ')
    },
    selectedItem() {
      return this.value ? this.selectList.find(item => item.value === this.value) : null
    }
  },
  mounted() {
    this.$nuxt.$on('pageClick', () => {
      if (this.isFocus) {
        this.onBlur()
      }
    })
  },
  methods: {
    onClick() {
      if (this.isFocus) {
        this.onBlur()
      }
    },
    onFocus(event) {
      if (!this.isFocus) {
        event.target.focus()
      }
      this.isFocus = !this.isFocus
    },
    onBlur() {
      setTimeout(() => {
        this.isFocus = false
      }, 300)
    },
    onSelect(selectItem) {
      if (selectItem.value === this.value) return false
      this.$emit('update:value', selectItem.value)
      this.$emit('change', selectItem.value)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/techplayground/common/selectbox.scss';
</style>
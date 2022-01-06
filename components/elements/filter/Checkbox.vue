<template>
  <div :class="classBind">
    <input
      v-model="model"
      type="checkbox"
      :id="checkboxId"
      :value="checkboxValue"
      :disabled="disabled"
      @change="onChange"
    />
    <label :for="checkboxId" class="label">
      <span>{{ checkboxText }}</span>
    </label>
  </div>
</template>
<script>
  export default {
    props: {
      theme: {
        type: String,
        default: 'light',
        require: false
      },
      disabled: {
        type: Boolean,
        default: false,
        require: false
      },
      isChecked: {
        type: Boolean,
        default: false,
        require: false
      },
      checkboxId: {
        type: String,
        default: 'checkbox',
        require: true
      },
      checkboxValue: {
        type: String,
        default: 'value',
        require: true
      },
      checkboxText: {
        type: String,
        default: 'checkbox',
        require: true
      }
    },
    computed: {
      classBind() {
        let classList = ['checkbox']
        if (this.theme === 'dark') {
          classList.push('checkbox__dark')
        }
        return classList.join(' ')
      }
    },
    watch: {
      isChecked(val) {
        this.model = val
      }
    },
    data() {
      return {
        model: false
      }
    },
    mounted() {
      this.model = this.isChecked
    },
    methods: {
      onChange() {
        const data = {
          isChecked: this.model,
          value: this.checkboxValue
        }
        this.$emit('change', data)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .checkbox {
    display: inline-flex;
    input {
      display: none;
      &:checked + .label {
        border-color: #000;
        background-color: #000;
        color: #fff;
      }
    }
    .label {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border-radius: 27px;
      border: 1px #000 solid;
      background-color: transparent;
      padding: 8px 14px;
      min-width: 45px;
      height: 34px;
      font-size: 14px;
      line-height: 1.3;
      color: #000;
      font-family: 'Inter';
      font-style: italic;
      cursor: pointer;
      user-select: none; 
      overflow: hidden;
    }
    &__dark {
      .label {
        background-color: #000;
        border: 1px #fff solid;
        color: #fff;
      }
      input:checked + .label {
        background-color: #fff;
        border-color: #fff;
        color: #000;
      }
    } 
  }

  @include pc-4k {
    .checkbox {
      .label {
        padding: 14px 24px !important;
        height: 64px !important;
        font-size: 28px !important;
      }
    }
  }
  @include pc-large {
    .checkbox {
      .label {
        // padding: 14px 24px;
        height: 39px;
        font-size: 18px;
      }
    }
  }
</style>

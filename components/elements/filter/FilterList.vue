<template>
  <transition name="slide">
    <div v-if="isFilterMenuOpen" class="filter-list">
      <div class="gl-6">
        <h3>Category</h3>
        <ul>
          <li v-for="(item, index) in categoryList" :key="index">
            <Checkbox
              theme="dark"
              :checkboxText="item.text"
              :checkboxValue="item.value"
              :checkboxId="`checkbox_${index}`"
              :isChecked="item.isChecked"
              @change="onChange"
            />
          </li>
        </ul>
      </div>
      <button class="btn-close" @click="onClose">
        <img
          src="~/assets/images/icon-close.png"
          alt="필터선택 나가기 버튼 이미지"
        />
      </button>
    </div>
  </transition>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Checkbox from '@/components/elements/filter/Checkbox'
  export default {
    components: {
      Checkbox
    },
    computed: {
      ...mapState({
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      categoryList() {
        let list = []
        // list.push()
        list = [...this.list]
        return list
      }
    },
    mounted() {},
    data() {
      return {
        filterData: [],
        list: [
          { value: 'all', text: 'All', isChecked: false },
          { value: '1', text: '1', isChecked: false },
          { value: '2', text: '2', isChecked: false },
          { value: '3', text: '3', isChecked: false },
          { value: '4', text: '4', isChecked: false },
          { value: '5', text: '5', isChecked: false },
          { value: '6', text: '6', isChecked: false },
          { value: '7', text: '7', isChecked: false },
          { value: '8', text: '8', isChecked: false },
          { value: '9', text: '9', isChecked: false },
          { value: '0', text: '0', isChecked: false }
        ]
      }
    },
    methods: {
      ...mapActions(['changeFilterMenuOpen']),
      onClose() {
        this.changeFilterMenuOpen(false)
      },
      onChange(data) {
        this.list.forEach(item => {
          if (data.value === 'all' && data.isChecked) {
            item.isChecked = item.value === data.value ? true : false
          } else if (data.value !== 'all' && data.isChecked) {
            if (item.value === data.value) item.isChecked = data.isChecked
            if (item.value === 'all' && item.isChecked) item.isChecked = false
          }
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .filter-list {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-top: 140px;
    padding-bottom: calc(60px - 14px);
    background-color: #000;
    z-index: 2;
    transition: all 0.2s ease-out;
    > div {
      margin: 0 auto;
    }
    h3 {
      color: #fff;
      font-size: 28px;
      line-height: 1.3;
      font-weight: 700;
    }
    ul {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        margin-left: 10px;
        margin-bottom: 14px;
        &:first-child {
          margin-left: 0;
        }
      }
    }
  }
  .btn-close {
    background-color: transparent;
    padding: 0;
    position: absolute;
    right: 50px;
    bottom: 50px;
    cursor: pointer;
  }
  .slide-enter,
  .slide-leave-to {
    opacity: 0;
    transform: translateY(-100%);
  }
</style>

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
  import { mapState, mapMutations, mapActions } from 'vuex'
  import Checkbox from '@/components/elements/filter/Checkbox'
  export default {
    components: {
      Checkbox
    },
    computed: {
      ...mapState({
        filterList: state => state.filterList,
        isFilterMenuOpen: state => state.isFilterMenuOpen
      }),
      // list() {
      //   let list = [{ value: 'all', text: 'All', isChecked: true }]
      //   const filters = this.filterList.map(tag => {
      //     return { value: tag, text: tag, isChecked: false }
      //   })
      //   list = list.concat(filters)
      //   return list
      // },
      categoryList() {
        let list = []
        list = [...this.list]
        return list
      }
      // checkedList() {
      //   let list = []
      //   list = this.list.filter(item => item.isChecked)
      //   return list
      // }
    },
    watch: {
      filterList: {
        deep: true,
        handler(val) {
          const filters = this.filterList.map(tag => {
            return { value: tag, text: tag, isChecked: false }
          })
          this.list = this.list.concat(filters)
        }
      }
      // checkedList: {
      //   deep: true,
      //   handler(val) {
      //     console.log('val:', val)
      //     const isAll = this.checkedList.find(obj => {
      //       return obj.value == 'all'
      //     })
      //     this.setFilter(isAll ? [] : this.checkedList.map(obj => obj.text))
      //   }
      // }
    },
    mounted() {
      // this.init()
    },
    data() {
      return {
        list: [{ value: 'all', text: 'All', isChecked: true }]
      }
    },
    methods: {
      ...mapActions(['changeFilterMenuOpen']),
      ...mapMutations(['setFilter']),
      onClose() {
        this.changeFilterMenuOpen(false)
      },
      async onChange(data) {
        await this.list.forEach(item => {
          if (data.value === 'all' && data.isChecked) {
            item.isChecked = item.value === data.value ? true : false
          } else if (data.value !== 'all' && data.isChecked) {
            if (item.value === data.value) item.isChecked = data.isChecked
            if (item.value === 'all' && item.isChecked) item.isChecked = false
          } else {
            if (item.value === data.value) item.isChecked = data.isChecked
          }
        })

        await this.setCheckList()
      },
      async setCheckList() {
        const checkedList = await this.list.filter(item => item.isChecked)
        const isAll = await checkedList.find(obj => {
          return obj.value == 'all'
        })
        await this.setFilter(isAll ? [] : checkedList.map(obj => obj.text))
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
      font-weight: 600;
    }
    ul {
      margin-top: 30px;
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      li {
        margin-right: 10px;
        margin-bottom: 14px;
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

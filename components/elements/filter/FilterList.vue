<template>
  <transition name="slide">
    <div v-if="isFilterMenuOpen" class="filter-list">
      <nuxt-link class="logo tablet-only" to="/">
        <img src="@/assets/images/logo-w.png" />
      </nuxt-link>
      <div ref="filter-list">
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
      categoryList() {
        let list = []
        list = [...this.list]
        return list
      },
      checkedList() {
        let list = []
        list = this.list.filter(item => item.isChecked)
        return list
      }
    },
    watch: {
      isFilterMenuOpen(val) {
        if (val) {
          this.$nextTick(() => {
            document
              .querySelector('.filter-list')
              .addEventListener('wheel', this.onWheel)
          })
        }
      },
      filterList: {
        deep: true,
        handler(val) {
          const filters = this.filterList.map(tag => {
            return { value: tag, text: tag, isChecked: false }
          })
          this.list = this.list.concat(filters)
        }
      }
    },
    mounted() {
      // this.init()
    },
    beforeDestroy() {
      document
        .querySelector('.filter-list')
        .removeEventListener('wheel', this.onWheel)
    },
    data() {
      return {
        list: [{ value: 'all', text: 'All', isChecked: true }]
      }
    },
    methods: {
      ...mapActions(['changeFilterMenuOpen']),
      ...mapMutations(['setFilter']),
      onWheel(e) {
        const ref = this.$refs['filter-list']
        const scrollHeight = ref.scrollHeight - ref.offsetHeight
        if (ref.scrollTop <= scrollHeight) {
          ref.scrollTop += e.deltaY
        }
      },
      onClose() {
        this.$nuxt.$emit('scrollLock', false)
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

        if (this.checkedList.length === 0) {
          this.list[0].isChecked = true
        }
        const isAll = await this.checkedList.find(obj => {
          return obj.value == 'all'
        })
        await this.setFilter(isAll ? [] : this.checkedList.map(obj => obj.text))
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
    background-color: #000;
    z-index: 2;
    transition: all 0.2s ease-out;
    > div {
      height: 492px;
      overflow-y: auto;
      padding-top: 140px;
      padding-bottom: 60px;
      margin: 0 auto;
      width: getWidth(6);
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
  @include pc-large {
    .filter-list > div {
      height: 580px;
      padding: 160px 0 80px;
    }
  }
  @include pc-4k {
    .filter-list > div {
      height: 900px;
      padding: 270px 0 100px;
    }
  }
  @include tablet {
    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
      img {
        height: 21px;
      }
    }
    .filter-list {
      z-index: 30;
      > div {
        height: 100vh;
        padding-top: 140px;
      }
    }
    .btn-close {
      top: 20px;
      right: 20px;
      bottom: initial;
    }
  }
  @include mobile {
    .filter-list {
      > div {
        width: 100%;
        margin: 0;
        overflow: hidden;
        padding: {
          top: 116px;
          left: calc(20px + #{getMargin(1)});
          right: 20px;
        }
      }
      ul {
        height: calc(100vh - 116px - 66px);
        overflow: auto;
      }
    }
    .btn-close {
      img {
        width: 30px;
      }
    }
  }
</style>

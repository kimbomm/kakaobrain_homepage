<template lang="">
  <div class="paging l-ml-3">
    <div class="paging-inner">
      <div class="paging-prev">
        <button
          class="link"
          :disabled="activeIndex === 0"
          @click="onClick(activeIndex - 1)"
        >
          
        </button>
      </div>
      <div class="paging-num">
        <ul>
          <li>
            <button
              :class="{ link: true, active: activeIndex === 0 }"
              @click="onClick(0)"
            >
              1
            </button>
          </li>
          <li v-if="activeIndex - 3 > 0" @click="onClick('prev')">
            <button class="link more">...</button>
          </li>
          <li v-for="num in paging">
            <button
              :class="{ link: true, active: activeIndex === num - 1 }"
              @click="onClick(num - 1)"
            >
              {{ num }}
            </button>
          </li>
          <li v-if="totalLength - 3 > activeIndex" @click="onClick('next')">
            <button class="link more">...</button>
          </li>
          <li v-if="totalLength > 1">
            <button
              :class="{ link: true, active: activeIndex === totalLength - 1 }"
              @click="onClick(totalLength - 1)"
            >
              {{ totalLength }}
            </button>
          </li>
        </ul>
      </div>
      <div class="paging-next">
        <button
          class="link"
          :disabled="
            activeIndex === totalLength ? totalLength : totalLength - 1
          "
          @click="onClick(activeIndex + 1)"
        >
          
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      total: {
        type: Number,
        default: 0
      },
      offset: {
        type: Number,
        default: 0
      },
      limit: {
        type: Number,
        default: 0
      }
    },
    computed: {
      totalLength() {
        let length = 0
        if (this.total > 0) length = Math.ceil(this.total / this.limit)
        return length
      }
    },
    data() {
      return {
        num: 5,
        activeIndex: 0,
        paging: []
      }
    },
    watch: {
      total() {
        this.setPaging()
      }
    },
    mounted() {
      this.setPaging()
    },
    methods: {
      onClick(num) {
        if (num === 'prev') {
          this.activeIndex - 4 >= 0
            ? (this.activeIndex -= 4)
            : (this.activeIndex = 0)
        } else if (num === 'next') {
          this.activeIndex + 4 >= this.totalLength - 1
            ? (this.activeIndex = this.totalLength - 1)
            : (this.activeIndex += 4)
        } else {
          this.activeIndex = num
        }
        this.setPaging()
        this.$emit('onChange', this.activeIndex)
      },
      setPaging() {
        this.paging = []
        if (this.totalLength - 2 > 0 && this.totalLength - 2 <= 5) {
          for (let i = 2; i < this.totalLength - 1; i++) {
            this.paging.push(i)
          }
        } else if (this.totalLength - 2 > 5) {
          if (this.activeIndex >= 0 && this.activeIndex <= 2) {
            for (let i = 1; i < 6; i++) {
              this.paging.push(i + 1)
            }
          } else if (
            this.activeIndex <= this.totalLength - 1 &&
            this.activeIndex >= this.totalLength - 3
          ) {
            for (let i = 5; i > 0; i--) {
              this.paging.push(this.totalLength - i)
            }
          } else {
            for (let i = this.activeIndex - 2; i < this.activeIndex + 3; i++) {
              this.paging.push(i + 1)
            }
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .paging {
    margin-top: 200px;
    &-inner {
      display: flex;
      align-items: center;
    }
    &-prev {
      display: flex;
      margin-right: 10px;
      font-size: 16px;
    }
    &-next {
      display: flex;
      margin-left: 10px;
      font-size: 16px;
    }
    &-num {
      ul {
        display: flex;
        width: 100%;
        // justify-content: space-between;
        justify-content: center;
      }
      li {
        padding: 0 2px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .link {
      font-family: 'Inter';
      font-size: 16px;
      padding: 0;
      font-weight: 400;
      &.active {
        font-weight: 700;
      }
      &.more {
        cursor: auto;
      }
    }
  }
  @include pc-4k {
    .paging {
      margin-top: 374px !important;
      &-prev {
        margin-right: 15px !important;
        font-size: 26px !important;
      }
      &-next {
        margin-left: 15px !important;
        font-size: 26px !important;
      }
      &-num {
        li {
          &:not(:last-child) {
            margin-right: 15px !important;
          }
        }
        .link {
          font-size: 26px !important;
        }
      }
    }
  }
  @include pc-large {
    .paging {
      margin-top: 260px;
      &-prev {
        margin-right: 12px;
        font-size: 20.8px;
      }
      &-next {
        margin-left: 12px;
        font-size: 20.8px;
      }
      &-num {
        li {
          &:not(:last-child) {
            margin-right: 12px;
          }
        }
        .link {
          font-size: 20.8px;
        }
      }
    }
  }
  @include tablet {
    .paging {
      margin-top: 150px;
      &-prev {
        margin-right: 12px;
        font-size: 20px;
      }
      &-next {
        margin-left: 12px;
        font-size: 20px;
      }
      &-num {
        li {
          &:not(:last-child) {
            margin-right: 12px;
          }
        }
      }
        .link {
          font-size: 20px;
        }
    }
  }
  @include mobile {
    .paging {
      margin-top: 80px;
      &-prev {
        margin-right: 26px;
        .link{
          font-size: 30px;
        }
      }
      &-next {
        margin-left: 26px;
        .link{
          font-size: 30px;
        }
      }
      &-num {
        width: 100%;
        li {
          &:not(:last-child) {
            // margin-right: 12px;
            margin-right: 8%;
          }
        }
        .link {
          font-size: 18px;
        }
      }
    }
  }
</style>

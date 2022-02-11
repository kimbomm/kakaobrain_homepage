<template>
  <nuxt-link
    :to="{
      path: '/contents',
      query: { contentId: data.contentId }
    }"
  >
    <div :class="classBind">
      <div class="Innovation-inner">
        <div class="Innovation-tit">{{ data.title }}</div>
        <div class="Innovation-con">
          <div class="item">
            <div class="item-mark">*</div>
            <div class="item-txt">{{ data.academy }}</div>
          </div>
          <div class="item">
            <div class="item-mark">^</div>
            <div class="item-txt">{{ data.writer }}</div>
          </div>
          <div class="tag">
            <ul>
              <li
                v-for="(item, index) in data.ContentTags"
                :key="index"
                class="tag-item"
              >
                <span class="tag-txt">#{{ item.tag }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
  export default {
    name: 'InnovationCard',
    props: {
      data: {
        type: Object
      },
      theme: {
        type: String,
        default: '',
        required: false
      },
      isMasonry: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      classBind() {
        let classList = ['Innovation']
        if (this.theme) {
          classList.push(this.theme)
        }
        if (this.isMasonry) {
          classList.push('area')
        }

        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .area {
    .Innovation {
      height: auto;
      &-tit {
        // margin-bottom: 110px;
        margin-bottom: 50px;
        -webkit-line-clamp: unset;
        height: auto;
        overflow: visible;
      }

      .item {
        margin-bottom: 20px;
        &:nth-child(2) {
          margin-bottom: 50px;
        }
        &-mark {
          line-height: 90%;
        }
      }
    }
  }
  .Innovation {
    position: relative;
    display: inline-block;
    max-width: 550px;
    min-width: 300px;
    height: 700px;
    padding: 20px;
    box-shadow: 30px 30px 50px -10px rgba(0, 0, 0, 0.2);
    background-color: $gray-0;
    color: $gray-9;
    box-sizing: border-box;
    &:not(:last-child) {
      margin-right: 100px;
    }
    &-inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      word-break: break-all;
    }
    &-tit {
      margin-bottom: 110px;
      line-height: 1;
      font-size: 30px;
      height: calc(30px * 1 * 8);
      font-weight: 400;
      word-break: break-all;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }

    .item {
      margin-bottom: 30px;
      &:nth-child(2) {
        margin-bottom: 64px;
      }
      &-mark {
        line-height: 45px;
        font-size: 50px;
        font-weight: 900;
      }
      &-txt {
        font-size: 16px;
      }
    }
    .tag {
      &-item {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
      &-txt {
        font-size: 14px;
      }
    }
  }

  .Innovation {
    &.dark {
      background-color: $gray-9;
      color: $gray-0;
    }
  }

  @include pc-4k {
    .area {
      .Innovation {
        padding: 30px;
        &-tit {
          font-size: 58px;
          margin-bottom: 100px;
        }

        .item {
          margin-bottom: 30px;
          &:nth-child(2) {
            margin-bottom: 100px;
          }
          &-mark {
            font-size: 64px;
          }
          &-txt {
            font-size: 28px;
          }
        }
      }
      .tag {
        &-txt {
          font-size: 24px;
        }
      }
    }
  }
  @include pc-large {
    .area {
      .Innovation {
        padding: 30px;
        &-tit {
          font-size: 38px;
        }
        .item {
          &-mark {
            font-size: 50px;
          }
          &-txt {
            font-size: 20px;
          }
        }
      }
      .tag {
        &-txt {
          font-size: 18px;
        }
      }
    }
  }
  @include mobile {
    .area {
      .Innovation {
        padding: 20px;
        &-tit {
          font-size: 26px;
        }
        .item {
          &:nth-child(2) {
            margin-bottom: 24px;
          }
          &-mark {
            font-size: 40px;
          }
          &-txt {
            font-size: 14px;
          }
        }
      }
      .tag {
        &-txt {
          font-size: 12px;
        }
      }
    }
  }
</style>

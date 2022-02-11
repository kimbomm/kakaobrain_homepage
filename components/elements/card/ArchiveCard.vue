<template>
  <!-- archive 부모 클래스에 'area' 클래스를 적용하면 높이 값이 늘어 납니다. -->
  <nuxt-link
    :to="{
      path: '/contents',
      query: { contentId: data.contentId }
    }"
  >
    <div :class="classBind">
      <div class="archive-inner">
        <div class="archive-tit">{{ data.title }}</div>
        <div class="archive-con">
          <div v-if="data.ContentTags.length > 0" class="tag">
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
          <div class="archive-thumbnail">
            <img :src="require(`@/assets/images/archive_img_1.png`)" />
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>
<script>
  export default {
    name: 'ArchiveCard',
    props: {
      data: {
        type: Object
      },
      isMasonry: {
        type: Boolean,
        default: false
      },
      theme: {
        type: String,
        default: '',
        require: false
      }
    },
    computed: {
      classBind() {
        let classList = ['archive']
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
    .archive {
    }
  }
  .archive {
    position: relative;
    display: inline-block;
    max-width: 360px;
    min-width: 300px;
    box-shadow: 30px 30px 50px -10px #cfd0d3;
    background-color: $gray-0;
    color: $gray-9;
    box-sizing: border-box;
    word-break: break-all;
    &:not(:last-child) {
      margin-right: 20px;
    }
    &-inner {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }
    &-tit {
      margin-bottom: 70px;
      line-height: 100%;
      padding: 20px 20px 0;
      font-size: 30px;
      font-weight: 400;
      word-break: break-all;
    }
    &-con {
      .tag {
        padding: 0 20px;
        margin-bottom: 20px;
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
    &-thumbnail {
      img {
        width: 100%;
      }
    }
  }
  .archive {
    &.dark {
      background-color: $gray-9;
      color: $gray-0;
    }
  }
  @include pc-large {
    .archive {
      &-tit {
        margin-bottom: 70px;
        padding: 30px 30px 0;
        font-size: 38px;
      }
      &-con {
        .tag {
          padding: 0 30px;
          margin-bottom: 30px;
          &-txt {
            font-size: 18px;
          }
        }
      }
    }
  }
  @include pc-4k {
    .archive {
      &-tit {
        margin-bottom: 100px;
        padding: 30px 30px 0;
        font-size: 58px;
      }
      &-con {
        .tag {
          padding: 0 30px;
          margin-bottom: 30px;
          &-txt {
            font-size: 24px;
          }
        }
      }
    }
  }
  @include mobile {
    .archive {
      &-tit {
        margin-bottom: 70px;
        padding: 20px 20px 0;
        font-size: 26px;
      }
      &-con {
        .tag {
          padding: 0 20px;
          margin-bottom: 20px;
          &-txt {
            font-size: 12px;
          }
        }
      }
    }
  }
</style>

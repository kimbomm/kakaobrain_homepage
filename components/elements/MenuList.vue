<template>
  <div>
    <div class="menu-list gl-6">
      <div
        class="menu-thumbnail gl-1"
        :style="`background-image: url(${envVariable(
          data.titleMediaId ? data.titleMediaId : data.contentProp.mediaId
        )})`"
      ></div>
      <div class="list-data gl-5">
        <div class="tit">
          <nuxt-link
            :to="{
              path: '/contents',
              query: { contentId: data.contentId }
            }"
          >
            {{ data && data.title }}
          </nuxt-link>
        </div>
        <div class="tag">
          <div class="item-box">
            <div
              v-for="(item, index) in data.ContentTags"
              :key="index"
              class="item"
            >
              #{{ item.tag }}
            </div>
          </div>
          <div class="list-date">
            {{ data && $dayjs(data.updateAt).format('YYYYMMDD') }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MenuList',
    props: {
      data: {
        type: Object,
        default: () => {},
        required: false
      }
    },
    methods: {
      envVariable(url) {
        return `${this.$config.baseURL}${url}`
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .menu {
    &-list {
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
    &-thumbnail {
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }
  }
  .list-data {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0 0;
    border-top: 1px solid $gray-9;
    .tit {
      padding-bottom: 33px;
      font-size: 30px;
      line-height: 100%;
    }
  }
  .tag {
    display: flex;
    justify-content: space-between;
    .item-box {
      .item {
        display: inline-block;
        font-size: 12px;
        line-height: 130%;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
    }
    .list-date {
      font-size: 12px;
      line-height: 130%;
      &::before {
        content: '@';
        display: inline-block;
      }
    }
  }

  @include pc-4k {
    .list-data {
      .tit {
        padding-bottom: 98px;
        font-size: 60px;
      }
    }
    .tag {
      .item-box {
        .item {
          font-size: 24px !important;
        }
      }
      .list-date {
        font-size: 24px !important;
      }
    }
  }
  @include pc-large {
    .list-data {
      padding: 30px 0 0;
      .tit {
        padding-bottom: 54px;
        font-size: 40px;
      }
    }
    .tag {
      .item-box {
        .item {
          font-size: 16px;
        }
      }
      .list-date {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 1400px) {
    .list-data {
      .tit {
        font-size: 22px;
      }
    }
  }
  @include tablet {
    .list-data {
      padding: 20px 0 0;
      .tit {
        padding-bottom: 53px;
        font-size: 20px;
      }
    }
    .tag {
      .item-box {
        .item {
          font-size: 12px;
        }
      }
      .list-date {
        font-size: 12px;
      }
    }

    .menu-list {
      &.gl-6 {
        width: calc(
          calc((100vw - 20px * 11) / 10) * 9 + 20px * (9 - 1)
        ) !important;
      }
      .gl-1 {
        width: calc(
          calc((100vw - 20px * 11) / 10) * 2 + 20px * (2 - 1)
        ) !important;
      }
      .gl-5 {
        width: calc(
          calc((100vw - 20px * 11) / 10) * 7 + 20px * (7 - 1)
        ) !important;
      }
    }
  }
  @include mobile {
    .menu-list {
      padding-top: 20px;
      border-top: 1px solid $gray-9;
      flex-direction: column;
      &.gl-6 {
        width: 100% !important;
      }
      .gl-1 {
        width: 100% !important;
      }
      .list-data {
        padding: 10px 0 0;
        border-top: 0px;
        &.gl-5 {
          width: 100% !important;
        }
        .tit {
          padding-bottom: 20px;
          font-size: 16px;
          line-height: 130%;
        }
      }
      .tag {
        .item-box {
          .item {
            font-size: 12px;
          }
        }
        .list-date {
          position: static;
          margin-top: 6px;
          font-size: 12px;
        }
      }
    }
  }
</style>

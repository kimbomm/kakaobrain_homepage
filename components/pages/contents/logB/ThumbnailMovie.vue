<template>
  <div class="content-log_b">
    <div class="visual">
      <div></div>
      <div>
        <BreadCrumb :data="breadcrumb" />
      </div>
    </div>
    <div class="visual-content">
      <nuxt-link to="#">
        <div class="title">
          AI가 NFT를 만나면 어떤일이 벌어질까?AI가 NFT를 만나면 어떤일이
          벌어질까?AI가 NFT를 만나면 어떤일이 벌어질까?
        </div>
      </nuxt-link>
      <div class="info">
        <HashTag size="sm" :hashList="hashList" />
        <div class="date">@20211216</div>
      </div>
      <nuxt-link class="btn-link" to="#">Detail View</nuxt-link>
    </div>
    <div
      v-for="(menu, index) in menuList"
      :key="`menu-${index}`"
      class="recent-list"
    >
      <div class="recent-list__header">
        <h2>{{ menu.name }}</h2>
        <nuxt-link class="btn-link" :to="menu.link">View List</nuxt-link>
      </div>
      <ul v-for="(item, idx) in menu.data" :key="`data-${idx}`">
        <li>
          <ArchiveCard
            :data="item"
            :isMainCard="true"
            :tit="item.title"
            :tag="item.ContentTags"
            :theme="index % 2 === 0 ? 'dark' : ''"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import HashTag from '@/components/elements/HashTag'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    props: {
      data: {
        type: Object
      }
    },
    components: {
      BreadCrumb,
      HashTag,
      ArchiveCard
    },
    data() {
      return {
        breadcrumb: [
          { text: 'Talk', sub: 'sub', link: '' },
          { text: 'Yeah!', sub: '', link: '' }
        ],
        hashList: [
          { text: 'text' },
          { text: 'text' },
          { text: 'text' },
          { text: '한글' },
          { text: 'text' },
          { text: 'text' },
          { text: 'text' },
          { text: 'text' }
        ],
        menuList: [
          {
            name: 'Talk',
            link: '/contents/log_b/talk',
            data: []
          },
          {
            name: 'Conference',
            link: '/contents/log_b/conference',
            data: []
          },
          {
            name: 'VLog',
            link: '/contents/log_b/v_log',
            data: []
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .content-log_b {
    width: getWidth(7);
    margin-left: getMargin(2);
  }
  .visual {
    display: flex;
    justify-content: space-between;
    > div {
      &:nth-child(1) {
        flex: 0 0 getWidth(6);
        padding-top: calc(9 / 16 * 100%);
        background-color: red;
        background-size: cover;
        background-repeat: no-repeat;
      }
      &:nth-child(2) {
        // flex: 0 0 getWidth(1);
      }
    }
    &-content {
      width: getWidth(5);
      margin: {
        top: 20px;
        left: getMargin(1);
      }
      .title {
        font-size: map-get($font, h2);
        font-weight: 600;
        margin-bottom: 30px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .date {
          font-size: 12px;
          color: $gray-9;
          line-height: 1.3;
        }
      }
    }
  }
  .btn-link {
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    font-style: italic;
    &:after {
      content: '';
      font-family: 'Inter';
      font-style: normal;
      margin-left: 10px;
    }
  }
  .recent-list {
    width: getWidth(6);
    margin-top: 200px;
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;
      h2 {
        font-size: map-get($font, h2);
        line-height: 1;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
    }
    li {
      flex: 0 0 getWidth(2);
    }
  }
</style>

<template>
  <div class="layout-list category-wrap">
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="category-contents">
      <div class="contents-title">
        <DetailTitle :text="translation.main[language].title" />
      </div>
      <div class="tit-text">
        <p v-html="translation.main[language].description"></p>
      </div>
      <div class="contents-link">
        <ul>
          <li v-for="(item, index) in link" :key="index" class="contents-item">
            <Sticker
              :text="item.text"
              :sub="item.sub"
              :link="item.link"
              :isDark="true"
            />
          </li>
        </ul>
      </div>
      <ThumbnailMovie v-if="data" :data="data" />
      <div
        v-for="(menu, index) in menuList"
        :key="`menu-${index}`"
        class="recent-list"
      >
        <div class="recent-list__header">
          <h2>{{ menu.name }}</h2>
          <nuxt-link class="btn-link" :to="menu.link">View List</nuxt-link>
        </div>
        <ul>
          <li v-for="(item, idx) in menu.data" :key="`data-${idx}`">
            <ArchiveCard
              :data="item"
              :tit="item.title"
              :tag="item.ContentTags"
              :theme="idx % 2 === 1 ? 'dark' : ''"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import Utility from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailTitle from '@/components/detail/DetailTitle'
  import Sticker from '@/components/elements/button/Sticker'
  import ThumbnailMovie from '@/components/pages/contents/logB/ThumbnailMovie'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    head: {
      // title: 'Kakao Brain, Log B',
      meta: [
        // {
        //   hid: 'og-title',
        //   property: 'og:title',
        //   content: 'Kakao Brain, Log B'
        // },
        // {
        //   hid: 'og:url',
        //   property: 'og:url',
        //   content: 'https://kakaobrain.com/contents/log_b'
        // },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://stgkakaobrain.com/meta/meta_homepage_logB.png'
        }
      ]
    },
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailTitle,
      Sticker,
      ThumbnailMovie,
      ArchiveCard
    },
    data() {
      return {
        breadcrumb: [
          { text: 'Log B', sub: 'log_b', link: '' },
          { text: 'Talk', sub: '', link: '' },
          { text: 'Conference', sub: '', link: '' },
          { text: 'VLOG', sub: '', link: '' }
        ],
        link: [
          { text: 'Talk', sub: '', link: '/contents/log_b/talk' },
          { text: 'Conference', sub: '', link: '/contents/log_b/conference' },
          { text: 'VLOG', sub: '', link: '/contents/log_b/v_log' }
        ],
        data: null,
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
        ],
        pageData: {
          offset: 0,
          limit: 3,
          targetLang: this.$store.state.language,
          tag: '',
          status: 'ACCEPT',
          contentType: 'ALL'
        },
        list: []
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        translation: state => state.translation.LOGB
      })
    },
    mounted() {
      this.init()
    },
    methods: {
      ...mapActions({
        getLibraryCategory: 'getLibraryCategory',
        getContentDetail: 'getContentDetail',
        getCategoryList: 'getCategoryList'
      }),
      async init() {
        const res = await this.getLibraryCategory({
          category: 'log_b_main',
          params: {
            offset: 0,
            limit: 99
          }
        })
        if (res) {
          this.list = res.data.list
          const targetList = await this.list.filter(
            item => item.prop.targetLang === this.language
          )

          if (targetList.length > 0) {
            const RANDOMDATA =
              targetList[Math.floor(Math.random() * targetList.length)]
            const res2 = await this.getContentDetail(RANDOMDATA.prop.contentId)
            if (res2) {
              this.data = res2.data
            }
          }
        }
        this.fetchList()
      },
      async fetchList() {
        const category2 = ['talk', 'conference', 'v_log']
        category2.forEach(async (categoryName, index) => {
          const res = await this.getCategoryList({
            category1: 'log_b',
            category2: categoryName,
            pageData: this.pageData
          })
          if (res) this.menuList[index].data = res.data.list
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tit-text {
    margin-bottom: 30px;
    line-height: 150%;
    font-size: 16px;
    width: getWidth(7);
    margin-left: getMargin(3);
  }
  .contents {
    &-link {
      width: getWidth(7);
      margin-left: getMargin(3);
      margin-bottom: 140px;
    }
    &-item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
  .recent-list {
    width: getWidth(6);
    margin-top: 200px;
    margin-left: getMargin(2);
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 30px;
      h2 {
        font-size: map-get($font, h2);
        font-weight: 600;
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
  @include pc-large {
    .tit-text {
      margin-bottom: 50px;
      font-size: 22px;
    }
    .contents-link {
      margin-bottom: 200px;
    }
    .recent-list {
      margin-top: 300px;
      &__header {
        margin-bottom: 30px;
        h2 {
          font-size: 64px;
          line-height: 1.3;
        }
      }
    }
    .btn-link {
      font-size: 26px;
    }
  }
  @include pc-4k {
    .tit-text {
      margin-bottom: 70px;
      font-size: 32px;
    }
    .contents-link {
      margin-bottom: 300px;
    }
    .recent-list {
      margin-top: 370px;
      &__header {
        margin-bottom: 70px;
        h2 {
          font-size: 82px;
        }
      }
    }
    .btn-link {
      font-size: 36px;
    }
  }
  @include tablet {
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
      margin-left: getMargin(2);
    }
    .contents-link {
      margin-bottom: 100px;
      margin-left: getMargin(2);
    }
    .recent-list {
      width: getWidth(8);
      margin-left: getMargin(1);
      &__header {
        margin-left: getMargin(1);
        margin-bottom: 20px;
        h2 {
          font-size: 24px;
          line-height: 1.3;
        }
      }
      li {
        flex: 0 0 getWidth(4);
        &:nth-child(3) {
          display: none;
        }
      }
    }
    .btn-link {
      font-size: 16px;
    }
  }
  @include mobile {
    .category-contents {
      margin-top: 60px;
    }
    .tit-text {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
      font-size: 14px;
    }
    .contents-link {
      width: 100%;
      margin-left: 0;
    }
    .recent-list {
      margin-top: 100px;
      margin-left: 0;
      width: 100%;
      &__header {
        margin-left: 0;
        margin-bottom: 10px;
        h2 {
          font-size: 20px;
        }
      }
      li {
        flex: 1;
        &:nth-child(2) {
          display: none;
        }
      }
    }
    .btn-link {
      font-size: 14px;
    }
  }
</style>

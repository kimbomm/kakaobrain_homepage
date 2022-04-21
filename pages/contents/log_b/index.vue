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
  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailTitle,
      Sticker,
      ThumbnailMovie
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
        data: null
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
        getContentDetail: 'getContentDetail'
      }),
      async init() {
        const res = await this.getLibraryCategory({
          category: 'log_b_main',
          params: {
            offset: 0,
            limit: 1,
            order: 'RANDOM'
          }
        })
        if (res) {
          const res2 = await this.getContentDetail(
            res.data.list[0].prop.contentId
          )
          if (res2) {
            this.data = res2.data
          }
        }
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
  @include pc-large {
    .tit-text {
      margin-bottom: 50px;
      font-size: 22px;
    }
    .contents-link {
      margin-bottom: 200px;
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
  }
  @include mobile {
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
  }
</style>

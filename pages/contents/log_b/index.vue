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
  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailTitle,
      Sticker
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
        ]
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
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        // await this.setBreadcrumb()
        // await this.fetchList()
        // await this.filterInit()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tit-text {
    margin-bottom: 30px;
    line-height: 150%;
    font-size: 16px;
    width: getWidth(5);
    margin-left: getMargin(3);
  }
  .contents {
    &-link {
      width: getWidth(5);
      margin-left: getMargin(3);
      margin-bottom: 130px;
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
  }
  @include pc-4k {
    .tit-text {
      margin-bottom: 70px;
      font-size: 32px;
    }
  }
  @include tablet {
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
  @include mobile {
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
</style>

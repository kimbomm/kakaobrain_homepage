<template>
  <div class="layout-list">
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="category-contents">
      <div class="contents-title">
        <DetailTitle :text="translation.talk[language].title" />
      </div>
    </div>
    <div class="description">
      <p v-html="translation.talk[language].description"></p>
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <template v-if="onCheckDevice">
      <masonry
        v-if="!device.touch"
        ref="masonry"
        :cols="{ default: 5, 1024: 2, 768: 1 }"
        :gutter="{ default: '20px', 768: '0px' }"
        class="masonry"
      >
        <ArchiveCard
          v-for="(item, index) in list"
          :key="index"
          :data="item"
          :theme="Math.random() > 0.5 ? 'dark' : ''"
          :isMasonry="true"
        />
      </masonry>
      <masonry
        v-else-if="device.touch && !device.mobile"
        ref="masonry"
        :cols="2"
        :gutter="{ default: '20px', 768: '0px' }"
        class="masonry"
      >
        <ArchiveCard
          v-for="(item, index) in list"
          :key="index"
          :data="item"
          :theme="Math.random() > 0.5 ? 'dark' : ''"
          :isMasonry="true"
        />
      </masonry>
      <masonry
        v-else-if="device.touch && device.mobile"
        ref="masonry"
        :cols="1"
        :gutter="{ default: '20px', 768: '0px' }"
        class="masonry"
      >
        <ArchiveCard
          v-for="(item, index) in list"
          :key="index"
          :data="item"
          :theme="Math.random() > 0.5 ? 'dark' : ''"
          :isMasonry="true"
        />
      </masonry>
    </template>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import Utility from '@/util/utility.js'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  export default {
    head: {
      title: 'Kakao Brain, Talk',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Kakao Brain, Talk'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kakaobrain.com/contents/log_b/talk'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.$config.url + '/meta/meta_homepage_logB.png'
        }
      ]
    },
    mixins: [mixinGlobal],
    components: {
      ArchiveCard,
      BreadCrumb,
      DetailTitle,
      DetailText
    },
    computed: {
      ...mapState({
        device: state => state.device,
        language: state => state.language,
        translation: state => state.translation.LOGB
      })
    },
    data() {
      return {
        onCheckDevice: false,
        category1: 'log_b',
        category2: 'talk',
        breadcrumb: [],
        pageData: {
          offset: 0,
          limit: 20,
          contentType: 'ARTICLE',
          targetLang: this.$store.state.language,
          tag: ''
        },
        list: [],
        total: 0,
        isInit: false,
        isAdd: false
      }
    },
    watch: {
      device: {
        deep: true,
        handler(val) {
          if (val) {
            this.onCheckDevice = true
          }
        }
      }
    },
    async created() {
      await this.init()
      await this.setBreadcrumb()
    },
    mounted() {
      this.scrollBody.addEventListener('scroll', this.onScroll)
      this.$nextTick(() => {
        if (
          typeof this.device.touch === 'boolean' &&
          typeof this.device.mobile === 'boolean'
        ) {
          this.onCheckDevice = true
        }
      })
    },
    async beforeDestroy() {
      await this.scrollBody.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        const res = await this.getCategoryList({
          category1: this.category1,
          category2: this.category2,
          pageData: this.pageData
        })
        this.list = res.data.list
        this.total = res.data.count
      },
      async setBreadcrumb() {
        let subClass = ''
        const info = await this.getNickName({
          category1: this.category1,
          category2: Utility.changeCategory2(this.category2)
        })

        switch (this.category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = this.category1
            break
        }

        this.title = info.category2.name
        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )
      },
      async onScroll() {
        const masonry = this.$refs.masonry.$el
        if (
          masonry.offsetHeight > 0 &&
          masonry.offsetTop + masonry.offsetHeight >
            this.scrollBody.scrollTop &&
          masonry.offsetTop + masonry.offsetHeight <
            this.scrollBody.scrollTop + window.innerHeight &&
          !this.isAdd
        ) {
          this.isAdd = true
          await this.addList()
        }
      },
      async addList() {
        if (this.list.length < this.total) {
          this.pageData.offset += this.pageData.limit
          const res = await this.getCategoryList({
            category1: this.category1,
            category2: this.category2,
            pageData: this.pageData
          })
          this.list = this.list.concat(res.data.list)
          this.total = res.data.count
          this.isAdd = false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .description {
    margin-bottom: 154px;
    line-height: 1.5;
    font-size: map-get($font, default);
    width: getWidth(5);
    margin-left: getMargin(3);
  }
  /deep/ .archive {
    margin-bottom: 70px;
  }

  @include pc-large {
    .description {
      font-size: map-get($font-large, default);
      margin-bottom: 200px;
    }
  }

  @include pc-4k {
    .description {
      font-size: map-get($font-4k, default);
      margin-bottom: 300px;
    }
    /deep/ .archive {
      margin-bottom: 100px;
    }
  }

  @include tablet {
    .description {
      font-size: map-get($font-tablet, default);
      margin-bottom: 80px;
      margin-left: getMargin(2);
      width: getWidth(7);
    }
    /deep/ .archive {
      margin-bottom: 50px;
    }
  }
  @include mobile {
    .category-contents {
      margin-top: 60px;
    }
    .description {
      width: 100%;
      font-size: 14px;
      margin-bottom: 100px;
      margin-left: 0;
    }
    .masonry {
      padding: 0;
    }
  }
</style>

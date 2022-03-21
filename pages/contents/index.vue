<template>
  <div :class="classBind">
    <template v-if="data">
      <BreadCrumb :data="breadcrumb" :full="true" />
      <div :class="topClassBind">
        <DetailImage
          v-if="thumbnail && thumbnail.length > 0"
          :data="thumbnail[0]"
          :isThumbnail="true"
        />
      </div>
      <div class="content-inner">
        <DetailTitle :text="data.title" :content-prop="data.contentProp" />
        <template v-for="(content, index) in ContentItems">
          <component
            :is="validContent(content, index)"
            :key="`content-${index}`"
            :data="content"
          >
          </component>
        </template>
      </div>

      <!-- <Like /> -->
    </template>
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import { mapState, mapActions } from 'vuex'
  import Utility from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailImage from '@/components/detail/DetailImage'
  import DetailYoutube from '@/components/detail/DetailYoutube'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailTextTitle from '@/components/detail/DetailTextTitle'
  import DetailTextItem from '@/components/detail/DetailTextItem'
  import Like from '@/components/elements/Like'
  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailImage,
      DetailYoutube,
      DetailTitle,
      DetailText,
      DetailSubTitle,
      DetailTextTitle,
      DetailTextItem,
      Like
    },
    asyncData(ctx) {
      if (!ctx.query.contentId) {
        ctx.redirect('/')
      }
      return {
        contentId: ctx.query.contentId
      }
    },
    data() {
      return {
        contentType: null,
        isLoad: false,
        categoryType: null,
        data: null,
        breadcrumb: [],
        thumbnail: null,
        ContentItems: []
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      }),
      classBind() {
        let classList = ['content-detail']
        switch (this.contentType) {
          case 'THESIS':
            classList.push('type-thesis')
            break
        }
        return classList.join(' ')
      },
      topClassBind() {
        let classList = ['top']
        if (!this.thumbnail) {
          classList.push('no-thumbnail')
        }
        return classList.join(' ')
      }
    },
    created() {
      this.$nuxt.$on('langChange', this.onLangChange)
    },
    async mounted() {
      await this.init()
    },
    methods: {
      ...mapActions(['getContentDetail', 'getNickName']),
      onLangChange() {
        window.location = `/contents?contentId=${this.data.contentProp.langLink}`
      },
      async init() {
        const res = await this.getContentDetail(this.contentId)
        this.data = res.data
        this.contentType = this.data.contentType
        this.ContentItems = this.data.ContentItems
        if (
          res.data.contentType === 'ARTICLE' &&
          res.data.ContentItems[0].itemType === 'image'
        ) {
          this.thumbnail = this.ContentItems.slice(0, 1)
          this.ContentItems = this.ContentItems.slice(
            1,
            this.ContentItems.length
          )
        }

        if (res.data.contentType === 'THESIS' && res.data.writer) {
          const header = {
            itemType: 'header',
            text: 'Authors'
          }
          const writer = {
            itemType: 'pagaraph',
            text: res.data.writer
          }
          this.ContentItems = this.ContentItems.concat([header, writer])
        }

        await this.setBreadcrumb(
          this.data.category1,
          Utility.changeCategory2(this.data.category2)
        )
        this.isLoad = true
      },
      validContent(content, index) {
        let componentName = ''
        switch (content.itemType) {
          case 'header':
            componentName = 'DetailTextTitle'
            break
          case 'image':
            componentName = 'DetailImage'
            break
          case 'video':
            componentName = 'DetailYoutube'
            break
          // case 'pagaraph':
          //   componentName = 'DetailText'
          //   break
          // case 'link':
          //   break
          default:
            componentName = 'DetailText'
            break
        }
        return componentName
      },
      async setBreadcrumb(category1, category2) {
        let subClass = ''
        const info = await this.getNickName({
          category1,
          category2
        })

        switch (category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = category1
            break
        }

        this.title = info.category2.name
        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )

        for (let i = 0; i < this.data.ContentTags.length; i++) {
          this.breadcrumb.push({
            text: this.data.ContentTags[i].tag,
            sub: '',
            link: this.data.ContentTags[i].link
          })
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    padding: 100px 20px 60px;
    &.no-thumbnail {
      padding: 320px 0 0;
    }
  }

  .content-detail {
    margin-bottom: 300px;
    .con-box {
      margin-bottom: 100px;
    }
  }

  .content-inner {
    margin: 0 20px;
  }
  .detail-text {
    margin-bottom: 100px;
  }
  .type-thesis {
    .detail-title {
      margin-bottom: 200px;
    }
  }

  @include pc-large {
    .content-detail {
      margin-bottom: 400px;
      .con-box {
        margin-bottom: 200px;
      }
    }
    .top {
      padding: 130px 20px 100px;
      &.no-thumbnail {
        padding: 440px 0 0;
      }
    }
    .detail-text {
      margin-bottom: 200px;
    }

    .type-thesis {
      .detail-title {
        margin-bottom: 300px;
      }
    }
  }
  @include pc-4k {
    .top {
      padding: 200px 20px 145px;
      &.no-thumbnail {
        padding: 660px 0 0;
      }
    }
    .content-detail {
      .con-box {
        margin-bottom: 300px;
      }
    }
    .detail-text {
      margin-bottom: 300px;
    }
    .type-thesis {
      .detail-title {
        margin-bottom: 400px;
      }
      .detail-text {
        margin-bottom: 250px;
      }
    }
  }
  @include tablet {
    .content-detail {
      margin-bottom: 200px;
    }
    .top {
      padding: 100px 0 100px;
      &.no-thumbnail {
        padding: 200px 0 0;
      }
    }
    .detail-text {
      margin-bottom: 100px;
    }
    .type-thesis {
      .detail-title {
        margin-bottom: 40px;
      }
      .detail-text {
        margin-bottom: 100px;
      }
    }
  }
  @include mobile {
    .content-detail {
      padding-top: 76px;
      margin-bottom: 100px;
    }
    .top {
      display: block;
      padding: 20px 0 60px;
      &.no-thumbnail {
        padding: 60px 0 0;
      }
    }
    .bread-crumb {
      padding: 0 20px;
    }
    .type-thesis {
      .detail-title {
        margin-bottom: 20px;
      }
    }
  }
</style>

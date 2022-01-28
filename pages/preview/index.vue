<template>
  <div class="content-detail">
    <template v-if="data">
      <div class="top">
        <BreadCrumb :data="breadcrumb" :full="true" />
        <DetailImage
          v-if="thumbnail && thumbnail.length > 0"
          :data="thumbnail[0]"
          :isThumbnail="true"
        />
      </div>
      <DetailTitle :text="data.title" />
      <template v-for="(content, index) in ContentItems">
        <component
          :is="validContent(content, index)"
          :key="`content-${index}`"
          :data="content"
        >
        </component>
      </template>

      <!-- <Like /> -->
    </template>
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import { mapActions } from 'vuex'
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
    layout: 'preview',
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
    computed: {
      topClassBind() {
        let classList = ['top']
        if (this.thumbnail.length === 0) {
          classList.push('no-thumbnail')
        }
        return classList
      }
    },
    data() {
      return {
        /**
         * categoryType
         * typeA - thumbnail형
         * typeB - 빅타이틀 형
         * typeC - article 형
         * typeD - storyTelling 형
         */
        isLoad: false,
        categoryType: null,
        data: null,
        breadcrumb: [],
        thumbnail: null,
        ContentItems: []
      }
    },
    computed: {
      contentId() {
        return this.$route.query.contentId
      }
    },
    async mounted() {
      await this.init()
    },
    methods: {
      ...mapActions(['getContentDetail', 'getNickName']),
      async init() {
        const res = await this.getContentDetail(this.contentId)
        this.data = res.data
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

        await this.setBreadcrumb(this.data.category1, this.data.category2)
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
    justify-content: space-between;
    margin-bottom: 60px;
    &.no-thumbnail {
      margin-bottom: 100px;
      .bread-crumb {
        padding-top: 100px;
      }
    }
    .bread-crumb {
      padding-top: 0;
      padding-right: 20px;
    }
    > * {
      flex: 0 0 auto;
    }
  }
  .content-detail {
    padding-top: 100px;
    .con-box {
      margin-bottom: 100px;
    }
  }

  @include pc-large {
    .content-detail {
      padding-top: 130px;
      .con-box {
        margin-bottom: 200px;
      }
    }
    .top {
      margin-bottom: 100px;
      &.no-thumbnail {
        margin-bottom: 173px;
      }
    }
  }
  @include pc-4k {
    .top {
      margin-bottom: 145px;
      &.no-thumbnail {
        margin-bottom: 248px;
      }
    }
    .content-detail {
      padding-top: 200px;
      .con-box {
        margin-bottom: 300px;
      }
    }
  }
  @include tablet {
    .top {
      margin-bottom: 100px;
      &.no-thumbnail {
        margin-bottom: 5px;
      }
    }
  }
  @include mobile {
    .top {
      display: block;
      margin-bottom: 60px;
      &.no-thumbnail {
        margin-bottom: 60px;
      }
      .bread-crumb {
        padding: 0 20px;
      }
    }
  }
</style>

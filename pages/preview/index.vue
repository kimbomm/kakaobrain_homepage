<template>
  <div class="content-detail">
    <template v-if="data">
      <div class="top">
        <BreadCrumb :data="data.ContentTags" :full="true" />
        <DetailTitle :text="data.title" />
      </div>
      <template v-for="(content, index) in data.ContentItems">
        <component
          :is="validContent(content, index)"
          :key="`content-${index}`"
          :data="content"
        >
        </component>
        <!-- // :srcPath="content.Media.url" -->
      </template>

      <!-- <Like /> -->
    </template>
    <!-- <div class="top">
      
      <Thumbnail :srcPath="''" />
    </div> -->
    <!-- <DetailTitle text="타이틀 텍스트" /> -->

    <!-- <DetailFullImg :srcPath="''" text="이미지 설명" /> -->
    <!-- <DetailImg :srcPath="''" text="이미지 설명" /> -->
    <!-- <DetailMiddelImg :srcPath="''" text="이미지 설명" /> -->
    <!-- <DetailText text="일반 텍스트" /> -->
    <!-- <DetailSubTitle text="서브타이틀 텍스트" /> -->
    <!-- <DetailTextTitle text="Article 서브타이틀 텍스트" /> -->
    <!-- <DetailTextItem text="AAAI (2021)" /> -->
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import { mapActions } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import Thumbnail from '@/components/detail/Thumbnail'
  import DetailImg from '@/components/detail/DetailImg'
  import DetailFullImg from '@/components/detail/DetailFullImg'
  import DetailMiddelImg from '@/components/detail/DetailMiddelImg'
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
      Thumbnail,
      DetailTitle,
      DetailText,
      DetailImg,
      DetailSubTitle,
      DetailFullImg,
      DetailMiddelImg,
      DetailTextTitle,
      DetailTextItem,
      Like
    },
    computed: {
      topClassBind() {
        let classList = ['top']
        if (this.categoryType === 'typeB' || this.categoryType === 'typeC') {
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
        data: null
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
      ...mapActions(['getContentDetail']),
      async init() {
        const res = await this.getContentDetail(this.contentId)
        console.log(res.data)
        this.data = res.data
        this.isLoad = true
      },
      validContent(content, index) {
        let componentName = ''
        switch (content.itemType) {
          case 'header':
            componentName = 'DetailTextTitle'
            break
          case 'image':
            componentName =
              content.itemProp.imageAlign === 'full'
                ? 'DetailFullImg'
                : 'DetailMiddelImg'
            break
          case 'pagaraph':
            componentName = 'DetailText'
            break
        }
        return componentName
      }
    }
  }
</script>
<style lang="scss" scoped>
  .top {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 145px;
    &.no-thumbnail {
      margin-bottom: 248px;
    }
    .bread-crumb {
      padding-right: 20px;
    }
    > * {
      flex: 0 0 auto;
    }
  }
  .content-detail {
    padding-top: 200px;
    .con-box {
      margin-bottom: 300px;
    }
  }
  @media screen and (max-width: 2560px) {
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
  @media screen and (max-width: 1920px) {
    .content-detail {
      padding-top: 100px;
      .con-box {
        margin-bottom: 100px;
      }
    }
    .top {
      margin-bottom: 60px;
      &.no-thumbnail {
        margin-bottom: 100px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .top {
      margin-bottom: 100px;
      &.no-thumbnail {
        margin-bottom: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
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

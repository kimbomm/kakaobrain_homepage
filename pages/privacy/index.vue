<template>
  <div class="content-detail">
    <template v-if="data">
      <div class="top">
        <BreadCrumb :data="breadcrumb" :full="true" />
      </div>
      <DetailTitle :text="data.title" />
      <template v-for="(content, index) in data.ContentItems">
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
  import { mapState } from 'vuex'
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
        thumbnail: null
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        privacyData: state => state.translation.PRIVACY
      }),
      data() {
        let data = this.privacyData[this.language]
        return data
      },
      breadcrumb() {
        let breadcrumb = []
        switch (this.language) {
          case 'KR':
            breadcrumb = [{ text: '개인정보 보호지침', sub: 'sub', link: '' }]
            break
          case 'EN':
            breadcrumb = [{ text: 'Privacy Policy', sub: 'sub', link: '' }]
            break
        }
        return breadcrumb
      }
    },
    async mounted() {
      await this.init()
    },
    methods: {
      async init() {},
      validContent(content, index) {
        let componentName = ''
        switch (content.itemType) {
          case 'header':
            componentName = 'DetailTextTitle'
            break
          default:
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

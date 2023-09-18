<template>
  <div class="content-detail">
    <template v-if="data">
      <BreadCrumb :data="breadcrumb" :full="true" class="breadcrumb" />
      <div class="top"></div>
      <DetailTitle :text="data.title" />
      <template v-for="(content, index) in data.ContentItems">
        <component
          :is="validContent(content, index)"
          :key="`content-${index}`"
          :data="content"
        >
        </component>
      </template>
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
        isLoad: false,
        categoryType: null,
        thumbnail: null
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        ethicsData: state => state.translation.ETHICS
      }),
      data() {
        let data = this.ethicsData[this.language]
        return data
      },
      breadcrumb() {
        let breadcrumb = []
        switch (this.language) {
          case 'KR':
            breadcrumb = [{ text: '사이버 윤리실', sub: 'sub', link: '' }]
            break
          case 'EN':
            breadcrumb = [{ text: 'Cyber Ethics', sub: 'sub', link: '' }]
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
    padding: 320px 0 0;
  }
  .content-detail {
    margin-bottom: 300px;

    .con-box {
      margin-bottom: 100px;
    }
  }
  .detail-text {
    margin-bottom: 100px;
    padding-left: 20px;
  }

  .detail-title {
    margin-left: getMargin(2) !important;
    padding-left: 20px;
  }

  @include pc-large {
    .content-detail {
      margin-bottom: 400px;
      .con-box {
        margin-bottom: 200px;
      }
    }
    .top {
      padding: 400px 0 0;
    }
    .detail-text {
      font-size: 22px;
      margin-bottom: 200px;
    }
  }
  @include pc-4k {
    .top {
      padding: 600px 0 0;
    }
    .content-detail {
      .con-box {
        margin-bottom: 300px;
      }
    }
    .detail-text {
      font-size: 32px;
      margin-bottom: 250px;
    }
  }
  @include tablet {
    .content-detail {
      margin-bottom: 200px;
    }
    .top {
      padding: 200px 0 0;
    }
    .detail-text {
      margin-bottom: 100px;
      font-size: 14px;
    }

    .detail-title {
      margin-left: getMargin(1) !important;
      padding-left: 20px;
      font-size: 50px;
    }
  }
  @include mobile {
    .detail-title {
      margin-left: getMargin(0) !important;
      font-size: 30px;
      padding-left: 0;
    }
    .content-detail {
      padding: 76px 20px 0;
      margin-bottom: 100px;
    }
    .detail-text {
      margin-bottom: 100px;
      font-size: 14px;
      padding-left: 0;
    }
    .top {
      display: block;
      padding: 60px 0 0;
    }
  }
  @include mobile-small {
    .detail-title {
      font-size: 30px;
    }
    .breadcrumb {
      margin-left: 0;
    }
    .content-detail {
      padding: 76px 20px 0;
      margin-bottom: 100px;
    }
    .top {
      display: block;
      padding: 60px 0 0;
    }
  }
</style>

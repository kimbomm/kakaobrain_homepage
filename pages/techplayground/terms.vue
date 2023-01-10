<template>
  <div class="content-detail">
    <template v-if="data">
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
  import { mapState } from 'vuex'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailTextTitle from '@/components/detail/DetailTextTitle'
  import DetailTextItem from '@/components/detail/DetailTextItem'
  export default {
    components: {
      DetailTitle,
      DetailText,
      DetailSubTitle,
      DetailTextTitle,
      DetailTextItem,
    },
    layout: 'playground',
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
        termsData: state => state.translation.PLG_TERMS
      }),
      data() {
        let data = this.termsData[this.language]
        return data
      },
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
  }

  @include pc-large {
    .content-detail {
      margin-bottom: 400px;
      .con-box {
        margin-bottom: 200px;
      }
    }
    .top {
      padding: 440px 0 0;
    }
    .detail-text {
      margin-bottom: 200px;
    }
  }
  @include pc-4k {
    .top {
      padding: 660px 0 0;
    }
    .content-detail {
      .con-box {
        margin-bottom: 300px;
      }
    }
    .detail-text {
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
    }
  }
  @include mobile {
    .detail-title {
      font-size: 40px;
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

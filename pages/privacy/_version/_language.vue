<template>
  <div class="content-detail">
    <template v-if="data">
      <BreadCrumb :data="breadcrumb" :full="true" />
      <div class="top"></div>
      <DetailTitle :text="this.$store.state.privacy.title" />
      <template
        v-for="(content, index) in this.$store.state.privacy.ContentItems"
      >
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
  import { mapActions, mapState } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailImage from '@/components/detail/DetailImage'
  import DetailYoutube from '@/components/detail/DetailYoutube'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailTextTitle from '@/components/detail/DetailTextTitle'
  import DetailTextItem from '@/components/detail/DetailTextItem'
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
      DetailTextItem
    },
    data() {
      return {
        data: {
          title: '',
          ContentItems: [],
          contentData: null,
          contentId: null,
          contentType: null,
          isLoad: false,
          categoryType: null,
          data: null,
          breadcrumb: [],
          thumbnail: null
        }
      }
    },

    async mounted() {
      await this.init()
    },

    async created() {
      this.$nuxt.$on('langChange', this.onLangChange)
    },

    computed: {
      ...mapState({
        language: state => state.language
      }),

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

    methods: {
      ...mapActions({
        getPrivacyDetail: 'getPrivacyDetail'
      }),
      async onLangChange() {
        if (
          this.data.contentProp.langLink &&
          this.data.targetLang !== this.language
        ) {
          window.location = `/contents/${this.data.contentProp.langLink}`
        } else {
          window.location = `/privacy/${this.$route.params.version}/${this.language}`
        }
      },
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
      },

      async init() {
        try {
          const res = await this.$store.dispatch('getPrivacyDetail', {
            targetLang: this.$route.params.language,
            alias: this.$route.params.version
          })
          this.data = res.data
        } catch (error) {
          window.location.href = '/'
        }
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
      margin-bottom: 300px;
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
    .detail-title {
      margin-bottom: 400px;
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

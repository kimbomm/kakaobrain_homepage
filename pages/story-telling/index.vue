<template>
  <div class="story-telling">
    <BreadCrumb :data="breadcrumb" :full="true" :isDark="false" />
    <div v-if="data">
      <Swiper :data="data" />
    </div>
    <div>
      <!-- <Like /> -->
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import Swiper from '@/components/swiper/Swiper'
  import Like from '@/components/elements/Like'
  export default {
    name: 'index',
    layout: 'storytelling-page',
    async asyncData({ store, query }) {
      // const res = await store.dispatch('getContentDetail', query.contentId)
      // return {
      //   // data: res.data,
      //   contentId: query.contentId
      // }
    },
    components: {
      BreadCrumb,
      Swiper,
      Like
    },
    data() {
      return {
        data: null,
        breadcrumb: []
      }
    },
    async created() {
      await this.init()
    },
    methods: {
      ...mapActions(['getNickName']),
      async init() {
        const res = await this.$store.dispatch(
          'getContentDetail',
          this.$route.query.contentId
        )
        this.data = res.data
        await this.setBreadcrumb(this.data.category1, this.data.category2)
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
  .story-telling {
    .bread-crumb {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
    }
  }
  .like {
    display: none;
  }
  @include mobile {
    .story-telling {
      .bread-crumb {
        left: 0;
        padding-top: 80px;
      }
    }
    .like {
      display: block;
      margin-top: 62px;
    }
  }
</style>

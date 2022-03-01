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
    components: {
      BreadCrumb,
      Swiper,
      Like
    },
    data() {
      return {
        data: null,
        breadcrumb: [],
        viewPortWidth: 0,
        isMobile: false
      }
    },
    async created() {
      await this.$nuxt.$emit('story-page', true)
      await this.init()
    },
    async mounted() {
      await this.checkMobile()
      this.$nextTick(async () => {
        await this.onResizeEvent()
        await window.addEventListener('resize', this.onResizeEvent)
      })
    },
    async beforeDestroy() {
      await this.$nuxt.$emit('story-page', false)
      await this.$store.commit('setIsDark', true)
      window.removeEventListener('resize', this.onResizeEvent)
    },
    methods: {
      ...mapActions(['getNickName']),
      async onResizeEvent() {
        this.viewPortWidth = window.innerWidth
        if (this.isMobile || this.viewPortWidth <= 768) {
          await this.$store.commit('setIsDark', true)
        } else {
          await this.$store.commit('setIsDark', false)
          await this.$nuxt.$emit('story-page', true)
        }
      },
      checkMobile() {
        const device = this.$device
        this.isMobile = device.iphone || device.androidPhone || device.mobile
      },
      async init() {
        const res = await this.$store.dispatch(
          'getContentDetail',
          this.$route.query.contentId
        )
        this.data = res.data
        if (this.data.category1 && this.data.category2) {
          await this.setBreadcrumb(this.data.category1, this.data.category2)
        }
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
      margin-top: 56px;
      .bread-crumb {
        left: 0;
        padding: 20px;
      }
    }
    .like {
      display: block;
      margin-top: 62px;
    }
  }
</style>

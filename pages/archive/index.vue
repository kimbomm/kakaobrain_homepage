<template>
  <div class="archive-wrap">
    <div class="contents-selector l-ml-2 gl-6">
      <FilterSelector :list="filter" />
    </div>
    <div v-if="filter.length > 0" class="contents-sticker l-ml-3 gl-5">
      <ul>
        <li
          v-for="(item, index) in filter"
          :key="`filter-${index}`"
          class="item"
        >
          <Sticker :text="item" />
        </li>
      </ul>
    </div>
    <div class="contents-list-text">
      <DetailText :data="description[language]" />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry
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
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  import DetailText from '@/components/detail/DetailText'
  import FilterSelector from '@/components/elements/filter/FilterSelector'
  export default {
    mixins: [mixinGlobal],
    components: {
      ArchiveCard,
      DetailText,
      FilterSelector
    },
    computed: {
      ...mapState({
        filter: state => state.filter,
        language: state => state.language,
        innovationList: state => state.innovation.list
      })
    },
    data() {
      return {
        description: {
          KR: {
            itemType: 'pagaraph',
            text: '카카오브레인은 생각하지 못한 물음으로부터, 세상을 변화시킬 해답을 찾아가는 팀입니다. 우리는 AI 선행 연구부터, 프로덕트까지 모든 스토리를 공개하며 공유합니다. 이러한 행동은 AI 커뮤니티에 기여하며, 그로 인해 우리의 삶이 좀 더 나아질 것을 믿기 때문입니다.'
          },
          EN: {
            itemType: 'pagaraph',
            text: '카카오브레인은 생각하지 못한 물음으로부터, 세상을 변화시킬 해답을 찾아가는 팀입니다. 우리는 AI 선행 연구부터, 프로덕트까지 모든 스토리를 공개하며 공유합니다. 이러한 행동은 AI 커뮤니티에 기여하며, 그로 인해 우리의 삶이 좀 더 나아질 것을 믿기 때문입니다.'
          }
        },
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
      filter: {
        deep: true,
        async handler(val) {
          // console.log(val)
          this.pageData.offset = 0
          this.pageData.tag = val.join('|')
          await this.init()
        }
      }
    },
    async created() {
      await this.init()
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    async beforeDestroy() {
      await window.removeEventListener('scroll', this.onScroll)
      await this.setFilterList([])
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      ...mapMutations({
        setFilterList: 'setFilterList'
      }),
      async init() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list
        this.total = res.data.count
        if (!this.isInit) {
          await this.setFilterList(res.data.tags)
          this.isInit = true
        }
      },
      async onScroll() {
        const masonry = this.$refs.masonry.$el
        if (
          masonry.offsetHeight > 0 &&
          masonry.offsetTop + masonry.offsetHeight > window.scrollY &&
          masonry.offsetTop + masonry.offsetHeight <
            window.scrollY + window.innerHeight &&
          !this.isAdd
        ) {
          this.isAdd = true
          await this.addList()
        }
      },
      async addList() {
        if (this.list.length < this.total) {
          this.pageData.offset += this.pageData.limit
          const res = await this.getContentList(this.pageData)
          this.list = this.list.concat(res.data.list)
          this.total = res.data.count
          this.isAdd = false
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .archive-wrap {
    padding: 0 20px;
  }
  .masonry {
    // padding: 0 20px;
  }
  /deep/ .archive {
    min-width: initial;
    max-width: initial;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  .contents-selector {
    margin: 320px 0 60px;
  }
  .contents-list-text {
    margin-bottom: 200px;
  }

  @include pc-4k {
    /deep/ .archive {
      margin-bottom: 100px !important;
    }
    .contents-selector {
      margin: 600px 0 120px;
    }
    .contents-list-text {
      margin-bottom: 460px !important;
    }
  }
  @include pc-large {
    /deep/ .archive {
      margin-bottom: 70px;
    }
    .contents-list-text {
      margin-bottom: 300px;
    }
  }
  @include tablet {
    .contents-selector {
      margin: 200px 0 40px;
    }
    .contents-list-text {
      margin-bottom: 100px;
    }
  }
  @include mobile {
    .masonry {
      padding: 0;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
    .l-ml-3 {
      margin-left: 0px !important;
    }
    .gl-6 {
      width: 100% !important;
    }
    .contents-selector {
      margin: 157px 0 20px;
    }
  }
</style>

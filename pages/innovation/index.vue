<template>
  <div class="innovation">
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
      <DetailText :data="detailText" />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry
      ref="masonry"
      :cols="{ default: 5, 1024: 2, 768: 1 }"
      :gutter="{ default: '20px', 768: '0px' }"
      class="masonry area"
    >
      <InnovationCard
        v-for="(item, index) in list"
        :data="item"
        :key="index"
        :theme="Math.random() > 0.5 ? 'dark' : ''"
        :isMasonry="true"
      />
    </masonry>
  </div>
</template>
<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  import DetailText from '@/components/detail/DetailText'
  import FilterSelector from '@/components/elements/filter/FilterSelector'
  import Sticker from '@/components/elements/button/Sticker'

  export default {
    mixins: [mixinGlobal],
    components: {
      InnovationCard,
      DetailText,
      FilterSelector,
      Sticker
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
        detailText: {
          itemType: 'pagaraph',
          text: '우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다. 우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.'
        },
        pageData: {
          offset: 0,
          limit: 20,
          contentType: 'THESIS',
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
  .innovation {
    padding: 0 20px;
  }
  // .masonry {
  //   padding: 0 20px;
  // }
  /deep/ .Innovation {
    min-width: initial;
    max-width: initial;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  .contents-selector {
    margin: 320px 0 60px;
  }
  .contents-sticker {
    margin-bottom: 60px;
    .item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
  .contents-list-text {
    margin-bottom: 200px;
  }

  @include pc-4k {
    /deep/ .Innovation {
      margin-bottom: 100px;
    }
    .contents-selector {
      margin: 600px 0 120px;
    }
    .contents-sticker {
      margin-bottom: 120px;
    }
    .contents-list-text {
      margin-bottom: 460px !important;
    }
  }
  @include pc-large {
    /deep/ .Innovation {
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
    .contents-sticker {
      margin-bottom: 40px;
    }
    .l-ml-3 {
      margin-left: calc(
        calc((100vw - 20px * 11) / 10) * 2 + 20px * 2
      ) !important;
    }
    .gl-5 {
      width: calc(
        calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
      ) !important;
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
    .gl-5 {
      width: 100% !important;
    }

    .contents-selector {
      margin: 157px 0 20px;
    }
    .contents-sticker {
      margin-bottom: 20px;
    }
  }
</style>

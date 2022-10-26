<template>
  <div class="innovation">
    <div class="contents-selector">
      <FilterSelector :list="filter" />
    </div>
    <div v-if="filter.length > 0" class="contents-sticker">
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
        description: {
          KR: {
            itemType: 'pagaraph',
            text: `왜 카카오브레인은 끊임없이 AI 기술을 오픈할까요? 공개와 공유의 문화가 기술을 진화시킵니다.
            카카오브레인은 논문 발표와 코드 공개를 통해서 실질적인 핵심적인 기술로 쓰이며, 이것이 우리의 삶을 좀더 풍요롭게 할 수 있도록 최선을 다합니다.`
          },
          EN: {
            itemType: 'pagaraph',
            text: `Why does Kakao Brain constantly open its AI technology? A culture of openness and sharing evolves technology.
            Kakao Brain publishes theses and opens the codes to make them available as practical core technologies. This way, we are doing our best to make our lives richer.`
          }
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
      this.scrollBody.addEventListener('scroll', this.onScroll)
    },
    async beforeDestroy() {
      await this.scrollBody.removeEventListener('scroll', this.onScroll)
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
          masonry.offsetTop + masonry.offsetHeight >
            this.scrollBody.scrollTop &&
          masonry.offsetTop + masonry.offsetHeight <
            this.scrollBody.scrollTop + window.innerHeight &&
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
    padding: 320px 20px 0;
    margin-bottom: 500px;
  }
  .contents-selector {
    width: getWidth(6);
    margin-left: getMargin(2);
    margin-bottom: 60px;
  }
  .contents-sticker {
    width: getWidth(5);
    margin-left: getMargin(3);
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

  ::v-deep .Innovation {
    margin-bottom: 70px;
  }

  @include pc-large {
    .innovation {
      padding-top: 400px;
      margin-bottom: 700px;
    }
    .contents-selector {
      margin-bottom: 120px;
    }
    .contents-list-text {
      margin-bottom: 300px;
    }
  }

  @include pc-4k {
    .innovation {
      padding-top: 600px;
      margin-bottom: 1000px;
    }
    .contents-selector {
      margin-bottom: 120px;
    }
    .contents-sticker {
      margin-bottom: 120px;
    }
    .contents-list-text {
      margin-bottom: 460px !important;
    }
    ::v-deep .Innovation {
      margin-bottom: 100px;
    }
  }

  @include tablet {
    .innovation {
      padding-top: 200px;
      margin-bottom: 300px;
    }
    .contents-selector {
      margin-bottom: 40px;
    }
    .contents-list-text {
      margin-bottom: 100px;
    }
    .contents-sticker {
      width: getWidth(6);
      margin-bottom: 40px;
      margin-left: getMargin(2);
    }
    ::v-deep .Innovation {
      margin-bottom: 50px;
    }
  }
  @include mobile {
    .innovation {
      padding-top: 56px;
      margin-bottom: 200px;
    }
    .contents-selector {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
    }
    .masonry {
      padding: 0;
    }

    .contents-selector {
      margin: 100px 0 20px;
    }
    .contents-sticker {
      width: 100%;
      margin-left: 0;
      margin-bottom: 20px;
    }
  }
</style>

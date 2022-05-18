<template>
  <div class="search">
    <div class="search-input">
      <SearchInput @search="getResult" />
    </div>
    <div class="search-tag">
      <Sticker v-for="item in tagSet" :key="item.value" :text="item.name" />
    </div>
    <div class="search-result">
      <!-- / default / result / no result /분기 수정 필요 -->
      <template v-if="hasResult && inputVal">
        <div class="search-result-title">
          <span> {{ inputVal }} : Search Result </span>
          <sup>
            {{ total }}
          </sup>
        </div>
        <masonry
          ref="masonry"
          :cols="{ default: 3, 1024: 2, 768: 1 }"
          :gutter="{ default: '20px', 768: '0px' }"
          class="masonry area"
        >
          <template v-for="(item, index) in list">
            <InnovationCard
              v-if="item.contentType == 'THESIS'"
              :data="item"
              :key="index"
              :theme="Math.random() > 0.5 ? 'dark' : ''"
            />
            <ArchiveCard
              v-else-if="item.contentType == 'ARTICLE'"
              :key="index"
              :data="item"
              :theme="Math.random() > 0.5 ? 'dark' : ''"
            />
          </template>
        </masonry>
      </template>
      <template v-else-if="!hasResult && inputVal">
        <div class="search-result-desc">
          <p>No search results for '{{ inputVal }}'</p>
        </div>
        <div class="search-result-title">
          <span> How about this? </span>
        </div>
        <masonry
          ref="masonry"
          :cols="{ default: 3, 1024: 2, 768: 1 }"
          :gutter="{ default: '20px', 768: '0px' }"
          class="masonry area"
        >
          <template v-for="(item, index) in list">
            <InnovationCard
              v-if="item.contentType == 'THESIS'"
              :data="item"
              :key="index"
              :theme="Math.random() > 0.5 ? 'dark' : ''"
            />
            <ArchiveCard
              v-else-if="item.contentType == 'ARTICLE'"
              :key="index"
              :data="item"
              :theme="Math.random() > 0.5 ? 'dark' : ''"
            />
          </template>
        </masonry>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions } from 'vuex'
  import SearchInput from '@/components/elements/SearchInput'
  import Sticker from '@/components/elements/button/Sticker'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    components: {
      SearchInput,
      Sticker,
      InnovationCard,
      ArchiveCard
    },
    beforeMount() {
      for (let i = 1; i <= this.tagCnt; i++) {
        this.tagSet.push({
          name: `tag_name_${i}`,
          value: i
        })
      }
    },
    data() {
      return {
        inputVal: '', //state?
        hasResult: false,

        tagCnt: 15,
        tagSet: [],
        pageData: {
          offset: 0,
          limit: 100,
          contentType: '',
          targetLang: this.$store.state.language,
          tag: ''
          // title: ''
        },
        list: [],
        total: 0
      }
    },
    async created() {
      // await this.init()
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      async init() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list.slice(40, -1).sort(() => Math.random() - 0.5)
        this.total = this.list.length
        this.hasResult = this.list.length <= 0 ? false : true
        // this.hasResult = this.list.length <= 0 ? true : false // no result 테스트용
      },
      async getResult(val) {
        // input value -> axios
        if (val.length > 0) {
          // this.pageData.title = val
          await this.init()
          this.inputVal = val
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .search {
    padding: 320px 20px 0;
    margin-bottom: 500px;

    &-input {
      width: getWidth(6);
      margin-left: getMargin(2);
      margin-bottom: 50px;
    }
    &-tag {
      width: getWidth(6);
      margin-left: getMargin(2);
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
      margin-bottom: 230px;
    }

    &-result {
      width: getWidth(6);
      margin-left: getMargin(2);
      position: relative;
      &-title {
        margin-bottom: 30px;
        font-family: 'Inter';
        font-size: map-get($font-mobile, h2);
        font-weight: 700;
        sup {
          font-size: map-get($font, default);
          color: $brain-magenta;
        }
      }
      &-desc {
        position: absolute;
        width: 100%;
        top: -110px;
        text-align: center;
        font-size: map-get($font, h3);
      }
    }
  }
  ::v-deep {
    .Innovation {
      margin-bottom: 70px;
    }
    .archive {
      margin-bottom: 70px;
    }
  }
</style>

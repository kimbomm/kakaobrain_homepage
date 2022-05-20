<template>
  <div ref="search" class="search">
    <div class="search-input">
      <SearchInput :value.sync="pageData.filter" @search="getResult" />
    </div>
    <div class="search-tag">
      <Sticker v-for="item in tagSet" :key="item.value" :text="item.name" />
    </div>
    <div :class="classBind">
      <!-- / default / result / no result /분기 수정 필요 -->
      <template v-if="inputVal">
        <div v-if="list.length === 0" class="search-result-desc">
          <p>No search results for '{{ inputVal }}'</p>
        </div>
        <div class="search-result-title">
          <template v-if="list.length > 0">
            <span> {{ inputVal }} : Search Result </span>
            <sup>
              {{ total }}
            </sup>
          </template>
          <template v-else>
            <span> How about this? </span>
          </template>
        </div>
        <masonry
          ref="masonry"
          :cols="{ default: 3, 1024: 2, 768: 1 }"
          :gutter="{ default: '20px', 768: '0px' }"
          class="masonry area"
        >
          <template v-for="(item, index) in list">
            <div :key="index">
              <ArchiveCard
                :data="item"
                :theme="Math.random() > 0.5 ? 'dark' : ''"
              />
            </div>
          </template>
        </masonry>
      </template>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
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
        tagCnt: 5,
        tagSet: [],
        pageData: {
          offset: 0,
          limit: 20,
          targetLang: this.$store.state.language,
          filter: ''
        },
        list: [],
        total: 0
      }
    },
    computed: {
      classBind() {
        const classList = ['search-result']
        if (this.list.length > 0) {
          classList.push('is-result')
        }
        return classList.join(' ')
      }
    },
    async created() {
      // await this.init()
    },
    async mounted() {
      this.$refs.search.addEventListener('wheel', this.onWheel)
    },
    async beforeDestroy() {
      this.$refs.search.removeEventListener('wheel', this.onWheel)
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      onWheel(e) {
        this.$refs.search.scrollTop += Math.floor(e.deltaY) * 0.3
      },
      async init() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list.slice(40, -1).sort(() => Math.random() - 0.5)
        this.total = this.list.length
        this.hasResult = this.list.length <= 0 ? false : true
        // this.hasResult = this.list.length <= 0 ? true : false // no result 테스트용
      },
      async onSearch() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list
        this.total = res.data.count
      },
      async getResult(val) {
        if (val.trim().length > 0) {
          this.inputVal = this.pageData.filter
          await this.onSearch()
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .search {
    padding: 190px 20px 0;
    background-color: #f5f7fa;
    &-input {
      width: getWidth(6);
      margin: 0 auto 50px;
    }
    &-tag {
      width: getWidth(6);
      margin-left: getMargin(2);
      text-align: center;
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      justify-content: center;
    }

    &-result {
      position: relative;
      width: getWidth(6);
      margin: {
        left: getMargin(2);
        top: 100px;
      }
      &.is-result {
        margin-top: 200px;
      }
      &-title {
        width: getWidth(6);
        margin: 0 auto 30px;
        font-size: 26px;
        font-weight: 600;
        sup {
          font-size: map-get($font, default);
          color: $brain-magenta;
        }
      }
      &-desc {
        text-align: center;
        font-size: 22px;
        line-height: 1.3;
        margin-bottom: 100px;
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

  @include pc-large {
    .search {
      padding-top: 305px;
      &-input {
        margin-bottom: 70px;
      }
      &-result {
        &.is-result {
          margin-top: 240px;
        }
        &-title {
          font-size: 34px;
          margin-bottom: 50px;
          sup {
            font-size: 24px;
          }
        }
        &-desc {
          font-size: 30px;
          margin-bottom: 140px;
        }
      }
    }
  }
  @include pc-4k {
    .search {
      padding-top: 460px;
      &-input {
        margin-bottom: 90px;
      }
      &-result {
        margin-top: 250px;
        &.is-result {
          margin-top: 340px;
        }
        &-title {
          font-size: 44px;
          margin-bottom: 60px;
          sup {
            font-size: 34px;
          }
        }
        &-desc {
          font-size: 40px;
          margin-bottom: 240px;
        }
      }
    }
  }

  @include tablet {
    .search {
      padding-top: 190px;
      &-input {
        margin-bottom: 30px;
      }
      &-result {
        width: 100%;
        margin-left: 0;
        margin-top: 100px;
        &.is-result {
          margin-top: 110px;
        }
        &-title {
          width: 100%;
          margin-left: 0;
          font-size: 22px;
          margin-bottom: 20px;
          sup {
            font-size: 14px;
          }
        }
        &-desc {
          font-size: 40px;
          margin-bottom: 100px;
        }
      }
    }
  }

  @include mobile {
    .search {
      padding-top: 126px;
      &-input {
        width: 100%;
        margin-left: 0;
      }
      &-tag {
        width: 100%;
        margin-left: 0;
        gap: 4px;
        justify-content: flex-start;
      }
      &-result {
        margin-top: 60px;
        &.is-result {
          margin-top: 80px;
        }
        &-title {
          width: 100%;
          margin-left: 0;
          font-size: 16px;
          margin-bottom: 20px;
          sup {
            font-size: 12px;
          }
        }
        &-desc {
          font-size: 18px;
          margin-bottom: 60px;
        }
      }
    }
  }
</style>

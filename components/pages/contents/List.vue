<template>
  <div class="layout-list category-wrap">
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="category-contents">
      <div class="contents-title">
        <DetailTitle :text="title" />
      </div>
      <div class="tit-text">
        <p v-html="description"></p>
      </div>

      <div class="contents-checkbox">
        <ul>
          <li
            v-for="(item, index) in filterList"
            :key="index"
            class="contents-item"
            v-show="isFolding ? index < 10 : true"
          >
            <Checkbox
              :checkboxText="item.text"
              :checkboxValue="item.value"
              :checkboxId="`checkbox_${index}`"
              :isChecked="item.isChecked"
              @change="onChange"
            />
          </li>
        </ul>
        <div v-if="filterList.length > 10" class="more">
          <button
            :class="{ 'more-button': true, 'is-folding': isFolding }"
            @click="isFolding = !isFolding"
          >
            더보기
          </button>
        </div>
      </div>

      <div>
        <ul>
          <li v-for="(item, index) in list" :key="index" class="contents-list">
            <MenuList :data="item" />
          </li>
        </ul>
      </div>
      <List-paging
        v-if="total > 0"
        :limit="pageData.limit"
        :offset="pageData.offset"
        :total="total"
        @onChange="onPagingChange"
      />
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
  import Utility from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailTitle from '@/components/detail/DetailTitle'
  import Checkbox from '@/components/elements/filter/Checkbox'
  import MenuList from '@/components/elements/MenuList'
  import ListPaging from '@/components/elements/ListPaging'

  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailTitle,
      Checkbox,
      MenuList,
      ListPaging
    },
    props: {
      category1: {
        type: String,
        default: '',
        require: true
      },
      category2: {
        type: String,
        default: '',
        require: true
      }
    },
    data() {
      return {
        breadcrumb: [],
        title: '',
        list: [],
        pageData: {
          offset: 0,
          limit: 8,
          targetLang: this.$store.state.language,
          tag: ''
        },
        total: null,
        tags: [],
        filterList: [{ value: 'all', text: 'All', isChecked: true }],
        isFolding: true
      }
    },
    computed: {
      ...mapState({
        language: state => state.language,
        subtitle: state => state.translation.SUBTITLE
      }),
      description() {
        return this.subtitle[this.category1][this.language]
      },
      checkedList() {
        let list = []
        list = this.filterList.filter(item => item.isChecked)
        list = list.map(item => item.value)
        return list
      }
    },
    async mounted() {
      await this.init()
    },
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        await this.setBreadcrumb()
        await this.fetchList()
        await this.filterInit()
      },
      async fetchList() {
        this.pageData.targetLang = this.$store.state.language
        const res = await this.getCategoryList({
          category1: this.category1,
          category2: Utility.changeCategory2(this.category2),
          pageData: this.pageData
        })
        if (res) {
          this.list = res.data.list
          this.total = res.data.count
          this.tags = res.data.tags
        }
      },
      async filterInit() {
        const filters = this.tags.map(tag => {
          return { value: tag, text: tag, isChecked: false }
        })
        this.filterList = this.filterList.concat(filters)
      },
      async setBreadcrumb() {
        let subClass = ''
        console.log(this)
        const info = await this.getNickName({
          category1: this.category1,
          category2: Utility.changeCategory2(this.category2)
        })

        switch (this.category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = this.category1
            break
        }

        this.title = info.category2.name
        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )
      },
      onChange(data) {
        this.filterList.forEach(item => {
          if (data.value === 'all' && data.isChecked) {
            item.isChecked = item.value === data.value ? true : false
          } else if (data.value !== 'all' && data.isChecked) {
            if (item.value === data.value) item.isChecked = data.isChecked
            if (item.value === 'all' && item.isChecked) item.isChecked = false
          } else {
            if (item.value === data.value) item.isChecked = data.isChecked
          }
        })
        if (this.checkedList.length === 0) {
          this.filterList[0].isChecked = true
        }
        this.pageData.tag =
          this.checkedList.join('|') === 'all' ? '' : this.checkedList.join('|')
        this.fetchList()
      },
      onPagingChange(val) {
        this.pageData.offset = val * this.pageData.limit
        this.fetchList()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .tit-text {
    margin-bottom: 30px;
    line-height: 150%;
    font-size: 16px;
    width: getWidth(5);
    margin-left: getMargin(3);
  }

  .contents {
    &-checkbox {
      width: getWidth(5);
      margin-left: getMargin(3);
      margin-bottom: 130px;
    }
    &-item {
      display: inline-block;
      &:not(:last-child) {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
    &-list {
      margin-left: getMargin(2);
      &:not(:last-child) {
        margin-bottom: 200px;
      }
    }
  }
  .more {
    margin-top: 10px;
    text-align: right;
    .more-button {
      font-size: 0;
      &:before {
        content: '▲';
        font-size: 18px;
        line-height: 1.2;
        color: #000;
      }
      &.is-folding {
        &:before {
          content: '▼';
        }
      }
    }
  }
  @include pc-large {
    .tit-text {
      margin-bottom: 50px;
      font-size: 22px;
    }

    .contents {
      &-checkbox {
        margin-bottom: 190px;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 260px;
        }
      }
    }
    .more {
      margin-top: 20px;
    }
  }
  @include pc-4k {
    .tit-text {
      margin-bottom: 70px;
      font-size: 32px;
    }

    .contents {
      &-checkbox {
        margin-bottom: 290px;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 374px;
        }
      }
    }
    .more {
      margin-top: 40px;
    }
  }

  @include tablet {
    .tit-text {
      width: getWidth(6);
      margin-left: getMargin(2);
      margin-bottom: 20px;
      font-size: 14px;
    }

    .contents {
      &-checkbox {
        margin-bottom: 140px;
        width: getWidth(6);
        margin-left: getMargin(2);
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 150px;
        }
      }
    }
    .contents-list {
      margin-left: 0;
    }
  }
  @include mobile {
    .category-contents {
      padding-top: 60px;
    }
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
      width: 100%;
      margin-left: 0;
    }

    .contents {
      &-item {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
      &-checkbox {
        width: 100%;
        margin-left: 0;
        margin-bottom: 100px;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 80px;
        }
      }
    }
  }
</style>

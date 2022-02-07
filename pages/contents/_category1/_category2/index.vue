<template>
  <div>
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="contents-title">
      <DetailTitle :text="title" />
    </div>
    <div class="tit-text l-ml-3 gl-5">
      카카오브레인에서 새로운 소식을 전해드립니다.
    </div>

    <div class="contents-checkbox l-ml-3 gl-5">
      <ul>
        <li class="contents-item">
          <Checkbox
            checkboxId="checkbox_0"
            checkboxValue="a"
            checkboxText="ALL"
            :isChecked="true"
          />
        </li>
        <li class="contents-item">
          <Checkbox
            checkboxId="checkbox_1"
            checkboxValue="b"
            checkboxText="보도자료"
            :isChecked="false"
          />
        </li>
        <li class="contents-item">
          <Checkbox
            checkboxId="checkbox_2"
            checkboxValue="b"
            checkboxText="카테고리"
            :isChecked="false"
          />
        </li>
        <li class="contents-item">
          <Checkbox
            checkboxId="checkbox_3"
            checkboxValue="b"
            checkboxText="뉴스"
            :isChecked="false"
          />
        </li>
        <li class="contents-item">
          <Checkbox
            checkboxId="checkbox_4"
            checkboxValue="b"
            checkboxText="카테고리"
            :isChecked="false"
          />
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li
          v-for="(item, index) in list"
          :key="index"
          class="contents-list l-ml-2"
        >
          <MenuList :data="item" />
        </li>
      </ul>
    </div>
    <List-paging
      :limit="pageData.limit"
      :offset="pageData.offset"
      :total="total"
      @onChange="onPagingChange"
    />
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import mixinGlobal from '@/mixin/global.js'
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
    asyncData(ctx) {
      const category1List = ctx.store.state.menus.map(item => item.category)

      const sub = ctx.store.state.menus.map(item => item.sub)
      let subList = []
      for (let i = 0; i < sub.length; i++) {
        subList = subList.concat(sub[i])
      }

      const category2List = subList.map(item => item.category)

      const category1 = ctx.params.category1
      const category2 = ctx.params.category2

      if (
        !category1List.includes(category1) ||
        !category2List.includes(category2)
      ) {
        ctx.redirect('/')
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
          tag: []
        },
        total: null,
        tags: [],
        params: {
          category1: null,
          category2: null
        }
      }
    },
    created() {
      this.init()
    },
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        await this.setBreadcrumb()
        await this.fetchList()
      },
      async fetchList() {
        const res = await this.getCategoryList({
          category1: this.$route.params.category1,
          category2: this.$route.params.category2,
          pageData: this.pageData
        })
        if (res) {
          this.list = res.data.list
          this.total = res.data.count
          this.tags = res.data.tags
        }
      },
      async setBreadcrumb() {
        let subClass = ''
        const info = await this.getNickName({
          category1: this.$route.params.category1,
          category2: this.$route.params.category2
        })

        switch (this.$route.params.category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = this.$route.params.category1
            break
        }

        this.title = info.category2.name
        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )
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
  }

  .contents {
    &-checkbox {
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
      &:not(:last-child) {
        margin-bottom: 200px;
      }
    }
  }
  @include pc-4k {
    .tit-text {
      margin-bottom: 70px !important;
      font-size: 32px;
    }

    .contents {
      &-checkbox {
        margin-bottom: 290px !important;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 374px !important;
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
  }
  @include tablet {
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
    }

    .contents {
      &-checkbox {
        margin-bottom: 130px;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 150px;
        }
      }
    }
    .contents-list {
      &.l-ml-2 {
        margin-left: 0px !important;
      }
    }
    &.l-ml-3 {
      margin-left: calc(
        calc((100vw - 20px * 11) / 10) * 2 + 20px * 2
      ) !important;
    }
    &.gl-5 {
      width: calc(
        calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)
      ) !important;
    }
  }
  @include mobile {
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
    }

    .contents {
      &-item {
        &:not(:last-child) {
          margin-right: 5px;
        }
      }
      &-checkbox {
        margin-bottom: 90px;
      }
      &-list {
        &:not(:last-child) {
          margin-bottom: 80px;
        }
      }
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
    .l-ml-3 {
      margin-left: 0px !important;
    }
    .gl-5 {
      width: 100% !important;
    }
  }
</style>

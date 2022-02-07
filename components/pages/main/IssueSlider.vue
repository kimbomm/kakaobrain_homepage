<template>
  <div class="issue-slider">
    <div class="issue-slider-info l-ml-2">
      <span class="gl-2">Monthly Issue</span>
      <span class="gl-2">
        {{ $dayjs().format('MMMM') }}@{{ $dayjs().format('YYYY') }}
      </span>
      <span class="gl-2">
        <nuxt-link to="/monthly-issue">View List </nuxt-link>
      </span>
    </div>
    <div v-if="list.length > 0" ref="issue" class="issue">
      <div>
        <nuxt-link
          :to="
            activeContent.Content.contentType !== 'STORY'
              ? {
                  name: 'contents-contentId',
                  params: { contentId: activeContent.contentId }
                }
              : {
                  path: 'story-telling',
                  query: { contentId: activeContent.contentId }
                }
          "
        >
          <div class="issue-title">
            <transition name="fade">
              <span v-if="isShow" class="fade">
                {{ activeContent.Content.title }}
              </span>
            </transition>
          </div>

          <div class="issue-thumbnail">
            <transition name="fade">
              <div
                v-if="isShow"
                class="fade"
                :style="`background-image: url(https://kkbapi.freeive.dev${activeContent.Media.url});`"
              ></div>
            </transition>
          </div>
        </nuxt-link>
      </div>
      <div class="issue-info">
        <BreadCrumb :data="breadcrumb" />
        <div ref="issue-navi" class="issue-navi">
          <div class="buttons">
            <button
              class="prev"
              title="이전 페이지"
              :disabled="list.length <= 1"
              @click="onClick('prev', true)"
            >
              ←
            </button>
            <div class="number">
              <span class="cur">{{ activeIndex + 1 }}</span>
              /
              <span class="total">{{ list.length }}</span>
            </div>
            <button
              class="next"
              title="다음 페이지"
              :disabled="list.length <= 1"
              @click="onClick('next', true)"
            >
              →
            </button>
          </div>
          <div class="cur-page">{{ curPage }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import util from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    components: {
      BreadCrumb,
      Sticker
    },
    data() {
      return {
        isShow: false,
        activeIndex: 0,
        autoLoad: null,
        paging: {
          offset: 0,
          limit: 20,
          contentType: 'ALL', // ALL, ARTICLE, STORY, THESIS
          targetLang: this.$store.state.language
        },
        image: require('~/assets/images/main_img_dummy.png'),
        list: [],
        activeContent: null,
        breadcrumb: []
      }
    },
    computed: {
      ...mapState({
        issueList: state => state.issue.list
      }),
      curPage() {
        return util.changeNumFont(this.activeIndex + 1)
      }
    },
    watch: {
      list: {
        deep: true,
        handler(val) {
          this.isShow = true
          if (val.length > 1) {
            this.onSetInterval()
          }
        }
      }
    },
    async created() {
      const res = await this.getIssueList(this.paging)
      this.list = res.data.list
      if (this.list.length > 0) {
        await this.setContent()
      }
    },
    async mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      clearInterval(this.autoLoad)
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getIssueList: 'getMonthlyList',
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async setContent() {
        this.activeContent = this.list[this.activeIndex]
        await this.setBreadcrumb(
          this.activeContent.Content.category1,
          this.activeContent.Content.category2
        )
      },
      onScroll() {
        const navi = this.$refs['issue-navi']
        const issue = this.$refs['issue']
        if (
          window.scrollY >= navi.offsetTop &&
          window.scrollY <=
            issue.offsetTop + issue.offsetHeight - navi.offsetHeight
        ) {
          navi.style = `transform: translateY(${
            window.scrollY - navi.offsetTop
          }px)`
        }
      },
      onSetInterval() {
        const _this = this
        this.autoLoad = setInterval(() => {
          _this.onClick('next')
        }, 10000)
      },
      onClick(type, event) {
        const _this = this
        this.isShow = false
        if (event) {
          clearInterval(this.autoLoad)
          this.autoLoad = null
        }
        setTimeout(() => {
          _this.onChange(type)
          if (event) _this.onSetInterval()
        }, 200)
      },
      async onChange(type) {
        switch (type) {
          case 'next':
            this.activeIndex + 1 > this.list.length - 1
              ? (this.activeIndex = 0)
              : this.activeIndex++
            break
          case 'prev':
            this.activeIndex - 1 < 0
              ? (this.activeIndex = this.list.length - 1)
              : this.activeIndex--
            break
        }
        await this.setContent()
        this.isShow = true
      },
      async setBreadcrumb(category1, category2) {
        this.breadcrumb = []
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

        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )
        if (this.activeContent.Content.ContentTags.length > 0) {
          for (
            let i = 0;
            i < this.activeContent.Content.ContentTags.length;
            i++
          ) {
            this.breadcrumb.push({
              text: this.activeContent.Content.ContentTags[i].tag,
              sub: '',
              link: this.activeContent.Content.ContentTags[i].link
            })
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .fade {
    display: inline-block;
    transition: all 0.2s linear;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  .issue-slider {
    font-size: 0;
    padding: 0 20px;
    &-info {
      font-size: 16px;
      color: #000;
      margin-bottom: 94px;
      > span {
        display: inline-block;
        margin-right: 20px;
        &:last-child {
          margin-right: 0;
          text-align: right;
        }
      }
    }
  }
  .issue {
    $titleHeight: 90px;
    $titleMargin: 20px;
    width: getWidth(9);
    display: flex;
    justify-content: space-between;
    > div:first-child {
      flex: 0 0 getWidth(8);
      width: getWidth(8);
    }
    &-info {
      padding-top: $titleHeight + $titleMargin;
      margin-left: 20px;
      text-align: right;
      .btn {
        margin-right: 0;
        margin-top: 10px;
        &:first-child {
          margin-top: 0;
        }
      }
    }
    &-title {
      font-size: $titleHeight;
      height: $titleHeight;
      line-height: 1;
      font-weight: 900;
      font-style: italic;
      margin-bottom: $titleMargin;
      width: 100%;
      span {
        display: block;
        width: 100%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    &-thumbnail {
      position: relative;
      overflow: hidden;
      height: 990px;
      > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        box-shadow: 30px 30px 50px -10px #cfd0d3;
      }
    }
    &-navi {
      margin-top: 98px;
      transition: transform 0.1s linear;
      .buttons {
        font-size: 16px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .cur-page {
        font-size: 50px;
        margin-top: 20px;
        line-height: 1.3;
        font-weight: 900;
        white-space: nowrap;
      }
      .number {
        margin: 0 2px;
        .cur {
          position: relative;
          top: -2px;
          left: 3px;
        }
        .total {
          position: relative;
          top: 2px;
          left: -3px;
        }
      }
    }
  }
  @include pc-large {
    $titleHeight: 122px;
    $titleMargin: 30px;
    .issue-slider {
      &-info {
        margin-bottom: 20px;
        font-size: 22px;
      }
    }
    .issue-info {
      padding-top: $titleHeight + $titleMargin;
    }
    .issue-title {
      font-size: $titleHeight;
      height: $titleHeight;
      margin-bottom: $titleMargin;
    }
    .issue-thumbnail {
      height: 1328px;
    }
    .issue-navi {
      margin-top: 109px;
      .buttons {
        font-size: 22px;
        button {
          font-size: 22px;
        }
      }
      .cur-page {
        font-size: 66px;
      }
    }
  }

  @include pc-4k {
    $titleHeight: 180px;
    $titleMargin: 30px;
    .issue-slider {
      &-info {
        margin-bottom: 60px;
        font-size: 34px;
      }
    }
    .issue-info {
      padding-top: $titleHeight + $titleMargin;
    }
    .issue-title {
      font-size: $titleHeight;
      height: $titleHeight;
      margin-bottom: $titleMargin;
    }
    .issue-thumbnail {
      padding-top: 2010px;
    }
    .issue-navi {
      margin-top: 150px;
      .buttons {
        font-size: 34px;
        button {
          font-size: 34px;
        }
      }
      .cur-page {
        margin-top: 30px;
        font-size: 90px;
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .issue-navi .cur-page {
      font-size: 36px;
    }
  }

  @include tablet {
    $titleHeight: 70px;
    $titleMargin: 20px;
    .issue-slider {
      &-info {
        margin-bottom: 50px;
        font-size: 16px;
      }
    }
    .issue-info {
      padding-top: $titleHeight + $titleMargin;
    }
    .issue-title {
      font-size: $titleHeight;
      height: $titleHeight;
      margin-bottom: $titleMargin;
    }
    .issue-thumbnail {
      padding-top: 552px;
    }
    .issue-navi {
      margin-top: 100px;
      .buttons {
        font-size: 20px;
        justify-content: space-between;
        flex-wrap: wrap;
        button {
          font-size: 36px;
        }
        .next {
          order: 2;
        }
        .number {
          order: 3;
          flex: 0 0 100%;
          text-align: center;
          margin-top: 10px;
        }
      }
      .cur-page {
        margin-top: 50px;
        font-size: 28px;
      }
    }
  }
  @include mobile {
    .issue-slider {
      &-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        font-size: 12px;
        &.l-ml-2 {
          margin: 0 0 20px !important;
        }
        > span:nth-child(1) {
          display: block;
          flex: 0 0 100%;
          margin-bottom: 20px;
          margin-right: 0;
        }
      }
    }
    .issue {
      display: block;
      width: 100%;
      > div:first-child {
        width: 100% !important;
      }
    }
    .issue-title {
      font-size: 40px;
      height: auto;
      margin-bottom: 10px;
    }
    .issue-thumbnail {
      padding-top: 470px;
      margin-bottom: 10px;
    }
    .issue-info {
      padding-top: 0;
      margin: 0;
      text-align: left;
      &.gl-1 {
        width: 100% !important;
      }
      .sticker {
        margin: {
          right: 4px;
          bottom: 6px;
        }
      }
    }
    .issue-navi {
      display: none;
    }
  }
</style>

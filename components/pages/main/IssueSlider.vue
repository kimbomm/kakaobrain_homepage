<template>
  <div class="issue-slider">
    <div class="issue-slider-info l-ml-2">
      <span class="gl-2">Monthly Issue</span>
      <span class="gl-2">December@2021</span>
      <span class="gl-2">
        <nuxt-link to="/monthly-issue">View List </nuxt-link>
      </span>
    </div>
    <div ref="issue" class="issue">
      <div>
        <div class="issue-title">
          <transition name="fade">
            <span v-if="isShow" class="fade">{{ activeContent.title }} </span>
          </transition>
        </div>
        <div class="issue-thumbnail">
          <transition name="fade">
            <div
              v-if="isShow"
              class="fade"
              :style="`background-image: url(${image});`"
            ></div>
          </transition>
        </div>
      </div>
      <div class="issue-info">
        <BreadCrumb :data="breadcrumb" />
        <div ref="issue-navi" class="issue-navi">
          <div class="buttons">
            <button
              class="prev"
              title="이전 페이지"
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
          contentType: 'All', // ALL, ARTICLE, STORY, THESIS
          targetLAng: 'ALL', // ALL, KR, EN
          filter: '' // 검색어
        },
        image: require('~/assets/images/main_img_dummy.png'),
        list: [
          {
            title: 'Hello World.',
            thumbnail: 'main_img_dummy.png',
            link: '#',
            breadcrumb: [
              { text: 'About', sub: 'about', link: '' },
              { text: 'Introduce', sub: 'sub', link: '/about' },
              { text: 'Yeah!!!', sub: '', link: '' }
            ]
          },
          {
            title: 'Hello World2.',
            thumbnail: 'main_img_dummy.png',
            link: '#',
            breadcrumb: [
              { text: 'About2', sub: 'about', link: '' },
              { text: 'Introduce2', sub: 'sub', link: '/about' },
              { text: 'Yeah!!!', sub: '', link: '' }
            ]
          }
        ]
      }
    },
    computed: {
      ...mapState({
        issueList: state => state.issue.list
      }),
      curPage() {
        return util.changeNumFont(this.activeIndex + 1)
      },
      activeContent() {
        return this.list[this.activeIndex]
      },
      breadcrumb() {
        let data = [
          { text: 'About', sub: 'about', link: '' },
          { text: 'Introduce', sub: 'sub', link: '/about' },
          { text: 'Yeah!!!', sub: '', link: '' }
        ]
        return this.list.length > 0
          ? this.list[this.activeIndex].breadcrumb
          : data
      }
    },
    created() {
      this.getIssueList(this.paging)
    },
    mounted() {
      this.init()
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      clearInterval(this.autoLoad)
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getIssueList: 'issue/getIssueList'
      }),
      init() {
        this.isShow = true
        if (this.list.length > 1) this.onSetInterval()
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
      onChange(type) {
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
        this.isShow = true
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
      overflow: hidden;
      text-overflow: ellipsis;
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

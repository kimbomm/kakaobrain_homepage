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
      <div class="gl-8">
        <div class="issue-title">
          <transition name="fade">
            <span v-if="isShow" class="fade">Hello World.</span>
          </transition>
        </div>
        <div class="issue-thumbnail">
          <transition name="fade">
            <img
              v-if="isShow"
              class="fade"
              src="~/assets/images/img-main-dummy_0.jpeg"
            />
          </transition>
        </div>
      </div>
      <div class="issue-info gl-1">
        <div>
          <Sticker text="Docu. B" sub="docu" />
          <Sticker text="Documentary" sub="sub" />
          <Sticker text="Educations" />
        </div>
        <div ref="issue-navi" class="issue-navi">
          <div class="buttons">
            <button class="prev">←</button>
            <div class="number">
              <span class="cur">31</span>
              /
              <span class="total">54</span>
            </div>
            <button class="next">→</button>
          </div>
          <div class="cur-page">➂①</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    components: {
      Sticker
    },
    data() {
      return {
        isShow: false,
        paging: {
          offset: 0,
          limit: 20,
          contentType: 'All', // ALL, ARTICLE, STORY, THESIS
          targetLAng: 'ALL', // ALL, KR, EN
          filter: '' // 검색어
        }
      }
    },
    computed: {
      ...mapState({
        issueList: state => state.issue.list
      })
    },
    created() {
      this.getIssueList(this.paging)
    },
    mounted() {
      this.isShow = true
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getIssueList: 'issue/getIssueList'
      }),
      onScroll() {
        const navi = this.$refs['issue-navi']
        const issue = this.$refs['issue']
        if (
          window.scrollY >= navi.offsetTop &&
          window.scrollY <= issue.offsetTop + issue.offsetHeight
        ) {
          navi.style = `transform: translateY(${
            window.scrollY - navi.offsetTop
          }px)`
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .fade {
    display: inline-block;
    transition: all 0.2s ease-out;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(100%);
  }
  .issue-slider {
    font-size: 0;
    padding-left: 20px;
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
    display: flex;
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
      padding-top: calc(100% / 3 * 2);
      overflow: hidden;
      img {
        position: absolute;
        max-width: 100%;
        // max-height: 100%;
        width: 100%;
        // height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
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
        word-break: break-all;
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
      padding-left: 0;
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
      > .gl-8 {
        width: 100% !important;
      }
    }
    .issue-title {
      font-size: 40px;
      height: auto;
      margin-bottom: 10px;
    }
    .issue-thumbnail {
      padding-top: 0;
      margin-bottom: 10px;
      img {
        position: static;
        transform: translate(0, 0);
        display: block;
        width: 100%;
      }
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

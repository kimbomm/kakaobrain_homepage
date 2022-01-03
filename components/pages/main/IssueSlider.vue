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
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    components: {
      Sticker
    },
    data() {
      return {
        isShow: false
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
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
    margin-left: 20px;
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
      img {
        position: absolute;
        max-width: 100%;
        max-height: 100%;
        width: 100%;
        height: 100%;
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
</style>

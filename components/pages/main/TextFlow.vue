<template>
  <div ref="flow" class="flow">
    <div ref="backgroundFlow" class="background-flow">
      <div class="flow-txt ani__left">
        <span>Our core Value →</span>
        <MainEasterEgg :order="0" :sec="5000" />
        <span>¹Outstanding</span>
        <MainEasterEgg :order="1" :sec="6000" />
        <span>²actualized</span>
        <MainEasterEgg :order="2" :sec="7000" />
        <span>³open</span>
        <MainEasterEgg :order="3" :sec="5000" />
        <span>⁴impactful</span>
      </div>
      <div class="flow-txt ani__right">
        <span>
          clr agent learning video qa video understanding multi-modal
          understanding gm
        </span>
      </div>
      <div class="flow-txt ani__left">
        <span>
          largescale / kogpt engpt align/clip dall-e digital human pose api
          facetalk bg blur
        </span>
      </div>
    </div>
    <div class="article-list">
      <Content :order="0" :grid="4" />
      <Content :order="1" :grid="4" />
      <Content :order="2" :grid="5" />
      <Content :order="3" :grid="4" />
      <Content :order="2" :grid="6" />
      <Content :order="0" :grid="4" />
    </div>
  </div>
</template>
<script>
  import MainEasterEgg from '@/components/pages/main/MainEasterEgg'
  import Content from '@/components/pages/main/Content'
  export default {
    components: {
      Content,
      MainEasterEgg
    },
    data() {
      return {}
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        // console.log(window.scrollY, window.innerHeight)
        if (
          window.scrollY >= this.$refs['flow'].offsetTop &&
          window.scrollY <=
            this.$refs['flow'].offsetTop +
              this.$refs['flow'].offsetHeight -
              window.innerHeight
        ) {
          this.$refs['backgroundFlow'].style = `position: absolute; top: ${
            window.scrollY - this.$refs['flow'].offsetTop
          }px`
        } else if (window.scrollY < this.$refs['flow'].offsetTop) {
          this.$refs['backgroundFlow'].style = 'position: absolute'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes ani-left {
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(-100%);
    }
  }
  @keyframes ani-right {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100vw);
    }
  }
  .flow {
    padding-top: 100vw;
    position: relative;
  }
  .background-flow {
    position: absolute;
    min-height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .flow-txt {
    font-size: 180px;
    display: flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    animation-duration: 100s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    &.ani__left {
      animation-name: ani-left;
    }
    &.ani__right {
      animation-name: ani-right;
    }
    &:nth-child(1) {
      font-weight: 600;
      color: $surface-1;
      text-shadow: -1px -1px 0 $surface-4, 1px -1px 0 $surface-4,
        -1px 1px 0 $surface-4, 1px 1px 0 $surface-4;
    }
    &:nth-child(2) {
      font-weight: 400;
      color: $surface-3;
    }
    &:nth-child(3) {
      font-weight: 100;
      color: $surface-3;
    }
    .easter-egg {
      flex: 0 0 190px;
    }
    > span {
      text-transform: uppercase;
    }
  }
  .article-list {
    padding: 0 20px;
    position: relative;
    z-index: 1;
    .article {
      margin-top: 370px;
    }
  }
  @include pc-large {
    .flow-txt {
      font-size: 230px;
      .easter-egg {
        flex: 0 0 240px;
      }
    }
    .easter-egg {
      width: 240px;
      height: 240px;
    }
  }
  @include pc-4k {
    .flow-txt {
      font-size: 270px;
      .easter-egg {
        flex: 0 0 300px;
      }
    }
    .easter-egg {
      width: 300px;
      height: 300px;
    }
  }
  @include tablet {
    .flow-txt {
      font-size: 120px;
      .easter-egg {
        flex: 0 0 126px;
      }
    }
    .easter-egg {
      width: 126px;
      height: 126px;
    }
  }
  @include mobile {
    .flow-txt {
      font-size: 50px;
      .easter-egg {
        flex: 0 0 60px;
      }
    }
    .easter-egg {
      width: 60px;
      height: 60px;
    }
    .article-list {
      padding: 0;
      .article {
        margin-top: 70px;
        &[class*='l-ml'] {
          margin-left: 0 !important;
        }
      }
    }
  }
</style>

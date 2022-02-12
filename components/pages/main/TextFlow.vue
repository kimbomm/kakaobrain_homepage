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
      <template v-for="(item, index) in list">
        <Content
          :key="index"
          :data="item"
          :order="item.contentProp.position.order"
          :grid="item.contentProp.position.width"
        />
      </template>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import MainEasterEgg from '@/components/pages/main/MainEasterEgg'
  import Content from '@/components/pages/main/Content'
  export default {
    components: {
      Content,
      MainEasterEgg
    },
    data() {
      return {
        list: []
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    async mounted() {
      await this.init()
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getMainGridList: 'getMainGridList'
      }),
      async init() {
        const res = await this.getMainGridList({
          targetLang: this.language
        })
        this.list = res.data.list
      },
      onScroll() {
        // console.log(window.scrollY, window.innerHeight)
        if (
          window.scrollY >= this.$refs['flow'].offsetTop &&
          window.scrollY <=
            this.$refs['flow'].offsetTop +
              this.$refs['flow'].offsetHeight -
              window.innerHeight
        ) {
          this.$refs['backgroundFlow'].classList.add('scrolled')
          this.$refs['backgroundFlow'].style = `position: absolute; top: ${
            window.scrollY - this.$refs['flow'].offsetTop
          }px`
        } else if (window.scrollY < this.$refs['flow'].offsetTop) {
          this.$refs['backgroundFlow'].classList.remove('scrolled')
          this.$refs['backgroundFlow'].style = 'position: absolute'
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  @keyframes ani-left {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% + 100vw));
    }
  }
  @keyframes ani-right {
    from {
      transform: translateX(calc(-100% + 100vw));
    }
    to {
      transform: translateX(0);
    }
  }
  .flow {
    padding-top: 100vh;
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
    &.scrolled {
      .flow-txt {
        &:nth-child(1) {
          text-shadow: -1px -1px 0 $surface-4, 1px -1px 0 $surface-4,
            -1px 1px 0 $surface-4, 1px 1px 0 $surface-4;
        }
        &:nth-child(2),
        &:nth-child(3) {
          color: $surface-3;
        }
      }
    }
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
      text-shadow: -1px -1px 0 $kakao-black, 1px -1px 0 $kakao-black,
        -1px 1px 0 $kakao-black, 1px 1px 0 $kakao-black;
    }
    &:nth-child(2) {
      font-weight: 400;
      color: $kakao-black;
    }
    &:nth-child(3) {
      font-weight: 100;
      color: $kakao-black;
    }
    .easter-egg {
      flex: 0 0 190px;
      height: 190px;
    }
    > span {
      text-transform: uppercase;
    }
  }
  .article-list {
    padding: 0 20px 100vh;
    position: relative;
    z-index: 1;
    .article {
      margin-top: 370px;
    }
  }
  @include pc-large {
    .article-list {
      .article {
        margin-top: 460px;
      }
    }
    .flow-txt {
      font-size: 230px;
      .easter-egg {
        flex: 0 0 240px;
        height: 240px;
      }
    }
  }
  @include pc-4k {
    .article-list {
      .article {
        margin-top: 770px;
      }
    }
    .flow-txt {
      font-size: 270px;
      .easter-egg {
        flex: 0 0 300px;
        height: 300px;
      }
    }
  }
  @include tablet {
    .article-list {
      .article {
        margin-top: 164px;
      }
    }
    .flow-txt {
      font-size: 120px;
      .easter-egg {
        flex: 0 0 126px;
        height: 126px;
      }
    }
  }
  @include mobile {
    .article-list {
      .article {
        margin-top: 70px;
      }
    }
    .flow-txt {
      font-size: 50px;
      .easter-egg {
        flex: 0 0 60px;
        height: 60px;
      }
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

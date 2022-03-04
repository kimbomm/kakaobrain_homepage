<template>
  <div ref="flow" class="flow">
    <div ref="backgroundFlow" class="background-flow">
      <div>
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
      </div>
      <div>
        <div class="flow-txt ani__right">
          <span>
            clr agent learning video qa video understanding multi-modal
            understanding gm
          </span>
        </div>
        <div class="flow-txt ani__right">
          <span>
            clr agent learning video qa video understanding multi-modal
            understanding gm
          </span>
        </div>
      </div>
      <div>
        <div class="flow-txt ani__left">
          <span>
            largescale / kogpt engpt align/clip dall-e digital human pose api
            facetalk bg blur
          </span>
        </div>
        <div class="flow-txt ani__left">
          <span>
            largescale / kogpt engpt align/clip dall-e digital human pose api
            facetalk bg blur
          </span>
        </div>
      </div>
    </div>
    <div ref="list" class="article-list">
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
      await this.scrollBody.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('scroll', this.onScroll)
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
      onScroll(e) {
        const ref = this.$refs['flow']
        const refList = this.$refs['list']
        const refFlow = this.$refs['backgroundFlow']
        let top = 0
        if (
          this.scrollBody.scrollTop + window.innerHeight / 2 >=
            ref.offsetTop + refList.offsetTop + refFlow.offsetHeight / 2 &&
          refFlow.offsetTop + refFlow.offsetHeight <=
            refList.offsetTop + refList.offsetHeight
        ) {
          top =
            this.scrollBody.scrollTop +
            window.innerHeight / 2 -
            (ref.offsetTop + refList.offsetTop + refFlow.offsetHeight / 2) +
            refList.offsetTop
          if (
            top + refFlow.offsetHeight >
            refList.offsetTop + refList.offsetHeight
          ) {
            top =
              refList.offsetTop + refList.offsetHeight - refFlow.offsetHeight
            refFlow.style = `position:absolute; top: ${top}px; transform: translateY(0)`
          } else {
            refFlow.style = ''
            refFlow.classList.add('scrolled')
          }
        } else if (this.scrollBody.scrollTop < this.$refs['flow'].offsetTop) {
          refFlow.style = ''
          refFlow.classList.remove('scrolled')
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .flow {
    position: relative;
    padding: 510px 0;
  }
  .background-flow {
    position: absolute;
    left: 0;
    transition: top linear;
    > div {
      width: 100%;
      display: inline-block;
      vertical-align: middle;
      white-space: nowrap;
      &:nth-child(1) {
        .flow-txt {
          font-weight: 600;
          color: $surface-1;
          text-shadow: -1px -1px 0 $kakao-black, 1px -1px 0 $kakao-black,
            -1px 1px 0 $kakao-black, 1px 1px 0 $kakao-black;
        }
      }
      &:nth-child(2) {
        font-weight: 400;
        color: $kakao-black;
        .flow-txt {
          animation-duration: 70s;
          &:nth-child(2) {
            animation-delay: 35s;
          }
        }
      }
      &:nth-child(3) {
        font-weight: 100;
        color: $kakao-black;
      }
    }
    &.scrolled {
      position: fixed;
      top: 50%;
      transform: translateY(-50%);

      > div {
        &:nth-child(1) {
          .flow-txt {
            text-shadow: -1px -1px 0 $surface-4, 1px -1px 0 $surface-4,
              -1px 1px 0 $surface-4, 1px 1px 0 $surface-4;
          }
        }
        &:nth-child(2),
        &:nth-child(3) {
          color: $surface-3;
        }
      }
    }
  }
  .flow-txt {
    &:nth-child(2) {
      animation-delay: 25s;
      animation-duration: 50s;
      &.ani__left {
        animation-name: ani-left2;
      }
      &.ani__right {
        animation-name: ani-right2;
      }
    }
    font-size: 180px;
    width: auto;
    display: inline-flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    align-items: center;
    animation-duration: 50s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    transition: text-shadow 0.5s linear, color 0.5s linear;
    &.ani__left {
      animation-name: ani-left;
    }
    &.ani__right {
      animation-name: ani-right;
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
    padding: {
      top: 550px;
      left: 20px;
      right: 20px;
    }
    position: relative;
    z-index: 1;
    .article {
      margin-top: 370px;
    }
  }
  @include pc-large {
    .flow {
      padding: 1004px 0;
    }
    .article-list {
      padding-top: 700px;
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
    .flow {
      padding: 1545px 0;
    }
    .article-list {
      padding-top: 840px;
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
    .flow {
      padding: 407px 0;
    }
    .article-list {
      padding-top: 366px;
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
    .flow {
      padding: 245px 0;
    }
    .flow-txt {
      font-size: 50px;
      .easter-egg {
        flex: 0 0 60px;
        height: 60px;
      }
    }
    .article-list {
      padding-top: 150px;
      .article {
        margin-top: 70px;
        &[class*='l-ml'] {
          margin-left: 0 !important;
        }
      }
    }
  }
</style>

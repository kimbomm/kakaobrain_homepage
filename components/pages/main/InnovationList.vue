<template>
  <div class="innovation">
    <div ref="innovation">
      <transition name="slideInRight">
        <ul v-show="isShow" ref="list" class="innovation-list l-pl-2">
          <li v-for="(item, index) in list" :key="index" class="gl-3">
            <InnovationCard
              :isMainCard="true"
              :data="item"
              :theme="index % 2 === 0 ? 'dark' : ''"
            />
          </li>
          <li>
            <nuxt-link to="/innovation" title="논문 리스트 페이지로 이동">
              <span></span>
            </nuxt-link>
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  export default {
    components: {
      InnovationCard
    },
    data() {
      return {
        isShow: false,
        pageData: {
          offset: 0,
          limit: 8,
          contentType: 'THESIS',
          targetLang: 'KR'
        },
        list: []
      }
    },
    mounted() {
      this.init()
      window.addEventListener('scroll', this.onScroll)
      // this.$refs['list'].addEventListener('wheel', e => {
      //   this.cardWheelEvent(e)
      // })
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
      // this.$refs['list'].removeEventListener('wheel', e => {
      //   this.cardWheelEvent(e)
      // })
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      async init() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list
      },
      onScroll() {
        if (
          window.scrollY + window.innerHeight >
          this.$refs['innovation'].offsetTop
        ) {
          if (!this.isShow) {
            this.isShow = true
            this.$refs['list'].addEventListener('wheel', e => {
              this.cardWheelEvent(e)
            })
          }
        }
      },
      cardWheelEvent(e) {
        const wheelX = Math.abs(e.deltaX)
        const wheelY = Math.abs(e.deltaY)
        if (wheelY > wheelX) {
          e.preventDefault()
          this.$refs['list'].scrollLeft += e.deltaY * 0.2
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .slideInRight-enter,
  .slideInRight-leave-to {
    opacity: 0;
    transform: translateX(100vw);
  }
  .innovation {
    background-image: url('@/assets/images/innovation_main_bg.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 1500px;
    width: calc(100% - 20px);
    margin-left: $gutter;
    display: flex;
    align-items: center;
    > div {
      width: 100%;
    }
    &-list {
      overflow-x: auto;
      transition: all 0.3s linear;
      width: 100%;
      padding: 70px 0;
      display: flex;
      flex-wrap: nowrap;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      padding-right: getMargin(2);
      li {
        margin-right: 100px;
        flex: 0 0 getWidth(3);
        &:last-child {
          flex: 0;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          font-size: 56px;
          color: #fff;
          font-weight: 100;
        }
      }
    }
  }
  @include pc-large {
    .innovation {
      height: 2000px;
    }
    .innovation-list {
      li {
        margin-right: 120px;
      }
    }
  }
  @include pc-4k {
    .innovation {
      height: 3000px;
    }
    .innovation-list {
      li {
        margin-right: 200px;
      }
    }
  }
  @include tablet {
    .innovation {
      height: 1000px;
    }
    .innovation-list {
      li {
        flex: 0 0 getWidth(4);
        margin-right: 100px;
      }
    }
  }
  @include mobile {
    .innovation {
      height: 570px;
      margin-left: 0;
      width: 100%;
    }
    .innovation-list {
      padding: 45px 20px !important;
      li {
        flex: 0 0 300px;
        margin-right: 20px;
      }
    }
  }
</style>

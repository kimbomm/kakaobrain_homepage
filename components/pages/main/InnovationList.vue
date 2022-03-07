<template>
  <div class="innovation" ref="innovation">
    <div class="scroll-box" ref="scrollBox">
      <transition name="slideInRight">
        <ul v-show="isShow" ref="list" class="innovation-list">
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
  import { mapState, mapActions } from 'vuex'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  export default {
    props: {
      flag: {
        type: Boolean,
        default: false
      },
      start: {
        type: Boolean,
        default: true
      },
      end: {
        type: Boolean,
        default: false
      }
    },
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
          targetLang: 'EN'
        },
        list: []
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    watch: {
      flag(val) {
        if (val) {
          // setTimeout(() => {
          //   this.isChanged = false
          // }, 1000)
        }
      }
    },
    async mounted() {
      await this.init()
      await this.scrollBody.addEventListener('scroll', this.onScroll)
      await this.scrollBody.addEventListener('wheel', this.cardWheelEvent)
    },
    async beforeDestroy() {
      await this.scrollBody.removeEventListener('scroll', this.onScroll)
      await this.scrollBody.removeEventListener('wheel', this.cardWheelEvent)
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      async init() {
        this.pageData.language = this.language
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list
        this.isShow = true
      },
      onScroll() {
        if (
          this.scrollBody.scrollTop + window.innerHeight >
          this.$refs['innovation'].offsetTop
        ) {
          if (!this.isShow) {
            this.isShow = true
          }
        }
      },
      cardWheelEvent(e) {
        const ref = this.$refs['list']
        const refScrollBox = this.$refs['scrollBox']
        const wheelX = Math.abs(e.deltaX)
        const wheelY = Math.abs(e.deltaY)
        if (this.flag) {
          if (wheelY > wheelX) {
            refScrollBox.scrollLeft += Math.floor(e.deltaY) * 0.2
          }
          setTimeout(() => {
            const isEnd =
              ref.offsetWidth > refScrollBox.offsetWidth
                ? refScrollBox.scrollLeft >=
                  refScrollBox.scrollWidth - refScrollBox.offsetWidth - 10
                : true
            this.$emit('update:start', refScrollBox.scrollLeft === 0)
            this.$emit('update:end', isEnd)
          }, 500)
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
    .scroll-box {
      width: 100%;
      overflow-x: auto;
      white-space: nowrap;
      padding: 70px getMargin(2);
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
    }
    &-list {
      transition: all 0.3s linear;
      display: inline-flex;
      flex-wrap: nowrap;

      li {
        margin-right: 100px;
        flex: 0 0 getWidth(3);
        white-space: normal;
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
      display: block;
      padding-top: 120px;
      height: 570px;
      margin-left: 0;
      width: 100%;
      .scroll-box {
        padding: 0 20px;
      }
    }
    .innovation-list {
      li {
        flex: 0 0 300px;
        margin-right: 20px;
      }
    }
  }
</style>

<template>
  <div class="innovation">
    <div ref="innovation">
      <transition name="slideInRight">
        <ul v-show="isShow" ref="list" class="innovation-list l-pl-2">
          <li v-for="(item, index) in getRecentList" :key="index" class="gl-3">
            <InnovationCard
              :tit="item.title"
              :publish="item.listing"
              collaborator="Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack"
              :theme="index % 2 === 0 ? 'Innovation-dark' : ''"
            />
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  export default {
    components: {
      InnovationCard
    },
    data() {
      return {
        isShow: false
      }
    },
    computed: {
      ...mapState({
        innovationList: state => state.innovation.list
      }),
      ...mapGetters({
        getRecentList: 'innovation/getRecentList'
      })
    },
    mounted() {
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
      display: flex;
      flex-wrap: nowrap;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      li {
        margin-right: 100px;
        flex: 0 0 getWidth(3);
        .Innovation {
          max-width: none;
          min-width: none;
          height: 640px;
          width: 100%;
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
        .Innovation {
          height: 862px;
          /deep/ {
            .Innovation-tit {
              font-size: 56px;
              height: calc(56px * 0.9 * 8);
            }
            .item {
              margin-bottom: 30px;
              &:nth-child(2) {
                margin-bottom: 64px;
              }
              &-mark {
                font-size: 50px;
              }
              &-txt {
                font-size: 16px;
              }
            }
            .tag {
              &-txt {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
  @include pc-4k {
    .innovation {
      height: 3000px;
    }
    .innovation-list {
      li {
        .Innovation {
          height: 1300px;
          /deep/ {
            .Innovation-tit {
              font-size: 84px;
              height: calc(84px * 0.9 * 8);
            }
            .item {
              margin-bottom: 70px;
              &:nth-child(2) {
                margin-bottom: 129px;
              }
              &-mark {
                font-size: 100px;
              }
              &-txt {
                font-size: 34px;
              }
            }
            .tag {
              &-txt {
                font-size: 24px;
              }
            }
          }
        }
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
        .Innovation {
          height: 550px;
          /deep/ {
            .Innovation-tit {
              font-size: 30px;
              height: calc(30px * 0.9 * 8);
            }
            .item {
              margin-bottom: 20px;
              &:nth-child(2) {
                margin-bottom: 66px;
              }
              &-mark {
                font-size: 40px;
              }
              &-txt {
                font-size: 14px;
              }
            }
            .tag {
              &-txt {
                font-size: 12px;
              }
            }
          }
        }
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
      padding: 0 20px !important;
      li {
        flex: 0 0 300px;
        margin-right: 20px;
        .Innovation {
          height: 470px;
          /deep/ {
            .Innovation-tit {
              font-size: 26px;
              height: calc(26px * 0.9 * 8);
              margin-bottom: 20px;
            }
            .item {
              margin-bottom: 20px;
              &:nth-child(2) {
                margin-bottom: 24px;
              }
              &-mark {
                font-size: 40px;
              }
              &-txt {
                font-size: 14px;
              }
            }
            .tag {
              &-txt {
                font-size: 12px;
              }
            }
          }
        }
      }
    }
  }
</style>

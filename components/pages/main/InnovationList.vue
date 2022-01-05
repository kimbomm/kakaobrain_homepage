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
      white-space: nowrap;
      transition: all 0.3s linear;
      width: 100%;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      li {
        display: inline-block;
        white-space: initial;
        margin-right: 100px;
      }
    }
  }
</style>

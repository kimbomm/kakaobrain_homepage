<template>
  <div class="layout-list monthly-detail">
    <ListTitle text="Monthly Issue" type="gl-6" ml="l-ml-2" />

    <div class="text-box">
      <div class="contents-list-text">
        <DetailText :data="description[language]" />
      </div>
    </div>

    <div>
      <ul>
        <li v-for="(content, index) in list" :key="index" class="detail-list">
          <MonthlyList :data="content" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import ListTitle from '@/components/detail/ListTitle'
  import DetailText from '@/components/detail/DetailText'
  import MonthlyList from '@/components/elements/MonthlyList'
  export default {
    name: 'index',
    components: {
      ListTitle,
      DetailText,
      MonthlyList
    },
    data() {
      return {
        description: {
          KR: {
            itemType: 'pagaraph',
            text: `왜 사과는 떨어지는 것일까? 생각하지 못한 물음이 세상을 바꿨습니다.
            매월 카카오브레인은 생각하지 못한 물음을 던지고, 물음에 대한 답을 찾아가는 여정을 함께 나눕니다.
            이러한 생각지 못한 물음의 여정들이 AI 기술을 좀더 강하게, 우리의 삶을 좀더 풍요롭게 할 수 있다고 믿습니다. 그럼, 함께 가볼까요?
            `
          },
          EN: {
            itemType: 'pagaraph',
            text: `Why do apples fall? An Unexpected Question changed the world.
            Every month, Kakao Brain asks Unexpected Questions and shares the journey to find answers.
            We believe that the journeys toward Unexpected Questions can make AI technology stronger and enrich our lives. So, would you like to jump in together?
            `
          }
        },
        list: [],
        pageData: {
          offset: 0,
          limit: 10,
          contentType: 'ALL',
          targetLang: this.$store.state.language
        }
      }
    },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    mounted() {
      this.init()
    },
    methods: {
      ...mapActions({
        getMonthlyList: 'getMonthlyList'
      }),
      async init() {
        await this.fetchList()
      },
      async fetchList() {
        this.pageData.targetLang = this.$store.state.language
        const res = await this.getMonthlyList(this.pageData)
        this.list = this.list.concat(res.data.list)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .monthly-detail {
    .text-box {
      margin-bottom: 200px;
      .contents-list-text {
        margin-bottom: 30px;
      }
    }
    .detail-list {
      &:not(:last-child) {
        margin-bottom: 100px;
      }
    }
  }

  @include pc-large {
    .monthly-detail {
      .text-box {
        margin-bottom: 300px;
      }
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 130px;
        }
      }
    }
  }

  @include pc-4k {
    .monthly-detail {
      .text-box {
        margin-bottom: 460px;
      }
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 196px;
        }
      }
    }
  }
  @include tablet {
    .monthly-detail {
      .text-box {
        margin-bottom: 100px;
      }
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
    }
  }

  @include mobile {
    .monthly-detail {
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
    }
  }
</style>

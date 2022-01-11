<template>
  <div class="monthly-detail">
    <ListTitle text="Monthly Issue" type="gl-6" ml="l-ml-2" />

    <div class="text-box">
      <div class="contents-list-text">
        <DetailText
          text="카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의 한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대, KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동 연구를 시작했습니다."
        />
      </div>
      <div class="contents-list-text">
        <DetailText
          text="카카오브레인과 각 학교 AI 연구실은 이번 협력을 통해 AI 연구의 스테레오타입을 넘어선 새로운 연구 방법론을 정립하려 노력한다고 합니다. 우리의 연구가 어떻게 세상을 바꿔나갈지 가슴이 웅장해지는데요. 카카오브레인의 공동연구 노하우를 공개합니다"
        />
      </div>
    </div>

    <div>
      <ul>
        <li class="detail-list">
          <MonthlyList />
        </li>
        <li class="detail-list">
          <MonthlyList />
        </li>
        <li class="detail-list">
          <MonthlyList />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import ListTitle from '@/components/detail/ListTitle'
  import DetailText from '@/components/detail/DetailText'
  import MonthlyList from '@/components/elements/MonthlyList'
  export default {
    name: 'index',
    components: {
      ListTitle,
      DetailText,
      MonthlyList
    }
  }
</script>
<style lang="scss" scoped>
  .monthly-detail {
    margin-top: 320px;
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

  @include pc-4k {
    .monthly-detail {
      margin-top: 600px !important;
      .text-box {
        margin-bottom: 460px !important;
      }
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 196px !important;
        }
      }
    }
  }
  @include pc-large {
    .monthly-detail {
      margin-top: 400px;
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
  @include tablet {
    .monthly-detail {
      margin-top: 200px;
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
      margin-top: 157px;
      .detail-list {
        &:not(:last-child) {
          margin-bottom: 50px;
        }
      }
    }
  }
</style>

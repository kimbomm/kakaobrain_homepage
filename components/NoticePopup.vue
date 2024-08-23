<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        isMobile: false
      }
    },
    computed: {
      ...mapState({
        device: state => state.device,
        language: state => state.language,
        popup: state => state.translation.POPUP
      })
    },
    mounted() {
      this.onResizeEvent()
      window.addEventListener('resize', this.onResizeEvent)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.onResizeEvent)
    },
    methods: {
      onResizeEvent() {
        this.isMobile =
          (this.device.touch && this.device.mobile) || window.innerWidth <= 768
      }
    }
  }
</script>
<template>
  <div class="popup">
    <div class="dimmed"></div>
    <div class="popup__content">
      <div class="popup__content__header">
        <button @click="$emit('close')">close popup</button>
      </div>
      <div class="popup__content__body">
        <h2 class="title">분 할 및 합 병 공 고</h2>
        <h3 class="sub-title">채권자 이의제출 및 주권 제출 공고</h3>
        <p class="description">
          주식회사 카카오브레인(이하 <span class="underline">“당사”</span>)은 2024년 8월 23일 주주총회를
          개최하여 (i) 헬스케어사업부문을 물적분할(이하 <span class="underline">“본건 분할”</span>)하여
          신설법인을 설립할 것과, (ii) 주식회사 디케이테크인(이하
          <span class="underline">“디케이테크인"</span>)을 존속회사로, 당사(본건 분할이 취소, 철회되지 않는 한,
          본건 분할 이후 헬스케어사업부문을 제외한 부분인 분할 존속회사인 당사를
          의미, 이하 동일)를 소멸회사로 하여 당사가 디케이테크인에 흡수합병(이하
          <span class="underline">“본건 합병”</span>)되고, 합병결과 디케이테크인은 당사의 모든 자산, 부채, 권리
          및 의무(단, 본건 분할이 취소, 철회되지 않는 한, 본건 분할에 의하여
          신설법인에 이전되는 것은 제외)를 승계하기로 결의(같은 날
          디케이테크인도 주주총회에서 결의)하였습니다.<br />
          또한, 본건 분할은 상법 제530조의9 제2항에 의거 본건 분할 이후 (i)
          신설법인은 당사의 채무 중에서 본건 분할에 대한 분할계획서에서
          승계하기로 정한 채무만을 부담하고, (ii) 당사(본건 합병 이후
          디케이테크인)는 신설법인에 승계하지 아니한 채무만을 부담하여, (ii)
          당사(본건 합병 이후 디케이테크인)와 신설법인은 서로가 부담하는 채무에
          대하여 연대하여 변제할 책임을 부담하지 아니하는 방식으로
          진행됩니다.<br /><br />
          이에, 다음과 같은 사항을 공고하는 바입니다.
        </p>
        <p class="description">
          <span class="divider">- 다 음 -</span>
          <ul>
            <li order="1.">
              <strong>채권자 이의제출 공고: </strong>당사의 채권자들께서는 본건 분할 및/또는 합병에 대하여 이의가
              있으시면 다음과 같이 서면으로 이의를 제출해 주시기 바랍니다.
              <ul>
                <li order="1)">이의제출 기간: 2024년 8월 23일부터 2024년 9월 30일까지</li>
                <li order="2)">이의제출 장소: 경기도 성남시 분당구 판교역로 152, 12층</li>
                <li order="3)">전략사업팀 (전화: 031-606-7780)</li>
              </ul>
            </li>
            <li order="2.">
              <strong>주주 구주권 제출 공고: </strong>당사의 주권을 가지고 계신 주주 또는 질권자께서는 다음과 같이 당사에
              주권을 제출하여 주시기 바랍니다.
              <ul>
                <li order="1)">주권제출 기간: 2024년 8월 23일부터 2024년 9월 30일까지</li>
                <li order="2)">주권제출 장소: 경기도 성남시 분당구 판교역로 152, 12층</li>
                <li order="3)">전략사업팀 (전화: 031-606-7780)</li>
              </ul>
              <p>*참고사항: 구주권 제출시 반드시 신분증을 지참하시기 바랍니다.</p>
            </li>
          </ul>
        </p>
        <div class="final">
          <span class="date">2024년 8월 23일</span>
          <span>주식회사 카카오브레인</span>
          <span>경기도 성남시 분당구 판교역로 152, 12층</span>
          <span>대표이사 김병학</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    .dimmed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
    }
    &__content {
      position: relative;
      z-index: 1;
      width: 700px;
      height: 700px;
      max-height: 85vh;
      border-radius: 20px;
      background-color: white;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      color: #333;
      &__header {
        background-color: #333333;
        height: 56px;
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-shrink: 0;
        button {
          width: 20px;
          height: 20px;
          background-image: url('~/assets/images/ico-close.svg');
          background-size: cover;
          font-size: 0;
          text-indent: -9999px;
        }
      }
      &__body {
        flex-grow: 1;
        height: 100%;
        overflow-y: auto;
        padding: 30px 30px 100px;
      }
    }
  }
  .underline {
    text-decoration: underline;
  }
  .title {
    font-size: 24px;
    line-height: 1;
    text-align: center;
  }
  .sub-title {
    font-size: 18px;
    line-height: 1;
    margin-top: 10px;
    margin-bottom: 50px;
    text-align: center;
  }
  .description,
  ul, li,
  .final {
    font-size: 14px;
    line-height: 1.5;
  }
  .final {
    margin-top: 20px;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    .date {
      margin-bottom: 20px;
    }
  }
  .divider {
    display: block;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center
  }
  ul {
    li {
      position: relative;
      padding-left: 15px;
      &::before {
        content: attr(order);
        position: absolute;
        top: 0;
        left: 0;
        font-weight: bold;
      }
    }
    ul {
      margin-top: 10px;
      margin-bottom: 20px;
      li {
        &::before {
          font-weight: normal;
        }
      }
    }
  }
  .table {
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #e8ecf1;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
    &__content {
      display: flex;
      border-bottom: 1px solid #e8ecf1;
      &:last-child {
        border-bottom: 0;
      }
      > div {
        flex: 0 0 50%;
        &:nth-child(1) {
          border-right: 1px solid #e8ecf1;
        }
      }
      &__th {
        background-color: #f5f7fa;
        height: 30px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      &__td {
        padding: 12px 10px;
      }
    }
  }

  @include pc-4k {
    .popup {
      &__content {
        width: 1000px;
        height: 800px;
      }
    }
    .title {
      font-size: 34px;
      line-height: 1;
    }
    .sub-title {
      font-size: 24px;
      line-height: 1;
    }
    .description,
    .final {
      font-size: 20px;
    }
    .table {
      font-size: 16px;
    }
  }

  @include tablet {
    .popup {
      &__content {
        height: 400px;
      }
    }
  }

  @include mobile {
    .popup {
      &__content {
        width: calc(100% - 40px);
        height: 100%;
        &__body {
          padding: 20px 20px 84px;
        }
      }
    }
    .title {
      font-size: 24px;
      line-height: 1;
    }
    .sub-title {
      font-size: 18px;
      line-height: 1;
    }
    .description,
    .final {
      font-size: 14px;
    }
    .table {
      font-size: 12px;
      & + .table {
        margin-top: 0;
      }
      &__content {
        > div {
          flex: 1;
        }
      }
    }
  }
</style>
<style>
  .highlight {
    color: #001eff !important;
  }
</style>

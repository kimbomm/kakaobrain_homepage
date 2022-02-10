<template>
  <div class="about-full-con-c">
    <div class="title">{{ data.title }}</div>
    <div class="txt-box gl-5 l-ml-3">
      <div v-for="(item, index) in data.desp" :key="index" class="txt">
        <p v-html="item"></p>
      </div>
    </div>
    <div class="history l-ml-2">
      <div class="history-logo gl-6">
        <ul class="brand-history">
          <li class="brain">
            <div class="img"></div>
            <div class="txt">Brain</div>
          </li>
          <li class="plus">
            <div class="img"></div>
          </li>
          <li class="meta">
            <div class="img"></div>
            <div class="txt">Meta Data Human Data</div>
          </li>
          <li class="result">
            <div class="img"></div>
          </li>
          <li class="research">
            <div class="img"></div>
            <div class="txt">Statistic Analysis Research</div>
          </li>
          <li class="next">
            <div class="img"></div>
            x
          </li>
          <li class="organized">
            <div class="img"></div>
            <div class="txt">Organized</div>
          </li>
        </ul>
      </div>
      <div class="logo-text gl-7 l-ml-1">
        <p>{{ data.text }}</p>
      </div>

      <div class="mark-con">
        <div class="Symbol-mark">
          <div class="tit">Symbol mark</div>
          <div class="Symbol-img">
            <img src="@/assets/images/symbol-logo.png" />
          </div>
        </div>
        <div class="Symbol-mark">
          <div class="tit">with tagline</div>
          <div class="Symbol-img">
            <img src="@/assets/images/symbol-logo_2.png" />
          </div>
        </div>
      </div>
      <div class="download l-ml-1">
        <div class="txt">
          <p>{{ data.download }}</p>
        </div>
        <button type="button" class="btn">
          <span>download ↓</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .about-full-con-c {
    padding: 400px 0;
    background-color: $gray-9;
    color: $gray-0;
    .title {
      margin-bottom: 100px;
      padding: 0 20px;
      text-align: center;
      font-size: 130px;
      font-weight: 900;
    }
    .txt-box {
      margin-bottom: 400px;
      padding: 0 20px;
      .txt {
        line-height: 130%;
        font-size: 30px;
        &:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
    .history-logo {
      .brand-history {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .img {
        margin-bottom: 40px;
      }
      .txt {
        font-size: 14px;
        line-height: 130%;
        color: $gray-5;
      }
      .brain {
        .img {
          width: 73px;
          height: 87px;
          background: url('@/assets/images/history-brain.png') no-repeat;
          background-size: 100%;
        }
      }
      .meta {
        .img {
          width: 161px;
          height: 87px;
          background: url('@/assets/images/history-meta.png') no-repeat;
          background-size: 100%;
        }
      }
      .research {
        .img {
          width: 73px;
          height: 87px;
          background: url('@/assets/images/history-research.png') no-repeat;
          background-size: 100%;
        }
      }
      .organized {
        .img {
          width: 73px;
          height: 87px;
          background: url('@/assets/images/history-organized.png') no-repeat;
          background-size: 100%;
        }
      }
      .plus {
        .img {
          width: 26px;
          height: 26px;
          background: url('@/assets/images/plus.png') no-repeat;
          background-size: 100%;
        }
      }
      .result {
        .img {
          width: 26px;
          height: 26px;
          background: url('@/assets/images/result.png') no-repeat;
          background-size: 100%;
        }
      }
      .next {
        .img {
          width: 26px;
          height: 26px;
          background: url('@/assets/images/next.png') no-repeat;
          background-size: 100%;
        }
      }
    }
    .history {
      padding: 0 20px;
      &-logo {
        margin-bottom: 300px;
        .history-img {
          // height:
          img {
            width: 100%;
          }
        }
      }
      .item-txt {
        display: flex;
        margin-top: 40px;
        .txt {
          display: inline-block;
          vertical-align: top;
          font-size: 14px;
          color: $gray-5;
          line-height: 130%;
          &:nth-child(1) {
            margin-right: 285px;
          }
          &:nth-child(2) {
            margin-right: 24px;
          }
          &:nth-child(3) {
            margin-right: 232px;
          }
          &:nth-child(4) {
            width: 62px;
            margin-right: 257px;
          }
        }
      }
      .logo-text {
        margin-bottom: 300px;
        font-size: 40px;
        line-height: 130%;
      }
      .mark-con {
        margin-bottom: 200px;
        .Symbol-mark {
          margin-bottom: 200px;
          .tit {
            margin-bottom: 10px;
            line-height: 130%;
            font-size: 14px;
            color: $surface-8;
          }
          .Symbol-img {
            width: 100%;
            img {
              width: 100%;
            }
          }
        }
      }

      .download {
        .txt {
          margin-bottom: 60px;
          line-height: 130%;
          font-size: 20px;
        }
        .btn {
          width: 170px;
          height: 50px;
          padding: 16px 44px;
          border: 1px solid $gray-0;
          border-radius: 0px;
          box-sizing: border-box;
          line-height: 130%;
          font-size: 14px;
          color: $gray-0;
          font-style: normal;
        }
      }
    }
  }

  @include pc-4k {
    .about-full-con-c {
      padding: 800px 0 !important;
      .title {
        margin-bottom: 180px !important;
        font-size: 260px !important;
      }
      .txt-box {
        margin-bottom: 976px !important;
        .txt {
          font-size: 60px !important;
          &:not(:last-child) {
            margin-bottom: 60px !important;
          }
        }
      }

      .history-logo {
        .img {
          margin-bottom: 120px !important;
        }
        .txt {
          font-size: 30px !important;
        }
        .brain {
          .img {
            width: 148px !important;
            height: 176px !important;
          }
        }
        .meta {
          .img {
            width: 327px !important;
            height: 176px !important;
          }
        }
        .research {
          .img {
            width: 148px !important;
            height: 176px !important;
          }
        }
        .organized {
          .img {
            width: 148px !important;
            height: 176px !important;
          }
        }
        .plus {
          .img {
            width: 52px !important;
            height: 52px !important;
          }
        }
        .result {
          .img {
            width: 52px !important;
            height: 52px !important;
          }
        }
        .next {
          .img {
            width: 52px !important;
            height: 52px !important;
          }
        }
      }

      .history {
        .logo-text {
          margin-bottom: 649px !important;
          font-size: 78px !important;
        }
        .mark-con {
          margin-bottom: 375px;
          .Symbol-mark {
            margin-bottom: 390px !important;
            .Symbol-img {
              width: 2269px !important;
              height: 577px !important;
            }
            .tit {
              margin-bottom: 30px !important;
              font-size: 30px !important;
            }
          }
        }

        .download {
          .txt {
            margin-bottom: 100px !important;
            font-size: 40px !important;
          }
          .btn {
            width: 270px !important;
            height: 80px !important;
            // padding:16px 44px;
            padding: 27px 69px 23px !important;
            font-size: 20px !important;
          }
        }
      }
    }
  }

  @include pc-large {
    .about-full-con-c {
      padding: 530px 0;
      .title {
        margin-bottom: 130px;
        font-size: 170px;
      }
      .txt-box {
        margin-bottom: 530px;
        .txt {
          font-size: 40px;
          &:not(:last-child) {
            margin-bottom: 40px;
          }
        }
      }

      .history-logo {
        .img {
          margin-bottom: 70px;
        }
        .txt {
          font-size: 20px;
        }
        .brain {
          .img {
            width: 98px;
            height: 117px;
          }
        }
        .meta {
          .img {
            width: 216px;
            height: 117px;
          }
        }
        .research {
          .img {
            width: 98px;
            height: 117px;
          }
        }
        .organized {
          .img {
            width: 98px;
            height: 117px;
          }
        }
        .plus {
          .img {
            width: 34px;
            height: 34px;
          }
        }
        .result {
          .img {
            width: 34px;
            height: 34px;
          }
        }
        .next {
          .img {
            width: 34px;
            height: 34px;
          }
        }
      }

      .history {
        .logo-text {
          margin-bottom: 400px;
          font-size: 52px;
        }
        .mark-con {
          margin-bottom: 260px;
          .Symbol-mark {
            margin-bottom: 260px;
            .Symbol-img {
              width: 1502px;
              height: 382px;
            }
            .tit {
              margin-bottom: 20px;
              font-size: 20px;
            }
          }
        }

        .download {
          .txt {
            margin-bottom: 80px;
            font-size: 30px;
          }
          .btn {
            width: 170px;
            height: 50px;
            // padding:16px 44px;
            padding: 16px 44px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @include tablet {
    .about-full-con-c {
      padding: 200px 0;
      .title {
        margin-bottom: 50px;
        font-size: 70px;
      }
      .txt-box {
        margin-bottom: 200px;
        .txt {
          font-size: 16px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }

      .history-logo {
        &.gl-6 {
          width: getWidth(7) !important;
        }
        .img {
          margin-bottom: 40px;
        }
        .txt {
          font-size: 14px;
        }
        .brain {
          .img {
            width: 38px;
            height: 45px;
          }
        }
        .meta {
          .img {
            width: 83px;
            height: 45px;
          }
          .txt {
            width: 82px;
          }
        }
        .research {
          .img {
            width: 38px;
            height: 45px;
          }
          .txt {
            width: 62px;
          }
        }
        .organized {
          .img {
            width: 38px;
            height: 45px;
          }
        }
        .plus {
          .img {
            width: 13px;
            height: 13px;
          }
        }
        .result {
          .img {
            width: 13px;
            height: 13px;
          }
        }
        .next {
          .img {
            width: 13px;
            height: 13px;
          }
        }
      }

      .history {
        .logo-text {
          margin-bottom: 200px;
          font-size: 24px;
        }
        .mark-con {
          margin-bottom: 200px;
          .Symbol-mark {
            margin-bottom: 150px;
            .Symbol-img {
              width: 581px;
              height: 147px;
            }
            .tit {
              margin-bottom: 10px;
              font-size: 14px;
            }
          }
        }
        .download {
          .txt {
            margin-bottom: 50px;
            font-size: 16px;
          }
          .btn {
            width: 170px;
            height: 50px;
            padding: 16px 44px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @include mobile {
    .about-full-con-c {
      padding: 100px 0;
      .title {
        margin-bottom: 30px;
        font-size: 28px;
      }
      .txt-box {
        margin-bottom: 100px;
        &.l-ml-3 {
          margin-left: getMargin(1) !important;
        }
        &.gl-5 {
          width: getWidth(9) !important;
        }
        .txt {
          font-size: 16px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }

      .history-logo {
        .brand-history {
          display: block;
          text-align: center;
        }
        &.gl-6 {
          width: 100% !important;
        }
        .img {
          margin-bottom: 14px;
        }
        .txt {
          font-size: 10px;
        }
        .brain {
          display: inline-block;
          vertical-align: middle;
          margin-right: 24px;
          .img {
            width: 47px;
            height: 56px;
          }
        }
        .meta {
          display: inline-block;
          vertical-align: middle;
          margin-right: 26px;
          .img {
            width: 99px;
            height: 56px;
          }
        }
        .research {
          display: inline-block;
          vertical-align: middle;
          .img {
            width: 47px;
            height: 56px;
          }
          .txt {
            width: 44px;
          }
        }
        .organized {
          display: flex;
          flex-direction: column;
          align-items: center;
          .img {
            width: 47px;
            height: 56px;
          }
        }
        .plus {
          display: inline-block;
          vertical-align: middle;
          margin-right: 29px;
          .img {
            width: 13px;
            height: 13px;
          }
        }
        .result {
          display: inline-block;
          vertical-align: middle;
          margin-right: 24px;
          .img {
            width: 13px;
            height: 13px;
          }
        }
        .next {
          display: flex;
          justify-content: center;
          margin-top: 19px;
          margin-bottom: 26px;
          .img {
            width: 13px;
            height: 13px;
            transform: rotate(90deg);
          }
        }
      }

      .history {
        &.l-ml-2 {
          margin-left: 0px !important;
        }
        &-logo {
          margin-bottom: 100px;
        }
        .logo-text {
          margin-bottom: 100px;
          font-size: 18px;
          &.gl-7 {
            width: getWidth(9) !important;
          }
        }
        .mark-con {
          margin-bottom: 100px;
          .Symbol-mark {
            margin-bottom: 100px;
            .Symbol-img {
              width: 100%;
              // height:147px;
            }
            .tit {
              margin-bottom: 10px;
              font-size: 14px;
            }
          }
        }
        .download {
          .txt {
            margin-bottom: 30px;
            font-size: 16px;
          }
          .btn {
            width: 188px;
            height: 50px;
            padding: 16px 48px;
            font-size: 14px;
          }
        }
      }
    }
  }
</style>

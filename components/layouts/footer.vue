<template>
  <footer class="footer">
    <div class="l-side gl-6 l-ml-2">
      <div class="b-symbol"></div>
      <div class="b-w-symbol"></div>
      <div class="copywriter">
        Copyright ⓒ kakaobrain Corp. All rights reserved.
      </div>
      <div class="footer-con">
        <div class="menu">
          <ul>
            <li class="menu-list">문의</li>
            <li class="menu-list">오시는 길</li>
            <li class="menu-list">사이버윤리실</li>
            <li class="menu-list">이용약관</li>
            <li class="menu-list">개인정보보호지침</li>
            <li class="menu-list">Pathfinder</li>
            <li class="menu-list">Open-MiniCon</li>
            <li class="menu-list">Recruit</li>
          </ul>
        </div>
        <div class="footer-shape"></div>
      </div>
      <SnsLink />
      <div class="footer-bottom">
        <div class="info-txt">
          Copyright ⓒ kakaobrain Corp. All rights reserved.
        </div>
      </div>
    </div>
    <div>
      <div class="l-info"><span class="info-txt">@2021</span></div>
    </div>
  </footer>
</template>
<script>
  import SnsLink from '@/components/elements/SnsLink'
  export default {
    components: {
      SnsLink
    }
  }
</script>
<style lang="scss" scoped>
  .white {
    .footer {
      .b-symbol {
        display: none;
      }
      .b-w-symbol {
        display: block;
      }
      .l-side {
        color: $gray-0;
      }
      .l-info {
        color: $gray-0;
      }
    }
  }
  .footer {
    padding-top: 1000px;
    &-con {
      position: relative;
      display: flex;
      justify-content: space-between;
      margin-bottom: 116px;
    }
    &-shape {
      position: absolute;
      top: 240px;
      right: 574px;
      width: 700px;
      height: 300px;
      background: url('@/assets/images/shape_1.png') no-repeat;
      background-size: 100%;
    }
    &-bottom {
      position: fixed;
      bottom: 20px;
      z-index: 10;
    }
    .copywriter {
      display: none;
      margin-bottom: 50px;
      font-size: 12px;
      line-height: 130%;
      color: $surface-6;
    }
    .menu {
      display: inline-block;
      &-list {
        line-height: 130%;
        font-size: 34px;
        font-weight: 700;
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: 34px;
        }
      }
    }
    .info-txt {
      display: inline-block;
      font-size: 34px;
    }
    .b-symbol {
      display: block;
    }
    .b-w-symbol {
      display: none;
    }
  }
  @media screen and (max-width: 3840px) {
    .footer {
      &-con {
        margin-bottom: 256px;
      }
      &-shape {
        right: 424px;
      }
    }
  }
  @media screen and (max-width: 2560px) {
    .footer {
      padding-top: 700px;
      &-con {
        margin-bottom: 179px;
      }
      &-shape {
        top: 210px;
        right: 469px;
        width: 466px;
        height: 200px;
      }
      .menu {
        &-list {
          font-size: 24px;
          &:not(:last-child) {
            margin-bottom: 24px;
          }
        }
      }
      .info-txt {
        font-size: 22px;
      }
    }
  }
  @media screen and (max-width: 1920px) {
    .footer {
      padding-top: 304px;
      &-con {
        margin-bottom: 129px;
      }
      &-shape {
        top: 172px;
        right: 196px;
        width: 350px;
        height: 150px;
      }
      .menu {
        &-list {
          font-size: 20px;
          &:not(:last-child) {
            margin-bottom: 20px;
          }
        }
      }
      .info-txt {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .footer {
      padding-top: 400px;
      &-con {
        margin-bottom: 129px;
      }
      &-shape {
        top: 338px;
        right: 100px;
        width: 186px;
        height: 86px;
      }
      .info-txt {
        font-size: 16px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .footer {
      padding-top: 200px;
      &-con {
        display: none;
      }
      .info-txt {
        display: none;
      }
      .copywriter {
        display: block;
      }
    }
  }
</style>

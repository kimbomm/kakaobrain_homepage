<template>
  <footer :class="classBind">
    <div>
      <div class="b-symbol"></div>
      <!-- <div class="b-w-symbol"></div> -->
      <div class="footer-con">
        <div class="menu">
          <ul>
            <li
              v-for="(menu, index) in footerMenu"
              :key="`menu-${index}`"
              class="menu-list"
            >
              <nuxt-link v-if="!menu.target" :to="menu.link">
                {{ menu.name }}
              </nuxt-link>
              <a v-else :href="menu.link" :target="menu.target">
                {{ menu.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span class="info-txt">@{{ $dayjs().format('YYYY') }}</span>
        <div class="copyright">
          Copyright ⓒ kakaobrain Corp. <span>All rights reserved.</span>
        </div>
        <SnsLink />
      </div>
      <div class="footer-shape"></div>
    </div>
  </footer>
</template>
<script>
  import { mapState } from 'vuex'
  import SnsLink from '@/components/elements/SnsLink'
  export default {
    components: {
      SnsLink
    },
    computed: {
      ...mapState({
        isDark: state => state.isDark,
        footerMenu: state => state.footerMenu
      }),
      classBind() {
        let classList = ['footer']
        if (!this.isDark) {
          classList.push('footer__light')
        }
        return classList.join(' ')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .footer {
    padding: 500px 20px 20px;
    > div {
      position: relative;
    }
    &-con {
      position: relative;
      margin-bottom: 116px;
      margin-left: getMargin(2);
    }
    &-bottom {
      z-index: 10;
      display: flex;
      align-items: flex-end;
      font-size: 16px;
      line-height: 1.3;
      color: $gray-9;
      .info-txt {
        width: getWidth(2);
        margin-right: $gutter;
      }
      .copyright {
        width: getWidth(5);
        span {
          display: inline-block;
        }
      }
    }
    &-shape {
      position: absolute;
      background: url('@/assets/images/shape_1.png') no-repeat;
      background-size: 100% 100%;
      bottom: 150px;
      left: getMargin(5);
      width: 350px;
      height: 150px;
    }
  }
  .b-symbol {
    width: 120px;
    height: 198px;
    margin-bottom: 230px;
    margin-left: getMargin(2);
    background-image: url('~/assets/images/b-symbol.svg');
    background-size: cover;
    background-position: center center;
  }
  .menu-list {
    font-size: 20px;
    line-height: 1.3;
    font-weight: bold;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .footer__light {
    background-color: $gray-9;
    .footer-bottom {
      color: $gray-0;
    }
    .b-symbol {
      background-image: url('~/assets/images/b-w-symbol.png');
    }
    .menu-list {
      color: $gray-0;
    }
  }

  @include pc-large {
    .footer {
      padding-top: 700px;
      &-shape {
        width: 466px;
        height: 200px;
        bottom: 200px;
      }
      &-con {
        margin-bottom: 150px;
      }
      &-bottom {
        font-size: 22px;
      }
    }
    .menu-list {
      font-size: 24px;
    }
    .b-symbol {
      width: 160px;
      height: 264px;
    }
  } 
  @include pc-4k {
    .footer {
      padding-top: 1000px;
      &-shape {
        width: 700px;
        height: 300px;
        bottom: 300px;
      }
      &-con {
        margin-bottom: 218px;
      }
      &-bottom {
        font-size: 34px;
      }
    }
    .menu-list {
      font-size: 34px;
      margin-bottom: 34px;
    }
    .b-symbol {
      width: 240px;
      height: 396px;
      margin-bottom: 156px;
    }
  }
  @include tablet {
    .footer {
      padding-top: 400px;
      &-shape {
        width: getWidth(2);
        height: 80px;
        bottom: 80px;
      }
      &-con {
        margin-bottom: 116px;
      }
      &-bottom {
        font-size: 16px;
      }
    }
    .menu-list {
      font-size: 20px;
      margin-bottom: 20px;
    }
    .b-symbol {
      width: 120px;
      height: 198px;
    }
  }
  @include mobile {
    .footer {
      padding-top: 200px;
      padding-bottom: 50px;
      &-shape {
        display: none;
      }
      &-con {
        display: none;
      }
      &-bottom {
        font-size: 12px;
        color: $surface-6;
        .info-txt {
          display: none;
        }
        .copyright {
          width: getWidth(6);
        }
      }
    }
    .b-symbol {
      width: 50px;
      height: 82px;
      margin-bottom: 30px;
      margin-left: 0;
    }
  }
</style>

<template>
  <div>
    <div class="footer-sns">
      <ul>
        <li class="item">
          <a href="https://www.facebook.com/kakaobrain" target="_blank">
            <Icon :sns="`icon-facebook-${!isDark ? 'w' : 'b'}`"></Icon>
          </a>
        </li>
        <li class="item">
          <a
            href="https://www.linkedin.com/company/kakaobrain/"
            target="_blank"
          >
            <Icon :sns="`icon-linkedin-${!isDark ? 'w' : 'b'}`"></Icon>
          </a>
        </li>
        <li class="item">
          <a href="http://pf.kakao.com/_xhFyTb" target="_blank">
            <Icon :sns="`icon-kakao-${!isDark ? 'w' : 'b'}`"></Icon>
          </a>
        </li>
        <li class="item">
          <a
            href="https://www.youtube.com/channel/UCdfmJNL-t_PdVHyn__tGrpg"
            target="_blank"
          >
            <Icon :sns="`icon-youtube-${!isDark ? 'w' : 'b'}`"></Icon>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Icon from '@/components/elements/Icon'
  export default {
    components: {
      Icon
    },
    computed: {
      ...mapState({
        isDark: state => state.isDark
      })
    }
  }
</script>
<style lang="scss" scoped>
  .footer {
    &-sns {
      margin-right: 150px;
      text-align: right;
      .item {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 10px;
        }
        button {
          width: 82px;
          height: 82px;
        }
      }
    }
  }
  @media screen and (max-width: 3840px) {
    .footer {
      &-sns {
        margin-right: 0px;
      }
    }
  }
  @media screen and (max-width: 2560px) {
    .footer {
      &-sns {
        .item {
          button {
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1920px) {
    .footer {
      &-sns {
        .item {
          button {
            width: 34px;
            height: 34px;
          }
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .footer {
      &-sns {
        margin-right: 17px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .footer {
      &-sns {
        display: none;
      }
    }
  }
</style>

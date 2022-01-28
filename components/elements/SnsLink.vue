<template>
  <div>
    <div class="footer-sns">
      <ul>
        <li class="item">
          <Icon :sns="`icon-facebook-${!isDark ? 'w' : 'b'}`"></Icon>
          <!-- <button type="button" @click="onClickFacebook()" class="icon-sns icon-facebook-b"></button> -->
        </li>
        <li class="item">
          <Icon :sns="`icon-insta-${!isDark ? 'w' : 'b'}`"></Icon>
        </li>
        <li class="item">
          <Icon :sns="`icon-kakao-${!isDark ? 'w' : 'b'}`"></Icon>
        </li>
        <li class="item">
          <Icon :sns="`icon-youtube-${!isDark ? 'w' : 'b'}`"></Icon>
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

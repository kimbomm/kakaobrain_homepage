<template>
  <div class="footer-sns">
    <ul>
      <li v-for="(item, index) in sns" :key="index" class="item">
        <a :href="item.link" target="_blank">
          <Icon :sns="`icon-${item.name}-${!isDark ? 'w' : 'b'}`" />
        </a>
      </li>
    </ul>
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
        isDark: state => state.isDark,
        sns: state => state.sns
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

<template lang="">
  <div class="paging l-ml-3">
    <div class="paging-inner">
      <div class="paging-prev"><nuxt-link to="" class="link"></nuxt-link></div>
      <div class="paging-num">
        <ul>
          <li><nuxt-link to="" class="link">1</nuxt-link></li>
          <li><nuxt-link to="" class="link">2</nuxt-link></li>
          <li class="active"><nuxt-link to="" class="link">3</nuxt-link></li>
          <li><nuxt-link to="" class="link">4</nuxt-link></li>
          <li><nuxt-link to="" class="link">5</nuxt-link></li>
          <li><nuxt-link to="" class="link more">...</nuxt-link></li>
          <li><nuxt-link to="" class="link">120</nuxt-link></li>
        </ul>
      </div>
      <div class="paging-next"><nuxt-link to="" class="link"></nuxt-link></div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  
  .paging{
    margin-top:200px;
    &-inner{
      display: flex;
      align-items: center;
    }
    &-prev{
      margin-right: 10px;
      font-size:16px;
    }
    &-next{
      margin-left: 10px;
      font-size:16px;
    }
    &-num{
      ul{
        display: flex;
        width:100%;
        justify-content: space-between;
      }
      li{
        padding: 0 2px;
        &:not(:last-child){
          margin-right:10px;
        }
        &.active{
          font-weight:700;
        }
      }
      .link{
        font-size:16px;
        &.more{
          cursor: auto;
        }
      }
    }
  }
  @include pc-4k {
    .paging{
      margin-top:374px !important;
      &-prev{
        margin-right: 15px !important;
        font-size:26px !important;
      }
      &-next{
        margin-left: 15px !important;
        font-size:26px !important;
      }
      &-num{
        li{
          &:not(:last-child){
            margin-right:15px !important;
          }
        }
        .link{
          font-size:26px !important;
        }
      }
    }
  }
  @include pc-large {
    .paging{
      margin-top:260px;
      &-prev{
        margin-right: 12px;
        font-size:20.8px;
      }
      &-next{
        margin-left: 12px;
        font-size:20.8px;
      }
      &-num{
        li{
          &:not(:last-child){
            margin-right:12px;
          }
        }
        .link{
          font-size:20.8px;
        }
      }
    }
  }
  @include tablet {
    .paging{
      margin-top:150px;
      &-prev{
        margin-right: 12px;
        font-size:20px;
      }
      &-next{
        margin-left: 12px;
        font-size:20px;
      }
      &-num{
        li{
          &:not(:last-child){
            margin-right:12px;
          }
        }
        .link{
          font-size:20px;
        }
      }
    }
  }
  @include mobile {
    .paging{
      margin-top:80px;
      &-prev{
        margin-right: 20px;
        font-size:30px;
      }
      &-next{
        margin-left: 20px;
        font-size:30px;
      }
      &-num{
      width: 100%;
        li{
          &:not(:last-child){
            margin-right:12px;
          }
        }
        .link{
          font-size:18px;
        }
      }
    }
  }
</style>
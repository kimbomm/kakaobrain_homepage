<template>
  <div class="like l-ml-2" >
    <div class="like-con">
      <div class="box">
        <span class="hart">♥</span>
        <span class="num">236</span>
      </div>
      <div class="share"></div>
    </div>
  </div>
</template>
<script>
  export default {
    components: {
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .like{
    // display: none;
    display: block;
    .like-con{
      display: flex;
      align-items: center;
      background-color:$surface-1;
    }
    .box{
      display: flex;
      align-items: center;
      justify-content: center;
      width:120px;
      height:50px;
      margin-right:30px;
      border:1px solid $gray-9;
      cursor: pointer;
      .hart{
        margin-right:8px;
        font-size:20px;
      }
      .num{
        font-size:12px;
      }
    }
    .share{
      width:24px;
      height:24px;
      background: url('@/assets/images/icon-share.png') no-repeat;
      background-size:100%;
      cursor: pointer;
    }
  }
  @include pc-4k {
    .like{
      .box{
        width:260px !important;
        height:80px !important;
        margin-right:40px !important;
        .hart{
          font-size:32px !important;
        }
        .num{
          font-size:22px !important;
        }
      }
      .share{
        width:44px !important;
        height:44px !important;
      }
    }
  }
  @include pc-large {
    .like{
      .box{
        width:170px;
        height:60px;
        margin-right:36px;
        .hart{
          font-size:24px;
        }
        .num{
          font-size:16px;
        }
      }
      .share{
        width:28px;
        height:28px;
      }
    }
  }
  @include tablet {
    .like{
      .box{
        width:120px;
        height:40px;
        margin-right:20px;
        .hart{
          font-size:18px;
        }
        .num{
          font-size:12px;
        }
      }
      .share{
        width:20px;
        height:20px;
      }
    }
  }
  @include mobile {
    .like{
      .box{
        margin-right:14px;
      }
      .share{
        width:24px;
        height:24px;
      }

      &.l-ml-2{
        margin-left: 0 !important;
      }
    }
  }
   
</style>

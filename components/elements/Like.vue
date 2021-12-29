<template>
  <div class="like">
    <div class="box">
      <span class="hart">♥</span>
      <span class="num">236</span>
    </div>
    <div class="share"></div>
  </div>
</template>
<script>
  export default {
    components: {
    }
  }
</script>
<style lang="scss" scoped>
  .like{
    display:none;
  }
  @media screen and (max-width:768px) {
    .like{
      display: block;
      margin: 62px 0 0 20px;
      background-color:$gray-0;
      .box{
        display: inline-block;
        width:120px;
        height:40px;
        padding:9px 0;
        margin-right:14px;
        text-align: center;
        border:1px solid $gray-9;
        cursor: pointer;
        .hart{
          vertical-align: middle;
        }
        .num{
          vertical-align: middle;
        }
      }
      .share{
        display: inline-block;
        width:24px;
        height:24px;
        vertical-align: middle;
        background: url('@/assets/images/icon-share.png') no-repeat;
        background-size:100%;
      }
    }
  }
</style>

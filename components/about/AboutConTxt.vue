<template>
  <div class="about-con-txt gl-6 l-ml-3">{{text}}</div>
</template>
<script>
export default {
  name:'AboutConTxt',
  props:{
    text:{
      type:String,
      default:'',
      required:true
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .about-con-txt{
    line-height: 130%;
    font-size:30px;
  }
  @include pc-4k {
    .about-con-txt{
      font-size:60px !important;
    }
  }
  @include pc-large {
    .about-con-txt{
      font-size:40px;
    }
  }
  @include tablet {
    .about-con-txt{
      font-size:18px;
    }
  }
  @include mobile {
    .about-con-txt{
      font-size:16px;
      &.l-ml-3{
        margin-left: getMargin(1) !important;
      }
      &.gl-6{
        width: getWidth(9) !important;
      }
    }
  }
</style>
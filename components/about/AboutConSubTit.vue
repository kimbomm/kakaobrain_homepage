<template>
  <div class="about-con-sub-tit l-ml-3">{{text}}</div>
</template>
<script>
export default {
  name:'AboutConSubTit',
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

  .about-con-sub-tit{
    line-height: 110%;
    font-size:40px;
    font-weight:600;
  }
  @include pc-4k {
    .about-con-sub-tit{
      font-size:72px;
    }
  }
  @include pc-large  {
    .about-con-sub-tit{
      font-size:52px;
    }
  }
  @include tablet  {
    .about-con-sub-tit{
      font-size:24px;
    }
  }
  @include mobile  {
    .about-con-sub-tit{
      &.l-ml-3{
        margin-left: getMargin(1) !important;
      }
      font-size:20px;
    }
  }
</style>
<template>
  <div class="about-con-tit gl-8 l-ml-2">{{text}}</div>
</template>
<script>
export default {
  name:'AboutConTit',
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

  .about-con-tit{
    padding: 0 20px;
    line-height: 120%;
    font-size:90px;
    font-weight:900;
  }
  @include pc-4k {
    .about-con-tit{
      font-size:180px !important;
    }
  }
  @include pc-large {
    .about-con-tit{
      font-size:120px;
    }
  }
  @include tablet {
    .about-con-tit{
      font-size:50px;
    }
  }
  @include mobile {
    .about-con-tit{
      font-size:28px;
      &.gl-8{
        width:100% !important;
      }
      &.l-ml-2{
        margin-left:0px !important;
      }
    }
  }
</style>
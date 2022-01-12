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
  .about-con-sub-tit{
    line-height: 110%;
    font-size:40px;
    font-weight:600;
  }
</style>
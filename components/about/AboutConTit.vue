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
  .about-con-tit{
    line-height: 120%;
    font-size:90px;
    font-weight:900;
  }
</style>
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
  .about-con-txt{
    line-height: 130%;
    font-size:30px;
  }
</style>
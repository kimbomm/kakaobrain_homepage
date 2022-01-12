<template>
  <div class="about-title-text gl-5 l-ml-3">
    <div class="txt-con">
      <div class="txt">{{Atext}}</div>
      <div class="txt">{{Btext}}</div>
      <div class="txt">{{Ctext}}</div>
    </div>
    <div class="txt-scroll">
      <nuxt-link to="" > scroll</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutTitleText',
  props:{
    Atext:{
      type:String,
      default:'',
      required:true,
    },
    Btext:{
      type:String,
      default:'',
      required:true,
    },
    Ctext:{
      type:String,
      default:'',
      required:true,
    }
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  .about-title-text{
    .txt-con{
      margin-bottom:60px;
      line-height: 150%;
    }
    .txt{
      font-size:16px;
    }
  }
</style>



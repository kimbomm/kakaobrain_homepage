<template>
  <div class="about-title-text l-ml-3">
    <div class="txt">{{text}}</div>
    <div class="txt-scroll">
      <nuxt-link to="" > scroll</nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutTitleText',
  props:{
    text:{
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
    .txt{
      font-size:16px;
      margin-bottom:60px;
    }
  }
</style>



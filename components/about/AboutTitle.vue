<template>
  <div class="about-title l-ml-2">
    <div class="tit gl-8">{{text}}<div class="string">{{bold}}</div></div>
  </div>
</template>
<script>
export default {
  name:'AboutTitle',
  props:{
    text:{
      type:String,
      default:'',
      required: true
    },
    bold:{
      type:String,
      default:'',
      required: true
    },
  }
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title{
    .tit{
      position: relative;
      font-size:200px;
      font-weight:100;
      .string{
        font-weight:900;
      }
      &::before{
        content:"";
        position: absolute;
        left:50%;
        top:50%;
        width:150px;
        height:150px;
        transform: translate(-50%, -50%);
        background: url('@/assets/images/about-tit_img.png') no-repeat;
        background-size: 100%;
        border-radius: 50%;
        box-shadow:-30px 50px 80px rgba(0,0,0,0.5);
      }
    }
  }
</style>
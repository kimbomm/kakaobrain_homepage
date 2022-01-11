<template lang="">
  <div>
    <AboutTitle text="Unthinkable" bold="Question." />
    <AboutTitleText
      text="kakaobrain is...
      As an AI frontier that completes differentiated element technology, big models, and digital humans, it contributes to the technology community and pioneers new service areas that enhance the value of use and quality of life."
    />
    <AboutFullImg />
  </div>
</template>
<script>
  import AboutTitle from '@/components/about/AboutTitle'
  import AboutTitleText from '@/components/about/AboutTitleText'
  import AboutFullImg from '@/components/about/AboutFullImg'
  export default {
    name: 'index',
    components: {
      AboutTitle,
      AboutTitleText,
      AboutFullImg
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-title {
    margin-top: 300px;
    margin-bottom: 60px;
  }
  .about-title-text {
    margin-bottom: 204px;
  }
</style>

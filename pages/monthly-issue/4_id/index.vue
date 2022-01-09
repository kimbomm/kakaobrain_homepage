<template>
  <div class="story-telling">
    <div>
      <Swiper />
    </div>
    <div>
      <Like />
    </div>
  </div>
</template>
<script>
  import Swiper from '@/components/swiper/Swiper'
  import Like from '@/components/elements/Like'
  export default {
    name: 'index',
    layout: 'storytelling-page',
    components: {
      Swiper,Like
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .like{
    display: none;
  }
  @include mobile {
    .like{
      display: block;
      margin-top:62px;
    }
  }
</style>

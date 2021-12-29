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
// .story-telling{
//   .like{

//   }
// }
</style>

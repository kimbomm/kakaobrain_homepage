<template>
  <div class="story-telling">
    <div>
      <Swiper />
    </div>
  </div>
</template>
<script>
  import Swiper from '@/components/swiper/Swiper'
  export default {
    name: 'index',
    layout: 'storytelling-page',
    components: {
      Swiper
    }
  }
</script>
<style lang="scss" scoped>
  // @media screen and (max-width: 3840px) {
  //   .monthly {
  //     &-detail {
  //       .con-text {
  //         .item {
  //           margin-top: 160px;
  //         }
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 2560px) {
  //   .monthly {
  //     &-detail {
  //       .con-tit {
  //         margin-bottom: 300px;
  //       }
  //       .con-text {
  //         &:not(:last-child) {
  //           margin-bottom: 200px;
  //         }
  //         .item {
  //           margin-top: 100px;
  //         }
  //       }
  //     }
  //   }
  // }
  // @media screen and (max-width: 1920px) {
  //   .monthly {
  //     &-detail {
  //       .con-tit {
  //         margin-bottom: 200px;
  //       }
  //       .con-text {
  //         &:not(:last-child) {
  //           margin-bottom: 150px;
  //         }
  //       }
  //     }
  //   }
  // }
</style>

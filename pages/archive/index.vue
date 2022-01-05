<template>
  <div>
    <div class="contents-selector l-ml-2 gl-6">
      <FilterSelector />
    </div>
    <div class="contents-list-text">
      <DetailText text="우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다.우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다.우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다. 논문을 제외한 모든 글들이 아카이빙됩니다." />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry :cols="{default: 5, 1024: 2, 768: 1}" :gutter="{default: '20px', 768: '0px'}" class="masonry area">
      <ArchiveCard
        v-for="(item, index) in archiveList"
        :key="index"
        :tit="item.title"
        theme=""
      />
    </masonry>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  import DetailText from '@/components/detail/DetailText'
  import FilterSelector from '@/components/elements/filter/FilterSelector'
  export default {
    components: {
      ArchiveCard,
      DetailText,
      FilterSelector,
    },
    computed: {
      ...mapState({
        archiveList: state => state.archive .list
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .masonry {
    padding: 0 20px;
  }
  /deep/ .archive  {
    min-width: initial;
    max-width: initial;
    width: 100%;
    height: auto;
    margin-bottom: 50px;
  }
  .contents-selector{
    margin: 320px 0 60px;
  }
  .contents-list-text{
    margin-bottom:200px;
  }
  
  @include pc-4k {
    /deep/ .archive  {
      margin-bottom: 100px !important;
    }
    .contents-selector{
      margin: 600px 0 120px;
    }
    .contents-list-text{
      margin-bottom:460px !important;
    }
  }
  @include pc-large {
    /deep/ .archive  {
      margin-bottom: 70px;
    }
    .contents-list-text{
      margin-bottom:300px;
    }
  }
  @include tablet {
    .contents-selector{
      margin: 200px 0 40px;
    }
    .contents-list-text{
      margin-bottom:100px;
    }
    // .l-ml-3 {
    //   margin-left: calc(calc((100vw - 20px * 11) / 10) * 2 + 20px * 2) !important;
    // }
    // .gl-5{
    //   width:calc(calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)) !important;
    // }
  }
  @include mobile {
    .masonry {
      padding: 0;
    }
    // .l-ml-2{
    //   margin-left:0px !important;
    // }
    // .l-ml-3{
    //   margin-left:0px !important;
    // }
    // .gl-6{
    //   width:100% !important
    // }
    .contents-selector{
      margin: 157px 0 20px;
    }
  }

</style>

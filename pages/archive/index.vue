<template>
  <div>
    <div class="selector l-ml-2 gl-6">
      <FilterSelector />
    </div>
    <div class="list-text">
      <DetailText text="우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다.우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다.우리가 퍼블리싱한 것에 대한 설명글이 들어갑니다. 논문 리스트는 안들어갑니다. 논문을 제외한 모든 글들이 아카이빙됩니다." />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry :cols="5" :gutter="20" class="masonry area">
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
  .masonry {
    padding: 0 20px;
  }
  /deep/ .archive  {
    min-width: initial;
    max-width: initial;
    width: 100%;
    height: auto;
    margin-bottom: 70px;
  }
  .selector{
    margin-bottom: 80px;
  }
  .list-text{
    margin-bottom:200px;
  }
</style>

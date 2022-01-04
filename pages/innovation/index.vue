<template>
  <div>
    <div class="selector l-ml-2 gl-6">
      <FilterSelector />
    </div>
    <!-- <DetailTitle text="Monthly Issue" type="gl-6" ml="l-ml-2" /> -->
    <div class="list-text">
      <DetailText text="우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다." />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry :cols="5" :gutter="20" class="masonry area">
      <InnovationCard
        v-for="(item, index) in innovationList"
        :key="index"
        :tit="item.title"
        :publish="item.listing"
        collaborator="Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack"
        theme=""
      />
    </masonry>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  import DetailText from '@/components/detail/DetailText'
  import FilterSelector from '@/components/elements/filter/FilterSelector'
  export default {
    components: {
      InnovationCard,
      DetailText,
      FilterSelector,
    },
    computed: {
      ...mapState({
        innovationList: state => state.innovation.list
      })
    }
  }
</script>
<style lang="scss" scoped>
  .masonry {
    padding: 0 20px;
  }
  /deep/ .Innovation {
    min-width: initial;
    max-width: initial;
    width: 100%;
    height: auto;
    margin-bottom: 70px;
  }
  .selector{
    margin: 400px 0 80px;
    // margin-top:400px;
    // margin-bottom: 80px;
  }
  .list-text{
    margin-bottom:200px;
  }
</style>

<template>
  <div>
    <DetailTitle text="Monthly Issue" type="gl-6" ml="l-ml-2" />
    <div class="list-text">
      <DetailText text="카카오브레인의 공동연구 노하우를 공개합니다" />
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
  export default {
    components: {
      InnovationCard
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
    margin-bottom: 50px;
  }
</style>

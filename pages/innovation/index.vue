<template>
  <div>
    <div class="contents-selector l-ml-2 gl-6">
      <FilterSelector />
    </div>
    <div class="contents-sticker l-ml-3 gl-5">
      <ul>
        <li class="item">
          <Sticker text="q;lwekdjfa;sdlf" sub=""></Sticker>
        </li>
        <li class="item">
          <Sticker text="q;lwekdjfa;sdlf" sub=""></Sticker>
        </li>
        <li class="item">
          <Sticker text="q;lwekdjfa;sdlf" sub=""></Sticker>
        </li>
      </ul>
    </div>

    <div class="contents-list-text">
      <DetailText text="우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다.우리가 획득한 성과와 논문에 대한 설명글이 들어갑니다." />
    </div>
    <!-- reference: https://github.com/paulcollett/vue-masonry-css -->
    <masonry :cols="{default: 5, 1024: 2, 768: 1}" :gutter="{default: '20px', 768: '0px'}" class="masonry area">
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
  import Sticker from '@/components/elements/button/Sticker'
  
  export default {
    components: {
      InnovationCard,
      DetailText,
      FilterSelector,
      Sticker,
    },
    computed: {
      ...mapState({
        innovationList: state => state.innovation.list
      })
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

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
  .contents-selector{
    margin: 320px 0 60px;
  }
  .contents-sticker{
    margin-bottom:60px;
    .item{
      display: inline-block;
      &:not(:last-child){
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
  .contents-list-text{
    margin-bottom:200px;
  }

  @include pc-4k {
    /deep/ .Innovation {
      margin-bottom: 100px;
    }
    .contents-selector{
      margin: 600px 0 120px;
    }
    .contents-sticker{
      margin-bottom:120px;
    }
    .contents-list-text{
      margin-bottom:460px !important;
    }
  }
  @include pc-large {
    /deep/ .Innovation {
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
    .contents-sticker{
      margin-bottom:40px;
    }
    .l-ml-3 {
      margin-left: calc(calc((100vw - 20px * 11) / 10) * 2 + 20px * 2) !important;
    }
    .gl-5{
      width:calc(calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)) !important;
    }
  }
  @include mobile {
    .masonry {
      padding: 0;
    }
    .l-ml-2{
      margin-left:0px !important;
    }
    .l-ml-3{
      margin-left:0px !important;
    }
    .gl-6{
      width:100% !important
    }
    .gl-5{
      width:100% !important
    }
    
    .contents-selector{
      margin: 157px 0 20px;
    }
    .contents-sticker{
      margin-bottom:20px;
    }
  }
</style>

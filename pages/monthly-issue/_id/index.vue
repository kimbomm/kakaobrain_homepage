<template>
  <div class="monthly-detail">
    <Thumbnail :srcPath="''" />
    <DetailImg :srcPath="''" text="이미지 설명" />
    <DetailFullImg :srcPath="''" text="이미지 설명" />
    <DetailMiddelImg :srcPath="''" text="이미지 설명" />
    <DetailTitle text="타이틀 텍스트" />
    <DetailText text="일반 텍스트" />
    <DetailSubTitle text="서브타이틀 텍스트" />
    <DetailTextTitle text="Article 서브타이틀 텍스트" />
    <DetailTextItem text="AAAI (2021)" />
  </div>
</template>
<script>
  import Thumbnail from '@/components/detail/Thumbnail'
  import DetailImg from '@/components/detail/DetailImg'
  import DetailFullImg from '@/components/detail/DetailFullImg'
  import DetailMiddelImg from '@/components/detail/DetailMiddelImg'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailTextTitle from '@/components/detail/DetailTextTitle'
  import DetailTextItem from '@/components/detail/DetailTextItem'
  export default {
    components: {
      Thumbnail,
      DetailTitle,
      DetailText,
      DetailImg,
      DetailSubTitle,
      DetailFullImg,
      DetailMiddelImg,
      DetailTextTitle,
      DetailTextItem
    },
    data() {
      return {
        /**
         * categoryType
         * typeA - thumbnail형
         * typeB - 빅타이틀 형
         * typeC - storyTelling 형
         * typeD - article 형
         */
        categoryType: null
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .monthly-detail {
    padding-top: 200px;
    .con-box {
      margin-bottom: 300px;
    }
  }
  @media screen and (max-width: 2560px) {
    .monthly-detail {
      padding-top: 130px;
      .con-box {
        margin-bottom: 200px;
      }
    }
  }
  @media screen and (max-width: 1920px) {
    .monthly-detail {
      padding-top: 100px;
      .con-box {
        margin-bottom: 100px;
      }
    }
  }
</style>

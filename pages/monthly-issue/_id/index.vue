<template>
  <div class="monthly-detail">
    <div class="top">
      <BreadCrumb data="" />
      <Thumbnail :srcPath="''" />
    </div>
    <DetailTitle text="타이틀 텍스트" />
    <DetailImg :srcPath="''" text="이미지 설명" />
    <DetailFullImg :srcPath="''" text="이미지 설명" />
    <DetailMiddelImg :srcPath="''" text="이미지 설명" />
    <DetailText :data="detailText"/>
    <DetailSubTitle text="서브타이틀 텍스트" />
    <DetailTextTitle text="Article 서브타이틀 텍스트" />
    <DetailTextItem text="AAAI (2021)" />
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
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
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
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
    computed: {
      topClassBind() {
        let classList = ['top']
        if (this.categoryType === 'typeB' || this.categoryType === 'typeC') {
          classList.push('no-thumbnail')
        }
        return classList
      }
    },
    data() {
      return {
        detailText:{
          text:'일반 텍스트'
        },
        /**
         * categoryType
         * typeA - thumbnail형
         * typeB - 빅타이틀 형
         * typeC - article 형
         * typeD - storyTelling 형
         */
        categoryType: null
      }
    },
    methods: {}
  }
</script>
<style lang="scss" scoped>
  .top {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    margin-bottom: 145px;
    &.no-thumbnail {
      margin-bottom: 248px;
    }
    .bread-crumb {
      padding-right: 20px;
    }
    > * {
      flex: 0 0 auto;
    }
  }
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
    .top {
      margin-bottom: 100px;
      &.no-thumbnail {
        margin-bottom: 173px;
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
    .top {
      margin-bottom: 60px;
      &.no-thumbnail {
        margin-bottom: 100px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    .top {
      margin-bottom: 100px;
      &.no-thumbnail {
        margin-bottom: 5px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .top {
      display: block;
      margin-bottom: 60px;
      &.no-thumbnail {
        margin-bottom: 60px;
      }
      .bread-crumb {
        padding: 0 20px;
      }
    }
  }
</style>

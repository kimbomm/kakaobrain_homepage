<template>
  <div>
    <div class="contents-title ">
      <DetailTitle text="News." />
    </div>
    <div class="tit-text l-ml-3 gl-5">카카오브레인에서 새로운 소식을 전해드립니다.</div>

    <div class="contents-checkbox l-ml-3 gl-5">
      <div class="contents-item">
        <Checkbox
          checkboxId="checkbox_0"
          checkboxValue="a"
          checkboxText="ALL"
          :isChecked="true"
        />
      </div>
      <div class="contents-item">
        <Checkbox
          checkboxId="checkbox_1" 
          checkboxValue="b"
          checkboxText="보도자료"
          :isChecked="false"
        />
      </div>
      <div class="contents-item">
        <Checkbox
          checkboxId="checkbox_2" 
          checkboxValue="b"
          checkboxText="카테고리"
          :isChecked="false"
        />
      </div>
      <div class="contents-item">
        <Checkbox
          checkboxId="checkbox_3" 
          checkboxValue="b"
          checkboxText="뉴스"
          :isChecked="false"
        />
      </div>
      <div class="contents-item">
        <Checkbox
          checkboxId="checkbox_4" 
          checkboxValue="b"
          checkboxText="카테고리"
          :isChecked="false"
        />
      </div>
    </div>

    <div class="contents-list l-ml-2">
      <MenuList
        tit="카카오브레인, AI 주니어 육성 프로그램 1기 모집"
        date="20211216"
      />
    </div>
    <div class="contents-list l-ml-2">
      <MenuList
        tit="카카오브레인, AI 주니어 육성 프로그램 1기 모집"
        date="20211216"
      />
    </div>
    
  </div>
</template>
<script>
  import DetailTitle from '@/components/detail/DetailTitle'
  import Checkbox from '@/components/elements/filter/Checkbox'
  import MenuList from '@/components/elements/MenuList'
  
  export default {
    components: {
      DetailTitle,
      Checkbox,
      MenuList,
    }
  }
</script> 
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  
  .tit-text{
    margin-bottom:30px;
    line-height: 150%;
    font-size:16px;
  }
  
  .contents{
    &-title{
      margin-top:320px;
    }
    &-checkbox{
      margin-bottom:140px;
    }
    &-item{
      display: inline-block;
      &:not(:last-child){
        margin-right:10px;
      }
    }
    &-list{
      &:not(:last-child){
        margin-bottom:200px;
      }
    }
  }
  @include pc-4k {
    .tit-text{
      margin-bottom:70px !important;
      font-size:32px;
    }
    
    .contents{
      &-title{
        margin-top:600px !important;
      }
      &-checkbox{
        margin-bottom:300px !important;
      }
      &-list{
        &:not(:last-child){
          margin-bottom:374px !important;
        }
      }
    }
  }
  @include pc-large {
    .tit-text{
      margin-bottom:50px;
      font-size:22px;
    }
    
    .contents{
      &-title{
        margin-top:440px;
      }
      &-checkbox{
        margin-bottom:200px;
      }
      &-list{
        &:not(:last-child){
          margin-bottom:260px;
        }
      }
    }
  }
  @include tablet {
    .tit-text{
      margin-bottom:20px;
      font-size:14px;
    }
    
    .contents{
      &-title{
        margin-top:200px;
      }
      &-checkbox{
        margin-bottom:140px;
      }
      &-list{
        &:not(:last-child){
          margin-bottom:150px;
        }
      }
    }
    .contents-list{
      &.l-ml-2{
        margin-left: 0px !important;
      }
    }
  }
  @include mobile {
    .tit-text{
      margin-bottom:20px;
      font-size:14px;
    }
    
    .contents{
      &-item{
        &:not(:last-child){
          margin-right:5px;
        }
      }
      &-title{
        margin-top:157px;
      }
      &-checkbox{
        margin-bottom:100px;
      }
      &-list{
        &:not(:last-child){
          margin-bottom:80px;
        }
      }
    }
    .l-ml-2{
      margin-left:0px !important;
    }
    .l-ml-3{
      margin-left:0px !important;
    }
    .gl-5{
      width:100% !important;
    }

  }
    
</style>

<template>
  <div>
    <div class="g-header">
      <h2>Kakao Component</h2>
    </div>
    <div class="g-container">
      <div class="g-con">
        <p class="g-tit">BUTTON</p>
        <div class="g-box">
          <Sticker text="Educations"></Sticker>
          <Sticker text="E." sub="sub"></Sticker>
          <Sticker text="Docu. B" sub="docu"></Sticker>
          <Sticker text="Studio" sub="studio"></Sticker>
          <Sticker text="Research" sub="research"></Sticker>
          <Sticker text="tech" sub="tech"></Sticker>
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">ICON</p>
        <div class="g-box">
          <Icon sns="icon-band"></Icon>
          <Icon sns="icon-insta"></Icon>
          <Icon sns="icon-facebook"></Icon>
          <Icon sns="icon-youtube"></Icon>
          <Icon sns="icon-kakao"></Icon>
          <Icon sns="icon-naver"></Icon>
        </div>
        <div class="g-box">
          <Icon sns="icon-band-b"></Icon>
          <Icon sns="icon-insta-b"></Icon>
          <Icon sns="icon-facebook-b"></Icon>
          <Icon sns="icon-youtube-b"></Icon>
          <Icon sns="icon-kakao-b"></Icon>
          <Icon sns="icon-naver-b"></Icon>
        </div>
        <div class="g-box">
          <Icon sns="icon-band-w"></Icon>
          <Icon sns="icon-insta-w"></Icon>
          <Icon sns="icon-facebook-w"></Icon>
          <Icon sns="icon-youtube-w"></Icon>
          <Icon sns="icon-kakao-w"></Icon>
          <Icon sns="icon-naver-w"></Icon>
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">CARD</p>
        <div class="g-box">
          <div style="padding: 10px 0">
            Innovation 부모 클래스에 'area' 클래스를 적용하면 높이 값이 늘어
            납니다.
          </div>
          <div style="padding: 10px 0">
            Innovation-dark 클래스를 입력하면 검정색 배경이 나타납니다.
          </div>
          <InnovationCard
            tit="Unified Deep Learning Model for El Nino/Southern Oscillation Forecasts by Incorporating Seasonality in Climate Data ©2021"
            publish="8th ICML Workshop on Automated Machine Learning (2021)"
            collaborator="Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack"
            theme="Innovation-dark"
          ></InnovationCard>
          <InnovationCard
            tit="Unified Deep Learning Model for El Nino/Southern Oscillation Forecasts by Incorporating Seasonality in Climate Data ©2021"
            publish="8th ICML Workshop on Automated Machine Learning (2021)"
            collaborator="Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack"
            theme=""
          ></InnovationCard>
        </div>

        <div class="g-box">
          <ArchiveCard
            tit="카카오브레인, AI 주니어 육성프로그램 1기 모집카카오브레인, AI 주니어 육성프로그램 1기 모집카카오브레인, AI 주니어 육성 프로그램 1기 모집카카오브레인, AI 주니어 육성	프로그램 1기 모집카카오브레인,	AI 주니어 육성 프로그램 1기 모집 @2021/10/27"
            theme="archive-dark"
          ></ArchiveCard>

          <ArchiveCard
            tit="카카오브레인, AI 주니어 육성프로그램 1기 모집카카오브레인, AI 주니어 육성프로그램 1기 모집카카오브레인, AI 주니어 육성 프로그램 1기 모집카카오브레인, AI 주니어 육성	프로그램 1기 모집카카오브레인,	AI 주니어 육성 프로그램 1기 모집 @2021/10/27"
          ></ArchiveCard>
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">상세화면</p>
        <p class="g-sub-tit">monthly-detail</p>
        <div class="g-box">
          <div class="monthly-detail">
            <Thumbnail type="gl-9"></Thumbnail>
            <DetailTitle
              text="카카오브레인, AI 공동연구 이렇게 한다."
              type="gl-6"
            ></DetailTitle>
            <DetailText
              text="카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의 한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대, KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동 연구를 시작했습니다."
              type="gl-5"
            ></DetailText>
            <DetailImg text="사진 설명 들어가는 곳." type="gl-7 "></DetailImg>
            <DetailSubTitle
              text="Unthinkable AI Research Project."
              type="gl-5"
            ></DetailSubTitle>
            <DetailFullImg
              text="사진 설명 들어가는 곳."
              type=""
            ></DetailFullImg>
            <DetailMiddelImg
              text="사진 설명 들어가는 곳."
              type="gl-7"
            ></DetailMiddelImg>
          </div>
        </div>

        <p class="g-sub-tit">monthly-detail-2</p>
        <div class="g-box">
          <div class="monthly-detail">
            <Thumbnail type="gl-9"></Thumbnail>
            <DetailTitle
              text="카카오브레인, AI 공동연구 이렇게 한다."
              type="gl-6"
            ></DetailTitle>
            <DetailText
              text="카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의 한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대, KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동 연구를 시작했습니다."
              type="gl-5"
            ></DetailText>
            <DetailImg text="사진 설명 들어가는 곳." type="gl-7 "></DetailImg>
            <DetailSubTitle
              text="Unthinkable AI Research Project."
              type="gl-5"
            ></DetailSubTitle>
            <DetailFullImg
              text="사진 설명 들어가는 곳."
              type=""
            ></DetailFullImg>
            <DetailMiddelImg
              text="사진 설명 들어가는 곳."
              type="gl-7"
            ></DetailMiddelImg>
          </div>
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">Easter Egg</p>
        <div class="g-box">
          <EasterEgg />
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">Member</p>
        <div class="g-box">
          <Member />
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">Checkbox</p>
        <div class="g-box">
          <Checkbox
            checkboxId="checkbox_0"
            checkboxValue="a"
            checkboxText="checkbox__0"
            :isChecked="true"
          />
          <Checkbox
            checkboxId="checkbox_1"
            checkboxValue="b"
            checkboxText="checkbox__1"
            :isChecked="false"
          />
          <Checkbox
            theme="dark"
            checkboxId="checkbox_2"
            checkboxValue="c"
            checkboxText="다크테마 체크박스"
            :isChecked="false"
          />
        </div>
      </div>
      <div class="g-con">
        <p class="g-tit">Filter</p>
        <div class="g-box">
          <FilterSelector />
        </div>
      </div>

      <div class="g-con">
        <p class="g-tit">swiper</p>
        <div class="g-box">
          <Swiper />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Icon from '@/components/elements/Icon'
  import Sticker from '@/components/elements/button/Sticker'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  import Thumbnail from '@/components/detail/Thumbnail'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailImg from '@/components/detail/DetailImg'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailFullImg from '@/components/detail/DetailFullImg'
  import DetailMiddelImg from '@/components/detail/DetailMiddelImg'
  import Member from '@/components/elements/Member'
  import EasterEgg from '@/components/elements/EasterEgg'
  import Checkbox from '@/components/elements/filter/Checkbox'
  import FilterSelector from '@/components/elements/filter/FilterSelector'
  import Swiper from '@/components/swiper/Swiper'
  export default {
    components: {
      Sticker,
      Icon,
      InnovationCard,
      ArchiveCard,
      Thumbnail,
      DetailTitle,
      DetailText,
      DetailImg,
      DetailSubTitle,
      DetailFullImg,
      DetailMiddelImg,
      Member,
      EasterEgg,
      Checkbox,
      FilterSelector,
      Swiper
    }
  }
</script>
<style lang="scss" scoped>
  .g {
    &-header {
      font-size: 24px;
      padding: 30px 0;
      text-align: center;
      border-bottom: 1px solid $gray-9;
      h2 {
        display: inline-block;
        font-size: 40px;
        font-weight: 700;
        margin-left: 20px;
        padding-bottom: 10px;
      }
    }
    &-container {
      padding: 30px 20px 200px;
      background: $gray-1;
    }
    &-con {
      &:not(:first-child) {
        margin-top: 60px;
      }
    }
    &-tit {
      display: inline-block;
      position: relative;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 20px;
      padding-left: 30px;
      &::before {
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        left: 10px;
        width: 10px;
        height: 10px;
        transform: translateY(-50%);
        background-color: $gray-9;
      }
    }
    &-sub-tit {
      padding: 10px 0 10px 30px;
      border-bottom: 1px solid #a2a2a2;
    }
    &-box {
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
  }
</style>

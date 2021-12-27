<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="slide">
        <div class="slide-con ta-l gl-8">
          <div class="slide-tit">카카오브레인, AI 공동연구</div>
          <div class="slide-txt">
            카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의
            한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와
            한양대, KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간
            공동 연구를 시작했습니다. 카카오브레인과 각 학교 AI 연구실은 이번
            협력을 통해 AI 연구의 스테레오타입을 넘어선 새로운 연구 방법론을
            정립하려 노력한다고 합니다. 우리의 연구가 어떻게 세상을 바꿔나갈지
            가슴이 웅장해지는데요. 카카오브레인의 공동연구 노하우를 공개합니다
          </div>
        </div>
        <img src="@/assets/images/story-telling_img_1.png" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide-con gl-8">
        <div class="slide-tit">카카오브레인, AI 공동연구</div>
        <div class="slide-txt">
          카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의
          한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대,
          KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동
          연구를 시작했습니다. 카카오브레인과 각 학교 AI 연구실은 이번 협력을
          통해 AI 연구의 스테레오타입을 넘어선 새로운 연구 방법론을 정립하려
          노력한다고 합니다. 우리의 연구가 어떻게 세상을 바꿔나갈지 가슴이
          웅장해지는데요. 카카오브레인의 공동연구 노하우를 공개합니다
        </div>
      </div>
      <img src="@/assets/images/story-telling_img_2.png" />
    </swiper-slide>
    <swiper-slide>
      <div class="slide-con ta-r gl-8">
        <div class="slide-tit">카카오브레인, AI 공동연구</div>
        <div class="slide-txt">
          카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의
          한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대,
          KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동
          연구를 시작했습니다. 카카오브레인과 각 학교 AI 연구실은 이번 협력을
          통해 AI 연구의 스테레오타입을 넘어선 새로운 연구 방법론을 정립하려
          노력한다고 합니다. 우리의 연구가 어떻게 세상을 바꿔나갈지 가슴이
          웅장해지는데요. 카카오브레인의 공동연구 노하우를 공개합니다
        </div>
      </div>
      <img src="@/assets/images/story-telling_img_3.png" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        swiperOption: {
          direction: 'vertical',
          slidesPerView: 1,
          spaceBetween: 0,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .ta-c {
    text-align: center;
  }
  .ta-l {
    text-align: left;
  }
  .ta-r {
    text-align: right;
  }
  .swiper {
    position: relative;
    height: 800px;
    // height: 100%;
    width: 100%;
    color: $gray-0;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      overflow: hidden;
      img {
        width: 100%;
      }
      .slide {
        &-con {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &-tit {
          font-size: 50px;
          font-weight: 900;
          margin-bottom: 40px;
          line-height: 120%;
        }
        &-txt {
          font-size: 16px;
          font-weight: 400;
          line-height: 150%;
        }
      }
    }
    .swiper-pagination-fraction {
      top: 130px;
      left: 20px;
      width: auto;
    }
    .swiper-button-prev {
      left: 20px;
      top: 100px;
    }
    .swiper-button-next {
      left: 20px;
      top: 180px;
    }
    .swiper-button-prev:after {
      content: '↑';
      font-family: Inter;
      font-size: 16px;
      color: $gray-0;
    }
    .swiper-button-next:after {
      content: '↓';
      font-family: Inter;
      font-size: 16px;
      color: $gray-0;
    }
  }
</style>

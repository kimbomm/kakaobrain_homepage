<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="slide">
        <img src="@/assets/images/story-telling_img_1.png" />
        <div class="back"></div>
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
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <img src="@/assets/images/story-telling_img_2.png" />
        <div class="back"></div>
        <div class="slide-con gl-8">
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
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="slide">
        <img src="@/assets/images/story-telling_img_3.png" />
        <div class="back"></div>
        <div class="slide-con ta-r gl-8">
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
      </div>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="story-detail" @click="storyList()">
      <button type="button" class="list"></button>
    </div>

    <!-- story pop -->
    <div class="story-pop" v-show="this.isStory">
      <div class="story-con l-ml-1 gl-8">
        <ul>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <!-- <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li>
          <li class="list-item gl-1">
            <div class="list-img">
              <img src="@/assets/images/pop-list.png" />
            </div>
            <div class="list-tit">1. 카카오브레인, AI 공동연구</div>
          </li> -->
        </ul>
      </div>
      <div class="story-close" @click="storyList()">
        <button type="button" class="list-close"></button>
      </div>
    </div>
    <!-- story pop //-->
  </swiper>
</template>
<script>
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/css/swiper.css'
  import Icon from '@/components/elements/Icon'
  export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
      Swiper,
      SwiperSlide,
      Icon
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
        },
        isStory: false
      }
    },
    methods: {
      storyList() {
        this.isStory = !this.isStory
        console.log('popup')
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
    // height: 800px;
    height: 100vh;
    width: 100%;
    color: $gray-0;
    // border: 5px solid blue;
    .swiper-slide {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-weight: bold;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      .slide {
        &-con {
          position: absolute;
          // left: 50%;
          // top: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        &-tit {
          font-size: 98px;
          font-weight: 900;
          margin-bottom: 40px;
          line-height: 120%;
        }
        &-txt {
          font-size: 32px;
          font-weight: 400;
          line-height: 150%;
          word-break: keep-all;
        }
        .back {
          position: absolute;
          background: rgba(0, 0, 0, 0.3);
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }
      }
    }
    .story-detail {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      padding: 17px;
      background-color: $gray-0;
      border-radius: 50%;
      z-index: 10;
      cursor: pointer;
      .list {
        width: 26px;
        height: 26px;
        background: url('@/assets/images/icon-story.png') no-repeat 100%;
        background-size: 100%;
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

  .story {
    &-pop {
      position: fixed;
      left: 50%;
      top: 50%;
      width: 100%;
      height: 100vh;
      overflow-y: auto;
      padding-top: 740px;
      transform: translate(-50%, -50%);
      background-color: rgba(255, 255, 255, 0.3);
      z-index: 20;
    }
    &-close {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 60px;
      height: 60px;
      padding: 17px;
      background-color: $gray-0;
      border-radius: 50%;
      z-index: 10;
      cursor: pointer;
      .list-close {
        width: 26px;
        height: 26px;
        background: url('@/assets/images/icon-close.png') no-repeat 100%;
        background-size: 100%;
      }
    }
  }
  // pop list
  .list {
    &-img {
      margin-bottom: 10px;
      img {
        width: 100%;
      }
    }
    &-tit {
      font-size: 24px;
    }
    &-item {
      display: inline-block;
      margin-bottom: 150px;
      padding:0 74px;
      // &:not(:nth-child(8n)) {
      //   margin-right: 20px;
      // }
    }
  }
  @media screen and (max-width:3840px) {
    .story {
      &-pop {
        padding-top: 380px;
      }
    }
    .list {
      &-item {
        padding:0 10px;
      }
    }
  } 
  @media screen and (max-width:2560px) {
    .swiper {
      .swiper-slide {
        .slide {
          &-tit {
            font-size: 68px;
          }
          &-txt {
            font-size: 22px;
          }
        }
      }
    }
    .story {
      &-pop {
        padding-top: 200px;
      }
    }
    .list {
      &-tit {
        font-size: 18px;
      }
      &-item {
        margin-bottom: 100px;
      }
    }
  } 
  @media screen and (max-width:1920px) {
    .swiper {
      .swiper-slide {
        .slide {
          &-tit {
            font-size: 50px;
          }
          &-txt {
            font-size: 16px;
          }
        }
      }
    }
    .story {
      &-pop {
        padding-top: 200px;
      }
    }
    .list {
      &-tit {
        font-size: 12px;
      }
      &-item {
        margin-bottom: 80px;
        padding:0 10px;
      }
    }
  } 
  @media screen and (max-width:1024px) {
    .swiper {
      .swiper-slide {
        .slide {
          &-tit {
            font-size: 38px;
          }
          &-txt {
            font-size: 14px;
          }
        }
      }
    }
    .list {
      &-item {
        margin-bottom: 50px;
        padding:0;
        &:not(:nth-child(4n)) {
          margin-right: 20px;
        }
      }
      
    }
    .gl-1{
      width: calc(calc((100vw - 20px * 11) / 10) * 2 + 20px * (2 - 1)) !important;
    }
  } 
  @media screen and (max-width:768px) {
    .swiper {
      .swiper-slide {
        .slide {
          &-tit {
            font-size: 30px;
          }
          &-txt {
            font-size: 16px;
          }
        }
      }
    }
    .story-detail{
      display: none;
    }
  } 
</style>

<template>
  <div>
    <BreadCrumb :data="breadcrumb" :full="true" />
    <div class="map">
      <div class="contents-title">
        <DetailTitle text="오시는 길" />
      </div>
      <div class="tit-text l-ml-3">
        카카오브레인 크루가 모여 생각하지 못한 질문을 던지고 해답을 찾아가는
        장소입니다.
      </div>
      <section>
        <div class="text-h2 l-ml-3"><span>주소</span></div>
        <div class="text-content l-ml-3">
          <span
            >경기도 성남시 분당구 판교역로241번길 20 미래에셋벤처타워 11층
            (우)13494</span
          >
        </div>
        <div id="map" class="map-js"></div>
        <div class="bus-method l-ml-3">
          <div class="text-h3"><span>주변 버스</span></div>
          <ul>
            <li v-for="(item, index) in bus" :key="`label-${index}`" class="">
              <div class="text-h4">
                <span>{{ item.label }}</span>
              </div>
              <div class="text-content">
                <template v-for="(number, index) in item.method">
                  <span :key="index">
                    {{ number }}
                  </span>
                  <br  :key="`index-${index}`" v-if="index === 2" />
                </template>
              </div>
            </li>
          </ul>
        </div>
        <div class="text-h3 l-ml-3"><span>문의</span></div>
        <div class="text-content l-ml-3">
          <span> contact@kakaobrain.com으로 연락 바랍니다. </span>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import DetailTitle from '@/components/detail/DetailTitle'
  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb,
      DetailTitle
    },
    data() {
      return {
        breadcrumb: [
          { link: '', sub: 'sub', text: '오시는길' },
          { link: '', sub: '', text: '우리가 일하는 곳' }
        ],
        bus: [
          {
            label: '일반',
            method: [
              '101',
              '15-1',
              '330',
              '330출',
              '350',
              '357',
              '370',
              '380',
              '382',
              '55',
              '260',
              '390'
            ]
          },
          {
            label: '마을',
            method: [
              '602-1(일반형)(평일)',
              '602-1(일반형)(휴일)',
              '602-1(출퇴근맞춤형)',
              '602-2(일반형)(평일)',
              '602-2(출퇴근맞춤형)',
              '71',
              '73',
              '73(맞춤형)',
              '73-1',
              '75',
              '75(맞춤형)',
              '812'
            ]
          },
          {
            label: '직행',
            method: [
              '4000',
              '6003',
              '9007',
              '3000',
              '1007',
              '1009',
              '5600',
              '5700',
              '6900',
              '1007-1'
            ]
          }
        ]
      }
    },
    mounted() {
      if (window.kakao && window.kakao.maps) {
        this.initMap()
      } else {
        const script = document.createElement('script')
        script.onload = () => kakao.maps.load(this.initMap)
        script.src =
          'http://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3f7d10880673cfd60711d3200fb1b6ac'
        document.head.appendChild(script)
      }
    },
    methods: {
      initMap() {
        const container = document.querySelector('#map')
        const options = {
          center: new kakao.maps.LatLng(37.402748780301465, 127.10738647849486),
          level: 3
        }
        const map = new kakao.maps.Map(container, options)
        const markerPosition = new kakao.maps.LatLng(
          37.402748780301465,
          127.10738647849486
        )

        const marker = new kakao.maps.Marker({
          position: markerPosition
        })
        marker.setMap(map)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .map {
    padding: 0 20px;
    section {
      margin-top: 200px;
    }
    .text-h2 {
      margin-bottom: 40px;
    }
    .text-h3 {
      margin-bottom: 10px;
    }
  }
  .map-js {
    height: 400px;
    width: getWidht(6);
    margin: 60px 0 60px getMargin(2);
  }
  .bus-method {
    width: getWidth(6);
    margin-bottom: 40px;
    li {
      display: flex;
      margin-bottom: 10px;
      word-break: word-wrap;
      &:last-child {
        margin-bottom: 0;
      }
      > div:nth-child(1) {
        flex: 0 0 50px;
      }
      > div:nth-child(2) {
        flex: 0 0 calc(100% - 50px);
        span {
          display: inline-block;
          padding-right: 5px;
        }
      }
      &:not(:nth-child(2)){
        br{
          display: none;
        }
      }
    }
  }
  .tit-text {
    margin-bottom: 30px;
    line-height: 150%;
    font-size: 16px;
  }
  @include pc-large {
    .map {
      section {
        margin-top: 240px;
      }
      .text-h2 {
        margin-bottom: 50px;
      }
      .text-h3 {
        margin-bottom: 20px;
      }
    }
    .map-js {
      height: 520px;
      margin: 80px 0 80px getMargin(2);
    }
    .bus-method {
      margin-bottom: 50px;
      li {
        margin-bottom: 5px;
        > div:nth-child(1) {
          flex: 0 0 70px;
        }
      }
    }
    .tit-text {
      margin-bottom: 50px;
      font-size: 22px;
    }
  }
  @include pc-4k {
    .map {
      section {
        margin-top: 400px;
      }
      .text-h2 {
        margin-bottom: 70px;
      }
      .text-h3 {
        margin-bottom: 40px;
      }
    }
    .map-js {
      height: 800px;
    }
    .bus-method {
      margin-bottom: 70px;
      li {
        margin-bottom: 20px;
        > div:nth-child(1) {
          flex: 0 0 100px;
        }
      }
    }
    .tit-text {
      margin-bottom: 70px;
      font-size: 32px;
    }
  }
  @include tablet {
    .map {
      section {
        margin-top: 100px;
      }
      .text-h2 {
        margin-bottom: 40px;
      }
      .text-h3 {
        margin-bottom: 20px;
      }
    }
    .map-js {
      height: 200px;
      margin: {
        top: 40px;
        bottom: 40px;
      }
    }
    .bus-method {
      li {
        margin-bottom: 10px;
        > div:nth-child(1) {
          flex: 0 0 40px;
        }
      }
    }
    .tit-text {
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
  @include mobile {
    [class*='l-ml'] {
      margin-left: 0 !important;
    }
    .map {
      section {
        margin-top: 60px;
      }
      .text-h2 {
        margin-bottom: 30px;
      }
    }
    .map-js {
      margin: {
        top: 30px;
        bottom: 30px;
        left: 0;
      }
    }
    .bus-method {
      margin-bottom: 30px;
      width: 100%;
      li {
        display: block;
        &:nth-child(2){
          width: getWidth(8) !important;
        }
        > div {
           span {
            padding-right: 1px !important;
          }
        }

      }
    }
  }
</style>

<template>
  <div>
    <div :class="classBind">
      <BreadCrumb :data="breadcrumb[language]" :full="true" />
      <div class="contents-title">
        <DetailTitle :text="data.MainTitle" />
      </div>
      <div class="tit-text l-ml-3">
        <p v-html="data.MainTitleText"></p>
      </div>
      <section>
        <div class="text-h2 l-ml-3">
          <span v-html="data.address.title"></span>
        </div>
        <div class="text-content l-ml-3">
          <span v-html="data.address.text"></span>
        </div>
        <div id="map" class="map-js"></div>
        <div class="bus-method l-ml-3">
          <div class="text-h3">
            <span v-html="data.method.title"></span>
          </div>
          <ul>
            <li
              v-for="(item, index) in data.method.list"
              :key="`label-${index}`"
              class=""
            >
              <div class="text-h4">
                <span>{{ item.name }}</span>
              </div>
              <div class="text-content">
                <div v-for="(number, idx) in item.bus" :key="idx">
                  {{ number }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="text-h3 l-ml-3">
          <span v-html="data.method.info.title">문의</span>
        </div>
        <div class="text-content l-ml-3">
          <p v-html="data.method.info.text"></p>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
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
        breadcrumb: {
          KR: [
            {
              link: '',
              sub: 'sub',
              text: '오시는길'
            },
            {
              link: '',
              sub: '',
              text: '우리가 일하는 곳'
            }
          ],
          EN: [
            {
              link: '',
              sub: 'sub',
              text: 'Maps&Directions'
            },
            {
              link: '',
              sub: '',
              text: 'where we work'
            }
          ]
        },
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
    computed: {
      ...mapState({
        language: state => state.language,
        mapData: state => state.translation.MAP
      }),
      data() {
        let data = this.mapData[this.language]
        return data
      },
      classBind() {
        let classList = ['map']
        if (this.language === 'EN') {
          classList.push('map__en')
        }

        return classList.join(' ')
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
    margin-bottom: 596px;
    padding: 0 20px;
    padding-top: 320px;
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
    width: getWidth(7);
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
        width: 50px;
      }
      > div:nth-child(2) {
        flex: 0 0 calc(100% - 50px);
      }
      &:not(:nth-child(2)) {
        br {
          display: none;
        }
      }
    }
  }
  .tit-text {
    line-height: 150%;
    font-size: 16px;
  }
  .map__en {
    .bus-method li {
      > div:nth-child(1) {
        flex: 0 0 70px;
        width: 70px;
      }
      > div:nth-child(2) {
        flex: 0 0 calc(100% - 70px);
      }
    }
  }
  @include pc-large {
    .tit-text {
      font-size: 22px;
    }
    .map {
      padding-top: 440px;
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
          width: 70px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 70px);
        }
      }
    }
    .map__en {
      .bus-method li {
        > div:nth-child(1) {
          flex: 0 0 90px;
          width: 90px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 90px);
        }
      }
    }
  }
  @include pc-4k {
    .tit-text {
      font-size: 32px;
    }
    .map {
      padding-top: 660px;
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
          width: 100px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 100px);
        }
      }
    }
    .map__en {
      .bus-method li {
        > div:nth-child(1) {
          flex: 0 0 130px;
          width: 130px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 130px);
        }
      }
    }
  }
  @include tablet {
    .tit-text {
      font-size: 14px;
    }
    .map {
      margin-bottom: 300px;
      padding-top: 200px;
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
          width: 40px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 40px);
        }
      }
    }
    .map__en {
      .bus-method li {
        > div:nth-child(1) {
          flex: 0 0 60px;
          width: 60px;
        }
        > div:nth-child(2) {
          flex: 0 0 calc(100% - 60px);
        }
      }
    }
  }
  @include mobile {
    .contentTitle {
      margin-top: 60px;
    }
    [class*='l-ml'] {
      margin-left: 0 !important;
    }
    .contents-title {
      margin-top: 60px;
    }
    .map {
      margin-bottom: 200px;
      padding-top: 76px;
      section {
        margin-top: 60px;
      }
      .text-h1 {
        font-size: 40px;
        margin-bottom: 30px;
      }
      .text-h2 {
        margin-bottom: 30px;
      }
    }
    .map-js {
      width: 100%;
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
        &:nth-child(2) {
          width: getWidth(8) !important;
        }
      }
    }
    .map__en {
      .bus-method li {
        > div:nth-child(1) {
          width: 100%;
        }
        > div:nth-child(2) {
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="techplayground-karlo-page">
    <div class="intro">
      <div
        v-for="i in 13"
        :key="i"
        class="intro-slide"
        :class="{ 'is-active': i === activeIdx }"
      ></div>
      <div class="karlo">
        <b class="karlo-title">
          새로운<br>창조적 지능,<br>Karlo
        </b>
        <p class="karlo-description">
          Karlo는 사용자가 입력한 문장을 기반으로<br>
          사실적인 이미지와 다양한 작품을 생성할 수 있는<br class="pc-only">
          AI 모델입니다.
        </p>
      </div>
      <img class="karlo-symbol" src="@/assets/images/playground/karlo/karlo_symbol.png" alt="karlo symbol image">
    </div>
    <div class="container">
      <div class="gallery">
        <ul>
          <li v-for="i in 4" :key="i"><img :src="require(`@/assets/images/playground/karlo/karlo_${i-1}.png`)" /></li>
        </ul>
        <img class="gallery-symbol" src="@/assets/images/playground/karlo/karlo_symbol_sm.png"/>
        <img class="gallery-symbol" src="@/assets/images/playground/karlo/diacritic.png"/>
        <img class="gallery-symbol" src="@/assets/images/playground/karlo/diacritic-1.png"/>
        <img class="gallery-symbol tablet-only" src="@/assets/images/playground/karlo/karlo_symbol_sm_mo.png"/>
        <img class="gallery-symbol tablet-only" src="@/assets/images/playground/karlo/diacritic_mo.png"/>
        <img class="gallery-symbol tablet-only" src="@/assets/images/playground/karlo/diacritic-1_mo.png"/>
      </div>
      <h4 class="heading">
        START A NEW WORLD OF ART CREATION, with KARLO API
      </h4>
      <p class="description">
        Karlo API는 사용자가 입력한 문장과 이미지를 기반으로 새로운 이미지를 만드는 기능을 제공합니다. 생성형 인공지능 Karlo는 1억 8만 장 규모의 이미지-텍스트 쌍 데이터 학습을 통해 이미지와 텍스트 간의 연관성을 이해합니다. 사용자가 묘사한 내용을 이해하고, 픽셀 단위로 완전히 새로운 이미지를 생성합니다.
        <br><br>
        또한 사용자가 원하는 콘셉트에 맞춰 창작 활동을 할 수 있도록<br>사물, 배경, 조명, 구도, 다양한 화풍을 지원합니다.
      </p>
      <h4 class="heading lh-12">
        What is Karlo?
      </h4>
      <ul class="introduce">
        <li v-for="(item, idx) in introduce" :key="item.name">
          <div>
            <span class="circle">{{ idx + 1 }}</span>
            <span class="name" v-html="item.name"></span>
          </div>
          <p>{{ item.desp }}</p>
        </li>
      </ul>
      <h4 class="heading lh-12">
        features
      </h4>
      <ul class="introduce">
        <li v-for="(item, idx) in feature" :key="item.name">
          <div>
            <span class="circle">{{ idx + 1 }}</span>
            <span class="name" v-html="item.name"></span>
          </div>
          <p>{{ item.desp }}</p>
        </li>
      </ul>
      <div class="experience">
        <h4 class="heading lh-12">
          Experience it.
        </h4>
        <p class="description">
          Karlo를 통해 사용자들에게<br>
          서비스 브랜드와 콘텐츠를 향한 영감을 불어넣어 보세요.
        </p>
        <tech-button text="Go fot it!" @click="$router.push('/techplayground/karlo/demo')" />
      </div>
    </div>
    <div class="karlo-mark">
      <img class="color" src="@/assets/images/playground/karlo/mark_color.png">
      <img class="bear" src="@/assets/images/playground/karlo/mark_bear.png">
      <img class="cat" src="@/assets/images/playground/karlo/mark_cat.png">
      <img class="flw" src="@/assets/images/playground/karlo/mark_flw.png">
    </div>
  </div>
</template>
<script>
import TechButton from '@/components/techplayground/common/Button'
export default {
  components: {
    TechButton
  },
  layout: 'playground',
  data() {
    return {
      totalImage: 13,
      activeIdx: 0,
      introduce: [
        { name: 'Images &<br>Works', desp: '사용자가 입력한 문장을 기반으로 사실적인 이미지와 다양한 작품을 생성할 수 있는 AI 모델입니다.' },
        { name: '180,000,000<br>Images', desp: '1억 8천만장 규모의 이미지와 이미지를 설명하는 텍스트와의 관계를 학습한 멀티모달 AI 모델입니다.' },
        { name: 'Understanding &<br>Creating', desp: '학습된 결과를 바탕으로 사용자가 입력한 문장을 이해하고, 세상에 없던 새로운 이미지를 생성해냅니다.' }
      ],
      feature: [
        { name: 'Generation', desp: '입력된 단어나 문장을 기반으로 관련된 이미지와 다양한 작품을 생성할 수 있습니다.' },
        { name: 'Variation', desp: '입력된 이미지의 내용을 이해하여 새로운 이미지를 생성합니다.' },
        { name: 'Inpainting', desp: '입력된 텍스트에 따라 이미지의 일부 영역을 사용자 의도에 맞게 편집합니다.' }
      ],
      interval: null
    }
  },
  created() {
    this.activeIdx = 1
    this.interval = setInterval(() => {
      this.activeIdx < this.totalImage
        ? this.activeIdx++
        : this.activeIdx = 1
    }, 7000)
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/pages/karlo.scss';
</style>
<template>
  <div class="techplayground-page">
    <div class="intro">
      <div class="intro-content">
        <img src="@/assets/images/playground/main/img_pc_topvisual.png" alt="">
        <img src="@/assets/images/playground/main/img_pc_topvisual_mo.png" alt="">
        <b>Play on<br>Playground</b>
      </div>
    </div>
    <div class="container">
      <h5 class="title">카카오브레인의<br class="mo-only" /> AI 기술을 만나보세요.</h5>
      <ul class="tech">
        <li>
          <div class="tech-top"></div>
          <div class="tech-bottom">
            <div class="tech-info">
              <span class="name">Karlo</span>
              <p class="desp">
                사용자의 입력을 기반으로 새로운 이미지를 생성하는 인공지능 모델입니다.<br>
                이미지를 생성하거나 편집할 수 있는 기능을 제공합니다.
              </p>
            </div>
            <div class="tech-link">
              <nuxt-link class="p-button p-button__icon ic-home" to="/techplayground/karlo">home</nuxt-link>
              <div>
                <nuxt-link class="p-button p-button__outline" to="/techplayground/karlo/demo">Demo</nuxt-link>
                <nuxt-link class="p-button p-button__outline" to="#">API</nuxt-link>
              </div>
            </div>
          </div>
        </li>
        <li class="empty">
          <img src="@/assets/images/playground/main/empty_card.png" />
        </li>
        <li class="empty">
          <img src="@/assets/images/playground/main/empty_card.png" />
        </li>
      </ul>
      <h4 class="heading">What is<br>Playground</h4>
      <p class="description">
        Playground는 카카오브레인 기술 제품의 체험 공간입니다. <br>카카오브레인은 차별화된 요소 기술과 빅 모델 및 디지털 휴먼을 완성하는 AI 프론티어로서 <br>기술 커뮤니티에 기여하고, 사용 가치와 삶의 질을 높이는 새로운 서비스 영역을 개척합니다. <br>카카오브레인의 최신 기술을 Tech Playground를 통해 만나보세요!
      </p>
      <div class="business">
        <span class="name">Business 제휴 문의</span>
        <a class="mail" href="mailto:bizdev@kakaobrain.com">bizdev@kakaobrain.com</a>
        <p class="desp">
          카카오브레인 Playground의 데모는 체험을 목적으로만 제공되며, 상업적 용도를 비롯한 기타 다른 용도로 사용할 수 없습니다. 각 기술 데모는 각각의 월별 최대 사용량이 제한되어 있습니다. 상업적 용도로 제한 없는 이용을 원하시는 경우 제휴문의를 부탁드립니다.
        </p>
      </div>
      <div class="banner">
        <a href="https://bdiscover.kakaobrain.com/" target="_blank">
          <img src="@/assets/images/playground/main/img_banner.png" alt="">
          <img src="@/assets/images/playground/main/img_banner_mo.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'playground',
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Play on Playground'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/techplayground`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/meta/meta_techplayground_karlo.png`
        }
      ]
    }
  },
  mounted() {
    document.querySelector('.wrap').scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/pages/home.scss';
</style>
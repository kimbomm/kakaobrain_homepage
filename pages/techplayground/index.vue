<template>
  <div class="techplayground-page">
    <div class="intro">
      <div class="intro-content">
        <img src="@/assets/images/playground/main/img_pc_topvisual.png" alt="">
        <b>Play on<br>Playground</b>
      </div>
    </div>
    <div class="container">
      <h5 class="title">카카오브레인의 AI 기술을 만나보세요.</h5>
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
              <nuxt-link class="p-button p-button__icon ic-home" to="#">home</nuxt-link>
              <div>
                <nuxt-link class="p-button p-button__outline" to="#">Demo</nuxt-link>
                <nuxt-link class="p-button p-button__outline" to="#">API</nuxt-link>
              </div>
            </div>
          </div>
        </li>
        <li></li>
        <li></li>
      </ul>
      <h4 class="heading">What is<br>Playground</h4>
      <p class="description">
        Playground는 카카오브레인 기술 제품의 체험 공간입니다.<br>카카오브레인의 최신 기술을 Tech Playground를 통해 만나보세요!
      </p>
      <div class="business">
        <span class="name">Business 제휴 문의</span>
        <a class="mail" href="mailto:bizdev@kakaobrain.com">bizdev@kakaobrain.com</a>
        <p class="desp">
          카카오브레인 Playground의 데모는 기술 체험 편의성을 위해 제공됩니다.<br>각 기술 데모는 각각의 월별 최대 사용량이 제한되어 있습니다. 원활한 사용을 원하실 경우 제휴문의를 부탁드립니다.
        </p>
      </div>
      <div class="banner">
        <a href="#">
          <img src="@/assets/images/playground/main/img_banner.png" alt="">
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'playground'
}
</script>
<style lang="scss" scoped>
@import '/assets/scss/layout/techplayground/pages/home.scss';
</style>
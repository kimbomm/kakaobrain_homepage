<template>
  <div style="padding: 80px">
    <h1>메인페이지</h1>
    <div style="padding: 20px">
      <h2>컴포넌트</h2>
      <nuxt-link to="/component">컴포넌트 페이지 가기</nuxt-link>
    </div>
    <div style="padding: 20px">
      <h2>monthly</h2>
      <nuxt-link to="/monthly-issue/1_id">1 페이지 가기</nuxt-link>
      <nuxt-link to="/monthly-issue/2_id">2 페이지 가기</nuxt-link>
      <nuxt-link to="/monthly-issue/3_id">3 페이지 가기</nuxt-link>
      <nuxt-link to="/monthly-issue/4_id">4 페이지 가기</nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>
<style lang="scss" scoped></style>

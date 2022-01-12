<template>
  <div class="error">
    <h1 v-if="error.statusCode === 400">
      {{ error.statusCode }}
      <span> 잘못 된 요청으로 페이지를 찾을 수 없습니다.</span>
    </h1>
    <h1 v-else-if="error.statusCode === 401">
      {{ error.statusCode }}
      <span> 인증되지 않는 사용자 입니다.</span>
    </h1>
    <h1 v-else-if="error.statusCode === 403">
      {{ error.statusCode }}
      <span>권한이 없습니다.</span>
    </h1>
    <h1 v-else-if="error.statusCode === 404">
      {{ error.statusCode }}
      <span>페이지를 찾을 수 없습니다.</span>
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      {{ error.statusCode }}
      <span>내부 서버 오류</span>
    </h1>
  </div>
</template>
<script>
  export default {
    props: ['error']
  }
</script>
<style lang="scss" scoped>
  .error {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  h1 {
    font-size: 40px;
    font-weight: 900;
  }
</style>

<template>
  <div class="error">
    <img src="@/assets/images/error-404.png" alt="404에러 이미지" />
    <p>{{ errorText }}</p>
    <!-- <h1 v-if="error.statusCode === 400">
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
      <Error404 />
    </h1>
    <h1 v-else-if="error.statusCode === 500">
      {{ error.statusCode }}
      <span>내부 서버 오류</span>
    </h1> -->
  </div>
</template>
<script>
  export default {
    props: ['error'],
    layout: 'errorLayout',
    computed: {
      errorText() {
        let text = ''
        switch (this.error.statusCode) {
          case 400:
            text = '잘못된 요청으로 페이지를 찾을 수 없습니다.'
            break
          case 401:
            text = '인증되지 않은 사용자입니다.'
            break
          case 403:
            text = '권한이 없습니다.'
            break
          case 404:
            text = 'The page tou requested could not found.'
            break
          case 500:
            text = '내부 서버 오류'
            break
        }
        return text
      }
    }
  }
</script>
<style lang="scss" scoped>
  .error {
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    img {
      height: 156px;
    }
    p {
      margin-top: 30px;
      font-weight: 600;
      font-size: 20px;
      line-height: 1.3;
      color: #fff;
      text-align: center;
    }
    @include pc-large {
      img {
        height: 208px;
      }
      p {
        margin-top: 40px;
        font-size: 28px;
      }
    }
    @include pc-4k {
      img {
        height: 312px;
      }
      p {
        margin-top: 50px;
        font-size: 40px;
      }
    }
    @include tablet {
      img {
        height: 91px;
      }
      p {
        margin-top: 20px;
        font-size: 12px;
      }
    }
  }
</style>

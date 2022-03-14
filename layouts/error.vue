<template>
  <div class="error">
    <img
      :src="require(`@/assets/images/error-${onError(error.statusCode)}.png`)"
      :alt="`${error.statusCode}에러 이미지`"
    />
    <p>{{ errorText }}</p>
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
            text = 'Bad Request'
            break
          case 401:
            text = '인증되지 않은 사용자입니다.'
            break
          case 403:
            text = '권한이 없습니다.'
            break
          case 404:
            text = 'The page you requested could not found.'
            break
          case 500:
            text = 'Server Error'
            break
        }
        return text
      }
    },
    methods: {
      onError(code) {
        let returnCode = 404
        if (code === 404 || code === 400 || code === 500) {
          returnCode = code
        }
        return returnCode
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

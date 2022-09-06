<template>
  <button type="button" :class="`icon-sns ${sns}`"></button>
</template>
<script>
  export default {
    name: 'Icon',
    props: {
      sns: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .icon {
    &-sns {
      width: 34px;
      height: 34px;
      border-radius: 50px;
      background-size: cover;
    }
    // black
    &-linkedin-b {
      // background: url('@/assets/images/sns/linkedin-b.svg') no-repeat 100%;
      background: url('@/assets/images/sns/linkedin-b.svg') no-repeat 100%;
    }
    &-facebook-b {
      background: url('@/assets/images/sns/facebook-b.svg') no-repeat 100%;
    }
    &-youtube-b {
      background: url('@/assets/images/sns/youtube-b.svg') no-repeat 100%;
    }
    &-github-b {
      background: url('@/assets/images/sns/github-b.svg') no-repeat 100%;
    }
    // white
    &-linkedin-w {
      background: url('@/assets/images/sns/linkedin-w.svg') no-repeat 100%;
    }
    &-facebook-w {
      background: url('@/assets/images/sns/facebook-w.svg') no-repeat 100%;
    }
    &-youtube-w {
      background: url('@/assets/images/sns/youtube-w.svg') no-repeat 100%;
    }
    &-github-w {
      background: url('@/assets/images/sns/github-w.svg') no-repeat 100%;
    }
  }
</style>

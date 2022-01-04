<template>
  <div class="main">
    <IssueSlider />
    <UnthinkableQuestion />
  </div>
</template>
<script>
  import IssueSlider from '@/components/pages/main/IssueSlider'
  import UnthinkableQuestion from '@/components/pages/main/UnthinkableQuestion'
  export default {
    components: {
      IssueSlider,
      UnthinkableQuestion
    }
  }
</script>
<style lang="scss" scoped>
  @import '/assets/scss/mixins.scss';
  .main {
    padding-top: 200px;
    .question {
      margin-top: 436px;
    }
  }
  @include pc-4k {
    .main {
      padding-top: 260px;
    }
  }
  @include pc-large {
    .main {
      padding-top: 300px;
    }
  }
</style>

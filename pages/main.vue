<template>
  <div class="main">
    <IssueSlider />
    <UnthinkableQuestion />
    <TextFlow />
  </div>
</template>
<script>
  import IssueSlider from '@/components/pages/main/IssueSlider'
  import UnthinkableQuestion from '@/components/pages/main/UnthinkableQuestion'
  import TextFlow from '@/components/pages/main/TextFlow'
  export default {
    components: {
      IssueSlider,
      UnthinkableQuestion,
      TextFlow
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

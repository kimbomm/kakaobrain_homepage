<template>
  <div class="main">
    <IssueSlider />
  </div>
</template>
<script>
  import IssueSlider from '@/components/pages/main/IssueSlider'
  export default {
    components: {
      IssueSlider
    }
  }
</script>
<style lang="scss" scoped>
  @import '/assets/scss/mixins.scss';
  .main {
    padding-top: 200px;
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

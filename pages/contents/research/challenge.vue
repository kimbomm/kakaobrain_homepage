<template>
  <ContentsList category1="research" category2="challenge" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, Challenge',
        meta: [
          {
            hid: 'og-title',
            property: 'og:title',
            content: 'Kakao Brain, Challenge'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://kakaobrain.com/contents/research/challenge'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$config.url + '/meta/meta_homepage_research.png'
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

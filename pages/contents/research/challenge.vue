<template>
  <ContentsList category1="research" category2="challenge" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head: {
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
          content: 'https://stgkakaobrain.com/meta/meta_homepage_research.png'
        }
      ]
    },
    components: {
      ContentsList
    }
  }
</script>

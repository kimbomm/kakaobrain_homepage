<template>
  <ContentsList category1="research" category2="collaborative" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head: {
      title: 'Kakao Brain, Collaborative Research',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Kakao Brain, Collaborative Research'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kakaobrain.com/contents/research/collaborative'
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

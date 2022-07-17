<template>
  <ContentsList category1="research" category2="publications" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, Publications',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain, Publications'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://kakaobrain.com/contents/research/publications'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: process.env.BASE_URL + '/meta/meta_homepage_research.png'
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

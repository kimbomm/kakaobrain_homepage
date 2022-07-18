<template>
  <ContentsList category1="research" category2="publications" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head: {
      title: 'Kakao Brain, Publications',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Kakao Brain, Publications'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kakaobrain.com/contents/research/publications'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.BASE_URL + '/meta/meta_homepage_research.png'
        }
      ]
    },
    components: {
      ContentsList
    }
  }
</script>

<template>
  <ContentsList category1="document" category2="news" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, News',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain, News'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://kakaobrain.com/contents/document/news'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: process.env.BASE_URL + '/meta/meta_homepage_docuB.png'
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

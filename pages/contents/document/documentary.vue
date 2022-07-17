<template>
  <ContentsList category1="document" category2="documentary" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, Documentary',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain, Documentary'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://kakaobrain.com/contents/document/documentary'
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

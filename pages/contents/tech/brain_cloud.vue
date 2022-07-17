<template>
  <ContentsList category1="tech" category2="brain_cloud" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, Brain Cloud',
        meta: [
          {
            hid: 'og-title',
            name: 'og:title',
            content: 'Kakao Brain, Brain Cloud'
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: 'https://kakaobrain.com/contents/tech/brain_cloud'
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: process.env.BASE_URL + '/meta/meta_homepage_tech.png'
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

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
            property: 'og:title',
            content: 'Kakao Brain, Brain Cloud'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://kakaobrain.com/contents/tech/brain_cloud'
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: this.$config.url + '/meta/meta_homepage_tech.png'
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

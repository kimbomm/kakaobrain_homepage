<template>
  <ContentsList category1="tech" category2="digital_human" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        title: 'Kakao Brain, Digital Human',
        meta: [
          {
            hid: 'og-title',
            property: 'og:title',
            content: 'Kakao Brain, Digital Human'
          },
          {
            hid: 'og:url',
            property: 'og:url',
            content: 'https://kakaobrain.com/contents/tech/digital_human'
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

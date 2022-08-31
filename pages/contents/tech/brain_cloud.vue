<template>
  <ContentsList category1="tech" category2="brain_cloud" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head() {
      return {
        meta: [
          {
            hid: 'og:url',
            property: 'og:url',
            content: `${process.env.BASE_URL}/contents/tech/brain_cloud`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${process.env.BASE_URL}/meta/meta_homepage_tech.png`
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

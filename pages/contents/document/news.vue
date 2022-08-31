<template>
  <ContentsList category1="document" category2="news" />
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
            content: `${process.env.BASE_URL}/contents/document/news`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${process.env.BASE_URL}/meta/meta_homepage_docuB.png`
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

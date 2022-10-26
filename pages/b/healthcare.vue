<template>
  <ContentsList category1="b" category2="healthcare" />
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
            content: `${process.env.BASE_URL}/contents/b/healthcare`
          },
          {
            hid: 'og:image',
            property: 'og:image'
            // content: `${process.env.BASE_URL}/meta/meta_homepage_docuB.png`
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

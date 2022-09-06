<template>
  <ContentsList category1="research" category2="challenge" />
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
            content: `${process.env.BASE_URL}/contents/research/challenge`
          },
          {
            hid: 'og:image',
            property: 'og:image',
            content: `${process.env.BASE_URL}/meta/meta_homepage_research.png`
          }
        ]
      }
    },
    components: {
      ContentsList
    }
  }
</script>

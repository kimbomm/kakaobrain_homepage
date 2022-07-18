<template>
  <ContentsList category1="tech" category2="datasets" />
</template>
<script>
  import ContentsList from '@/components/pages/contents/List'
  export default {
    head: {
      title: 'Kakao Brain, Datasets',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: 'Kakao Brain, Datasets'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://kakaobrain.com/contents/tech/datasets'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://stgkakaobrain.com/meta/meta_homepage_tech.png'
        }
      ]
    },
    components: {
      ContentsList
    }
  }
</script>

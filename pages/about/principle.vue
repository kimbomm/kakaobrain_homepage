<template>
  <div>
    <BreadCrumb :data="breadcrumb" :full="true" />
  </div>
</template>
<script>
  import mixinGlobal from '@/mixin/global.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    mixins: [mixinGlobal],
    components: {
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: [
          { text: 'About', sub: 'about', link: '' },
          { text: 'Principle', sub: 'sub', link: '/principle' },
          { text: 'Yeah!!!', sub: '', link: '' }
        ]
      }
    }
  }
</script>

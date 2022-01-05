<template>
  <div class="innovation">
    <ul ref="list" class="innovation-list l-pl-2">
      <li v-for="(item, index) in getRecentList" :key="index" class="gl-3">
        <InnovationCard
          :tit="item.title"
          :publish="item.listing"
          collaborator="Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack"
          :theme="index % 2 === 0 ? 'Innovation-dark' : ''"
        />
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapState, mapGetters } from 'vuex'
  import InnovationCard from '@/components/elements/card/InnovationCard'
  export default {
    components: {
      InnovationCard
    },
    computed: {
      ...mapState({
        innovationList: state => state.innovation.list
      }),
      ...mapGetters({
        getRecentList: 'innovation/getRecentList'
      })
    },
    mounted() {
      console.log(this.$store)
      this.$refs['list'].addEventListener('wheel', e => {})
    }
  }
</script>
<style lang="scss" scoped>
  .innovation {
    background-image: url('@/assets/images/innovation_main_bg.jpeg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 1500px;
    width: calc(100% - 20px);
    margin-left: $gutter;
    display: flex;
    align-items: center;
    &-list {
      overflow-x: auto;
      white-space: nowrap;
      li {
        display: inline-block;
        white-space: initial;
        margin-right: 100px;
      }
    }
  }
</style>

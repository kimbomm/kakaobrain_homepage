<template>
  <div class="archive">
    <div class="gl-8 l-ml-2">
      <span>Archive@kakaobrain</span>
      <span></span>
      <nuxt-link to="/archive"><span>View List </span></nuxt-link>
    </div>
    <ul class="archive-list">
      <li v-for="(item, index) in getRecentList" :key="index" class="gl-2">
        <ArchiveCard
          :tit="item.title"
          :tag="item.sticker"
          :theme="index % 2 === 0 ? 'archive-dark' : ''"
        />
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    components: {
      ArchiveCard
    },
    computed: {
      ...mapGetters({
        getRecentList: 'archive/getRecentList'
      })
    }
  }
</script>
<style lang="scss" scoped>
  .archive {
    padding: 0 20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      span {
        flex: 0;
        font-size: 40px;
        &:nth-child(2) {
          height: 1px;
          background-color: #000;
          flex: 1;
          margin: 0 20px;
        }
      }
    }
    &-list {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
    }
  }
</style>

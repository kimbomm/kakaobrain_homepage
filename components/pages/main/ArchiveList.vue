\
<template>
  <div class="main-archive">
    <div class="gl-8 l-ml-2">
      <span>Archive@kakaobrain</span>
      <span></span>
      <nuxt-link to="/archive"><span>View List </span><span></span></nuxt-link>
    </div>
    <ul class="main-archive-list">
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
  .main-archive {
    padding: 0 20px;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      > span {
        flex: 0;
        &:nth-child(2) {
          height: 1px;
          background-color: #000;
          flex: 1;
          margin: 0 20px;
        }
      }
      span {
        font-size: 40px;
        font-weight: 300;
      }
    }
    &-list {
      margin-top: 100px;
      display: flex;
      justify-content: space-between;
      -ms-overflow-style: none; /* IE and Edge */
      scrollbar-width: none; /* Firefox */
      &::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      .archive {
        width: 100%;
        max-width: none;
        min-width: initial;
        flex: 0 0 100%;
      }
    }
  }
  @include pc-large {
    .main-archive {
      > div {
        span {
          font-size: 52px;
        }
      }
      &-list {
        margin-top: 100px;
      }
    }
  }
  @include pc-4k {
    .main-archive {
      > div {
        span {
          font-size: 74px;
        }
      }
      &-list {
        margin-top: 200px;
      }
    }
  }
  @include tablet {
    .main-archive {
      padding: 0;
      > div {
        span {
          font-size: 30px;
        }
      }
      &-list {
        padding-left: getMargin(2);
        justify-content: flex-start;
        flex-wrap: nowrap;
        overflow-x: auto;
        li {
          flex: 0 0 getWidth(3);
          margin-right: 20px;
        }
      }
    }
  }
  @include mobile {
    .main-archive {
      padding: 0;
      > div {
        width: 100% !important;
        margin-left: 0 !important;
        padding: 0 20px;
        a {
          span {
            font-size: 20px;
            &:nth-child(1) {
              display: none;
            }
          }
        }
        > span {
          font-size: 20px;
          &:nth-child(2) {
            display: none;
          }
        }
      }
      &-list {
        margin-top: 40px;
        padding: 0 20px;
        li {
          flex: 0 0 300px;
          margin-right: 20px;
        }
      }
    }
  }
</style>

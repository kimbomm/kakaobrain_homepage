\
<template>
  <div class="main-archive">
    <div class="gl-8 l-ml-2">
      <span>ARCHIVE@kakaobrain</span>
      <span></span>
      <nuxt-link to="/archive"><span class="title-italic">VIEW LIST </span><span></span></nuxt-link>
    </div>
    <ul class="main-archive-list">
      <li v-for="(item, index) in list" :key="index" class="gl-2">
        <nuxt-link
          :to="{
            name: 'contents-contentId',
            params: { contentId: item.contentId }
          }"
        >
          <ArchiveCard
            :tit="item.title"
            :tag="item.ContentTags"
            :theme="index % 2 === 0 ? 'archive-dark' : ''"
          />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    components: {
      ArchiveCard
    },
    data() {
      return {
        pageData: {
          offset: 0,
          limit: 5,
          contentType: 'ARTICLE',
          targetLang: 'KR'
        },
        list: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      ...mapActions({
        getContentList: 'getContentList'
      }),
      async init() {
        const res = await this.getContentList(this.pageData)
        this.list = res.data.list
      }
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
      .title-italic{
        font-style:italic;
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

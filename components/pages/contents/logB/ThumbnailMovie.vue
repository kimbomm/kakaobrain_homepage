<template>
  <div v-if="data" class="content-log_b">
    <div class="visual">
      <div>
        <button
          v-if="!isPlay"
          class="thumbnail"
          :style="`background-image: url(${$config.baseURL}${youtubeItem.itemProp.youtube.media.url})`"
          @click="onPlay"
          title="영상보기"
        ></button>
        <iframe
          id="iframe"
          :src="`https://www.youtube.com/embed/${youtubeItem.itemProp.youtube.id}?enablejsapi=1&version=3&playerapiid=ytplayer`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div>
        <BreadCrumb :data="breadcrumb" />
      </div>
    </div>
    <div class="visual-content">
      <nuxt-link to="#">
        <div class="title">
          {{ data.title }}
        </div>
      </nuxt-link>
      <div class="info">
        <HashTag size="sm" :hashList="hashList" />
        <div class="date">@{{ $dayjs(data.acceptAt).format('YYYYMMDD') }}</div>
      </div>
      <nuxt-link
        class="btn-link"
        :to="{
          path: '/contents',
          query: { contentId: data.contentId }
        }"
      >
        Detail View
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import Utility from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import HashTag from '@/components/elements/HashTag'
  import ArchiveCard from '@/components/elements/card/ArchiveCard'
  export default {
    props: {
      data: {
        type: Object
      }
    },
    components: {
      BreadCrumb,
      HashTag,
      ArchiveCard
    },
    data() {
      return {
        isPlay: false,
        breadcrumb: [],
        hashList: []
      }
    },
    computed: {
      ...mapState(['language']),
      youtubeItem() {
        let item = this.data.ContentItems.filter(
          data => data.itemType === 'video'
        )[0]
        return item
      }
    },
    async mounted() {
      // this.init()
      this.setBreadcrumb(
        this.data.category1,
        Utility.changeCategory2(this.data.category2)
      )
      this.setHashList()
    },
    methods: {
      ...mapActions(['getNickName', 'getCategoryList']),
      async init() {
        const category2 = ['talk', 'conference', 'v_log']
        category2.forEach(async (categoryName, index) => {
          const res = await this.getCategoryList({
            category1: 'log_b',
            category2: categoryName,
            pageData: this.pageData
          })
          if (res) this.menuList[index].data = res.data.list
        })
      },
      async setBreadcrumb(category1, category2) {
        let subClass = ''
        const info = await this.getNickName({
          category1,
          category2
        })

        switch (category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = category1
            break
        }

        this.title = info.category2.name
        this.breadcrumb.push({
          text: info.category2.nick,
          sub: 'sub',
          link: info.category2.link
        })

        for (let i = 0; i < this.data.ContentTags.length; i++) {
          this.breadcrumb.push({
            text: this.data.ContentTags[i].tag,
            sub: '',
            link: this.data.ContentTags[i].link
          })
        }
      },
      setHashList() {
        for (let i = 0; i < this.data.ContentTags.length; i++) {
          this.hashList.push({
            text: this.data.ContentTags[i].tag
          })
        }
      },
      onPlay() {
        this.isPlay = true
        document
          .getElementById('iframe')
          .contentWindow.postMessage(
            '{"event":"command","func":"' + 'playVideo' + '","args":""}',
            '*'
          )
      }
    }
  }
</script>
<style lang="scss" scoped>
  .content-log_b {
    width: getWidth(7);
    margin-left: getMargin(2);
  }
  .visual {
    display: flex;
    justify-content: space-between;
    > div {
      &:nth-child(1) {
        position: relative;
        flex: 0 0 getWidth(6);
        padding-top: calc(9 / 16 * 100%);
        overflow: hidden;
        .thumbnail {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          z-index: 1;
        }
        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      }
      &:nth-child(2) {
        // flex: 0 0 getWidth(1);
      }
    }
    &-content {
      width: getWidth(5);
      margin: {
        top: 20px;
        left: getMargin(1);
      }
      .title {
        font-size: map-get($font, h2);
        font-weight: 600;
        margin-bottom: 30px;
      }
      .info {
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .date {
          font-size: 12px;
          color: $gray-9;
          line-height: 1.3;
        }
      }
    }
  }
  .btn-link {
    font-size: 16px;
    line-height: 1;
    font-weight: 300;
    text-transform: uppercase;
    font-style: italic;
    &:after {
      content: '';
      font-family: 'Inter';
      font-style: normal;
      margin-left: 10px;
    }
  }

  @include pc-large {
    .visual-content {
      .title {
        font-size: 54px;
        margin-bottom: 40px;
      }
      .info {
        margin-bottom: 80px;
        .date {
          font-size: 16px;
        }
      }
    }
    .btn-link {
      font-size: 26px;
    }
  }
  @include pc-4k {
    .visual-content {
      .title {
        font-size: 82px;
        margin-bottom: 60px;
      }
      .info {
        margin-bottom: 110px;
        .date {
          font-size: 24px;
        }
      }
    }
    .btn-link {
      font-size: 36px;
    }
  }
  @include tablet {
    .content-log_b {
      width: getWidth(8);
      margin-left: getMargin(1);
    }
    .visual {
      margin-left: getMargin(1);
    }
    .visual-content {
      margin-left: getMargin(2);
      .title {
        font-size: 24px;
        margin-bottom: 24px;
      }
      .info {
        margin-bottom: 40px;
      }
    }
    .btn-link {
      font-size: 16px;
    }
  }
  @include mobile {
    .content-log_b {
      width: 100%;
      margin-left: 0;
    }
    .visual {
      margin-left: 0;
      display: block;
      > div:nth-child(1) {
        flex: 1;
      }
      > div:nth-child(2) {
        display: none;
      }
    }
    .visual-content {
      width: 100%;
      margin-left: 0;
      .title {
        font-size: 20px;
        margin-bottom: 20px;
      }
      .info {
        display: block;
        margin-bottom: 30px;
      }
    }
    .hash-list {
      margin-bottom: 6px;
    }
    .btn-link {
      font-size: 14px;
    }
  }
</style>

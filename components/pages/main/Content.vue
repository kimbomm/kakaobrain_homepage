<template>
  <div :class="articleClassBind">
    <div class="date">
      <span class="gl-1">
        {{ $dayjs(data.Content.acceptAt).format('YYYY/MM/DD') }}
      </span>
      <span> {{ $dayjs().diff(data.Content.acceptAt, 'hour') }}h </span>
    </div>

    <div :class="gridClassBind">
      <div class="article-info">
        <div class="thumbnail">
          <nuxt-link
            :to="
              data.Content.contentType !== 'STORY'
                ? {
                    name: 'contents-contentId',
                    params: { contentId: data.contentId }
                  }
                : {
                    path: 'story-telling',
                    query: { contentId: data.contentId }
                  }
            "
          >
            <img :src="srcPath" />
          </nuxt-link>
        </div>
        <nuxt-link
          :to="
            data.Content.contentType !== 'STORY'
              ? {
                  name: 'contents-contentId',
                  params: { contentId: data.contentId }
                }
              : {
                  path: 'story-telling',
                  query: { contentId: data.contentId }
                }
          "
        >
          <div class="title">
            <span>☞ {{ data.Content.title }}</span>
            <span></span>
          </div>
        </nuxt-link>
      </div>
      <div class="tags">
        <BreadCrumb :data="breadcrumb" />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    props: {
      data: {
        type: Object,
        default: () => {},
        require: true
      }
    },
    components: {
      BreadCrumb
    },
    data() {
      return {
        srcPath: null,
        breadcrumb: []
      }
    },
    computed: {
      isPc() {
        return this.data.Media && window.innerWidth > 768
      },
      isMob() {
        return this.data.MobileMedia && window.innerWidth <= 768
      },
      articleClassBind() {
        let classList = ['article']
        if (this.data.contentProp.position.order > 0) {
          classList.push(`l-ml-${this.data.contentProp.position.order}`)
        }
        return classList
      },
      gridClassBind() {
        let classList = ['article-content']
        if (this.data.contentProp.position.width > 0) {
          classList.push(`gl-${this.data.contentProp.position.width}`)
        }
        return classList
      }
    },
    async mounted() {
      await this.setImagePath()
      await this.setBreadcrumb(
        this.data.Content.category1,
        this.data.Content.category2
      )
      window.addEventListener('resize', this.setImagePath)
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.setImagePath)
    },
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      setImagePath() {
        let path = 'https://kkbapi.freeive.dev'

        if (window.innerWidth >= 768) {
          path += this.data.contentProp.mediaInfo.pc.media.url
        } else {
          path += this.data.contentProp.mediaInfo.mobile.media.url
        }
        this.srcPath = path
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

        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )

        for (let i = 0; i < this.data.Content.ContentTags.length; i++) {
          this.breadcrumb.push({
            text: this.data.Content.ContentTags[i].tag,
            sub: '',
            link: this.data.Content.ContentTags[i].link
          })
        }
      },
      goDetail() {}
    }
  }
</script>
<style lang="scss" scoped>
  .date {
    display: flex;
    margin-bottom: 10px;
    span {
      font-size: 12px;
      display: inline-block;
      margin-right: $gutter;
    }
  }
  .article-content {
    display: flex;
    justify-content: space-between;
  }
  .article-info {
    flex: 1;
  }
  .thumbnail {
      box-shadow: 30px 30px 50px -10px rgba(0,0,0,0.2);
    img {
      display: block;
      width: 100%;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 1.3;
    margin-top: 10px;
    span{
      line-height: 150%
    }
    span:nth-child(1) {
      display: inline-block;
      flex: 0 0 calc(100% - 50px);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .tags {
    text-align: right;
    margin-left: 20px;
    flex: 0 0 getWidth(1);
    .btn {
      margin-right: 0;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
    }
  }

  @include pc-large {
    .date span {
      font-size: 16px;
    }
    .title {
      font-size: 24px;
    }
  }
  @include pc-4k {
    .date span {
      font-size: 24px;
    }
    .title {
      font-size: 34px;
    }
  }
  @include tablet {
    .date span {
      font-size: 12px;
    }
    .title {
      font-size: 18px;
    }
  }
  @include mobile {
    .article {
      margin-top: 70px;
      padding: 0 20px;
      [class*='gl-'] {
        width: 100% !important;
      }
    }
    .article-content {
      display: block;
    }
    .tags {
      margin-top: 20px;
      text-align: left;
      flex: 0;
      width: 100%;
      margin-left: 0;
      .btn {
        margin-right: 4px;
        margin-top: 6px;
        &:first-child {
          margin-top: inherit;
        }
      }
    }
    .date {
      display: flex;
      justify-content: space-between;
      span {
        margin-right: 0;
        font-size: 12px;
      }
    }
    .title {
      font-size: 16px;
      span:nth-child(2) {
        font-size:18px;
      }
    }
  }
</style>

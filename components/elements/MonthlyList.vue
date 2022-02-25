<template>
  <div>
    <div class="monthly-list gl-7 l-ml-2">
      <nuxt-link
        :to="
          data.Content.contentType !== 'STORY'
            ? {
                path: 'contents',
                query: { contentId: data.contentId }
              }
            : {
                path: 'story-telling',
                query: { contentId: data.contentId }
              }
        "
      >
        <div
          class="monthly-thumbnail gl-6"
          :style="`background-image: url(${envVariable(data.Media.url)});`"
        >
          <div class="thumbnail-data">
            <div class="date">
              {{ $dayjs(data.Content.createAt).format('MMMM') }}
              @
              {{ $dayjs(data.Content.createAt).format('YYYY') }}
            </div>
            <div class="name">{{ data.title }}</div>
          </div>
        </div>
      </nuxt-link>
      <div class="list-btn gl-1">
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
        default: () => {}
      }
    },
    components: {
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: []
      }
    },
    mounted() {
      this.init()
    },
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        await this.setBreadcrumb(
          this.data.Content.category1,
          this.data.Content.category2
        )
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
      envVariable(url) {
        return `${this.$config.baseURL}${url}`
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    &-list {
      display: flex;
      justify-content: space-around;
    }
    &-thumbnail {
      height: 450px;
      position: relative;
      display: inline-block;
      box-shadow: 30px 30px 50px -10px #cfd0d3;
      background-size: cover;
      background-position: center center;
      .thumbnail-data {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: $gray-0;
        font-style: italic;
        font-weight: 900;
        width: 90%;
        .date {
          font-size: 20px;
          line-height: 100%;
          margin-bottom: 30px;
        }
        .name {
          font-size: 60px;
          line-height: 100%;
        }
      }
    }
  }
  .list-btn {
    position: relative;
    z-index: 1;
    text-align: right !important;
  }

  @include pc-large {
    .monthly-thumbnail {
      height: 604px;
    }
  }
  @include pc-4k {
    .monthly-thumbnail {
      height: 912px;
    }
  }
  @include tablet {
    .monthly {
      &-thumbnail {
        height: 300px;
        .thumbnail-data {
          .date {
            font-size: 14px;
          }
          .name {
            font-size: 40px;
          }
        }
      }
    }
  }

  @include mobile {
    .monthly {
      &-list {
        flex-direction: column;
      }
      &-thumbnail {
        height: 400px;
        margin-bottom: 10px;
        .thumbnail-data {
          .date {
            font-size: 12px;
          }
          .name {
            font-size: 30px;
          }
        }
      }
    }
    .gl-1 {
      width: 100% !important;
    }
    .gl-6 {
      width: 100% !important;
    }
    .gl-7 {
      width: 100% !important;
    }
    .l-ml-2 {
      margin-left: 0px !important;
    }
    .list-btn {
      text-align: left !important;
    }
  }
</style>

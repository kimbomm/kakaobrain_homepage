<template>
  <div>
    <div class="monthly-list gl-7 l-ml-2">
      <div class="monthly-thumbnail gl-6">
        <img src="@/assets/images/monthly-list_img_1.png" />
        <div class="thumbnail-data">
          <div class="date">November@2021 - 1</div>
          <div class="name">{{ data.Content.title }}</div>
        </div>
      </div>
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
    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async init() {
        await this.setBreadcrumb(this.data.category1, this.data.category2)
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

        for (let i = 0; i < this.data.ContentTags.length; i++) {
          this.breadcrumb.push({
            text: this.data.ContentTags[i].tag,
            sub: '',
            link: this.data.ContentTags[i].link
          })
        }
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
      position: relative;
      display: inline-block;
      box-shadow: 30px 30px 50px -10px #cfd0d3;
      img {
        width: 100%;

        // position: absolute;
        // top: 50%;
        // left: 50%;
        // transform: translate(-50%, -50%);
        // width: 100%;
        // height: 100%;
      }
      .thumbnail-data {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        color: $gray-0;
        font-style: italic;
        font-weight: 900;
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
  @include tablet {
    .monthly {
      &-thumbnail {
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

<template>
  <div :class="articleClassBind">
    <div class="date">
      <span class="gl-1">2021/11/01</span>
      <span>7h</span>
    </div>
    <div :class="gridClassBind">
      <div class="article-info">
        <div class="thumbnail">
          <img :src="require(`@/assets/images/article_img_dummy.png`)" />
        </div>
        <div class="title">
          <span>☞ We are hiring!!!</span>
          <span></span>
        </div>
      </div>
      <div class="tags">
        <BreadCrumb :data="breadcrumb" />
      </div>
    </div>
  </div>
</template>
<script>
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    props: {
      order: {
        type: Number,
        default: 0,
        require: false
      },
      grid: {
        type: Number,
        default: 1,
        require: true
      }
    },
    components: {
      BreadCrumb
    },
    data() {
      return {
        breadcrumb: [
          { text: 'About', sub: 'about', link: '' },
          { text: 'Introduce', sub: 'sub', link: '/about' },
          { text: 'Yeah!!!', sub: '', link: '' }
        ]
      }
    },
    computed: {
      articleClassBind() {
        let classList = ['article']
        if (this.order > 0) {
          classList.push(`l-ml-${this.order}`)
        }
        return classList
      },
      gridClassBind() {
        let classList = ['article-content']
        if (this.grid > 0) {
          classList.push(`gl-${this.grid}`)
        }
        return classList
      }
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
    img {
      width: 100%;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
    font-size: 18px;
    line-height: 1.3;
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
      margin-top: 17px;
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
    }
  }
</style>

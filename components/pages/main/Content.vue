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
      <div class="tags gl-1">
        <Sticker text="Docu. B" sub="docu" />
        <Sticker text="Documentary" sub="sub" />
        <Sticker text="Educations" />
      </div>
    </div>
  </div>
</template>
<script>
  import Sticker from '@/components/elements/button/Sticker'
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
      Sticker
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
  .thumbnail {
    img {
      width: 100%;
    }
  }
  .title {
    display: flex;
    justify-content: space-between;
  }
  .tags {
    text-align: right;
    .btn {
      margin-right: 0;
      margin-top: 10px;
      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>

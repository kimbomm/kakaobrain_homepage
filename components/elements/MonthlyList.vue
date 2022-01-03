<template>
  <div>
    <div class="monthly-list gl-7 l-ml-2">
      <div class="monthly-thumbnail gl-6">
        <img src="@/assets/images/monthly-list_img_1.png" />
        <div class="thumbnail-data">
          <div class="date">November@2021 - 1</div>
          <div class="name">Hello World.</div>
        </div>
      </div>
      <div class="list-btn gl-1">
        <Sticker text="Docu. B" sub="docu"></Sticker>
        <Sticker text="Documentary" sub="sub"></Sticker>
        <Sticker text="Curtis.abcd"></Sticker>
      </div>
    </div>
  </div>
</template>
<script>
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    components: {
      Sticker
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .monthly {
    &-thumbnail {
      position: relative;
      display: inline-block;
      img {
        width: 100%;
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
    display: inline-block;
    vertical-align: top;
    text-align: right;
  }
</style>

<template>
  <div :class="`Innovation ${theme}`">
    <div class="Innovation-inner">
      <div class="Innovation-tit">{{ tit }}</div>
      <div class="Innovation-con">
        <div class="item">
          <div class="item-mark">*</div>
          <div class="item-txt">{{ publish }}</div>
        </div>
        <div class="item">
          <div class="item-mark">^</div>
          <div class="item-txt">{{ collaborator }}</div>
        </div>
        <div class="tag">
          <ul>
            <li class="tag-item"><span class="tag-txt">#Optimization</span></li>
            <li class="tag-item"><span class="tag-txt">#AutoML</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'InnovationCard',
    props: {
      tit: {
        type: String,
        default: '',
        required: true
      },
      publish: {
        type: String,
        default: '',
        required: true
      },
      collaborator: {
        type: String,
        default: '',
        required: true
      },
      theme: {
        type: String,
        default: '',
        required: false
      }
    }
  }
</script>
<style lang="scss" scoped>
  .area {
    .Innovation {
      height: auto;
      &-tit {
        margin-bottom: 110px;
        -webkit-line-clamp: unset;
      }
    }
  }
  .Innovation {
    position: relative;
    display: inline-block;
    max-width: 550px;
    min-width: 300px;
    height: 700px;
    padding: 20px;
    box-shadow: 30px 30px 50px -10px #cfd0d3;
    background-color: $gray-0;
    color: $gray-9;
    box-sizing: border-box;
    word-break: break-all;
    &:not(:last-child) {
      margin-right: 100px;
    }
    &-inner {
      display: flex;
      height: 100%;
      flex-direction: column;
      justify-content: space-between;
    }
    &-tit {
      // margin-bottom:110px;
      font-size: 40px;
      font-weight: 400;
      word-break: break-all;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 8;
      -webkit-box-orient: vertical;
    }

    .item {
      margin-bottom: 30px;
      &:nth-child(2) {
        margin-bottom: 64px;
      }
      &-mark {
        line-height: 45px;
        font-size: 50px;
        font-weight: 900;
      }
      &-txt {
        font-size: 16px;
      }
    }
    .tag {
      &-item {
        display: inline-block;
        &:not(:last-child) {
          margin-right: 10px;
        }
      }
      &-txt {
        font-size: 14px;
      }
    }
  }

  .Innovation {
    &-dark {
      background-color: $gray-9;
      color: $gray-0;
    }
  }
</style>

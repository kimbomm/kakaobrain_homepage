<template>
  <div>
    <div class="menu-list gl-6">
      <div class="menu-thumbnail gl-1">
        <img src="@/assets/images/menu-list_img_1.png" />
      </div>
      <div class="list-data gl-5">
        <div class="tit">{{ tit }}</div>
        <div class="tag">
          <div class="item-box">
            <div class="item">#보도자료</div>
            <div class="item">#Optimization</div>
            <div class="item">#AutoML</div>
          </div> 
          <div class="list-date">{{ date }}</div>
        </div>
        <!-- <Sticker text="Docu. B" sub="docu"></Sticker>
        <Sticker text="Documentary" sub="sub"></Sticker>
        <Sticker text="Curtis.abcd"></Sticker> -->
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MenuList',
    props:{
      tit: {
        type: String,
        default: '',
        required: true
      },
      date: {
        type: String,
        default: '',
        required: true
      },
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';
  
  .menu{
    &-list{
      display: flex;
      justify-content: space-between;
      box-sizing: border-box;
    }
    &-thumbnail{
      img{
        width:100%;
      }
    }
  }
  .list-data{
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 30px 0 0;
    border-top:1px solid $gray-9;
    .tit{
      padding-bottom:33px;
      font-size: 30px;
      line-height: 100%;
    }
  }
  .tag{
    .item-box{
      .item{
        display: inline-block;
        font-size: 12px;
        line-height: 130%;
        &:not(:last-child){
          margin-right:10px;
        }
      }
    }
    .list-date{
      position: absolute;
      bottom:0px;
      right:0px;
      font-size: 12px;
      line-height: 130%;
      &::before{
        content: "@";
        display: inline-block;
      }
    }
  }
  
  @include pc-4k {
    
    .list-data{
      .tit{
        padding-bottom:98px;
        font-size: 60px;
      }
    }
    .tag{
      .item-box{
        .item{
          font-size: 24px !important;
        }
      }
      .list-date{
        font-size: 24px !important;
      }
    }
  }
  @include pc-large {
    .list-data{
      padding: 30px 0 0;
      .tit{
        padding-bottom:54px; 
        font-size: 40px;
      }
    }
    .tag{
      .item-box{
        .item{
          font-size: 16px;
        }
      }
      .list-date{
        font-size: 16px;
      }
    }
  }
  @include tablet {
    .list-data{
      padding: 20px 0 0;
      .tit{
        padding-bottom:53px; 
        font-size: 20px;
      }
    }
    .tag{
      .item-box{
        .item{
          font-size: 12px;
        }
      }
      .list-date{
        font-size: 12px;
      }
    }
    
    .menu-list{
      &.gl-6{
        width:calc(calc((100vw - 20px * 11) / 10) * 9 + 20px * (9 - 1)) !important;
      }
      .gl-1 {
          width: calc(calc((100vw - 20px * 11) / 10) * 2 + 20px * (2 - 1)) !important;
      }
      .gl-5{
        width:calc(calc((100vw - 20px * 11) / 10) * 7 + 20px * (7 - 1)) !important;
      }
    }
  }
  @include mobile {
    
    
    
    .menu-list{
      padding-top:20px;
      border-top:1px solid $gray-9;
      flex-direction: column;
      &.gl-6{
        width:100% !important;
      }
      .gl-1{
        width:100% !important;
      }
      .list-data{
        padding: 10px 0 0;
        border-top:0px;
        &.gl-5{
          width:100% !important;
        }
        .tit{
          padding-bottom:20px; 
          font-size: 16px;
        }
      }
      .tag{
        .item-box{
          .item{
            font-size: 12px;
          }
        }
        .list-date{
          position: static;
          margin-top:6px;
          font-size: 12px;
        }
      }
    }
  }
</style>

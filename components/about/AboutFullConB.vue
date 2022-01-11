<template>
  <div class="about-full-con-b">
    <div class="full-con">
      <img src="@/assets/images/about-full-conB_img.png">
      <div class="inner">
        <div class="con-tit gl-6 l-ml-2">
          <div>Create the impact</div>
          <div>of the world in a way that</div>
          <div>no one has thought of.</div>
        </div>
        <div class="con-item l-ml-2">
          <div class="item gl-2">
            <div class="item-tit">Open Research.</div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Create Novel Algorithm</div>
              <div class="item-txt">Prospect future deep learning prior research and develop original algorithms to lay the foundation for new challenges.</div>
            </div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Develop Commercial-level Model</div>
              <div class="item-txt">By conducting application research and further expanding the model scale, we complete the technology and digital human necessary for service development.</div>
            </div>
          </div>
          <div class="item gl-2 l-ml-1">
            <div class="item-tit">Open Research.</div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Create Novel Algorithm</div>
              <div class="item-txt">Prospect future deep learning prior research and develop original algorithms to lay the foundation for new challenges.</div>
            </div>
            <div class="item-txt-box">
              <div class="item-sub-tit">Develop Commercial-level Model</div>
              <div class="item-txt">By conducting application research and further expanding the model scale, we complete the technology and digital human necessary for service development.</div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConA'
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-b{
    .full-con{
      position: relative;
      width:100%;
      height:1689px;
      &::before{
        position: absolute;
      }
      img{
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      
      .inner{
        position: absolute;
        top:400px;
        color:$gray-0;
      }
      .con{
        &-tit{
          margin-bottom:200px;
          line-height: 120%;
          font-weight: 900;
          font-size:90px;
        }
        // &-item{

        // }
      }
      .item{
        display: inline-block;
        &-tit{
          margin-bottom:70px;
          line-height: 110%;
          font-weight:600;
          font-size:44px;
        }
        &-txt-box{
          line-height: 150%;
          &:not(:last-child){
            margin-bottom:40px;
          }
        }
        &-sub-tit{
          font-size:20px;
          font-weight:600;
          margin-bottom:10px;
        }
        &-txt{
          font-size:14px;
          font-weight:400;
        }
      }
    }
  }
</style>
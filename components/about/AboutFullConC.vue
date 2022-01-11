<template>
  <div class="about-full-con-c">
    <div class="title">Unthinkable Question</div>
    <div class="txt-box gl-5 l-ml-3">
      <div class="txt">We are an AI company where specialists from various fields with various questions and thoughts gather to conflict each other's thoughts and know-how, creating new possibilities and dialectical values.</div>
      <div class="txt">We are an AI company where specialists from various fields with various questions and thoughts gather to conflict each other's thoughts and know-how, creating new possibilities and dialectical values.</div>
    </div>
    <div class="history l-ml-2"> 
      <div class="history-logo gl-6">
        <img src="@/assets/images/logo-history.png">
        <div class="item-txt">
          <div class="txt">Brain</div>
          <div class="txt">Meta Data</div>
          <div class="txt">Human Data</div>
          <div class="txt">Statistic Analysis Research</div>
          <div class="txt">Organized</div>
        </div>
      </div>
      <div class="logo-text gl-7 l-ml-1">It captures flexible and diverse identities with its own design, and reflects the essence of circulation, harmony, artificial intelligence technology, development, and growth in terms of meaning and visual aspects as a motif.</div>
      <div class="Symbol-mark">
        <div class="tit">Symbol mark</div>
        <img src="@/assets/images/symbol-logo.png">
      </div>
      <div class="Symbol-mark">
        <div class="tit">with tagline</div>  
        <img src="@/assets/images/symbol-logo_2.png">
      </div> 
      <div class="download l-ml-1">
        <div class="txt">Click the button below to download the Brand file.</div>
        <button type="button" class="btn">
          <span>download ↓</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  .about-full-con-c{
    padding:400px 0;
    background-color:$gray-9;
    color:$gray-0;
    .title{
      margin-bottom:100px;
      text-align: center;
      font-size:130px;
      font-weight:900; 
    }
    .txt-box{
      margin-bottom:400px;
      .txt{
        line-height: 130%;
        font-size:30px;
        &:not(:last-child){
          margin-bottom:20px;
        }
      }
    }
    .history{
      &-logo{
        margin-bottom:300px;
        img{
          width:100%;
        }
      }
      .item-txt{
        margin-top:40px;
        .txt{
          display: inline-block;
          vertical-align: top;
          font-size:14px;
          color: $gray-5;
          line-height: 130%;
          &:nth-child(1){
            margin-right:285px;
          }
          &:nth-child(2){
            margin-right:24px;
          }
          &:nth-child(3){
            margin-right:232px;
          }
          &:nth-child(4){
            width:62px;
            margin-right:257px;
          }
        }
      }
      .logo-text{
        margin-bottom:300px;
        font-size: 40px;
        line-height: 130%;
      }
      .Symbol-mark{
        margin-bottom:200px;
        .tit{
          margin-bottom:10px;
          line-height: 130%;
          font-size: 14px;
          color:$surface-8;
        }
        img{
          width:100%;
        }
      }
      .download{
        .txt{
          margin-bottom:60px;
          line-height: 130%;
          font-size: 20px;
        }
        .btn{
          width: 170px;
          height: 50px;
          padding:16px 44px;
          border:1px solid $gray-0;
          border-radius: 0px;
          box-sizing: border-box;
          line-height: 130%;
          font-size: 14px;
          color: $gray-0;
          font-style:normal;
        }
      }
    }
  }
</style>
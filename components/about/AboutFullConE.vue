<template>
  <div class="about-full-con-e">
    <div class="full-con">
      <img src="@/assets/images/about-full-conE_img_1.png">
      <div class="inner">
        <div class="con-tit gl-8 l-ml-2">
          <div>We aim for horizontal<br/>communication.</div>
        </div>
        <div class="text-box gl-6 l-ml-3">
          <div class="txt">It means a culture of freely expressing opinions in discussions. During the discussion process, anyone can clarify their thoughts, and regardless of their status, discussions are made "horizontally" on the topic of discussion. In addition, all suggestions can be made directly to the representative, and the public forum is always held.<br/><br/>The thoughts and opinions of members delivered through 'horizontal' discussions can lead to better decision-makers. If there comes a moment when you have to take responsibility and make a "choice" because it is difficult to make decisions with further discussions, each determined decision maker will make the final decision.</div>
        </div>
        <div class="material gl-6 l-ml-2">
          <!-- <img src="@/assets/images/material_2.png"/> -->
        
          <ul class="material-box">
            <li class="material-item ">
              <div class="material-text">
                <div class="tit">English Nickname</div>
                <!-- <div class="txt">Every monday</div> -->
              </div>
            </li>
            <li class="material-item ">
              <div class="material-text">
                <div class="tit">Horizontal Communication</div>
              </div>
              <div class="l-line"></div>
              <div class="r-line"></div>
            </li>
            <li class="material-item ">
              <div class="material-text">
                <div class="tit">Trust Conflict Dedication</div>
                <!-- <div class="txt">The last Friday of every month</div> -->
              </div>
            </li>
          </ul>
        
        </div>
      </div> 
    </div>
  </div>
</template>
<script>
export default {
  name:'AboutFullConE',
}
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/mixins.scss';

  .about-full-con-e{
    .full-con{
      position: relative;
      width:100%;
      padding: 400px 0;
      img{
        position: absolute; 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 100%;
      }
      
      .inner{
        position: relative;
        padding:0 20px;
        color:$gray-0;

        .con{
          &-tit{
            margin-bottom:200px;
            line-height: 120%;
            font-weight: 900;
            font-size:90px;
          }
        }
        .text-box{
          margin-bottom:200px;
          .txt{
            font-size: 22px;
            line-height: 150%;
            &:not(:last-child){
              margin-bottom:40px;
            }
          }
        }
        .material{
          &-box{
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          &-item{
            position: relative;
            width:280px;
            height:280px;
            border:2px solid $gray-0;
            border-radius: 50%;
            &:nth-child(2){
              background-color: $gray-0;
              color: $gray-9;
            }
            .l-line{
              position: absolute;
              left:-120px;
              top:50%;
              width:120px;
              height:1px;
              border: 1px solid $gray-0;
              &::before{
                content: "";
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-50%,-50%);
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-right: 10px solid $gray-0;
              }
            }
            .r-line{
              position: absolute;
              right:-120px;
              top:50%;
              width:120px;
              height:1px;
              border: 1px solid $gray-0;
              &::before{
                content: "";
                position: absolute;
                right: 0;
                top: 50%;
                transform: translate(0,-50%);
                width: 0;
                height: 0;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                border-left: 10px solid $gray-0;
              }
            }
          }
          &-text{
              position: absolute;
              left:50%;
              top:50%;
              text-align: center;
              transform: translate(-50%,-50%);
            .tit{
              font-size:20px;
              font-weight: 900;
              line-height: 110%;
              margin-bottom:6px;
            }
            .txt{
              font-size:14px;
              line-height: 120%;
            }
          }
        }

      }
    }
  }
  @include pc-large {
    
    .about-full-con-e{
      .full-con{
        padding: 530px 0;
        .inner{
          .con{
            &-tit{
              margin-bottom:130px;
              font-size:120px;
            }
          }
          .text-box{
            margin-bottom:260px;
            .txt{
              font-size: 40px;
              &:not(:last-child){
                margin-bottom:20px;
              }
            }
          }
          .material{
            &-item{
              width:376px ;
              height:376px ;
              .l-line{
                left:-161px ;
                width:161px ;
              }
              .r-line{
                right:-161px ;
                width:161px ;
              }
            }
            &-text{
              .tit{
                font-size:30px ;
                margin-bottom:6px ;
              }
              .txt{
                font-size:18px;
              }
            }
          }
        }
      }
    }
  }
  
  @include pc-4k {
    
    .about-full-con-e{
      .full-con{
        padding: 800px 0;
        .inner{
          .con{
            &-tit{
              margin-bottom:200px;
              font-size:180px;
            }
          }
          .text-box{
            margin-bottom:330px;
            .txt{
              font-size: 60px;
              &:not(:last-child){
                margin-bottom:30px;
              }
            }
          }
          .material{
            &-item{
              width:500px;
              height:500px;
              .l-line{
                left:-284px;
                width:284px;
              }
              .r-line{
                right:-284px;
                width:284px;
              }
            }
            &-text{
              .tit{
                font-size:30px;
                margin-bottom:6px;
              }
              .txt{
                font-size:18px;
              }
            }
          }
        }
      }
    }
  }
  
  @media screen and (min-width:4400px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:664px;
              height:664px;
              .l-line{
                left:-284px ;
                width:284px ;
              }
              .r-line{
                right:-284px ;
                width:284px ;
              }
            }
 
          }
        }
      }
    }
  }

  
  @media screen and (max-width:1900px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:230px ;
              height:230px ;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width:1650px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:180px ;
              height:180px ;
              .l-line{
                left:-80px ;
                width:80px ;
              }
              .r-line{
                right:-80px ;
                width:80px ;
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width:1300px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:150px ;
              height:150px ;
              .l-line{
                left:-62px ;
                width:62px ;
              }
              .r-line{
                right:-62px ;
                width:62px ;
              }
            }
            &-text{
              .tit{
                font-size:17px ;
              }
            }
          }
        }
      }
    }
  }

  @include tablet {
    
    .about-full-con-e{
      .full-con{
        padding: 200px 0;
        .inner{
          .con{
            &-tit{
              margin-bottom:50px;
              font-size:46px;
            }
          }
          .text-box{
            margin-bottom:100px;
            .txt{
              font-size: 16px;
              &:not(:last-child){
                margin-bottom:20px;
              }
            }
          }
          .material{
            &-item{
              width:146px ;
              height:146px ;
              .l-line{
                left:-62px ;
                width:62px ;
                &::before{
                  content: "";
                  border-top: 7px solid transparent;
                  border-bottom: 7px solid transparent;
                  border-right: 7px solid $gray-0;
                }
              }
              .r-line{
                right:-62px ;
                width:62px ;
                &::before{
                  border-top: 7px solid transparent;
                  border-bottom: 7px solid transparent;
                  border-left: 7px solid $gray-0;
                }
              }
            }
            &-text{
              .tit{
                font-size:15px ;
                margin-bottom:0px;
              }
            }
          }
        }
      }
    }
  }
 
  @media screen and (max-width:1000px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:120px ;
              height:120px ;
              .l-line{
                left:-50px ;
                width:50px ;
              }
              .r-line{
                right:-50px ;
                width:50px ;
              }
            }
          }
        }
      }
    }
  }

  @media screen and (max-width:850px) {
    .about-full-con-e{
      .full-con{
        .inner{
          .material{
            &-item{
              width:100px ;
              height:100px ;
              .l-line{
                left:-40px ;
                width:40px ;
              }
              .r-line{
                right:-40px ;
                width:40px ;
              }
            }
          }
        }
      }
    }
  }

  @include mobile {
    .about-full-con-e{
      .full-con{
        padding: 100px 0;
        .inner{
          .con{
            &-tit{
              margin-bottom:30px;
              font-size:28px;
              &.gl-8{
                width: 100% !important;
              }
              &.l-ml-2{
                margin-left:0px !important;
              }
            }
          }
          .text-box{
            margin-bottom:100px ;
            &.gl-6{
              width: getWidth(9) !important;
            }
            &.l-ml-3{
              margin-left: getMargin(1) !important;
            }
            .txt{
              font-size: 16px;
              &:not(:last-child){
                margin-bottom:20px;
              }
            }
          }
          .material{
            &-box{
              flex-direction: column;
            }
            &-item{
              width:146px;
              height:146px;
              &:nth-child(2){
                margin: 42px 0;
              }
              .l-line{
                left:50%;
                top:-32px;
                width:0px;
                height:32px;
                &::before{
                  left: 50%;
                  top:-4px;
                  border-bottom: 5px solid $gray-0;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                }
              }
              .r-line{
                position: absolute;
                left: 50%;
                top:auto;
                // bottom:0px;
                bottom:-32px;
                width:0px;
                height:32px;
                &::before{
                  content: "";
                  position: absolute;
                  left:auto;
                  right:auto;
                  top: auto;
                  bottom:-12px;
                  transform: translate(-50%,0);
                  border-top: 5px solid $gray-0;
                  border-left: 5px solid transparent;
                  border-right: 5px solid transparent;
                }
              }
            }
            &-text{
              .tit{
                font-size:15px;
              }
            }
          }
        }
      }
    }
  }
</style>
<template>
  <div class="vision-list">
    <div class="list-con">
      <div ref="target" class="list-img">
        <img
          :src="require(`@/assets/images/about/visual_${index}_${NUMBER}.png`)"
        />
      </div>
      <div class="list-txt gl-8">
        <div class="txt">
          <span class="num">{{ data.num }}</span
          >{{ data.txt }}
        </div>
        <div class="sub-txt l-ml-1 gl-4">{{ data.subtxt }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'AboutVisionList',
    props: {
      data: {
        type: Object,
        default: () => {},
        required: true
      },
      index: {
        type: Number,
        default: 0,
        required: true
      }
    },
    data() {
      return {
        NUMBER: 0,
        timer: null,
        isChange: false,
        setTime: [600, 800, 700, 600]
      }
    },
    mounted() {
      window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      onScroll() {
        const _this = this
        if (this.timer !== null) {
          clearTimeout(this.timer)
          this.handleCircle(true)
        }

        this.timer = setTimeout(function () {
          _this.handleCircle(false)
        }, 200)
      },
      handleCircle(isScroll) {
        if (isScroll) {
          if (!this.isChange) {
            this.NUMBER = Math.floor(Math.random() * 5) + 1
            this.isChange = true
            setTimeout(() => {
              this.isChange = false
            }, this.setTime[this.index])
          }
        } else {
          this.NUMBER = 0
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .vision-list {
    padding: 0 20px;
    .list-con {
      position: relative;
      width: 500px;
      margin: 0 auto;
    }
    .list-img {
      width: 500px;
      height: 500px;
      img {
        width: 100%;
      }
    }
    .list-txt {
      position: absolute;
      left: -310px;
      top: 50%;
      transform: translate(0, -50%);
      .txt {
        font-size: 100px;
        font-weight: 600;
        line-height: 121px;
        margin-bottom: 40px;
        .num {
          font-weight: 100;
        }
      }
      .sub-txt {
        font-size: 30px;
        line-height: 130%;
        word-break: keep-all;
      }
    }
  }
  @include pc-4k {
    .vision-list {
      .list-con {
        width: 990px !important;
      }
      .list-img {
        width: 990px !important;
        height: 990px !important;
      }
      .list-txt {
        left: -1025px !important;
        .txt {
          font-size: 214px !important;
          margin-bottom: 100px !important;
        }
        .sub-txt {
          font-size: 60px !important;
        }
      }
    }
  }
  @include pc-large {
    .vision-list {
      .list-con {
        width: 660px;
      }
      .list-img {
        width: 660px;
        height: 660px;
      }
      .list-txt {
        left: -422px;
        .txt {
          font-size: 140px;
          margin-bottom: 50px;
        }
        .sub-txt {
          font-size: 40px;
        }
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .vision-list {
      .list-con {
        width: 450px;
      }
      .list-img {
        width: 450px;
        height: 450px;
      }
      .list-txt {
        left: -240px;
        .txt {
          font-size: 80px;
        }
        .sub-txt {
          font-size: 23px;
        }
      }
    }
  }
  @include tablet {
    .vision-list {
      .list-con {
        width: 300px;
      }
      .list-img {
        width: 300px;
        height: 300px;
      }
      .list-txt {
        left: -60px;
        .txt {
          font-size: 60px;
          line-height: 73px;
          margin-bottom: 30px;
        }
        .sub-txt {
          font-size: 18px;
        }
      }
    }
  }

  @include mobile {
    .vision-list {
      .list-con {
        width: 200px;
      }
      .list-img {
        width: 200px;
        height: 200px;
      }
      .list-txt {
        left: -60px;
        .txt {
          font-size: 30px;
          line-height: 36px;
          margin-bottom: 20px;
        }
        .sub-txt {
          font-size: 16px;
          &.l-ml-1 {
            // margin-left:0px !important;
          }
          &.gl-4 {
            width: getWidth(6) !important;
          }
        }
      }
    }
  }
</style>

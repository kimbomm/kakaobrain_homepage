<template>
  <div class="like">
    <div class="like-con">
      <button :class="classBind" @click="onClick()">
        <span class="num">{{ computedCount }}</span>
      </button>
    </div>
    <template v-if="!device.mobile && !isMobile">
      <div :class="shareClassBind">
        <button class="btn-share" @click="onShareClick()">
          <img src="@/assets/images/icon-share.png" alt="공유 버튼 이미지" />
        </button>
        <template v-if="isShareActive">
          <p>{{ url }}</p>
          <button class="btn-copy" @click="onCopy">Copy</button>
        </template>
      </div>
      <div v-if="isCopied" class="copy">
        {{
          language === 'KR' ? 'URL이 복사되었습니다.' : 'URL has been copied.'
        }}
      </div>
    </template>
    <template v-else>
      <button class="btn-share" @click="onShareClick()">
        <img src="@/assets/images/icon-share.png" alt="공유 버튼 이미지" />
      </button>
      <div class="mobile-share">
        <div class="url" v-if="isShareActive">
          <p>{{ url }}</p>
          <button class="btn-copy" @click="onCopy">Copy</button>
        </div>
        <div v-if="isCopied" class="copy">
          {{
            language === 'KR' ? 'URL이 복사되었습니다.' : 'URL has been copied.'
          }}
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    props: {
      contentId: {
        type: String,
        default: '',
        require: true
      },
      goodCount: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        count: 0,
        isActive: false,
        url: '',
        isShareActive: false,
        isCopied: false,
        isMobile: false
      }
    },
    computed: {
      ...mapState(['language', 'device']),
      classBind() {
        const classList = ['btn-like']
        if (this.isActive) {
          classList.push('is-active')
        }
        return classList.join(' ')
      },
      shareClassBind() {
        const classList = ['share']
        if (this.isShareActive) {
          classList.push('is-active')
        }
        return classList.join(' ')
      },
      computedCount() {
        let count = this.count
        if (count >= 1000) {
          count = String(count).substr(0, 1) + 'K'
        }
        return count
      }
    },
    mounted() {
      this.url = window.location.href
      this.isActive = this.$cookies.get(this.contentId) ? true : false
      this.count = this.goodCount ? this.goodCount : 0
      this.isMobile = window.innerWidth <= 768
      window.addEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768
      })
    },
    beforeDestroy() {
      window.removeEventListener('resize', () => {
        this.isMobile = window.innerWidth <= 768
      })
    },
    methods: {
      ...mapActions(['postContentGood']),
      async onClick() {
        if (this.isActive) {
          this.$cookies.remove(this.contentId)
          this.isActive = false
        } else {
          this.$cookies.set(`${this.contentId}`, 'good', {
            maxAge: 24 * 60 * 60 * 1000
          })
          this.isActive = true
          const res = await this.postContentGood(this.contentId)
          this.count = res.data.goodCount
        }
      },
      onShareClick() {
        this.isShareActive = true
      },
      onCopy() {
        const el = document.createElement('input')
        el.addEventListener('focusin', e => e.stopPropagation())
        el.value = this.url
        document.body.appendChild(el)
        el.select()
        document.execCommand('copy')
        document.body.removeChild(el)

        this.isShareActive = false
        this.isCopied = true
        setTimeout(() => {
          this.isCopied = false
        }, 5000)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .like {
    display: flex;
    align-items: center;
    margin-left: getMargin(2);
    &-con {
      margin-right: 15px;
    }
    .btn-like {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 120px;
      height: 50px;
      border: 1px solid $gray-9;
      cursor: pointer;
      &:before {
        content: '♥';
        font-size: 20px;
      }
      .num {
        font-size: 12px;
        margin-left: 8px;
      }
      &.is-active {
        background-color: $gray-9;
        color: $gray-0;
      }
    }
    .copy {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      background-color: $gray-9;
      color: $gray-0;
      font-size: 12px;
      line-height: 1.3;
      margin-left: 5px;
      border-radius: 4px;
    }
    .share {
      display: flex;
      align-items: center;
      padding: 0 15px;
      border: 1px solid transparent;
      box-sizing: border-box;
      height: 50px;
      font-size: 12px;
      line-height: 1.3;
      &.is-active {
        border-color: $gray-9;
      }
    }
    .btn-share {
      width: 20px;
      height: 20px;
      cursor: pointer;
      img {
        object-fit: contain;
        width: 100%;
      }
    }
    p {
      width: 210px;
      height: calc(12px * 1.3);
      margin: 0 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .btn-copy {
      color: $brain-blue;
    }
  }
  @include pc-large {
    .like {
      &-con {
        margin-right: 16px;
      }
      .btn-like {
        width: 170px;
        height: 60px;
        &:before {
          font-size: 24px;
        }
        .num {
          font-size: 16px;
          margin-left: 12px;
        }
      }
      .copy {
        height: 60px;
        font-size: 16px;
      }
      .share {
        height: 60px;
        padding: 0 20px;
        font-size: 16px;
        line-height: 1.3;
      }
      .btn-share {
        width: 28px;
        height: 28px;
      }
      p {
        width: 268px;
      }
      .btn-copy {
        color: $brain-blue;
      }
    }
  }

  @include pc-4k {
    .like {
      &-con {
        margin-right: 40px;
      }
      .btn-like {
        width: 260px;
        height: 80px;
        &:before {
          font-size: 32px;
        }
        .num {
          font-size: 22px;
          margin-left: 16px;
        }
      }
      .copy {
        padding: 0 26px;
        height: 80px;
        font-size: 22px;
      }
      .share {
        height: 80px;
        padding: 0 18px;
        font-size: 22px;
        line-height: 1.3;
      }
      .btn-share {
        width: 44px;
        height: 44px;
      }
      p {
        width: 368px;
      }
    }
  }
  @include tablet {
    .like {
      &-con {
        margin-right: 10px;
      }
      .btn-like {
        width: 120px;
        height: 40px;
        &:before {
          font-size: 18px;
        }
        .num {
          font-size: 12px;
          margin-left: 4px;
        }
      }
      .copy {
        padding: 0 12px;
        height: 40px;
        font-size: 12px;
      }
      .share {
        height: 40px;
        padding: 0 10px;
        font-size: 12px;
        line-height: 1.3;
      }
      .btn-share {
        width: 20px;
        height: 20px;
      }
      p {
        width: 210px;
        margin: 0 10px;
      }
    }
  }
  @include mobile {
    .like {
      margin-left: 0;
      flex-wrap: wrap;
      &-con {
        margin-right: 14px;
      }
      .btn-like {
        width: 120px;
        height: 40px;
        &:before {
          font-size: 18px;
        }
        .num {
          font-size: 12px;
          margin-left: 4px;
        }
      }
      .copy {
        padding: 0 12px;
        height: 40px;
        font-size: 12px;
        margin-left: 0;
        display: inline-flex;
        width: auto;
      }
      .share {
        height: 40px;
        padding: 0 12px;
        font-size: 12px;
        line-height: 1.3;
      }
      .btn-share {
        width: 20px;
        height: 20px;
      }
    }
    .mobile-share {
      width: 100%;
      flex: 0 0 100%;
      margin-top: 10px;
      .url {
        padding: 0 12px;
        height: 40px;
        border: 1px #000 solid;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 12px;
        line-height: 1.3;
        gap: 10px;
        p {
          margin: 0;
          width: getWidth(8);
        }
      }
    }
  }
</style>

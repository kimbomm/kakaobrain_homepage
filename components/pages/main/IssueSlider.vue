<template>
  <div class="issue-slider">
    <div v-if="list.length > 0" ref="issue" class="issue">
      <div>
        <nuxt-link
          :to="
            activeContent.Content.contentType !== 'STORY'
              ? {
                  path: '/contents',
                  query: { contentId: activeContent.contentId }
                }
              : {
                  path: '/story-telling',
                  query: { contentId: activeContent.contentId }
                }
          "
        >
          <div class="thumbnail">
            <div class="fade">
              <div
                :style="`background-image: url(${envVariable(
                  activeContent.Media.url
                )});`"
              />
            </div>
          </div>

          <div class="text">
            <div class="title">
              <span v-if="isShow">
                {{ activeContent.title }}
              </span>
            </div>
            <div class="subtitle">
              <span v-if="isShow">
                {{ activeContent.updateBy }}
              </span>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from 'vuex'
  import Utility from '@/util/utility.js'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import Sticker from '@/components/elements/button/Sticker'
  export default {
    components: {
      BreadCrumb,
      Sticker
    },
    data() {
      return {
        isShow: false,
        activeIndex: 0,
        autoLoad: null,
        interval: 10000,
        pageData: {
          offset: 0,
          limit: 20,
          contentType: 'ALL', // ALL, ARTICLE, STORY, THESIS
          targetLang: this.$store.state.language
        },
        image: require('~/assets/images/main_img_dummy.png'),
        list: [],
        activeContent: null,
        breadcrumb: [],
        navigatorY: null
      }
    },
    computed: {
      ...mapState({
        issueList: state => state.issue.list
      }),
      curPage() {
        return Utility.changeNumFont(this.activeIndex + 1)
      }
    },
    watch: {
      list: {
        deep: true,
        handler(val) {
          this.isShow = true
          if (val.length > 1) {
            this.onSetInterval()
          }
        }
      }
    },
    async mounted() {
      await this.fetchList()
      await this.scrollBody.addEventListener('wheel', this.onScroll)
    },
    async beforeDestroy() {
      await clearInterval(this.autoLoad)
      await this.scrollBody.removeEventListener('wheel', this.onScroll)
    },
    methods: {
      ...mapActions({
        getIssueList: 'getMonthlyList',
        getCategoryList: 'getCategoryList',
        getNickName: 'getNickName'
      }),
      async fetchList() {
        this.pageData.targetLang = this.$store.state.language
        const res = await this.getIssueList(this.pageData)
        this.list = res.data.list
        if (this.list.length > 0) {
          await this.setContent()
        }
      },
      async setContent() {
        this.activeContent = this.list[this.activeIndex]
        await this.setBreadcrumb(
          this.activeContent.Content.category1,
          Utility.changeCategory2(this.activeContent.Content.category2)
        )
      },

      onSetInterval() {
        const _this = this
        this.autoLoad = setInterval(() => {
          _this.onClick('next')
        }, this.interval)
      },
      onClick(type, event) {
        const _this = this
        this.isShow = false
        if (event) {
          clearInterval(this.autoLoad)
          this.autoLoad = null
        }
        setTimeout(() => {
          _this.onChange(type)
          if (event) _this.onSetInterval()
        }, 200)
      },
      async onChange(type) {
        switch (type) {
          case 'next':
            this.activeIndex + 1 > this.list.length - 1
              ? (this.activeIndex = 0)
              : this.activeIndex++
            break
          case 'prev':
            this.activeIndex - 1 < 0
              ? (this.activeIndex = this.list.length - 1)
              : this.activeIndex--
            break
        }
        await this.setContent()
        this.isShow = true
      },
      async setBreadcrumb(category1, category2) {
        this.breadcrumb = []
        let subClass = ''

        const info = await this.getNickName({
          category1,
          category2
        })

        switch (category1) {
          case 'document':
            subClass = 'docu'
            break
          default:
            subClass = category1
            break
        }

        this.breadcrumb.push(
          { text: info.category1.nick, sub: subClass, link: '' },
          { text: info.category2.nick, sub: 'sub', link: info.category2.link }
        )
      },
      envVariable(url) {
        const imageUrl = `${this.$config.baseURL}${url}`

        return imageUrl
      }
    }
  }
</script>
<style lang="scss" scoped>
  .fade {
    display: inline-block;
    transition: all 0.2s linear;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(5%);
  }
  .only-fade-enter,
  .only-fade-leave-to {
    opacity: 0;
  }
  .issue-slider {
    .issue {
      position: relative;
      width: 1052px;
      height: 410px;
      left: 268px;

      border-radius: 20px;
      .thumbnail {
        width: 1052px;
        height: 410px;
        border-radius: 20px;
        border: solid;
      }
      .text {
        width: 918px;

        padding-top: 30px;
        .title {
          color: var(--black, #000);
          font-family: Noto Sans KR;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%; /* 36px */
        }

        .subtitle {
          padding-top: 20px;
          color: var(--black, #000);
          font-family: Noto Sans KR;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 150%; /* 24px */
        }
      }
    }
  }

  @include pc-desktop {
    .fade {
      display: inline-block;
      transition: all 0.2s linear;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
      transform: translateY(5%);
    }
    .only-fade-enter,
    .only-fade-leave-to {
      opacity: 0;
    }
    .issue-slider {
      .issue {
        width: 1500px;
        height: 590px;
        left: 400px;

        .thumbnail {
          width: 1500px;
          height: 590px;
        }
        .text {
          width: 740px;
          height: 105px;
          padding-top: 30px;
          .title {
          }

          .subtitle {
          }
        }
      }
    }
  }

  @include pc-large {
    .issue-slider {
      .issue {
        width: 2012px;
        left: 528px;

        .thumbnail {
          width: 2012px;
          height: 790px;
        }
        .text {
          width: 996px;
          padding-top: 40px;
          .title {
            font-size: 40px;
          }

          .subtitle {
            font-size: 21px;
          }
        }
      }
    }
  }

  @include pc-4k {
    .issue-slider {
      .issue {
        width: 3036px;
        left: 784px;

        .thumbnail {
          width: 3036px;
          height: 784px;
        }
        .text {
          width: 1508px;
          padding-top: 56px;
          .title {
            font-size: 60px;
          }

          .subtitle {
            font-size: 32px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1600px) {
    .issue-navi .cur-page {
      font-size: 36px;
    }
  }

  @include tablet {
    //max-width:1024px
    .issue-slider {
      .issue {
        width: 783px;
        left: 221px;

        .thumbnail {
          width: 783px;
          height: 380px;
        }
        .text {
          width: 683px;
          padding-top: 20px;
          .title {
            font-size: 24px;
          }

          .subtitle {
            font-size: 14px;
          }
        }
      }
    }
  }
  @include mobile {
    .issue-slider {
      .issue {
        width: 578px;
        left: 170px;

        .thumbnail {
          width: 578px;
          height: 380px;
        }
        .text {
          width: 503px;
          padding-top: 20px;
          .title {
            font-size: 24px;
          }

          .subtitle {
            padding-top: 10px;
            font-size: 14px;
          }
        }
      }
    }
  }

  @include mobile-small {
    .issue-slider {
      .issue {
        width: 287px;
        left: 53px;

        .thumbnail {
          width: 287px;
          height: 380px;
        }
        .text {
          width: 287px;
          padding-top: 20px;
          .title {
            font-size: 24px;
          }

          .subtitle {
            padding-top: 10px;
            font-size: 16px;
          }
        }
      }
    }
  }
</style>

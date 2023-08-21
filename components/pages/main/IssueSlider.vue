<template>
  <div class="issue-slider gl-8 l-ml-2">
    <div v-if="list.length > 0" ref="issue" class="issue">
      <div class="container">
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
                class="issueimg"
                :style="`background-image: url(${envVariable(
                  activeContent.Media.url
                )});`"
              />
            </div>
          </div>

          <div class="text">
            <div class="title">
              <span>
                {{ activeContent.title }}
              </span>
            </div>
            <!-- 임의로 설정. 데이터 생성시 -->
            <div class="subtitle">
              <span>
                {{ activeContent.updateAt }}
              </span>
            </div>
          </div>
        </nuxt-link>
        <div class="pagination-dots">
          <span
            v-for="(item, index) in list"
            :key="index"
            :class="{ active: index === activeIndex }"
            class="dot"
            @click="goToSlide(index)"
          ></span>
        </div>
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

      goToSlide(index) {
        this.isShow = false
        clearInterval(this.autoLoad)
        this.autoLoad = null

        this.activeIndex = index
        this.setContent()
        this.onSetInterval()
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
      },
      updateActiveDot() {
        const dots = this.$el.querySelectorAll('.dot')
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === this.activeIndex)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .issue-slider {
    &.gl-8 {
      width: getWidth(8) !important;
    }
    &.l-ml-2 {
      margin-left: getMargin(2) !important;
    }

    .issue {
      .container {
        position: relative;
        .pagination-dots {
          display: flex;
          flex-direction: column;
          width: 6px;
          position: absolute;
          top: 0;
          margin: 20px 0 0 -20px;
          .dot {
            width: 6px;
            height: 6px;
            border-radius: 50%;
            margin-bottom: 4px;

            cursor: pointer;
            background-color: #e8ecf1;
            transition: background-color 0.3s ease;

            &.active {
              background-color: var(--active-color, #001eff);
            }

            &:hover {
              background-color: var(--hover-color, #001eff);
            }
          }
        }

        .thumbnail {
          height: 410px;

          .fade {
            .issueimg {
              background-size: cover;
              background-position: 50% 50%;
              height: 100%;
              border-radius: 20px;
            }
          }
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
  }

  @include pc-desktop {
    .issue-slider {
      .issue {
        .container {
          .thumbnail {
            height: 590px;
            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
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
  }

  @include pc-large {
    .issue-slider {
      .issue {
        .container {
          .pagination-dots {
            width: 8px;
            margin: 25px 0 0 -30px;

            .dot {
              width: 8px;
              height: 8px;
              margin-bottom: 6px;
            }
          }
          .thumbnail {
            height: 790px;
            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
          }
          .text {
            width: 996px;
            padding-top: 40px;
            height: auto;
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
  }

  @include pc-4k {
    .issue-slider {
      .issue {
        .container {
          .pagination-dots {
            width: 14px;
            margin: 10px 0 0 -40px;
            .dot {
              width: 14px;
              height: 14px;

              margin-bottom: 10px;
            }
          }

          .thumbnail {
            width: 100%;
            height: 784px;
            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
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
  }

  @media screen and (min-width: 5120px) {
    .issue-slider {
      &.gl-8 {
        width: getWidth(8) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }
    }
  }

  @include tablet {
    //max-width:1024px
    .issue-slider {
      .issue {
        .container {
          .thumbnail {
            width: 100%;
            height: 380px;

            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
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
  }
  @include mobile {
    .issue-slider {
      .issue {
        .container {
          .thumbnail {
            width: 100%;
            height: 380px;

            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
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
  }

  @include mobile-small {
    .issue-slider {
      &.gl-8 {
        width: getWidth(9) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(1.5) !important;
      }
      .issue {
        .container {
          .thumbnail {
            width: 100%;
            height: 380px;

            .fade {
              .issueimg {
                background-size: cover;
                background-position: 50% 50%;
                height: 100%;
                border-radius: 20px;
              }
            }
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
  }
</style>

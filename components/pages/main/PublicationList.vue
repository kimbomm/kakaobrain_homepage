<template>
  <div class="main">
    <div class="head l-ml-2">
      <div class="title">
        <p>Publication</p>
      </div>
    </div>
    <div class="container l-ml-3">
      <div class="publication" v-for="(item, index) in list" :key="index">
        <div class="tit">
          <div class="headline">
            <div class="academy">
              <div class="txt">
                {{ item.academy }}
              </div>
            </div>
            <div class="text">
              <nuxt-link
                :to="{
                  path: '/contents',
                  query: { contentId: item.contentId }
                }"
              >
                {{ item.title }}</nuxt-link
              >
              <div class="tag">
                <div class="list-date">
                  @{{
                    item &&
                    $dayjs(item.showAt || item.acceptAt).format('YYYYMMDD')
                  }}
                </div>
                <div class="item-box">
                  <div
                    class="box"
                    v-for="(itemtag, index) in item.ContentTags"
                    :key="index"
                  >
                    #{{ itemtag.tag }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="link">
        <nuxt-link
          :to="{
            path: 'contents/research/publications'
          }"
        >
          <img src="@/assets/images/link.png" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data() {
      return {
        list: [],
        tags: [],
        pageData: {
          offset: 0,
          limit: 5,
          targetLang: this.$store.state.language,
          tag: ''
        }
      }
    },
    async mounted() {
      await this.init()
    },

    methods: {
      ...mapActions({
        getCategoryList: 'getCategoryList'
      }),
      async init() {
        await this.fetchList()
      },
      async fetchList() {
        this.pageData.targetLang = this.$store.state.language
        const res = await this.getCategoryList({
          pageData: this.pageData
        })

        if (res) {
          this.list = res.data.list.sort((a, b) => {
            const dateA = new Date(a.showAt || a.acceptAt)
            const dateB = new Date(b.showAt || b.acceptAt)
            return dateB - dateA
          })
          this.total = res.data.count
          this.tags = res.data.tags
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main {
    margin-bottom: 0;
    padding-top: 0;
    .head {
      width: 221px;
      height: 40px;
      margin-top: 300px;

      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }

      .title {
        color: var(--black, #000);
        font-family: Inter;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: 100%; /* 40px */
      }
    }
    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 130px 0 0 0;
      gap: 80px;

      &.l-ml-3 {
        margin-left: getMargin(2) !important;
      }
      .tit {
        //제목

        .headline {
          display: flex;
          gap: 12px;
          .text {
            color: #000;
            font-family: Inter;
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 39px */

            .tag {
              display: flex;

              padding-top: 10px;
              width: auto;
              .list-date {
                width: 120px;
                color: #000;
                font-family: Noto Sans KR;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 140%;
              }
              .item-box {
                .box {
                  color: #000;
                  display: inline-block;
                  font-family: Noto Sans KR;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 140%;
                }
              }
            }
          }
          .academy {
            flex: 0 0 109px;
            display: inline-flex;
            padding: 8px 14px;
            height: 34px;
            align-items: center;
            border-radius: 27px;
            background: var(--black, #000);

            .txt {
              color: var(--white, #fff);
              font-family: Inter;
              font-size: 14px;
              font-style: italic;
              font-weight: 400;
              line-height: 130%; /* 18.2px */
            }
          }
        }
        .link {
          img {
            width: 37px;
            height: 40px;
          }
        }
      }
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .main {
      .head {
        width: 221px;
        height: 40px;
        margin-top: 400px;

        .title {
          p {
            font-size: 40px;
          }
        }
      }
      .container {
        padding: 130px 0 0 0;
        gap: 110px;

        .tit {
          .headline {
            .text {
              .tag {
                .list-date {
                }
                .item-box {
                  .box {
                  }
                }
              }
            }

            .academy {
              .txt {
              }
            }
          }
          .link {
            img {
            }
          }
        }
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .main {
      .head {
        width: 287px;
        height: 52px;
        margin-top: 540px;

        .title {
          p {
            font-size: 52px;
          }
        }
      }
      .container {
        padding: 180px 0 0 0;
        gap: 149px;

        .tit {
          //제목

          .headline {
            .text {
              font-size: 34px;

              .tag {
                padding-top: 14px;
                .list-date {
                  font-size: 18px;
                }
                .item-box {
                  .box {
                    font-size: 18px;
                  }
                }
              }
            }
            .academy {
              flex: 0 0 133px;
              margin-top: 5px;
              .txt {
                font-size: 18px;
              }
            }
          }
          .link {
            img {
              width: 54px;
              height: 54px;
            }
          }
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .main {
      .head {
        width: 409px;
        height: 74px;
        margin-top: 800px;

        .title {
          p {
            font-size: 74px;
          }
        }
      }
      .container {
        padding: 260px 0 0 0;
        gap: 220px;

        .tit {
          //제목

          .headline {
            gap: 30px;
            .text {
              font-size: 50px;

              .tag {
                padding-top: 24px;
                gap: 40px;
                .list-date {
                  width: 155px;
                  font-size: 26px;
                }
                .item-box {
                  .box {
                    font-size: 26px;
                  }
                }
              }
            }
            .academy {
              flex: 0 0 210px;
              margin-top: 10px;
              .txt {
                font-size: 28px;
              }
            }
          }
          .link {
            img {
              width: 59px;
              height: 42px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 5120px) {
    .main {
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }
    }
    .container {
      &.l-ml-3 {
        margin-left: getMargin(2) !important;
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .main {
      .head {
        width: 166px;
        height: 30px;
        margin-top: 200px;

        .title {
          font-size: 30px;
        }
      }
      .container {
        padding: 72px 0 0 0;
        gap: 82px;

        .tit {
          //제목

          .headline {
            .text {
              font-size: 21px;

              .tag {
                gap: 30px;
                .list-date {
                  width: 84px;
                  font-size: 14px;
                }
                .item-box {
                  .box {
                    font-size: 14px;
                  }
                }
              }
            }
            .academy {
              flex: 0 0 86px;
              height: 29px;
              .txt {
                font-size: 10px;
              }
            }
          }
          .link {
            img {
              width: 37px;
              height: 40px;
            }
          }
        }
      }
    }
  }
  //max-width: 768px
  @include mobile {
    .main {
      .head {
        width: 166px;
        height: 30px;
        margin-top: 200px;

        .title {
          font-size: 30px;
        }
      }
      .container {
        padding: 109px 0 0 0;
        gap: 50px;

        .tit {
          //제목

          .headline {
            display: inline-block;

            .text {
              margin-top: 10px;
              font-size: 21px;

              .tag {
                gap: 20px;
                .list-date {
                }
                .item-box {
                  .box {
                  }
                }
              }
            }
            .academy {
              flex: 0 0 86px;
              height: 29px;
              .txt {
                font-size: 10px;
              }
            }
          }
          .link {
            img {
              width: 37px;
              height: 40px;
            }
          }
        }
      }
    }
  }
  //max-width: 374px
  @include mobile-small {
    .main {
      .head {
        width: 166px;
        height: 30px;
        margin-top: 140px;
        &.l-ml-2 {
          margin-left: getMargin(1.5) !important;
        }

        .title {
          font-size: 30px;
        }
      }
      .container {
        padding: 89px 0 0 0;
        gap: 50px;
        &.l-ml-3 {
          margin-left: getMargin(1.5) !important;
        }
        .tit {
          //제목

          .headline {
            display: inline;
            .text {
              font-size: 21px;

              .tag {
                display: flex;
                flex-direction: column-reverse;
                gap: 10px;

                .list-date {
                }
                .item-box {
                  .box {
                  }
                }
              }
            }
            .academy {
              flex: 0 0 86px;
              height: 29px;
              .txt {
                font-size: 10px;
              }
            }
          }
          .link {
            img {
              width: 37px;
              height: 40px;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="main">
    <div class="head l-ml-2">
      <div class="title">
        <p>Publication</p>
      </div>
    </div>

    <div class="container l-ml-3 gl-6">
      <div class="publication" v-for="(item, index) in list" :key="index">
        <div class="tit">
          <div class="headline" v-if="Array.isArray(item.academy)">
            <div
              class="academyList"
              v-for="(itemacademy, index) in item.academy"
              :key="index"
            >
              <div class="academy">
                <div class="txt">
                  {{ itemacademy }}
                </div>
              </div>
            </div>
            <div class="text gl-6">
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
                    $dayjs(item.showAt || item.acceptAt).format('YYYY.MM.DD')
                  }}
                </div>
              </div>
            </div>
          </div>
          <div class="headline gl-6" v-else>
            <div class="academyList">
              <div class="academy">
                <div class="txt">
                  <div class="year" v-if="item.year">
                    {{ item.year }}
                  </div>
                  {{ item.academy }}
                </div>
              </div>
            </div>
            <div class="text gl-6">
              <nuxt-link
                :to="{
                  path: '/contents',
                  query: { contentId: item.contentId }
                }"
              >
                {{ item.title }}</nuxt-link
              >
              <!-- 데이터 추가시 수정 -->
              <div class="publiImg">
                <div class="mediaImg">
                  <img :src="item.titleMediaId" />
                </div>
              </div>
              <div class="tag">
                <div class="list-date">
                  {{ item && $dayjs(item.showAt).format('MMMM D, YYYY') }}
                </div>
              </div>
              <!-- 데이터 추가시 수정  -->
              <div class="writerInfo">
                <div class="writer">
                  <template v-for="(tagitem, index) in item.ContentTags">
                    {{ tagitem.tag }}
                    <span class="team"> ({{ tagitem.updateAt }}) </span>
                    <span v-if="index < item.ContentTags.length - 1">,</span>
                  </template>
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
          limit: 3,
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
          category1: 'research',
          category2: 'publications',
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
        font-weight: 600;
        line-height: 100%; /* 40px */
      }
    }
    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 130px 0 0 0;
      gap: 40px;

      &.l-ml-3 {
        margin-left: getMargin(2) !important;
      }
      &.gl-6 {
        width: getWidth(6) !important;
      }

      .tit {
        .headline {
          &::after {
            content: '';
            display: block;
            height: 1px;
            background-color: black;
            margin-top: 40px;
          }
          .text {
            &.gl-6 {
              width: getWidth(6) !important;
            }
            margin-top: 20px;
            color: #000;
            font-family: Inter;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: 120%;

            .publiImg {
              margin-top: 20px;
              .mediaImg {
                height: 126px;
                width: 270px;
                // &.gl-2 {
                //   width: getWidth(2) !important;
                // }

                img {
                  border-radius: 10px;
                  background-size: cover;
                  background-position: 50% 50%;
                  height: 100%;
                  //임시테스트용
                  background-image: url('https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png');
                }
              }
            }

            .tag {
              display: flex;

              margin-top: 30px;
              width: auto;
              .list-date {
                width: 120px;
                color: #000;
                font-family: Noto Sans KR;
                font-size: 14px;
                font-style: normal;
                font-weight: 700;
                line-height: 120%;
              }
            }

            .writerInfo {
              margin-top: 10px;
              display: flex;
              .writer {
                color: var(--gray-6, #666);
                font-family: Inter;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%;
                white-space: normal;

                .team {
                  color: var(--gray-3, #b3b2b3);
                  font-family: Inter;
                  font-size: 12px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 150%;
                }
                &:last-child::after {
                  content: none;
                }
              }
            }
          }
          .academyList {
            display: inline;
            .academy {
              flex: 0 0 109px;
              display: inline-flex;
              padding: 8px 14px;
              height: 100%;
              margin-right: 10px;
              align-items: center;
              border-radius: 27px;
              background: var(--black, #000);

              .txt {
                display: flex;
                color: var(--white, #fff);
                font-family: Inter;
                font-size: 14px;
                font-style: italic;
                font-weight: 400;
                line-height: 130%; /* 18.2px */
                .year {
                  padding-right: 5px;
                }
              }
            }
          }
        }
      }
      .link {
        display: flex;
        justify-content: flex-end;
        img {
          width: 37px;
          height: 40px;
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
        gap: 60px;

        .tit {
          .headline {
            &::after {
              content: '';
              display: block;
              height: 1px;
              background-color: black;
              margin-top: 60px;
            }
            .text {
              font-size: 22px;

              .publiImg {
                .mediaImg {
                  height: 140px;
                  width: 300px;
                  img {
                  }
                }
              }
              .tag {
                .list-date {
                }
              }
              .writerInfo {
                .writer {
                  .team {
                  }
                }
              }
            }

            .academyList {
              .academy {
                .txt {
                }
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
        padding: 120px 0 0 0;
        gap: 80px;

        .tit {
          //제목

          .headline {
            &::after {
              content: '';
              display: block;
              height: 1px;
              background-color: black;
              margin-top: 80px;
            }
            .text {
              font-size: 30px;
              margin-top: 20px;

              .publiImg {
                margin-top: 30px;
                .mediaImg {
                  height: 154px;
                  width: 330px;
                  img {
                  }
                }
              }

              .tag {
                padding-top: 14px;
                .list-date {
                  font-size: 18px;
                }
              }

              .writerInfo {
                .writer {
                  font-size: 16px;
                  .team {
                    font-size: 16px;
                  }
                }
                &::after {
                  margin-top: 80px;
                }
              }
            }
            .academyList {
              .academy {
                flex: 0 0 133px;
                margin-top: 5px;
                height: 100%;
                .txt {
                  font-size: 18px;
                }
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
        gap: 160px;

        .tit {
          //제목

          .headline {
            gap: 30px;
            .text {
              font-size: 50px;
              margin-top: 34px;
              .tag {
                padding-top: 24px;
                gap: 40px;
                .list-date {
                  width: 155px;
                  font-size: 26px;
                }
              }
            }

            .academyList {
              .academy {
                flex: 0 0 210px;
                padding: 14px 24px;
                height: 100%;
                .txt {
                  font-size: 28px;
                }
              }
            }
          }
        }
        .link {
          img {
            width: 60px;
            height: 60px;
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
        padding: 70px 0 0 0;
        gap: 40px;

        .tit {
          //제목

          .headline {
            &::after {
              content: '';
              display: block;
              height: 1px;
              background-color: black;
              margin-top: 40px;
            }
            .text {
              font-size: 20px;
              margin-top: 20px;
              &.gl-6 {
                width: getWidth(7) !important;
              }

              .publiImg {
                .mediaImg {
                  width: 210px;
                  height: 98px;
                  img {
                  }
                }
              }
              .tag {
                .list-date {
                  width: 100%;
                  font-size: 14px;
                }
              }
              .writerInfo {
                .writer {
                  .team {
                  }
                }
                &::after {
                  margin-top: 40px;
                }
              }
            }
            .academy {
              flex: 0 0 86px;

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
        padding: 70px 0 0 0;
        gap: 40px;

        &.gl-6 {
          width: getWidth(7) !important;
        }

        .tit {
          //제목

          .headline {
            display: inline-block;
            &::after {
              content: '';
              display: block;
              height: 1px;
              background-color: black;
              margin-top: 40px;
            }
            &.gl-6 {
              width: getWidth(7) !important;
            }

            .text {
              &.gl-6 {
                width: getWidth(7) !important;
              }
              margin-top: 20px;
              font-size: 20px;

              .publiImg {
                .mediaImg {
                  width: 210px;
                  height: 98px;
                  img {
                  }
                }
              }

              .tag {
                .list-date {
                }
              }
              .writerInfo {
                .writer {
                  .team {
                  }
                }
              }
            }
            .academy {
              flex: 0 0 86px;

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
        padding: 50px 0 0 0;
        gap: 50px;
        &.l-ml-3 {
          margin-left: getMargin(1.5) !important;
        }
        &.gl-6 {
          width: getWidth(9) !important;
        }
        .tit {
          //제목
          .headline {
            &::after {
              content: '';
              display: block;
              height: 1px;
              background-color: black;
              margin-top: 50px;
            }
            &.gl-6 {
              width: getWidth(9) !important;
            }
            .text {
              font-size: 18px;

              &.gl-6 {
                width: getWidth(9) !important;
              }
              .publiImg {
                .mediaImg {
                  height: 150px;
                  width: 286px;

                  img {
                  }
                }
              }
              .tag {
                margin-top: 10px;
                .list-date {
                }
              }
              .writerInfo {
                .writer {
                  font-size: 14px;

                  .team {
                    font-size: 14px;
                  }
                }
              }
            }
            .academyList {
              .academy {
                flex: 0 0 86px;
                margin-right: 6px;

                .txt {
                  font-size: 10px;
                }
              }
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
</style>

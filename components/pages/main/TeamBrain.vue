<template>
  <div class="main-publication">
    <div class="head">
      <div class="title">
        <p>Publication</p>
      </div>
    </div>
    <div class="container">
      <div class="publication" v-for="(item, index) in list" :key="index">
        <div class="text">
          <div class="tit">
            <div class="academy">
              <p class="txt">{{ item.academy }}</p>
            </div>
            <nuxt-link
              :to="{
                path: '/contents',
                query: { contentId: item.contentId }
              }"
            >
              {{ item.title }}</nuxt-link
            >
          </div>
          <div class="tag">
            <div class="list-date">
              {{
                item && $dayjs(item.showAt || item.acceptAt).format('YYYYMMDD')
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
        console.log(res)
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
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .head {
    width: 221px;
    height: 40px;
    margin-top: 300px;
    margin-left: 268px;
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
    padding: 130px 0 0 389px;
    gap: 80px;

    .tit {
      //제목

      color: #000;
      font-family: Inter;
      font-size: 30px;
      font-style: normal;
      font-weight: 400;
      line-height: 130%; /* 39px */

      .academy {
        position: absolute;
        width: 109px;
        display: inline-flex;
        padding: 8px 14px;
        align-items: center;
        border-radius: 27px;
        transform: translate(-110%);
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

    .tag {
      display: flex;
      gap: 10px;
      width: auto;
      .list-date {
        width: 120px;
        color: #000;
        font-family: Noto Sans KR;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 140%;

        &::before {
          content: '@';
          display: inline-block;
        }
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

    .link {
      position: relative;
      margin-bottom: 300px;

      img {
        position: absolute;
        transform: translate(-320%);
        width: 37px;
        height: 40px;
      }
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .main {
    }
    .head {
      width: 221px;
      height: 40px;
      margin-top: 400px;
      margin-left: 400px;
      .title {
        font-size: 40px;
      }
    }
    .container {
      padding: 130px 0 0 525px;
      gap: 110px;

      .tit {
        //제목

        font-size: 30px;

        .academy {
          .txt {
          }
        }
      }
      .tag {
        .list-date {
        }
        .item-box {
          .box {
          }
        }
      }
      .link {
        img {
        }
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .main {
    }
    .head {
      width: 287px;
      height: 52px;
      margin-top: 540px;
      margin-left: 528px;
      .title {
        font-size: 40px;
      }
    }
    .container {
      padding: 180px 0 0 681px;
      gap: 149px;

      .tit {
        //제목
        font-size: 34px;
        .academy {
          width: 133px;
          .txt {
            font-size: 18px;
          }
        }
      }
      .tag {
        .list-date {
          font-size: 18px;
        }
        .item-box {
          .box {
            font-size: 18px;
          }
        }
      }
      .link {
        margin-bottom: 547px;
        img {
          transform: translate(-270%, 0);
          width: 54px;
          height: 54px;
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .main {
    }
    .head {
      width: 409px;
      height: 74px;
      margin-top: 800px;
      margin-left: 784px;
      .title {
        font-size: 74px;
      }
    }
    .container {
      padding: 260px 0 0 1024px;
      gap: 220px;

      .tit {
        //제목
        font-size: 50px;
        padding: 14px 24px;
        .academy {
          transform: translate(-120%, 0);
          width: 210px;
          .txt {
            font-size: 28px;
          }
        }
      }
      .tag {
        padding-left: 25px;
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
      .link {
        margin-bottom: 809px;
        img {
          transform: translate(-370%);
          width: 60px;
          height: 60px;
        }
      }
    }
  }
  //max-width: 1024px
  @include tablet {
    .main {
    }
    .head {
      width: 166px;
      height: 30px;
      margin-top: 200px;
      margin-left: 221px;
      .title {
        font-size: 30px;
      }
    }
    .container {
      padding: 72px 0 0 321px;
      gap: 82px;

      .tit {
        //제목
        font-size: 21px;
        .academy {
          width: 86px;
          transform: translate(-115%);
          .txt {
            font-size: 10px;
          }
        }
      }
      .tag {
        .list-date {
          font-size: 14px;
        }
        .item-box {
          .box {
            font-size: 14px;
          }
        }
      }
      .link {
        margin-bottom: 200px;
        img {
          transform: translate(-270%);
        }
      }
    }
  }
  //max-width: 768px
  @include mobile {
    .main {
    }
    .head {
      width: 166px;
      height: 30px;
      margin-top: 200px;
      margin-left: 170px;
      .title {
        font-size: 30px;
      }
    }
    .container {
      padding: 109px 0 0 170px;
      gap: 119px;

      .tit {
        //제목
        font-size: 21px;
        .academy {
          width: 86px;
          transform: translate(0, -150%);

          .txt {
            font-size: 10px;
          }
        }
      }
      .tag {
        .list-date {
          font-size: 14px;
        }
        .item-box {
          .box {
            font-size: 14px;
          }
        }
      }
      .link {
        margin-bottom: 200px;
        img {
          transform: translate(0, -200%);
        }
      }
    }
  }
  //max-width: 374px
  @include mobile-small {
    .main {
    }
    .head {
      width: 166px;
      height: 30px;
      margin-top: 140px;
      margin-left: 53px;
      .title {
        font-size: 30px;
      }
    }
    .container {
      padding: 89px 0 0 53px;
      gap: 89px;

      .tit {
        //제목
        font-size: 21px;
        .academy {
          width: 86px;
          transform: translate(0, -150%);

          .txt {
            font-size: 10px;
          }
        }
      }
      .tag {
        display: flex;
        gap: 10;
        flex-direction: column-reverse;
        .list-date {
          font-size: 14px;
        }
        .item-box {
          .box {
            padding-top: 10px;
            font-size: 14px;
          }
        }
      }
      .link {
        margin-bottom: 140px;
        img {
          transform: translate(0, -150%);
        }
      }
    }
  }
</style>

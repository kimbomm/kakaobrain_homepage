<template>
  <div class="publication-detail">
    <div class="breadcrumb">
      <BreadCrumb :data="breadcrumb" />
    </div>
    <div class="publidetail gl-7 l-ml-2">
      <div class="head gl-7">
        <div class="academyList">
          <div
            class="academy"
            v-for="(scholar, index) in list.academy"
            :key="index"
          >
            <div class="txt">
              <div class="year" v-if="scholar.year">
                {{ scholar.year }}
              </div>
              {{ scholar.name }}
            </div>
          </div>
        </div>
        <div class="title">
          {{ list.title }}
        </div>
        <div class="tag">
          <div class="list-date">
            {{ list && $dayjs(list.showAt).format('MMMM D, YYYY') }}
          </div>
        </div>
        <div class="writerInfo">
          <div class="writer">
            <template v-for="(author, index) in list.writer">
              {{ author.name }}
              <span class="team" v-if="author.affiliation">
                ({{ author.affiliation }})
              </span>
              <span v-if="index < list.writer.length - 1">,</span>
            </template>
          </div>
        </div>
      </div>
      <div class="container gl-6 l-ml-1">
        <div class="text">
          <div class="abstract">
            <p>Abstract</p>
          </div>
          <div class="subtext">
            <div
              v-for="(item, index) in list.ContentItems"
              :key="index"
              class="item-text"
            >
              {{ item.text }}
            </div>
          </div>
        </div>
        <div class="titleImg">
          <div
            class="mediaImg"
            :style="`background-image: url(${envVariable(list.titleMediaId)})`"
          ></div>
        </div>
        <div class="linkGroup">
          <div class="btnGroup">
            <button onclick="location.href=`${list.contentProp.github}`">
              <img src="@/assets/images/icons/github_detail.svg" />github
            </button>

            <button onclick="location.href=`${list.contentProp.dataset}`">
              <img src="@/assets/images/icons/dataset_detail.svg" />
              Data Set
            </button>

            <button onclick="location.href=`${list.contentProp.googlescholar}`">
              <img src="@/assets/images/icons/huggingface_detail.svg" />
              google scholar
            </button>
          </div>
          <div class="shareGroup">
            <div class="share" @click="copyCurrentLink">
              <img src="@/assets/images/icons/link.svg" />
            </div>
            <div class="facebook" @click="shareOnFacebook">
              <img src="@/assets/images/icons/Facebook.svg" />
            </div>
            <div class="twiiter" @click="shareOnTwitter">
              <img src="@/assets/images/icons/Twiiter.svg" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer gl-7">
        <div class="viewList">
          <p>view List</p>
          <div class="link">
            <nuxt-link
              :to="{
                path: '/contents/research/publications'
              }"
            >
              <img src="@/assets/images/link.png" />
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapState } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  export default {
    components: {
      BreadCrumb
    },
    data() {
      return {
        list: [],
        contentId: null,
        breadcrumb: [
          { text: 'Research', sub: 'research' },
          {
            text: 'Publications',
            sub: 'sub',
            link: '/contents/research/publications'
          }
        ]
      }
    },

    // async asyncData({ params, store }) {
    //   try {
    //     const contentId = params.contentId
    //     console.log(contentId, '11111')

    //     const res = await store.dispatch('getContentDetail', contentId)
    //     return {
    //       data: res.data
    //     }
    //   } catch (error) {
    //     console.error(error)
    //   }
    // },
    computed: {
      ...mapState({
        language: state => state.language
      })
    },

    async created() {
      this.contentId = this.$route.params.contentId
      await this.fetchList()
    },
    async mounted() {
      await this.fetchList()
    },

    methods: {
      ...mapActions({
        getContentDetail: 'getContentDetail'
      }),
      async init() {
        await this.setBreadcrumb()
      },
      async setBreadcrumb() {
        this.breadcrumb.push()
      },
      envVariable(url) {
        const imageUrl = `${this.$config.baseURL}${url}`

        return imageUrl
      },
      async fetchList() {
        const contentId = this.contentId
        // console.log('Fetching list contentId:', contentId)

        const res = await this.getContentDetail(contentId)
        this.list = res.data
        // console.log('Fetched list:', this.list)
      },
      copyCurrentLink() {
        const currentURL = window.location.href
        const tempInput = document.createElement('input')
        tempInput.value = currentURL
        document.body.appendChild(tempInput)
        tempInput.select()
        document.execCommand('copy')

        document.body.removeChild(tempInput)

        // alert('링크가 복사되었습니다')
      },
      shareOnFacebook() {
        const currentURL = window.location.href
        const encodedURL = encodeURIComponent(currentURL)
        const facebookURL = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`
        window.open(facebookURL, 'Share on Facebook')
      },
      shareOnTwitter() {
        const currentURL = window.location.href
        const message = 'Check out this awesome content!'
        const twitterURL = `https://twitter.com/share?url=${encodeURIComponent(
          currentURL
        )}&text=${encodeURIComponent(message)}`

        window.open(twitterURL, 'Share on Twitter')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .publication-detail {
    .breadcrumb {
      margin: 100px 20px 0 0;
    }
    .publidetail {
      &.gl-7 {
        width: getWidth(7) !important;
      }
      &.l-ml-2 {
        margin-left: getMargin(2.1) !important;
      }
      .head {
        &.gl-7 {
          width: getWidth(7) !important;
        }
        display: flex;
        padding: 50px;
        flex-direction: column;
        align-items: flex-start;

        border-radius: 20px;
        background: var(--black, #000);
        margin-top: 28px;
        .academyList {
          display: flex;
          flex-wrap: wrap;
          .academy {
            display: flex;

            padding: 8px 14px;
            height: 100%;
            margin: 10px 10px 0 0;
            align-items: center;
            border-radius: 27px;
            background: var(--white, #fff);
            .txt {
              display: flex;
              color: var(--black, black);
              font-family: Inter;
              font-size: 12px;
              font-style: italic;
              font-weight: 400;
              line-height: 130%; /* 18.2px */
              .year {
                padding-right: 5px;
                font-size: 12px;
              }
            }
          }
        }

        .title {
          margin-top: 20px;
          color: var(--white, #fff);
          font-family: Inter;
          font-size: 30px;
          font-style: normal;
          font-weight: 700;
          line-height: 120%; /* 36px */
        }
        .tag {
          display: flex;
          margin-top: 40px;
          width: auto;
          .list-date {
            color: var(--white, #fff);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 120%; /* 19.2px */
          }
        }
        .writerInfo {
          display: flex;
          margin-top: 20px;
          .writer {
            color: var(--gray-5, #807f80);
            font-family: Inter;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 24px */
            white-space: normal;
            .team {
              color: var(--gray-7, #4d4c4d);
              font-family: Inter;
              font-size: 16px;
              font-style: normal;
              font-weight: 400;
              line-height: 150%;
            }
          }
        }
      }
      .container {
        &.gl-6 {
          width: getWidth(6) !important;
        }
        &.l-ml-1 {
          margin-left: getMargin(1) !important;
        }

        margin-top: 100px;

        .text {
          .abstract {
            color: var(--black, #000);
            font-family: Inter;
            font-size: 40px;
            font-style: normal;
            font-weight: 900;
            line-height: 130%; /* 52px */
          }
          .subtext {
            gap: 400px;
            padding-top: 40px;
            color: var(--black, #000);
            font-family: Inter;
            font-size: 22px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            .item-text {
              margin-bottom: 20px; /* Adjust the value as needed */
            }
          }
        }
        .titleImg {
          margin-top: 70px;

          .mediaImg {
            min-height: 315px;
            border: 1px solid black;
            border-radius: 10px;
            background-size: cover;
            background-position: 50% 50%;
          }
        }
        .linkGroup {
          margin-top: 100px;
          display: flex;
          justify-content: space-between;

          .btnGroup {
            display: flex;
            gap: 10px;
            button {
              display: flex;
              padding: 10px 16px;
              justify-content: center;
              align-items: center;
              gap: 10px;
              border-radius: 4px;
              background: var(--black, #000);
              color: var(--white, #fff);
              text-align: center;
              font-family: Inter;
              font-size: 12px;
              font-style: normal;
              font-weight: 400;
              line-height: 130%; /* 15.6px */
            }
          }
          .shareGroup {
            display: flex;
            gap: 10px;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
      }
      .footer {
        margin: 200px 0 300px 0;
        &.gl-7 {
          width: getWidth(7) !important;
        }

        &::before {
          content: '';
          display: block;
          height: 1px;
          background-color: black;
          margin-bottom: 30px;
        }
      }
      .viewList {
        display: flex;
        gap: 12px;
        p {
          color: var(--black, #000);
          font-family: Inter;
          font-size: 20px;
          font-style: italic;
          font-weight: 300;
          line-height: 100%; /* 20px */
          text-transform: uppercase;
        }
        img {
          width: 20px;
          height: 20px;
        }
      }
    } //publidetail
  }

  @include pc-desktop {
    .publication-detail {
      .breadcrumb {
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(6) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(2.1) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(6) !important;
          }
          margin-top: 98px;
          .academyList {
            .academy {
              .txt {
                font-size: 14px;

                .year {
                  font-size: 14px;
                }
              }
            }
          }

          .title {
            font-size: 36px;
          }
          .tag {
            margin-top: 50px;

            .list-date {
            }
          }
          .writerInfo {
            margin-top: 20px;
            .writer {
              .team {
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }

          .text {
            .abstract {
            }
            .subtext {
            }
          }
          .titleImg {
            margin-top: 50px;

            .mediaImg {
              min-height: 415px;
            }
          }
          .linkGroup {
            .btnGroup {
              button {
              }
            }
            .shareGroup {
            }
          }
        }
        .footer {
          margin: 200px 0 300px 0;
          &.gl-7 {
            width: getWidth(6) !important;
          }

          &::before {
          }
        }
        .viewList {
          p {
          }
          img {
          }
        }
      } //publidetail
    }
  }
  @include pc-large {
    .publication-detail {
      .breadcrumb {
        margin: 130px 0 170px 0;
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(6) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(2.1) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(6) !important;
          }

          padding: 70px;

          .academyList {
            .academy {
              .txt {
                font-size: 18px;

                .year {
                  font-size: 18px;
                }
              }
            }
          }

          .title {
            font-size: 50px;
            margin-top: 40px;
          }
          .tag {
            margin-top: 70px;

            .list-date {
              font-size: 20px;
            }
          }
          .writerInfo {
            margin-top: 25px;
            .writer {
              .team {
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }

          .text {
            .abstract {
              font-size: 52px;
            }
            .subtext {
              font-size: 22px;
            }
          }
          .titleImg {
            margin-top: 70px;

            .mediaImg {
              min-height: 558px;
            }
          }
          .linkGroup {
            margin-top: 140px;
            gap: 16px;
            .btnGroup {
              button {
                padding: 10px 22px;
                font-size: 16px;
              }
            }
            .shareGroup {
              img {
                width: 32px;
                height: 32px;
              }
            }
          }
        }
        .footer {
          margin: 280px 0 580px 0;
          &.gl-7 {
            width: getWidth(6) !important;
          }

          &::before {
          }
        }
        .viewList {
          p {
            font-size: 26px;
          }
          img {
            width: 26px;
            height: 26px;
          }
        }
      } //publidetail
    }
  }
  @include pc-4k {
    .publication-detail {
      .breadcrumb {
        margin: 200px 0 248px 0;
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(6) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(2.1) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(6) !important;
          }

          padding: 70px;

          .academyList {
            .academy {
              padding: 14px 24px;
              .txt {
                font-size: 28px;

                .year {
                  font-size: 28px;
                }
              }
            }
          }

          .title {
            font-size: 88px;
            margin-top: 40px;
          }
          .tag {
            margin-top: 100px;

            .list-date {
              font-size: 30px;
            }
          }
          .writerInfo {
            margin-top: 40px;
            .writer {
              font-size: 30px;
              .team {
                font-size: 30px;
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }

          .text {
            .abstract {
              font-size: 78px;
            }
            .subtext {
              font-size: 32px;
            }
          }
          .titleImg {
            margin-top: 200px;

            .mediaImg {
              min-height: 1058px;
            }
          }
          .linkGroup {
            margin-top: 200px;
            gap: 24px;
            .btnGroup {
              button {
                padding: 10px 22px;
                font-size: 22px;
              }
              img {
                width: 26px;
                height: 26px;
              }
            }
            .shareGroup {
              img {
                width: 44px;
                height: 44px;
              }
            }
          }
        }
        .footer {
          margin: 400px 0 600px 0;
          &.gl-7 {
            width: getWidth(6) !important;
          }

          &::before {
            margin-bottom: 60px;
          }
        }
        .viewList {
          p {
            font-size: 36px;
          }
          img {
            width: 36px;
            height: 36px;
          }
        }
      } //publidetail
    }
  }
  @include tablet {
    .publication-detail {
      .breadcrumb {
        margin: 100px 0 5px 0;
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(8) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(1.1) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(8) !important;
          }

          padding: 30px;

          .academyList {
            .academy {
              padding: 8px 14px;
              .txt {
                font-size: 10px;

                .year {
                  font-size: 10px;
                }
              }
            }
          }

          .title {
            font-size: 26px;
            margin-top: 20px;
          }
          .tag {
            margin-top: 40px;

            .list-date {
              font-size: 14px;
            }
          }
          .writerInfo {
            margin-top: 20px;
            .writer {
              font-size: 14px;
              .team {
                font-size: 14px;
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(7) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }
          margin-top: 100px;
          .text {
            .abstract {
              font-size: 38px;
            }
            .subtext {
              font-size: 14px;
            }
          }
          .titleImg {
            margin-top: 92px;

            .mediaImg {
              min-height: 300px;
            }
          }
          .linkGroup {
            margin-top: 100px;
            gap: 10px;
            .btnGroup {
              button {
                padding: 10px 16px;
                font-size: 12px;
              }
              img {
                width: 14px;
                height: 14px;
              }
            }
            .shareGroup {
              img {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .footer {
          margin: 200px 0 200px 0;
          &.gl-7 {
            width: getWidth(8) !important;
          }

          &::before {
            margin-bottom: 30px;
          }
        }
        .viewList {
          p {
            font-size: 20px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      } //publidetail
    }
  }
  @include mobile {
    .publication-detail {
      .breadcrumb {
        margin: 100px 0 5px 0;
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(8) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(1.1) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(8) !important;
          }

          padding: 30px;

          .academyList {
            .academy {
              padding: 8px 14px;
              .txt {
                font-size: 10px;

                .year {
                  font-size: 10px;
                  padding-right: 3px;
                }
              }
            }
          }

          .title {
            font-size: 26px;
            margin-top: 20px;
          }
          .tag {
            margin-top: 40px;

            .list-date {
              font-size: 14px;
            }
          }
          .writerInfo {
            margin-top: 20px;
            .writer {
              font-size: 14px;
              .team {
                font-size: 14px;
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(7) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }
          margin-top: 100px;
          .text {
            .abstract {
              font-size: 38px;
            }
            .subtext {
              font-size: 14px;
            }
          }
          .titleImg {
            margin-top: 50px;

            .mediaImg {
              min-height: 230px;
            }
          }
          .linkGroup {
            margin-top: 100px;
            gap: 10px;
            display: block;
            .btnGroup {
              button {
                padding: 10px 16px;
                font-size: 12px;
              }
              img {
                width: 14px;
                height: 14px;
              }
            }
            .shareGroup {
              display: flex;
              justify-content: flex-start;
              margin-top: 40px;
              img {
                width: 30px;
                height: 30px;
              }
            }
          }
        }
        .footer {
          margin: 200px 0 100px 0;
          &.gl-7 {
            width: getWidth(8) !important;
          }

          &::before {
            margin-bottom: 30px;
          }
        }
        .viewList {
          p {
            font-size: 14px;
          }
          img {
            width: 12px;
            height: 14px;
          }
        }
      } //publidetail
    }
  }
  @include mobile-small {
    .publication-detail {
      .breadcrumb {
        margin: 76px 0 60px 0;
      }
      .publidetail {
        &.gl-7 {
          width: getWidth(10) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(0.4) !important;
        }
        .head {
          &.gl-7 {
            width: getWidth(10) !important;
          }

          padding: 20px;

          .academyList {
            .academy {
              padding: 4px 10px;
              .txt {
                font-size: 10px;

                .year {
                  font-size: 10px;
                  padding-right: 3px;
                }
              }
            }
          }

          .title {
            font-size: 24px;
            margin-top: 20px;
          }
          .tag {
            margin-top: 30px;

            .list-date {
              font-size: 14px;
            }
          }
          .writerInfo {
            margin-top: 10px;
            .writer {
              font-size: 14px;
              .team {
                font-size: 14px;
              }
            }
          }
        }
        .container {
          &.gl-6 {
            width: getWidth(10) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(0.4) !important;
          }
          margin-top: 100px;
          .text {
            .abstract {
              font-size: 26px;
            }
            .subtext {
              font-size: 16px;
            }
          }
          .titleImg {
            margin-top: 50px;

            .mediaImg {
              border-radius: 0;
              min-height: 250px;
            }
          }
          .linkGroup {
            margin-top: 100px;
            gap: 10px;
            display: block;
            .btnGroup {
              button {
                padding: 10px 16px;
                font-size: 12px;
              }
              img {
                width: 14px;
                height: 14px;
              }
            }
            .shareGroup {
              display: flex;
              justify-content: center;
              margin-top: 40px;
              img {
                width: 36px;
                height: 36px;
              }
            }
          }
        }
        .footer {
          margin: 100px 0 100px 0;
          &.gl-7 {
            width: getWidth(10) !important;
          }

          &::before {
            margin-bottom: 30px;
          }
        }
        .viewList {
          p {
            font-size: 20px;
          }
          img {
            width: 20px;
            height: 20px;
          }
        }
      } //publidetail
    }
  }
</style>

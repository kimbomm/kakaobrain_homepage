<template>
  <div class="publications">
    <div class="breadcrumb">
      <BreadCrumb :data="breadcrumb" />
    </div>
    <div class="head l-ml-2 gl-6">
      <div class="title">
        <p>Publications</p>
      </div>
      <div class="subtitle l-ml-1 gl-5">
        <p v-html="subtitle[language][0]"></p>

        <div class="tab">
          <div class="datasetTab">
            <nuxt-link :to="{ path: '/contents/tech/datasets' }"
              >Data Set</nuxt-link
            >
          </div>
          <div class="challengesTab">
            <nuxt-link :to="{ path: '/contents/research/challenge' }"
              >Challenges</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container l-ml-3 gl-6">
      <!-- <select class="selectedBox" v-model="selectedYear">
        <option v-for="year in yearOptions" :key="year">
          {{ year }}
        </option>
      </select> -->

      <!-- <v-select class="selectbox" :options="yearOptions"  @input="filterByYear"></v-select> -->

      <select class="selectbox" v-model="selectedYear" @change="filterByYear">
        <option v-for="year in yearOptions" :key="year">{{ year }}</option>
      </select>
      <div class="publication" v-for="(item, index) in list" :key="index">
        <div class="tit">
          <div class="headline gl-6">
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
              <div class="publiImg" v-if="item && item.titleMediaId">
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
              <!-- 데이터 추가시 수정  -->
              <div class="btnGroup">
                <div class="firstGroup">
                  <button onclick="location.href=`${item.pdf}`">
                    <img src="@/assets/images/icons/pdf.svg" />PDF
                  </button>

                  <button onclick="location.href=`${item.github}`">
                    <img src="@/assets/images/icons/github.svg" />github
                  </button>
                </div>
                <div class="secondGroup">
                  <button onclick="location.href=`${item.dataset}`">
                    <img src="@/assets/images/icons/dataset.svg" />
                    Data Set
                  </button>

                  <button onclick="location.href=`${item.huggingface}`">
                    <img src="@/assets/images/icons/huggingface.svg" />
                    Hugging Face
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <List-paging
      class="listPaging gl-5 l-ml-2"
      v-if="total > 0"
      :limit="pageData.limit"
      :offset="pageData.offset"
      :total="total"
      @onChange="onPagingChange"
    />
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import BreadCrumb from '@/components/elements/BreadCrumb'
  import ListPaging from '@/components/elements/ListPaging'
  import vSelect from 'vue-select'
  import Vue from 'vue'
  import 'vue-select/dist/vue-select.css'
  Vue.component('v-select', vSelect)

  // vSelect.props.components.default = () => ({
  //   Deselect: {
  //     render: createElement => createElement('span', '❌')
  //   },
  //   OpenIndicator: {
  //     render: createElement => createElement('span', '▽')
  //   }
  // })

  export default {
    // head() {
    //   return {
    //     meta: [
    //       {
    //         hid: 'og:url',
    //         property: 'og:url',
    //         content: `${process.env.BASE_URL}/contents/research/publications`
    //       },
    //       {
    //         hid: 'og:image',
    //         property: 'og:image',
    //         content: `${process.env.BASE_URL}/meta/meta_homepage_research.png`
    //       }
    //     ]
    //   }
    // },
    components: {
      BreadCrumb,
      ListPaging,
      'v-select': vSelect
    },
    data() {
      return {
        subtitle: {
          KR: [
            `왜 카카오브레인은 끊임없이 AI 기술을 오픈할까요? 공개와 공유의 문화가 기술을 진화시킵니다. 카카오브레인은 논문 발표와 코드 공개를 통해서 실질적인 핵심적인 기술로 쓰시고, 이것이 우리의 삶
           을 좀더 풍요롭게 할 수 있도록 최선을 다합니다.`
          ],
          EN: [
            `Why does Kakao Brain constantly open its AI technology? A culture of openness and sharing evolves technology.
             Kakao Brain publishes theses and opens the codes to make them available as practical core technologies.
             This way, we are doing our best to make our lives richer.`
          ]
        },
        breadcrumb: [
          { text: 'Research', sub: 'research' },
          { text: 'Article', sub: 'sub' },
          { text: 'Multi-modal', sub: 'multi-modal' }
        ],
        list: [],
        tags: [],
        total: null,
        pageData: {
          offset: 0,
          limit: 5,
          targetLang: this.$store.state.language,
          tag: ''
        },
        filteredPublications: [],
        selectedYear: 'ALL',
        yearOptions: ['ALL', '2023', '2022', '2021']
      }
    },

    computed: {
      ...mapState({
        language: state => state.language
      })
    },
    async mounted() {
      await this.init()
    },

    methods: {
      filterByYear() {
        if (this.selectedYear === 'ALL') {
          this.filteredPublications = this.list
        } else {
          const selectedYear = parseInt(this.selectedYear)
          this.filteredPublications = this.list.filter(item => {
            const publicationYear = item.showAt
              ? new Date(item.showAt).getFullYear()
              : null
            return publicationYear === selectedYear
          })
        }
      },
      async init() {
        await this.setBreadcrumb()
      },
      getOptionStyle(year) {
        return {
          'border-radius': '25px'
        }
      },
      created() {
        this.init()
      },
      async setBreadcrumb() {
        this.breadcrumb.push()
      },
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
      },
      onPagingChange(val) {
        this.pageData.offset = val * this.pageData.limit
        this.fetchList()
      }
    }
  }
</script>
<style lang="scss" scoped>
  .publications {
    margin-bottom: 300px;

    .breadcrumb {
      margin: 100px 20px 0 0;
    }
    .head {
      width: 784px;
      margin-top: 48px;
      position: relative;
      &.l-ml-2 {
        margin-left: getMargin(2) !important;
      }

      &.gl-6 {
        width: getWidth(7) !important;
      }
      .title {
        color: var(--black, #000);
        font-family: Inter;
        font-size: 80px;
        font-style: normal;
        font-weight: 900;
        line-height: 120%; /* 96px */
      }

      .subtitle {
        &.gl-5 {
          width: getWidth(5) !important;
        }
        &.l-ml-1 {
          margin-left: getMargin(1) !important;
        }

        margin-top: 50px;
        color: var(--black, #000);
        font-family: Noto Sans KR;
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: 150%; /* 24px */

        .tab {
          margin-top: 30px;
          color: var(--black, #000);
          font-family: Inter;
          font-size: 12px;
          font-style: italic;
          font-weight: 400;
          line-height: 130%; /* 15.6px */
          display: flex;
          gap: 10px;
          .datasetTab {
            padding: 8px 14px;
            width: 77px;
            border-radius: 27px;
            border: 1px solid var(--black, #000);
          }

          .challengesTab {
            padding: 8px 14px;
            width: 91px;
            border-radius: 27px;
            border: 1px solid var(--black, #000);
          }
        }
      }
    }
    .container {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 130px 0 0 0;

      &.l-ml-3 {
        margin-left: getMargin(3) !important;
      }
      &.gl-6 {
        width: getWidth(5) !important;
      }

      .tit {
        .headline {
          &::before {
            content: '';
            display: block;
            height: 1px;
            background-color: black;
            margin-bottom: 40px;
          }

          &.gl-6 {
            width: getWidth(5) !important;
          }
          .text {
            &.gl-6 {
              width: getWidth(5) !important;
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
                width: 100%;
                font-size: 12px;
                font-style: normal;
                font-weight: 400;
                line-height: 150%; /* 18px */
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
            .btnGroup {
              display: flex;
              margin: 30px 0 40px 0;
              gap: 10px;

              .firstGroup {
                display: flex;
                gap: 10px;
                margin: 0 0 0 0;

                button {
                  display: flex;
                  padding: 10px 16px;

                  align-items: center;
                  gap: 10px;
                  border-radius: 4px;
                  border: 1px solid var(--black, #000);
                }
              }
              .secondGroup {
                display: flex;
                gap: 10px;
                margin: 0 0 0 0;
                button {
                  display: flex;
                  padding: 10px 16px;
                  justify-content: center;
                  align-items: center;
                  gap: 10px;
                  border-radius: 4px;
                  border: 1px solid var(--black, #000);
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
    .listPaging {
      margin-top: 0px;
      &.gl-5 {
        width: getWidth(5) !important;
      }
      &::before {
        content: '';
        display: block;
        height: 1px;
        background-color: black;
        margin-bottom: 80px;
      }
    }
  }
  //min-width: 1361px
  @include pc-desktop {
    .publications {
      margin-bottom: 400px;
      .breadcrumb {
      }
      .head {
        margin-top: 98px;
        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }

        &.gl-6 {
          width: getWidth(6) !important;
        }
        .title {
          font-size: 90px;
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }
          margin-top: 60px;
          font-size: 16px;
          .tab {
            font-size: 14px;
            .datasetTab {
              width: 86px;
            }

            .challengesTab {
              width: 102px;
            }
          }
        }
      }
      .container {
        select {
          width: 117px;
          font-size: 14px;
        }

        option {
        }

        select::-ms-expand {
        }
        padding: 140px 0 0 0;

        &.l-ml-3 {
          margin-left: getMargin(3) !important;
        }
        &.gl-6 {
          width: getWidth(5) !important;
        }

        .tit {
          .headline {
            &::before {
              margin-bottom: 60px;
            }

            &.gl-6 {
              width: getWidth(5) !important;
            }
            .text {
              &.gl-6 {
                width: getWidth(5) !important;
              }

              font-size: 22px;

              .publiImg {
                .mediaImg {
                  width: 300px;
                  height: 140px;
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
                  &:last-child::after {
                  }
                }
              }
              .btnGroup {
                margin: 30px 0 60px 0;
                .firstGroup {
                }
                .secondGroup {
                }
              }
            }
            .academyList {
              .academy {
                .txt {
                  .year {
                  }
                }
              }
            }
          }
        }

        .link {
          img {
          }
        }
      }
      .listPaging {
        &.gl-5 {
          width: getWidth(5) !important;
        }
        &::before {
          content: '';
          margin-bottom: 100px;
        }
      }
    }
  }
  //min-width:2560px
  @include pc-large {
    .publications {
      .breadcrumb {
        margin: 130px 20px 0 0;
      }
      .head {
        margin-top: 170px;
        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }

        &.gl-6 {
          width: getWidth(6) !important;
        }
        .title {
          font-size: 120px;
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }
          margin-top: 100px;
          font-size: 20px;

          .tab {
            margin-top: 50px;
            font-size: 18px;
            .datasetTab {
              padding: 8px 18px;
              width: 110px;
            }

            .challengesTab {
              padding: 8px 18px;
              width: 130px;
              background-size: 13px;
            }
          }
        }
      }
      .container {
        select {
          width: 124px;
          font-size: 18px;
          height: 39px;
          margin-bottom: 28px;
        }

        option {
        }

        select::-ms-expand {
        }
        padding: 200px 0 0 0;

        &.l-ml-3 {
          margin-left: getMargin(3) !important;
        }
        &.gl-6 {
          width: getWidth(5) !important;
        }

        .tit {
          .headline {
            &::before {
              margin-bottom: 80px;
            }

            &.gl-6 {
              width: getWidth(5) !important;
            }
            .text {
              &.gl-6 {
                width: getWidth(5) !important;
              }

              font-size: 30px;

              .publiImg {
                margin-top: 30px;
                .mediaImg {
                  width: 330px;
                  height: 154px;
                  img {
                  }
                }
              }

              .tag {
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
                  &:last-child::after {
                  }
                }
              }
              .btnGroup {
                margin: 30px 0 80px 0;
                .firstGroup {
                  gap: 16px;
                  button {
                    padding: 10px 22px;
                    font-size: 16px;

                    img {
                      width: 20px;
                      height: 20px;
                    }
                  }
                }
                .secondGroup {
                  gap: 16px;
                  button {
                    padding: 10px 22px;
                    font-size: 16px;

                    img {
                      width: 20px;
                      height: 20px;
                    }
                  }
                }
              }
            }
            .academyList {
              .academy {
                padding: 8px 20px;

                .txt {
                  font-size: 18px;
                  .year {
                  }
                }
              }
            }
          }
        }

        .link {
          img {
          }
        }
      }
      .listPaging {
        &.gl-5 {
          width: getWidth(5) !important;
        }
        &::before {
          content: '';
          margin-bottom: 160px;
        }
      }
    }
  }
  //min-width: 3840px
  @include pc-4k {
    .publications {
      .breadcrumb {
      }
      .head {
        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }

        &.gl-6 {
          width: getWidth(7) !important;
        }
        .title {
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(5) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(1) !important;
          }

          .tab {
            .datasetTab {
            }

            .challengesTab {
            }
          }
        }
      }
      .container {
        select {
        }

        option {
        }

        select::-ms-expand {
        }

        &.l-ml-3 {
          margin-left: getMargin(3) !important;
        }
        &.gl-6 {
          width: getWidth(5) !important;
        }

        .tit {
          .headline {
            &::before {
            }

            &.gl-6 {
              width: getWidth(5) !important;
            }
            .text {
              &.gl-6 {
                width: getWidth(5) !important;
              }

              .publiImg {
                .mediaImg {
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
                  &:last-child::after {
                  }
                }
              }
              .firstGroup {
                button {
                }
              }
            }
            .academyList {
              .academy {
                .txt {
                  font-size: 12px;
                  .year {
                  }
                }
              }
            }
          }
        }

        .link .link {
          img {
          }
        }
      }
      .listPaging {
        &.gl-5 {
          width: getWidth(5) !important;
        }
        &::before {
          content: '';
        }
      }
    }
  }
  @media screen and (min-width: 5120px) {
  }
  //max-width: 1024px
  @include tablet {
    .publications {
      margin-bottom: 200px;
      .breadcrumb {
      }
      .head {
        margin-top: 13px;
        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }

        &.gl-6 {
          width: getWidth(7) !important;
        }
        .title {
          font-size: 50px;
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(7) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(0) !important;
          }
          margin-top: 40px;
          font-size: 14px;

          .tab {
            margin-top: 20px;
            font-size: 10px;
            .datasetTab {
              width: 69px;
            }

            .challengesTab {
              width: 81px;
            }
          }
        }
      }
      .container {
        select {
        }

        option {
        }

        select::-ms-expand {
        }

        &.l-ml-3 {
          margin-left: getMargin(2) !important;
        }
        &.gl-6 {
          width: getWidth(7) !important;
        }
        padding: 100px 0 0 0;

        .tit {
          .headline {
            &::before {
            }

            &.gl-6 {
              width: getWidth(7) !important;
            }
            .text {
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
                }
              }

              .writerInfo {
                .writer {
                  .team {
                  }
                  &:last-child::after {
                  }
                }
              }
              .btnGroup {
                margin: 30px 0 40px 0;
                .firstGroup {
                  button {
                    font-size: 12px;
                    gap: 8px;
                  }
                }
                .firstGroup {
                  button {
                    font-size: 12px;
                    gap: 8px;
                  }
                }
              }
            }
            .academyList {
              .academy {
                .txt {
                  .year {
                  }
                }
              }
            }
          }
        }

        .link {
          img {
          }
        }
      }
      .listPaging {
        &.gl-5 {
          width: getWidth(7) !important;
        }

        &.l-ml-2 {
          margin-left: getMargin(2) !important;
        }
        &::before {
          content: '';
          margin-bottom: 80px;
        }
      }
    }
  }
  //max-width: 768px
  @media screen and (max-width: 768px) {
    .publications {
      margin-bottom: 200px;
      .breadcrumb {
      }
      .head {
        &.l-ml-2 {
          margin-left: getMargin(1) !important;
        }

        &.gl-6 {
          width: getWidth(8) !important;
        }
        .title {
          font-size: 50px;
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(8) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(0) !important;
          }
          margin-top: 40px;
          font-size: 14px;

          .tab {
            margin-top: 20px;
            font-size: 10px;
            .datasetTab {
              width: 69px;
            }

            .challengesTab {
              width: 81px;
            }
          }
        }
      }
      .container {
        select {
        }

        option {
        }

        select::-ms-expand {
        }

        &.l-ml-3 {
          margin-left: getMargin(1) !important;
        }
        &.gl-6 {
          width: getWidth(8) !important;
        }
        padding: 100px 0 0 0;
        .tit {
          .headline {
            &::before {
            }

            &.gl-6 {
              width: getWidth(8) !important;
            }
            .text {
              &.gl-6 {
                width: getWidth(8) !important;
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
                }
              }

              .writerInfo {
                .writer {
                  .team {
                  }
                  &:last-child::after {
                  }
                }
              }
              .btnGroup {
                .firstGroup {
                  button {
                    font-size: 12px;
                  }
                }
                .secondGroup {
                  button {
                    font-size: 12px;
                  }
                }
              }
            }
            .academyList {
              .academy {
                .txt {
                  font-size: 12px;
                  .year {
                  }
                }
              }
            }
          }
        }

        .link {
          img {
          }
        }
      }
      .listPaging {
        height: 26px;
        &.gl-5 {
          width: getWidth(8) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(1) !important;
        }
        &::before {
          content: '';
          margin-bottom: 60px;
        }
      }
    }
  }
  //max-width: 374px
  @include mobile-small {
    .publications {
      margin-bottom: 250px;
      .breadcrumb {
        margin-top: 100px;
      }
      .head {
        margin-top: 60px;
        &.l-ml-2 {
          margin-left: getMargin(0.5) !important;
        }

        &.gl-6 {
          width: getWidth(10) !important;
        }
        .title {
          font-size: 30px;
        }

        .subtitle {
          &.gl-5 {
            width: getWidth(10) !important;
          }
          &.l-ml-1 {
            margin-left: getMargin(0) !important;
          }
          margin-top: 20px;
          font-size: 14px;

          .tab {
            .datasetTab {
            }

            .challengesTab {
            }
          }
        }
      }
      .container {
        select {
        }

        option {
        }

        select::-ms-expand {
        }

        &.l-ml-3 {
          margin-left: getMargin(0.5) !important;
        }
        &.gl-6 {
          width: getWidth(10) !important;
        }

        .tit {
          .headline {
            &::before {
            }

            &.gl-6 {
              width: getWidth(10) !important;
            }
            .text {
              &.gl-6 {
                width: getWidth(10) !important;
              }

              .publiImg {
                .mediaImg {
                  width: 320px;
                  height: 150px;
                  img {
                  }
                }
              }

              .tag {
                margin-top: 20px;

                .list-date {
                  font-size: 14px;
                }
              }

              .writerInfo {
                .writer {
                  font-size: 14px;
                  .team {
                  }
                  &:last-child::after {
                  }
                }
              }
              .btnGroup {
                display: flex;
                flex-wrap: wrap;
                .firstGroup {
                }
                .secondGroup {
                }
              }
            }
            .academyList {
              .academy {
                .txt {
                  .year {
                  }
                }
              }
            }
          }
        }

        .link {
          img {
          }
        }
      }
      .listPaging {
        &.gl-5 {
          width: getWidth(10) !important;
        }
        &.l-ml-2 {
          margin-left: getMargin(0.5) !important;
        }
        &::before {
          content: '';
        }
      }
    }
  }
</style>

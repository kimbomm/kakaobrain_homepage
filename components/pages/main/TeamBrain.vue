<template>
  <div class="team">
    <p class="team-title l-ml-2">Who is working on?</p>
    <div class="team-img"></div>
    <div class="team-content">
      <div>
        <p>
          Recommendation<br />
          keywords by<br />
          <span>kakaobrain.</span>
        </p>
        <span ref="count" class="team-number">{{ NUMBER }}</span>
      </div>
      <div class="team-members">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <Tag :data="item" />
          </li>
        </ul>
      </div>
      <div class="team-buttons">
        <button class="more" title="더보기" @click="addTag" :disabled="isAll">
          <img src="@/assets/images/arrow-down.svg" alt="more button image" />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex'
  import Tag from '@/components/elements/Tag'
  export default {
    components: {
      Tag
    },
    data() {
      return {
        NUMBER: 0,
        pageData: {
          offset: 0,
          limit: 20,
          contentType: 'ALL',
          targetLAng: this.$store.state.language
        },
        list: [],
        tagTotal: 0
      }
    },
    computed: {
      isAll() {
        return this.list.length === this.tagTotal
      }
    },
    async mounted() {
      await this.init()
      await this.scrollBody.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
      this.scrollBody.removeEventListener('scroll', this.onScroll)
    },
    methods: {
      ...mapActions({
        getTags: 'getTags'
      }),
      onScroll() {
        if (
          this.scrollBody.scrollTop + window.innerHeight >=
          this.$refs['count'].offsetTop
        ) {
          setInterval(() => {
            if (this.NUMBER < this.tagTotal) {
              this.NUMBER++
            }
          }, 400)
        }
      },
      async init() {
        const res = await this.getTags(this.pageData)
        this.list = res.data.list
        this.tagTotal = res.data.count
      },
      async addTag() {
        if (this.list.length < this.tagTotal) {
          this.pageData.offset += 20
          const res = await this.getTags(this.pageData)
          this.list = this.list.concat(res.data.list)
          this.tagTotal = res.data.count
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .team {
    padding: 0 20px;
    &-title {
      font-size: 16px;
      margin-bottom: 100px;
    }
    &-img {
      width: 100%;
      height: 600px;
      position: relative;
      overflow: hidden;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      background-image: url(@/assets/images/team_main.jpeg);
    }
    &-content {
      margin-top: 20px;
      > div {
        &:first-child {
          display: flex;
          justify-content: space-between;
          align-items: center;
          p {
            font-size: 70px;
            line-height: 1;
            font-style: italic;
            span {
              font-weight: 900;
            }
          }
          .team-number {
            font-style: italic;
            font-size: 266px;
            line-height: 1;
            font-weight: 100;
            letter-spacing: -15px;
          }
        }
      }
    }
    &-members {
      margin-top: 200px;
      ul {
        display: flex;
        flex-wrap: wrap;
        li {
          flex: 0;
          padding: 0 20px 20px 0;
        }
      }
    }
    &-buttons {
      display: flex;
      justify-content: space-between;
    }
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 131px;
      height: 131px;
      border-radius: 50%;
      background-color: $brain-yellow;
      img {
        width: 30%;
      }
      &:disabled {
        background-color: $surface-2;
        cursor: not-allowed;
      }
    }
    .apply {
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 131px;
      height: 131px;
      padding: 0 30px;
      line-height: 130%;
      font-family: Inter;
      font-size: 70px;
      border-radius: 200px;
      background-color: $brain-mint;
      color: $gray-8;
      &-text {
        font-style: italic;
      }
      &-mark {
        font-size: 50px;
      }
    }
  }
  @include pc-large {
    .team {
      &-title {
        font-size: 22px;
      }
      &-img {
        height: 804px;
      }
      &-content {
        > div {
          &:first-child {
            p {
              font-size: 95px;
            }
            .team-number {
              font-size: 356px;
            }
          }
        }
      }
      &-members {
        margin-top: 300px;
        ul li {
          padding: 0 30px 30px 0;
        }
      }
      .more {
        width: 182px;
        height: 182px;
      }
      .apply {
        height: 182px;
        padding: 0 50px;
        font-size: 94px;
        &-mark {
          font-size: 66px;
        }
      }
    }
  }
  @include pc-4k {
    .team {
      &-title {
        margin-bottom: 200px;
        font-size: 34px;
      }
      &-img {
        height: 1212px;
      }
      &-content {
        margin-top: 40px;
        > div {
          &:first-child {
            p {
              font-size: 145px;
            }
            .team-number {
              font-size: 526px;
            }
          }
        }
      }
      &-members {
        margin-top: 395px;
      }
      .more {
        width: 267px;
        height: 267px;
      }
      .apply {
        height: 267px;
        padding: 0 80px;
        font-size: 144px;
        &-mark {
          font-size: 86px;
        }
      }
    }
  }
  @include tablet {
    .team {
      margin-bottom: 300px;
      &-title {
        font-size: 16px;
      }
      &-img {
        height: 400px;
      }
      &-content {
        margin-top: 20px;
        > div {
          &:first-child {
            p {
              font-size: 42px;
            }
            .team-number {
              font-size: 140px;
            }
          }
        }
      }
      &-members {
        margin-top: 140px;
        ul li {
          padding: 0 10px 10px 0;
        }
      }
      .more {
        width: 84px;
        height: 84px;
      }
      .apply {
        height: 84px;
        padding: 0 30px;
        font-size: 40px;
        &-mark {
          font-size: 30px;
        }
      }
    }
  }
  @include mobile {
    .team {
      padding: 0;
      &-title {
        width: 100% !important;
        margin-left: 0 !important;
        padding: 0 20px;
        margin-bottom: 40px;
        font-size: 12px;
      }
      &-img {
        background-image: url(@/assets/images/team_main_mob.jpg);
      }
      &-content {
        margin-top: 20px;
        padding: 0 20px;
        > div {
          &:first-child {
            display: block;
            br {
              display: none;
            }
            p {
              font-size: 26px;
            }
            .team-number {
              display: block;
              width: 100%;
              margin-top: 20px;
              text-align: right;
              font-size: 140px;
            }
          }
        }
      }
      &-members {
        margin-top: 107px;
      }
      .more {
        width: 38px;
        height: 38px;
      }
      .apply {
        height: 38px;
        padding: 0 16px;
        font-size: 16px;
        &-mark {
          font-size: 16px;
        }
      }
    }
  }
</style>

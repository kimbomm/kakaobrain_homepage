<template>
  <div class="team">
    <p class="team-title l-ml-2">What is our Recommendation?</p>
    <img src="@/assets/images/team_main.jpeg" />
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
          <li><Member /></li>
        </ul>
      </div>
      <button class="more" title="더보기" :disabled="false">
        <img src="@/assets/images/arrow-down.svg" alt="더보기 버튼 이미지" />
      </button>
    </div>
  </div>
</template>
<script>
  import Member from '@/components/elements/Member'
  export default {
    components: {
      Member
    },
    data() {
      return {
        NUMBER: 0,
        total: 81
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
        if (
          window.scrollY + window.innerHeight >=
          this.$refs['count'].offsetTop
        ) {
          setInterval(() => {
            if (this.NUMBER < this.total) {
              this.NUMBER++
            }
          }, 400)
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
    > img {
      display: block;
      width: 100%;
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
    .more {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 131px;
      height: 131px;
      border-radius: 50%;
      background-color: $brain-yellow;
      img {
        width: 50%;
      }
      &:disabled {
        background-color: $surface-2;
      }
    }
  }
  @include pc-large {
    .team {
      &-title {
        font-size: 22px;
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
    }
  }
  @include pc-4k {
    .team {
      &-title {
        margin-bottom: 200px;
        font-size: 34px;
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
    }
  }
  @include tablet {
    .team {
      &-title {
        font-size: 16px;
      }
      &-content {
        margin-top: 40px;
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
      &-content {
        margin-top: 40px;
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
    }
  }
</style>

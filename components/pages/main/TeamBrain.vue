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
</style>

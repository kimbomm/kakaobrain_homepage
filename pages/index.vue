<template>
  <div class="layout">
    <div class="index-title">작업 페이지</div>
    <div class="inner">
      <ul>
        <li>
          <div class="tit">공통</div>
          <ul>
            <li>
              <nuxt-link to="/component" class="link"
                >컴포넌트 페이지 가기</nuxt-link
              >
            </li>
          </ul>
        </li>
        <li>
          <div class="tit">page</div>
          <ul>
            <li>
              <div class="sub-tit">페이지</div>
              <ul>
                <li>
                  <nuxt-link to="/main" class="link">메인 화면</nuxt-link>
                </li>
              </ul>
            </li>
            <li>
              <div class="sub-tit">리스트</div>
              <ul>
                <li>
                  <nuxt-link to="/innovation" class="link"
                    >innovation 리스트 화면</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/archive" class="link"
                    >archive 리스트 화면</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/monthly-issue" class="link"
                    >monthly 리스트 화면</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/news" class="link"
                    >공통 리스트 화면</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <div class="sub-tit">monthly</div>
              <ul>
                <li>
                  <nuxt-link to="/monthly-issue/1_id" class="link"
                    >상세페이지 가기_1</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/monthly-issue/2_id" class="link"
                    >상세페이지 가기_2</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/monthly-issue/3_id" class="link"
                    >상세페이지 가기_논문</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/monthly-issue/4_id" class="link"
                    >상세페이지 가기_storytelling</nuxt-link
                  >
                </li>
              </ul>
            </li>
            <li>
              <div class="sub-tit">About</div>
              <ul>
                <li>
                  <nuxt-link to="/about" class="link"
                    >index 페이지</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/about/culture" class="link"
                    >culture 페이지</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link to="/about/principle" class="link"
                    >principle 페이지</nuxt-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index'
  }
</script>
<style lang="scss" scoped>
  .layout {
    padding: 200px 80px 80px;
    box-sizing: border-box;
    .index-title {
      margin-bottom: 40px;
      font-size: 35px;
      font-weight: 600;
    }
    .inner {
      border: 1px solid #000;
    }
    .tit {
      padding: 10px;
      // border: 1px solid #000;
      background-color: #ccc;
      font-weight: 600;
      font-size: 16px;
    }
    .sub-tit {
      padding: 10px;
      background-color: #eee;
      font-weight: 600;
      font-size: 16px;
    }
    .link {
      display: block;
      padding: 10px;
      color: #000;
      font-size: 16px;
      &:hover {
        background-color: #f1f1f1;
      }
    }
  }
</style>

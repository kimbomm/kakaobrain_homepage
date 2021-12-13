<template>
  <div>
    <h1>컴포넌트 페이지</h1>
    <div class="contents">
      <div class="component">
        <h2>컴포넌트 명</h2>
        <div class="content">
          컴포넌트를 넣어주세요
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
h1 {
  display: inline-block;
  font-size: 40px;
  font-weight: 700;
  margin-left: 20px;
  padding-bottom: 10px;
  border-bottom: 4px #000 solid;
}
.contents {
  margin-top: 40px;
}
h2 {
  display: inline-block;
  font-size: 24px;
  font-weight: 500;
  margin-left: 20px;
  padding-bottom: 10px;
  border-bottom: 3px #000 solid;
}
.content {
  margin-top: 20px;
}
</style>

<template>
  <div>
    <h1>컴포넌트 페이지</h1>
    <div class="contents">
      <div class="component">
        <h2>BUTTON</h2>
        <div class="content">
        	<button type="button" class="btn"><span class="txt">Docu. B</span></button>
        	<button type="button" class="btn sub"><span class="txt">Docu. B</span></button>
        	<button type="button" class="btn docu"><span class="txt">Docu. B</span></button>
        	<button type="button" class="btn studio"><span class="txt">Docu. B</span></button>
        	<button type="button" class="btn research"><span class="txt">Research</span></button>
        	<button type="button" class="btn tech"><span class="txt">Research</span></button>
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

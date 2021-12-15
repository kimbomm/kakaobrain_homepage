<template lang="">
	<div>
		<button class="btn-top ">
			<img :src="require(`@/assets/images/gotop_img_17.png`)"
				alt="최상단으로 가기"/>
		</button>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss" scoped>
.btn{ 
	&-top{
		width: 150px;
    height: 150px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 20px;
    font-size: 0;
    text-align: center;
    overflow: hidden;
    z-index: 2;
    padding: 0;
		&:after {
			content: "";
			display: block;
			width: 100%;
			height: 100%;
			background: url("@/assets/images/icon-top_b.svg") no-repeat 50%;
			clear: both;
			position: absolute;
			left: 0;
			top: 0;
			right: 0;
			bottom: 0;
		}
		img{
			width:100%;
		}
	}
}
</style>
<template lang="">
	<div>
		<button class="btn-arrow ">
			<img :src="require(`@/assets/images/gotop_img_0.png`)"
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
	&-arrow{
		width: 150px;
    height: 150px;
    border-radius: 50%;
    position: fixed;
    right: 20px;
    bottom: 170px;
    font-size: 0;
    text-align: center;
    overflow: hidden;
    z-index: 2;
    padding: 0;
		&:after {
			content: "";
			display: block;
			position: absolute;
			width: 60px;
			height: 60px;
			background: url("@/assets/images/icon-arrow.png") no-repeat;
			background-size: 100%;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) rotate(215deg);
		}
		img{
			width:100%;
		}
	}
	
}
</style>
<template lang="">
	<div class="monthly">
		<div :class="`detail-thumbnail ${type}`">
			<img src="@/assets/images/monthly_img_1.png">
		</div>
		<div class="detail-con"></div>
	</div>
</template>
<script>
export default {
	name : "Thumbnail",
	props :{
		type:{
			type:String,
			default:"",
			required:false,
		}
	}
}
</script>
<style lang="scss" scoped>
	.detail{
		&-thumbnail{
			margin-bottom:60px;
			img{
				width:100%;
			}
		}
		
	}
</style>
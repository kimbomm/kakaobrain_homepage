<template>
	<div class="monthly">
		<div :class="`detail-thumbnail ${type}`">
			<img src="@/assets/images/monthly_img_1.png">
		</div>
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
			margin-bottom:145px;
			img{
				width:100%;
			}
		}
	}
	@media screen and (max-width:2560px) {
		.detail{
			&-thumbnail{
				margin-bottom:100px;
			}
		}
	}
	@media screen and (max-width:1920px) {
		.detail{
			&-thumbnail{
				margin-bottom:60px;
			}
		}
	}
	@media screen and (max-width: 1024px) {
		.detail{
			&-thumbnail{
				margin-bottom:100px;
			}
		}
	}
	@media screen and (max-width: 768px) {
		.detail{
			&-thumbnail{
				margin-bottom:60px;
			}
		}
		.gl-9{
			width:100% !important;
		}
	}
	
</style>
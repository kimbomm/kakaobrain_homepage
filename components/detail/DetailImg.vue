<template lang="">
	<div class="monthly l-ml-2">
		<div :class="`detail-image ${type}`">
			<img src="@/assets/images/detail_img_1.png">
		</div>
		<div class="detail-text">{{ text }}</div>
	</div>
</template>
<script>
export default {
	name : "DetailImg",
	props :{
		text: {
			type:String,
			default: "",
			required: true,
		},
		type:{
			type:String,
			default:"",
			required:false,
		}
	}
}
</script>
<style lang="scss" scoped>
	.monthly{
		margin-top:170px;
		margin-bottom:300px;
		.detail{
			&-image{
				img{
					width:100%;
				}
			}
			&-text{
				margin-top:10px;
				line-height:150%;
				font-size:12px;
				font-weight:400; 
				color:$gray-5;
			}
		}
	}
</style>
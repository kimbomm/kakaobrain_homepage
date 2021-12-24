<template>
	<div class="monthly l-ml-3">
		<div :class="`detail ${type}`"> 
			<div class="detail-text">{{ text }}</div>
		</div>
	</div>
</template>
<script>
export default {
	name : "DetailText",
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
	margin-bottom:30px;
	.detail{
		&-text{
			line-height:150%;
			font-size:32px;
			font-weight:400; 
		}
	}
}
@media screen and (max-width: 2560px) {
	.monthly{
		.detail{
			&-text{
				font-size:22px;
			}
		}
	}
}
@media screen and (max-width: 1920px) {
	.monthly{
		.detail{
			&-text{
				font-size:16px;
			}
		}
	}
}
@media screen and (max-width: 1024px) {
	.monthly{
		.detail{
			margin: 0 auto;
			&-text{
				font-size:14px;
			} 
		}
	}
	.l-ml-3{
		margin-left: 0 !important;
	}
	.gl-5{
		width:calc(calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)) !important;
	}
}
@media screen and (max-width: 768px) {
	.monthly{
		.detail{
			&-text{
				font-size:16px;
			}
		}
	}
	.gl-5{
		width:100% !important
	}
}
	
</style>
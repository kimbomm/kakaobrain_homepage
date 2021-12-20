<template lang="">
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
			font-size:16px;
			font-weight:400; 
		}
	}
}
	
</style>
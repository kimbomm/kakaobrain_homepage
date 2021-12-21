<template lang="">
	<div class="monthly l-ml-3">
		<div :class="`detail ${type}`"> 
			<div class="detail-subTit">{{ text }}</div>
		</div>
	</div>
</template>
<script>
export default {
	name : "DtaileTitle",
	props: {
		text: {
			type:String,
			default: "",
			required: true,
		},
		type: {
			type: String,
			default: "",
			required: false,
		}
	}
}
</script>
<style lang="scss" scoped>
	.detail {
		margin-bottom: 30px;
		&-subTit {
			line-height: 130%;
			font-size: 40px;
			font-weight: 900; 
		}
	}
</style>
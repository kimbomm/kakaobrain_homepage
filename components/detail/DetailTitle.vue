<template lang="">
	<div class="monthly">
		<div :class="`detail ${type}`"> 
			<div class="detail-title">{{ text }}</div>
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
		margin: 0 auto;
		margin-bottom: 60px;
		&-title {
			line-height: 120%;
			font-size: 90px;
			font-weight: 900; 
		}
	}
</style>
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
			font-size: 78px;
			font-weight: 900; 
		}
	}
	@media screen and (max-width:2560px) {
		.detail {
			&-subTit {
				font-size: 52px;
			}
		}
	}
	@media screen and (max-width:1920px) {
		.detail {
			&-subTit {
				font-size: 40px;
			}
		}
	}
</style>
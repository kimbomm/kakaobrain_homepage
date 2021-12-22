<template lang="">
	<div class="monthly">
		<div :class="`detail ${type} ${ml}`"> 
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
		},
		ml: {
			type: String,
			default: "",
			required: false,
		}
	}
}
</script>
<style lang="scss" scoped>
	.detail {
		margin-bottom: 60px;
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
	@media screen and (max-width:1024px) {
		.detail {
			margin: 0 auto 60px !important;
			&-subTit {
				font-size: 32px;
			}
		}
		.gl-5{
			width:calc(calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)) !important
		}
	}
	@media screen and (max-width:768px){
		.gl-5{
			width:100% !important
		}
	}
</style>
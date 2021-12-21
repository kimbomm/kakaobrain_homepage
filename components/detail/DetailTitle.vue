<template lang="">
	<div class="monthly">
		<div :class="`detail ${type} ${ml}`"> 
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
		// margin: 0 auto;
		margin-bottom: 150px;
		&-title {
			line-height: 120%;
			font-size: 180px;
			font-weight: 900; 
			word-break: keep-all;
		}
	}
	@media screen and (max-width: 3840px) {
		.detail {
			margin: 0 auto;
			margin-bottom: 150px;
		}
		.l-ml-2{
			margin-left:0px;
		}
		.gl-5 {
   		width: calc(calc((100vw - 20px * 11) / 10) * 6 + 20px * (6 - 1)) !important;
		}
	}
	@media screen and (max-width: 2560px) {
		.detail {
			margin-bottom: 100px;
			&-title {
				font-size: 120px;
			}
		}
	}
	@media screen and (max-width: 1920px) {
		.detail {
			margin-bottom: 60px;
			&-title {
				font-size: 90px;
			}
		}
	}
	@media screen and (max-width: 1024px) {
		.detail {
			margin-bottom: 40px;
			&-title {
				font-size: 50px;
			}
		}
	}
	@media screen and (max-width: 768px) {
		.detail {
			margin-bottom: 20px;
			&-title {
				font-size: 30px;
			}
		}
	}
</style>
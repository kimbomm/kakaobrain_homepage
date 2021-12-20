<template>
	<button ref="btn-top" class="btn-top" @click="toScrollTop()" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
		<img
			v-if="interval"
			:src="require(`@/assets/images/top/gotop_img_${NUMBER}.png`)"
			alt="최상단으로 가기"
		/>
	</button>
</template>
<script>
export default {
	data() {
		return {
			interval: null,
			NUMBER: Math.floor(Math.random() * 15) + 1,
		}
	},
	mounted() {},
	methods: {
		toScrollTop() {
			window.scrollTo(0, 0);
		},
		onMouseEnter() {
			this.interval = setInterval(this.onChangeImage, 200)
		},
		onMouseLeave() {
			if (this.interval) {
				clearInterval(this.interval)
				this.interval = null
			}
		},
		onChangeImage() {
			this.NUMBER = Math.floor(Math.random() * 15) + 1
		}
	}
}
</script>
<style lang="scss" scoped>
.btn-top {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: fixed;
	right: 20px;
	bottom: 20px;
	font-size: 0;
	text-align: center;
	overflow: hidden;
	z-index: 2;
	padding: 0;
	background-color: transparent;
	border: 1px #000 solid;
	&:after {
		content: "";
		display: block;
		width: 100%;
		height: 100%;
		background: url("@/assets/images/icon-top_b.svg") no-repeat 50%;
		clear: both;
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
	}
	img{
		width:100%;
	}
}
</style>
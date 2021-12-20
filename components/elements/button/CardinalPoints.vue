<template>
	<button class="btn-arrow"></button>
</template>
<script>
export default {
	mounted() {
		const _this = this
		window.addEventListener('mousemove', function(e) {
			_this.calcRadius(e.clientX, e.clientY)
		})
	},
	beforeDestroy() {
		const _this = this
		window.removeEventListener('mousemove', function(e) {
			_this.calcRadius(e.clientX, e.clientY)
		})
	},
	methods: {
		calcRadius(mouseX, mouseY) {
			const btn = document.getElementsByClassName('btn-arrow')[0]
			// console.log(btn)

			const centerX = btn.offsetLeft + (btn.offsetWidth / 2)
			const centerY = btn.offsetTop + (btn.offsetHeight / 2)
			let degree = 0
			let plusDegree = 0
			if (mouseX <= centerX && mouseY <= centerY) { //좌상단
				degree = this.calcRadianToDegree(centerX, centerY, mouseX, mouseY, 'y')
				plusDegree = 180
			} else if (mouseX > centerX && mouseY <= centerY) { // 우상단
				degree = this.calcRadianToDegree(centerX, centerY, mouseX, mouseY, 'x')
				plusDegree = 270
			} else if (mouseX <= centerX && mouseY > centerY) { // 좌하단
				degree = this.calcRadianToDegree(centerX, centerY, mouseX, mouseY, 'x')
				plusDegree = 90
			} else if (mouseX > centerX && mouseY > centerY) { // 우하단
				degree = this.calcRadianToDegree(centerX, centerY, mouseX, mouseY, 'y')
				plusDegree = 0
			}
			btn.style = `transform: rotate(${plusDegree + degree}deg);`
		},
		calcRadianToDegree(cX, cY, pX, pY, base) {
			const x = Math.abs(pX - cX)
			const y = Math.abs(pY - cY)
			const distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
			const radian = (base == 'x' ? x : y) / distance
			// degree = 180 * 아크사인 / pi
			return 180 * Math.asin(radian) / Math.PI
		}

	}
}
</script>
<style lang="scss" scoped>
.btn-arrow {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	position: fixed;
	right: 20px;
	bottom: 170px;
	font-size: 0;
	text-align: center;
	overflow: hidden;
	z-index: 2;
	padding: 0;
	background-color: #000;
	&:after {
		content: "";
		display: block;
		position: absolute;
		width: 60px;
		height: 60px;
		background: url("@/assets/images/icon-cardinal-point__b.png") no-repeat;
		background-size: cover;
		left: 50%;
		top: 50%;
		margin-left: -30px;
		margin-top: -30px;
		transition: transform .2s linear;
	}
	&.light-mode {
		background-color: #fff;
		background: url("@/assets/images/icon-cardinal-point.png") no-repeat;
	}
}
</style>
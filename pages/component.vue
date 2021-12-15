<template>
  <div>
		<div class="g-header">
			<h2>Kakao Component</h2>
		</div>
		<div class="g-container">
			<div class="g-con">
				<p class="g-tit">BUTTON</p>
				<div class="g-box">
					<Sticker text="Educations" native></Sticker>
					<Sticker text="E." sub="sub" native></Sticker>
					<Sticker text="Docu. B" sub="docu"></Sticker>
					<Sticker text="Studio" sub="studio"></Sticker>
					<Sticker text="Research" sub="research"></Sticker>
					<Sticker text="tech" sub="tech"></Sticker>
				</div>
			</div>
			<div class="g-con">
				<p class="g-tit">ICON</p>
				<div class="g-box">
					<button type="button" class="icon-sns icon-band"></button>
					<button type="button" class="icon-sns icon-insta"></button>
					<button type="button" class="icon-sns icon-facebook"></button>
					<button type="button" class="icon-sns icon-youtube"></button>
					<button type="button" class="icon-sns icon-kakao"></button>
					<button type="button" class="icon-sns icon-naver"></button>
				</div>
				<div class="g-box">
					<button type="button" class="icon-sns icon-band-b"></button>
					<button type="button" class="icon-sns icon-insta-b"></button>
					<button type="button" class="icon-sns icon-facebook-b"></button>
					<button type="button" class="icon-sns icon-youtube-b"></button>
					<button type="button" class="icon-sns icon-kakao-b"></button>
					<button type="button" class="icon-sns icon-naver-b"></button>
				</div>
				<div class="g-box">
					<button type="button" class="icon-sns icon-band-w"></button>
					<button type="button" class="icon-sns icon-insta-w"></button>
					<button type="button" class="icon-sns icon-facebook-w"></button>
					<button type="button" class="icon-sns icon-youtube-w"></button>
					<button type="button" class="icon-sns icon-kakao-w"></button>
					<button type="button" class="icon-sns icon-naver-w"></button>
				</div>
			</div>
		</div>
  </div>
</template> 
<script>
import Sticker from "@/components/elements/button/Sticker";
export default {
  components: {
		Sticker
	},
}
</script>
<style lang="scss" scoped>
.g{
	&-header{
		font-size: 24px;
    padding: 30px 0;
    text-align: center;
    border-bottom: 1px solid $gray-9;
		h2{
			display: inline-block;
			font-size: 40px;
			font-weight: 700;
			margin-left: 20px;
			padding-bottom: 10px;
		}
	}
	&-container{
    padding:30px 20px 200px;
    background: $gray-1;
	}
	&-con{
		&:not(:first-child){
			margin-top:60px;
		}
	}
	&-tit{
		display: inline-block;    
		position: relative;
		font-size: 20px;
		font-weight: 500;  
		margin-bottom:20px;  
		padding-left: 30px;
		&::before {
			content: '';
			position: absolute;
			display: block;
			top: 50%;
			left: 10px;
			width: 10px;
			height: 10px;
			transform: translateY(-50%);
			background-color: $gray-9;
		}
	}
	&-box{
		&:not(:first-child){
			margin-top:20px;
		}
	}
}
</style>

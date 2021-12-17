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
					<Icon sns="icon-band"></Icon>
					<Icon sns="icon-insta"></Icon>
					<Icon sns="icon-facebook"></Icon>
					<Icon sns="icon-youtube"></Icon>
					<Icon sns="icon-kakao"></Icon>
					<Icon sns="icon-naver"></Icon>
				</div>
				<div class="g-box">
					<Icon sns="icon-band-b"></Icon>
					<Icon sns="icon-insta-b"></Icon>
					<Icon sns="icon-facebook-b"></Icon>
					<Icon sns="icon-youtube-b"></Icon>
					<Icon sns="icon-kakao-b"></Icon>
					<Icon sns="icon-naver-b"></Icon>
				</div>
				<div class="g-box">
					<Icon sns="icon-band-w"></Icon>
					<Icon sns="icon-insta-w"></Icon>
					<Icon sns="icon-facebook-w"></Icon>
					<Icon sns="icon-youtube-w"></Icon>
					<Icon sns="icon-kakao-w"></Icon>
					<Icon sns="icon-naver-w"></Icon>
				</div>
			</div>
			<div class="g-con">
				<p class="g-tit">CARD</p>
				<div class="g-box">
					<InnovationCard/>
				</div>
				<div class="g-box">
					<ArchiveCard/>
				</div>
			</div>
		</div>
  </div>
</template> 
<script>
import Icon from "@/components/elements/Icon";
import Sticker from "@/components/elements/button/Sticker";
import InnovationCard from "@/components/elements/card/InnovationCard";
import ArchiveCard from "@/components/elements/card/ArchiveCard";
export default {
  components: {
		Sticker,Icon,InnovationCard,ArchiveCard
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

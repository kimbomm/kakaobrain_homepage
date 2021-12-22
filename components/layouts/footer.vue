<template>
  <footer class="footer">
		<div class="l-side gl-6 l-ml-2">
			<div class="b-symbol"></div> 
			<div class="footer-con">
				<div class="menu">
					<ul>
						<li class="menu-list">문의</li>
						<li class="menu-list">오시는 길</li>
						<li class="menu-list">사이버윤리실</li>
						<li class="menu-list">이용약관</li>
						<li class="menu-list">개인정보보호지침</li>
						<li class="menu-list">Pathfinder</li>
						<li class="menu-list">Open-MiniCon</li>
						<li class="menu-list">Recruit</li>
					</ul>
				</div>
				<div class="footer-shape"></div>
			</div> 
			<SnsLink/>
			<div class="footer-bottom">
				<div class="info-txt">Copyright ⓒ kakaobrain Corp. All rights reserved.</div>
			</div>
		</div>
		<div>
			<div class="l-info"><span class="info-txt">@2021</span></div>
			<CardinalPoints/>
			<TopButton/>
		</div>
  </footer>
</template>
<script>
import SnsLink from "@/components/elements/SnsLink";
import CardinalPoints from "@/components/elements/button/CardinalPoints";
import TopButton from "@/components/elements/button/TopButton";
export default {
	components: {
		SnsLink,CardinalPoints,TopButton
	}
};
</script>
<style lang="scss" scoped>
.footer {
	padding-top:500px;
	&-con{
		position: relative;
		display: flex;
		justify-content: space-between;
		margin-bottom:116px;
	}
	&-shape{
		position: absolute;
		top:240px;
		right:574px;
		width:700px;
		height:300px;
		background: url("@/assets/images/shape_1.png") no-repeat;
		background-size:100%;
	}
	&-bottom{
		position: fixed;
		bottom:20px;
	}
	.menu{
		display: inline-block;
		&-list{
			line-height: 130%;
			font-size: 34px;
			font-weight: 700;
			cursor: pointer;
			&:not(:last-child){
				margin-bottom: 34px;
			}
		}
	}
	.info-txt {
		display: inline-block;
		font-size:34px;
	}
}
@media screen and (max-width:3840px) {
	.footer {
		&-con{
			margin-bottom:256px;
		}
		&-shape{
			right:424px;
		}
	}
}
@media screen and (max-width:2560px) {
	.footer {
		&-con{
			margin-bottom:179px;
		}
		&-shape{
			top:210px;
			right:469px;
			width:466px;
			height:200px;
		}
		.menu{
			&-list{
				font-size: 24px;
				&:not(:last-child){
					margin-bottom: 24px;
				}
			}
		}
		.info-txt {
			font-size:22px;
		}
	}
}
@media screen and (max-width:1920px) {
	.footer {
		&-con{
			margin-bottom:129px;
		}
		&-shape{
			top:172px;
			right:196px;
			width:350px;
			height:150px;
		}
		.menu{
			&-list{
				font-size:20px;
				&:not(:last-child){
					margin-bottom: 20px;
				}
			}
		}
	}
}
@media screen and (max-width:1024px) {
	.footer {
		&-con{
			margin-bottom:129px;
		}
		&-shape{
			top:338px;
			right:100px;
			width:186px;
			height:86px;
		}
		.info-txt {
			font-size:16px;
		}
	}
}
@media screen and (max-width:768px) {
	.footer {
		&-con{
			display: none;
		}
		.info-txt {
			display: none;
		}
	}
}
</style>
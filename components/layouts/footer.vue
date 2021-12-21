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
		top:172px;
		right:196px;
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
}
@media screen and (max-width:1920px) {
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
			top:172px;
			right:196px;
			width:350px;
			height:150px;
			background: url("@/assets/images/shape_1.png") no-repeat 100%;
		}
		&-bottom{
			position: fixed;
			bottom:20px;
		}
		.menu{
			display: inline-block;
			&-list{
				font-size:20px;
				font-weight:700;
				cursor: pointer;
				&:not(:last-child){
					margin-bottom: 20px;
				}
			}
		}
	}
}
</style>
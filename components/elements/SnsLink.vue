<template lang="">
	<div>
		<div class="footer-sns">
			<ul>
				<li class="item">
					<Icon sns="icon-facebook-b"></Icon>
					<!-- <button type="button" @click="onClickFacebook()" class="icon-sns icon-facebook-b"></button> -->
				</li>
				<li class="item">
					<Icon sns="icon-insta-b"></Icon>
				</li>
				<li class="item">
					<Icon sns="icon-kakao-b"></Icon>
				</li>
				<li class="item">
					<Icon sns="icon-youtube-b"></Icon>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
import Icon from "@/components/elements/Icon";
export default {
	components:{
		Icon
	}
}
</script>
<style lang="scss" scoped>
.footer {
	&-sns{
		text-align:right;
		.item{
			display: inline-block;
			width:82px;
			height:82px;	
			&:not(:last-child){
				margin-right:10px;
			}
		}
	}
}
@media screen and (max-width:1920px) {
	.footer {
		&-sns{
			text-align:right;
			.item{
				display: inline-block;
				&:not(:last-child){
					margin-right:10px;
				}
			}
		}
	}
}
	
</style>
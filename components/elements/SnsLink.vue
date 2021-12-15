<template lang="">
	<div>
		<div class="footer-sns">
			<ul>
				<li class="item">
					<button type="button" @click="onClickFacebook()" class="icon-sns icon-facebook-b"></button>
				</li>
				<li class="item">
					<button type="button" @click="onClickInsta()" class="icon-sns icon-insta-b"></button>
				</li>
				<li class="item">
					<button type="button" @click="onClickKakao()" class="icon-sns icon-kakao-b"></button>
				</li>
				<li class="item">
					<button type="button" @click="onClickYotube()" class="icon-sns icon-youtube-b"></button>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	methods:{
		onClickFacebook: function(){
			window.open("https://www.facebook.com/")
		},
		onClickInsta: function(){
			window.open("https://www.instagram.com/")
		},
		onClickKakao: function(){
			window.open("https://www.kakaocorp.com/")
		},
		onClickYotube: function(){
			window.open("https://www.youtube.com/")
		},
	}
}
</script>
<style lang="scss" scoped>
	.footer {
		&-sns{
			text-align:right;
			.item{
				display: inline-block;
			}
		}
	}
</style>
<template lang="">
	<button type="button" :class="`icon-sns ${sns}`"></button>
</template>
<script>
export default {
	name : 'Icon',
	props:{
		sns:{
			type:String,
			default:"",
			required:false,
		}
	},
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
.icon{
	// 
	&-band{
		background: url("@/assets/images/icon-band.png") no-repeat 100%;
		background-size: 100%;
	}
	&-insta{
		background: url("@/assets/images/icon-insta.png") no-repeat 100%;
		background-size: 100%;
	}
	&-facebook{
		background: url("@/assets/images/icon-facebook.png") no-repeat 100%;
		background-size: 100%;
	}
	&-youtube{
		background: url("@/assets/images/icon-youtube.png") no-repeat 100%;
		background-size: 100%;
	}
	&-kakao{
		background: url("@/assets/images/icon-kakao.png") no-repeat 100%;
		background-size: 100%;
	}
	&-naver{
		background: url("@/assets/images/icon-naver.png") no-repeat 100%;
		background-size: 100%;
	}
	// black
	&-band-b{
		background: url("@/assets/images/icon-band-b.png") no-repeat 100%;
		background-size: 100%;
	}
	&-insta-b{
		background: url("@/assets/images/icon-insta-b.png") no-repeat 100%;
		background-size: 100%;
	}
	&-facebook-b{
		background: url("@/assets/images/icon-facebook-b.png") no-repeat 100%;
		background-size: 100%;
	}
	&-youtube-b{
		background: url("@/assets/images/icon-youtube-b.png") no-repeat 100%;
		background-size: 100%;
	}
	&-kakao-b{
		background: url("@/assets/images/icon-kakao-b.png") no-repeat 100%;
		background-size: 100%;
	}
	&-naver-b{
		background: url("@/assets/images/icon-naver-b.png") no-repeat 100%;
		background-size: 100%;
	}
	// white
	&-band-w{
		background: url("@/assets/images/icon-band-w.png") no-repeat 100%;
		background-size: 100%;
	}
	&-insta-w{
		background: url("@/assets/images/icon-insta-w.png") no-repeat 100%;
		background-size: 100%;
	}
	&-facebook-w{
		background: url("@/assets/images/icon-facebook-w.png") no-repeat 100%;
		background-size: 100%;
	}
	&-youtube-w{
		background: url("@/assets/images/icon-youtube-w.png") no-repeat 100%;
		background-size: 100%;
	}
	&-kakao-w{
		background: url("@/assets/images/icon-kakao-w.png") no-repeat 100%;
		background-size: 100%;
	}
	&-naver-w{
		background: url("@/assets/images/icon-naver-w.png") no-repeat 100%;
		background-size: 100%;
	}
}
</style>
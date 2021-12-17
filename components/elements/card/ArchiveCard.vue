<template lang="">
	<!-- archive 부모 클래스에 'area' 클래스를 적용하면 높이 값이 늘어 납니다. -->
	<div class="archive">
		<div class="archive-inner">
			<div class="archive-tit">
				카카오브레인, AI 주니어 육성프로그램 1기 모집카카오브레인, 
				AI 주니어 육성프로그램 1기 모집카카오브레인, AI 주니어 육성
				프로그램 1기 모집카카오브레인, AI 주니어 육성	프로그램 1기
				모집카카오브레인,	AI 주니어 육성 프로그램 1기
				모집
				@2021/10/27
			</div>
			<div class="archive-con">
				<div class="tag">
					<ul>
						<li class="tag-item"><span class="tag-txt">#Optimization</span></li>
						<li class="tag-item"><span class="tag-txt">#AutoML</span></li>
					</ul>
				</div>
				<div class="archive-thumbnail">
					<img :src="require(`@/assets/images/archive_img_1.png`)">
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss" scoped>
	.area{
		.archive{
			height:auto;
			&-tit{
				-webkit-line-clamp: unset;
			}
		}
	}
	.archive{
		position: relative;
		display: inline-block;
		max-width:360px;
		min-width:300px;
		height:490px;
		box-shadow: 30px 30px 50px -10px #CFD0D3;
		background-color:$gray-9;
		color:$gray-0;
		box-sizing: border-box;
		&:not(:last-child){
			margin-right:20px;
		}
		&-inner{
			display: flex;
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
		}
		&-tit{
			margin-bottom:70px;
			line-height: 31px;
			padding:20px 20px 0;
			font-size:30px;
			font-weight:400;
			color:$gray-0;
			word-break: break-all;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 5;
			-webkit-box-orient: vertical;
	
		}
		&-con{
			.tag{
				padding:0 20px;
				margin-bottom:20px;
				&-item{
					display: inline-block;
					&:not(:last-child){
						margin-right:10px;
					}
				}
				&-txt{
					font-size:14px;
				}
			}
		}
		&-thumbnail{
			img{
				width:100%;
			}
		}

	}
</style>
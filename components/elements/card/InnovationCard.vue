<template lang="">
	<!-- Innovation 부모 클래스에 'area' 클래스를 적용하면 높이 값이 늘어 납니다. -->
	<div class="Innovation">
		<div class="Innovation-inner">

			<div class="Innovation-tit">
				Unified Deep Learning Model for El Nino/Southern Oscillation Forecasts by Incorporating Seasonality in Climate Data
				©2021
			</div>
			<div class="Innovation-con">
				<div class="item">
					<div class="item-mark">*</div>
					<div class="item-txt">8th ICML Workshop on Automated Machine Learning (2021)</div>
				</div>
				<div class="item">
					<div class="item-mark">^</div>
					<!-- <div class="item-txt">Frost.conv/Sam.Hsk/Lukas.Kim/Dev.Lee/Sw.ack</div> -->
					<div class="item-txt">8th ICML Workshop on Automated Machine Learning (2021)</div>

				</div>
				<div class="tag">
					<ul>
						<li class="tag-item"><span class="tag-txt">#Optimization</span></li>
						<li class="tag-item"><span class="tag-txt">#AutoML</span></li>
					</ul>
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
		.Innovation{
			height:auto;
		&-tit{
			-webkit-line-clamp: unset;
		}
		}
	}
	.Innovation{
		position: relative;
		display: inline-block;
		max-width:550px;
		min-width:300px;
		height:700px;
		padding:20px;
		box-shadow: 30px 30px 50px -10px #CFD0D3;
		background-color:$gray-9;
		color:$gray-0;
		box-sizing: border-box;
		&:not(:last-child){
			margin-right:100px;
		}
		&-inner{
			display: flex;
			height: 100%;
			flex-direction: column;
			justify-content: space-between;
		}
		&-tit{
			margin-bottom:110px;
			font-size:40px;
			font-weight:400;
			color:$gray-0;
			word-break: break-all;

			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 8;
			-webkit-box-orient: vertical;
	
		}
		&-con{
			// position: absolute;
			// bottom:20px;
		}
		.item{
			margin-bottom:30px;
			&:nth-child(2){
				margin-bottom:64px;
			}
			&-mark{
				line-height:45px;
				font-size:50px;
				font-weight:900;
			}
			&-txt{
				font-size:16px;
			}
		}
		.tag{
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
</style>
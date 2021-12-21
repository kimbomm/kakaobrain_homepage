<template lang="">
	<div class="monthly-detail">
		<div class="con-tit">
			<DetailTitle text="Automated Learning Rate Scheduler for Large-batch Training." type="gl-6" ml="l-ml-2"></DetailTitle>
		</div>
		<div class="con-text">
			<DetailSubTitle text="The first record." type="gl-5"></DetailSubTitle>
			<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
			<DetailText text="K akao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
			<div class="item">
				<DetailTextItem text="AAAI (2021)"></DetailTextItem>			
				<DetailTextItem text="PAPER"></DetailTextItem>			
			</div>
		</div> 
		<div class="con-text">
			<DetailTextTitle text="Author" type="gl-5"></DetailTextTitle>
			<DetailText text="ic, the whole schedule consists of two phases: adaptive warmup and predefined decay, where the LR i" type="gl-5"></DetailText>
		</div>
		<div class="con-text">
			<DetailTextTitle text="Keywords." type="gl-5"></DetailTextTitle>
			<DetailText text=" Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University," type="gl-5"></DetailText>
		</div>
		<div class="con-text"> 
			<DetailTextTitle text="Published" type="gl-5"></DetailTextTitle>
			<DetailText text="2021.02.02 " type="gl-5"></DetailText>
		</div>
	</div>
</template>
<script>
import Thumbnail from "@/components/detail/Thumbnail";
import DetailTitle from "@/components/detail/DetailTitle";
import DetailText from "@/components/detail/DetailText";
import DetailImg from "@/components/detail/DetailImg";
import DetailSubTitle from "@/components/detail/DetailSubTitle";
import DetailFullImg from "@/components/detail/DetailFullImg";
import DetailMiddelImg from "@/components/detail/DetailMiddelImg";
import DetailTextItem from "@/components/detail/DetailTextItem";
import DetailTextTitle from "@/components/detail/DetailTextTitle";
export default {
	name : "index",
	components:{
		Thumbnail,DetailTitle,DetailText,DetailImg,DetailSubTitle,
		DetailFullImg,DetailMiddelImg,DetailTextItem,DetailTextTitle
	}
}
</script>
<style lang="scss" scoped>
.monthly{
	&-detail{
		.con-tit{
			margin-bottom:400px;
		}
		.con-text{
			&:not(:last-child){
				margin-bottom:250px
			}
			.item{
				margin-top:256px;
			}
		}
	}
}
@media screen and (max-width:3840px) {
	.monthly{
		&-detail{
			.con-text{
				.item{
					margin-top:160px;
				}
			}
		}
	}
}
@media screen and (max-width: 2560px) {
	.monthly{
		&-detail{
			.con-tit{
				margin-bottom: 300px;
			}
			.con-text{
				&:not(:last-child){
					margin-bottom: 200px
				}
				.item{
					margin-top: 100px;
				}
			}
		}
	}
}
@media screen and (max-width: 1920px) {
	.monthly{
		&-detail{
			.con-tit{
				margin-bottom: 200px;
			}
			.con-text{
				&:not(:last-child){
					margin-bottom: 150px;
				}
			}
		}
	}
}
</style>
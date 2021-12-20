<template lang="">
	<div class="monthly-detail">
		<DetailTitle text="Automated Learning Rate Scheduler for Large-batch Training." type="gl-6"></DetailTitle>
			<div class="con-text">
				<DetailSubTitle text="The first record." type="gl-5"></DetailSubTitle>
				<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
				<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
				<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
				<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
				<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
				<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
				<DetailText text="K akao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
			</div> 
			<div class="con-text">
				<DetailSubTitle text="Author" type="gl-5"></DetailSubTitle>
				<DetailText text="ic, the whole schedule consists of two phases: adaptive warmup and predefined decay, where the LR i" type="gl-5"></DetailText>
				<DetailTextItem></DetailTextItem>
			</div>
			<div class="con-text">
				<DetailSubTitle text="Keywords." type="gl-5"></DetailSubTitle>
				<DetailText text=" Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University," type="gl-5"></DetailText>
			</div>
			<div class="con-text">
				<DetailSubTitle text="Published" type="gl-5"></DetailSubTitle>
				<DetailText text="2021.02.02" type="gl-5"></DetailText>
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
export default {
	name : "index",
	components:{
		Thumbnail,DetailTitle,DetailText,DetailImg,DetailSubTitle,
		DetailFullImg,DetailMiddelImg,DetailTextItem
	}
}
</script>
<style lang="scss" scoped>
.monthly{
	&-detail{
		.con-text{
			&:not(:last-child){
				margin-bottom:150px
			}
		}
	}
}
</style>
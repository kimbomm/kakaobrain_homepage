<template lang="">
	<div class="monthly-detail">
		<Thumbnail type="gl-9"></Thumbnail>
		<DetailTitle text="카카오브레인, AI 공동연구 이렇게 한다." type="gl-5" ml="l-ml-2"></DetailTitle>
		<DetailText text="카카오브레인이 세계 정상의 AI 연구실과 함께 인간의 인식과 추론의 한계에 도전합니다. 카카오브레인은 고려대와 서울대, 포항공대와 한양대, KAIST와 UNIST 등 7개 대학 AI 연구실과 산학 협력을 맺고 3년간 공동 연구를 시작했습니다." type="gl-5"></DetailText>
		<DetailText text="카카오브레인과 각 학교 AI 연구실은 이번 협력을 통해 AI 연구의 스테레오타입을 넘어선 새로운 연구 방법론을 정립하려 노력한다고 합니다. 우리의 연구가 어떻게 세상을 바꿔나갈지 가슴이 웅장해지는데요. 카카오브레인의 공동연구 노하우를 공개합니다" type="gl-5"></DetailText>
		<DetailImg text="사진 설명 들어가는 곳." type="gl-7 "></DetailImg>
		<div class="con-box">
			<DetailSubTitle text="Unthinkable AI Research Project." type="gl-5"></DetailSubTitle>
			<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
			<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
		</div>
		<DetailFullImg text="사진 설명 들어가는 곳." type=""></DetailFullImg>
		<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
		<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
		<DetailMiddelImg text="사진 설명 들어가는 곳." type="gl-7"></DetailMiddelImg>
		<DetailText text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
		<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research.Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years." type="gl-5"></DetailText>
		<DetailText text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research." type="gl-5"></DetailText>
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
export default {
	name : "index",
	components:{
		Thumbnail,DetailTitle,DetailText,DetailImg,DetailSubTitle,
		DetailFullImg,DetailMiddelImg
	}
}
</script>
<style lang="scss" scoped>
.monthly-detail{
	.con-box{
		margin-bottom: 300px;
	}
}
@media screen and (max-width:2560px ) {
	.monthly-detail{
		.con-box{
			margin-bottom: 200px; 
		}
	}
}
@media screen and (max-width:1920px ) {
	.monthly-detail{
		.con-box{
			margin-bottom: 100px;
		}
	}
}
</style>
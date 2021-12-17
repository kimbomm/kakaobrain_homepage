<template lang="">
	<div class="monthly-detail">
		<div class="detail-thumbnail gl-9">
			<img src="@/assets/images/monthly_img_1.png">
		</div>
		<div class="detail-con"></div>
	</div>
</template>
<script>
export default {
	name : "1_id",
}
</script>
<style lang="scss" scoped>
	.monthly{
	}
	
	.detail{
		&-thumbnail{
			width: calc(100% - 100px);
			img{
				width:100%;
			}
		}
		
	}
</style>
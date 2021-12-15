<template lang="">
	<div>
		<button type="button" :class="`btn ${sub}`">
			<span class="txt">{{ text }}</span>
		</button>
	</div>
</template>
<script>
export default {
	name : 'Sticker',
	props: {
		text: {
			type: String,
			default: "",
      required: true,
		},
		sub: {
			type: String,
			default: "",
      required: false,
		},
	}
}
</script>
<style lang="">
	
</style>
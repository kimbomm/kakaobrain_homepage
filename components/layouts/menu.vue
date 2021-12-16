<template>
	<div class="menu">
		<div class="menu-list">
			<ul>
				<li class="menu-item">About</li>
				<li class="menu-item">Research</li>
				<li class="menu-item">Tech</li>
				<li class="menu-item">Studio</li>
				<li class="menu-item">Docu B</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	
}
</script>
<style lang="scss" scoped>
.menu{
	position: fixed;
	top:20px;
	right: 20px;
	z-index: 3;
  transition: all 0.5s ease-in-out;
	&-item{
		display: inline-block;
		font-size:16px;
		font-weight:900;
		cursor: pointer;
		&:not(:last-child){
			margin-right:30px;
		}
	}
}
</style>
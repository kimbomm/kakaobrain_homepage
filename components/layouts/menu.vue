<template>
	<div>
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

		<!-- <div class="hide">
			<div class="menu">
				<ul>
					<li class="menu-item">About
						<ul>
							<li><a href="#">Unthinkable Question!</a></li>
							<li><a href="#">Culture</a></li>
							<li><a href="#">Principle</a></li>
						</ul>
					</li>
					<li class="menu-item">Research
						<ul>
							<li><a href="#">Highlight</a></li>
							<li><a href="#">Article</a></li>
							<li><a href="#">Collaborative Research</a></li>
						</ul>
					</li>
					<li class="menu-item">Tech
						<ul>
							<li><a href="#">Highlight</a></li>
							<li><a href="#">Data</a></li>
							<li><a href="#">Brain Cloudn</a></li>
							<li><a href="#">Large Scale</a></li>
							<li><a href="#">Digital Huma</a></li>
						</ul>
					</li>
					<li class="menu-item">Studio
						<ul>
							<li><a href="#">H./Healthcare</a></li>
							<li><a href="#">E./Education</a></li>
						</ul>
					</li>
					<li class="menu-item">Docu B
						<ul>
							<li><a href="#">News</a></li>
							<li><a href="#">Interview</a></li>
							<li><a href="#">Documentary</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div> -->
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

.hide{
	.menu{
		position: fixed;
		left:0;
		right:0;
		top:0;
		bottom:315px;
		background-color: $gray-9;
		color:$gray-0;
		&-item{

		}
	}
}
</style>
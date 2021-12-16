<template>
	<div>
		<div class="menu">
			<div class="menu-list">
				<ul>
					<li @click="hideMenu()" class="menu-item">
						<button type="button"><span class="txt">About</span></button>
					</li>
					<li @click="hideMenu()" class="menu-item">
						<button type="button"><span class="txt">Research</span></button>
					</li>
					<li @click="hideMenu()" class="menu-item">
						<button type="button"><span class="txt">Tech</span></button>
					</li>
					<li @click="hideMenu()" class="menu-item">
						<button type="button"><span class="txt">Studio</span></button>
					</li>
					<li @click="hideMenu()" class="menu-item">
						<button type="button"><span class="txt">Docu B</span></button>
					</li>
				</ul>
			</div>
		</div>

		<div class="hide" v-show="this.isMenu">
			<h2 class="b-logo">
				<nuxt-link to="/homepage">
					<img :src="require(`@/assets/images/logo-w.png`)"
						alt="카카오 브레인 로고"/>
				</nuxt-link>
			</h2>
			<div class="lang">
				<ul>
					<li class="lang-item">English</li>
					<li class="lang-item">Korean</li>
				</ul>
			</div>
			<div class="menu">
				<ul>
					<li class="menu-item">
						<span>About</span>
						<ul class="sub">
							<li class="sub-item"><a href="#">Unthinkable Question!</a></li>
							<li class="sub-item"><a href="#">Culture</a></li>
							<li class="sub-item"><a href="#">Principle</a></li>
						</ul>
					</li>
					<li class="menu-item">
						<span class="num">172</span>
						<span>Research</span>
						<ul class="sub">
							<li class="sub-item"><a href="#">Highlight</a></li>
							<li class="sub-item"><a href="#">Article</a></li>
							<li class="sub-item"><a href="#">Collaborative Research</a></li>
						</ul>
					</li>
					<li class="menu-item">
						<span class="num">54</span>
						<span>Tech</span>
						<ul class="sub">
							<li class="sub-item"><a href="#">Highlight</a></li>
							<li class="sub-item"><a href="#">Data</a></li>
							<li class="sub-item"><a href="#">Brain Cloudn</a></li>
							<li class="sub-item"><a href="#">Large Scale</a></li>
							<li class="sub-item"><a href="#">Digital Huma</a></li>
						</ul>
					</li>
					<li class="menu-item">
						<span class="num">2</span>
						<span>Studio</span>
						<ul class="sub">
							<li class="sub-item"><a href="#">H./Healthcare</a></li>
							<li class="sub-item"><a href="#">E./Education</a></li>
						</ul>
					</li>
					<li class="menu-item"><span class="num">78</span>
					<span>Magazine B</span>
						<ul class="sub">
							<li class="sub-item"><a href="#">News</a></li>
							<li class="sub-item"><a href="#">Interview</a></li>
							<li class="sub-item"><a href="#">Documentary</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
	
</template>
<script>
export default {
	data(){
		return{
			isMenu:false
		}
	},
	methods:{
		hideMenu(){
			this.isMenu = !this.isMenu;
			console.log("popup")
		}
	}
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
		&:nth-child(1) .txt{
				&:hover{
					color:$brain-yellow;
				}
			}
			&:nth-child(2) .txt{
				&:hover{
					color:$brain-mint;
				}
			}
			&:nth-child(3) .txt{
				&:hover{
					color:$brain-purple;
				}
			}
			&:nth-child(4) .txt{
				&:hover{
					color:$brain-magenta;
				}
			}
			&:nth-child(5) .txt{
				&:hover{
					color:$brain-orange;
				}
			}
		.num{
			padding-right:6px;
			vertical-align: top;
			font-size:12px;
			font-weight:400;
		}
		.txt{
			font-size:16px;
			font-weight:900;
		}
		button{
			background-color: rgba(0,0,0,0);
		}
	}
}

.hide{
	.b-logo{
		position: fixed;
		left:20px;
		top:20px;
		z-index: 10;
	}
	.lang{
		position: fixed;
		right:30px;
		top:20px;
		z-index: 10;
		cursor: pointer;
		&-item{
			font-size:12px;
			color:$gray-0;
			&:not(:last-child){
				margin-bottom:20px;
			}
		}
	}
	text-align: center;
	.menu{
		position: fixed;
		left:0;
		right:0;
		top:0;
		padding:90px 0 84px;
		background-color: $gray-9;
		color:$gray-0;
		&-item{
			text-align: left;
			vertical-align: top;
			&:not(:last-child){
				margin-right:50px;
			}
			&:nth-child(2) .sub{
				margin-left:23px;
			}
			&:nth-child(3) .sub{
				margin-left:20px;
			}
			&:nth-child(4) .sub{
				margin-left:12px;
			}
			&:nth-child(5) .sub{
				margin-left:20px;
			}
		}
		.menu-item{
			&:nth-child(1){
				&:hover{
					color:$brain-yellow;
				}
			}
			&:nth-child(2){
				&:hover{
					color:$brain-mint;
				}
			}
			&:nth-child(3){
				&:hover{
					color:$brain-purple;
				}
			}
			&:nth-child(4){
				&:hover{
					color:$brain-magenta;
				}
			}
			&:nth-child(5){
				&:hover{
					color:$brain-orange;
				}
			}
		}
	}
	.sub{
		margin-top: 30px;
		&-item{
			// line-height:23px;
			font-size:14px;
			font-weight:400;
			&:not(:last-child){
				margin-bottom:8px;
			}
			a{
			color:$gray-0;
			}
		}
	}
}
</style>
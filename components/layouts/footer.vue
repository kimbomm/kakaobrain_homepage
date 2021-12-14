<template>
  <footer class="footer">
		<div class="l-side">
			<div class="b-symbol"></div> 
			<div class="footer-con">
				<div class="menu">
					<ul>
						<li class="menu-list">문의</li>
						<li class="menu-list">오시는 길</li>
						<li class="menu-list">사이버윤리실</li>
						<li class="menu-list">이용약관</li>
						<li class="menu-list">개인정보보호지침</li>
						<li class="menu-list">Pathfinder</li>
						<li class="menu-list">Open-MiniCon</li>
						<li class="menu-list">Recruit</li>
					</ul>
				</div>
				<div class="footer-shape"></div>
			</div> 
			<div class="footer-sns">
				<ul>
					<li class="item">
						<button type="button" class="icon-sns icon-facebook-b"></button>
					</li>
					<li class="item">
						<button type="button" class="icon-sns icon-insta-b"></button>
					</li>
					<li class="item">
						<button type="button" class="icon-sns icon-kakao-b"></button>
					</li>
					<li class="item">
						<button type="button" class="icon-sns icon-youtube-b"></button>
					</li>
				</ul>
			</div>
		</div>
		<div class="l-info">
			<div class="info-txt">@2021</div>
			<div class="info-txt">
				Copyright ⓒ kakaobrain Corp. All rights reserved.
			</div>
		</div>
		<button class="btn-arrow ">
			<img :src="require(`@/assets/images/gotop_img_0.png`)"
				alt="최상단으로 가기"/>
		</button>
		<button class="btn-top ">
			<img :src="require(`@/assets/images/gotop_img_17.png`)"
				alt="최상단으로 가기"/>
		</button>
  </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>

</style>
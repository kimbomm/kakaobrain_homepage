<template>
  <div ref="member" class="member">
    <!-- <transition name="zoom"> -->
    <img
      v-if="isProfileShow"
      ref="profile"
      class="member-profile"
      :src="require(`@/assets/images/members/dummy.png`)"
    />
    <!-- </transition> -->
    <div
      class="member-over"
      @mouseenter="onMouseEnter"
      @mousemove="onMouseMove"
      @mouseleave="onMouseLeave"
    ></div>
    <span class="member-name">Name</span>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isProfileShow: false
      }
    },
    methods: {
      onMouseEnter() {
        this.isProfileShow = true
      },
      onMouseLeave() {
        this.$refs.profile.style = `transform: scale(0) translate(0, 0);`
        setTimeout(() => {
          this.isProfileShow = false
        }, 300)
      },
      onMouseMove(e) {
        // console.log(e.offsetX, e.offsetY)
        const ww = this.$refs.member.offsetWidth / 2
        const style = `${e.offsetX - ww}px, ${e.offsetY - 120}px`
        this.$refs.profile.style = `transform: scale(1) translate(${style});`
      }
    }
  }
</script>
<style lang="scss" scoped>
  .member {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 182px;
    padding: 30px 50px;
    border-radius: 100px;
    border: 1px solid #000000;
    position: relative;
    &:hover {
      border-color: $brain-orange;
      background-color: $brain-orange;
      color: #fff;
    }
    &-name {
      font-size: 94px;
      line-height: 1.3;
    }
    &-profile {
      width: 240px;
      height: 240px;
      position: absolute;
      transform: scale(0.2) translate(0, 0);
      transition: transform 0.3s linear;
    }
    &-over {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
    }
  }
</style>

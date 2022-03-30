<template>
  <div class="menu-footer">
    <ul v-for="(menu, index) in footerMenu" :key="index">
      <li v-for="(menuItem, idx) in menu" :key="idx" @click="onClose">
        <nuxt-link v-if="!menuItem.target" :to="menuItem.link">
          {{ menuItem.name[language] }}
        </nuxt-link>
        <a v-else :href="menuLink(menuItem)" :target="menuItem.target">
          {{ menuItem.name[language] }}
        </a>
      </li>
    </ul>
    <div class="sns-list">
      <ul>
        <li v-for="(item, index) in sns" :key="index" @click="onClose">
          <a :href="item.link" target="_blank">
            <Icon :sns="`icon-${item.name}-w`" />
          </a>
        </li>
      </ul>
    </div>
    <div class="mob-logo">
      <img
        src="@/assets/images/mob_footer_logo.png"
        alt="카카오브레인 로고 이미지"
      />
    </div>
    <div class="copy">
      <p>
        Copyright ⓒ Kakao Brain Corp. <br />
        All rights reserved.
      </p>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Icon from '@/components/elements/Icon'
  export default {
    components: {
      Icon
    },
    computed: {
      ...mapState({
        language: state => state.language,
        ftMenu: state => state.footerMenu,
        sns: state => state.sns
      }),
      footerMenu() {
        let menu = [[], [], []]
        if (this.ftMenu.length > 0) {
          this.ftMenu.forEach((item, index) => {
            if (index < 3) {
              menu[0].push(item)
            } else if (index === 3 || index === 4) {
              menu[1].push(item)
            } else {
              menu[2].push(item)
            }
          })
        }
        return menu
      }
    },
    methods: {
      onClose() {
        this.$emit('onClose')
      },
      menuLink(data) {
        if (data.name === '사이버윤리실') {
          let link = data.link
          this.language === 'KR' ? (link += 'ko') : (link += 'en')
          return link
        } else {
          return data.link
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu-footer {
    margin-top: 100px;
    ul {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 22px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    li {
      margin-right: 30px;
      a {
        font-size: 12px;
        line-height: 1.3;
        color: #fff;
        font-weight: 600;
      }
    }
  }
  .sns-list {
    margin-top: 60px;
    ul {
      display: flex;
      align-items: center;
    }
    li {
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .mob-logo {
    margin-top: 100px;
    width: 50px;
    img {
      width: 100%;
    }
  }
  .copy {
    margin-top: 30px;
    font-size: 12px;
    line-height: 1.3;
    color: $surface-6;
  }
</style>

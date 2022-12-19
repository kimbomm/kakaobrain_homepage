<template>
  <div class="techplayground-karlo-demo-page">
    <div class="container">
      <div class="intro"></div>
      <h4 class="heading">AI Artist_<br>Karlo</h4>
      <p class="description">
        사용자가 입력한 문장을 기반으로 사실적인 이미지와 다양한 작품을 생성할 수 있는 AI 모델입니다.
        <br>
        1억 8천만장 규모의 이미지와 이미지를 설명하는 텍스트와의 관계를 학습한 멀티모달 AI 모델입니다.
        <br><br>
        Karlo는 학습된 결과를 바탕으로 사용자가 입력한 문장을 이해하고, 세상에 없던 새로운 이미지를 생성해냅니다. 여러분의 상상 속 영감이 우리의 AI 기술을 통해 더 새롭고, 다양한 크리에이티브로 창조되길 기대합니다.
      </p>
      <div class="demo">
        <div class="demo-title">
          <span>Karlo Demo</span>
          <span>v1.3.1</span>
        </div>
        <div class="demo-contents">
          <ul class="demo-tab">
            <li v-for="tab in tabs" :key="tab.name"><button :class="{ 'is-active': tab.value === activeTab }" @click="tabClick(tab)">{{ tab.name }}</button></li>
          </ul>
          <tech-selectbox
            class="demo-select tablet-only"
            :value.sync="activeTab"
            :select-list="tabs"
            size="large"
          />
          <div class="tab-contents">
            <div class="info">
              <p v-if="activeTab === 0">사용자가 입력한 단어나 문장을 기반으로 관련된 이미지와 다양한 작품을 생성합니다.</p>
              <p v-else-if="activeTab === 1">사용자가 업로드한 이미지를 기반으로 관련된 이미지와 다양한 작품을 생성합니다.</p>
              <p v-else-if="activeTab === 2">사용자가 업로드한 이미지와, 편집할 부분과 함께 입력된 단어나 문장(공백 가능)을 기반으로 새로운 작품을 생성합니다.</p>
            </div>
            <div class="content">
              <div class="head-title">
                <span>Text Prompt</span>
              </div>
              <div class="experience">
                <div class="experience-tool">
                  <textarea v-model="textarea" placeholder="상상하는 문장이나, 생각나는 모습을 입력하세요."></textarea>
                  <div class="byte">{{ getStringToByte(textarea) }}/{{ maxByte }}</div>
                </div>
              </div>
              <div class="head-title">
                <span>생성할 이미지 갯수</span>
              </div>
              <div class="count">
                <tech-selectbox
                  :value.sync="selectedValue"
                  :select-list="selectList"
                  @change="onChange"
                />
                <p>*생성할 수 있는 이미지가 <span class="color-">16</span>장 남았습니다.</p>
              </div>
              <tech-button text="Generate!" :full="true" />
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <i class="ic-caret_circle"></i>
      </div>
      <div class="result">
        <div class="demo-title">
          <span class="color-mint">Generated!</span>
        </div>
        <div class="result-contents">
          <div class="content">
            <div class="proceeding">
              <img src="@/assets/images/playground/loading.gif" />
              <p>Karlo가 열심히 그리고 있어요.</p>
            </div>
          </div>
          <tech-button text="Download" theme="dark" :full="true" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TechButton from '@/components/techplayground/common/Button'
import TechSelectbox from '@/components/techplayground/common/Selectbox'
export default {
  components: {
    TechButton,
    TechSelectbox
  },
  layout: 'playground',
  data() {
    return {
      activeTab: 1,
      tabs: [
        { name: 'Image Generation', value: 1 },
        { name: 'Image Variation', value: 2 },
        { name: 'Image Inpainting', value: 3 },
      ],
      textarea: '',
      maxByte: 250,
      selectedValue: 1,
      selectList: [
        { name: '1장', value: 1 },
        { name: '2장', value: 2 },
        { name: '3장', value: 3 }
      ]
    }
  },
  computed: {
    ...mapState({
      device: state => state.device
    }),
  },
  methods: {
    tabClick(tab) {
      this.activeTab = tab.value
    },
    getStringToByte(string) {
      return string.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length
    },
    onChange(selectItem) {
      console.log(selectItem)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/techplayground/pages/demo.scss';
</style>
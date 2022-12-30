<template>
  <div class="techplayground-karlo-demo-page">
    <div class="container">
      <div class="inner">
        <div class="intro"></div>
        <h4 class="heading">Generative AI_<br>Karlo</h4>
        <p class="description">
          사용자가 입력한 문장을 기반으로 사실적인 이미지와 다양한 작품을 생성할 수 있는 AI 모델입니다.
          <br>
          1억 8천만장 규모의 이미지와 이미지를 설명하는 텍스트와의 관계를 학습한 멀티모달 AI 모델입니다.
          <br><br>
          Karlo는 학습된 결과를 바탕으로 사용자가 입력한 문장을 이해하고, 세상에 없던 새로운 이미지를 생성해냅니다. 여러분의 상상 속 영감이 우리의 AI 기술을 통해 더 새롭고, 다양한 크리에이티브로 창조되길 기대합니다.
        </p>
      </div>
      <div class="demo">
        <div class="demo-title">
          <span>Karlo Demo</span>
          <span>{{ version }}</span>
        </div>
        <div class="demo-contents">
          <ul class="demo-tab">
            <li v-for="tab in tabs" :key="tab.name">
              <button
                :class="{ 'is-active': tab.value === activeTab }"
                :disabled="isGenerating"
                @click="tabClick(tab)"
              >{{ tab.name }}</button>
            </li>
          </ul>
          <tech-selectbox
            class="demo-select tablet-only"
            :value.sync="activeTab"
            :select-list="tabs"
            :disabled="isGenerating"
            size="large"
          />
          <div class="tab-contents">
            <div class="info">
              <p v-if="activeTab === 1">사용자가 입력한 단어나 문장을 기반으로 관련된 이미지와 다양한 작품을 생성합니다.</p>
              <p v-else-if="activeTab === 2">사용자가 업로드한 이미지를 기반으로 관련된 이미지와 다양한 작품을 생성합니다.</p>
              <p v-else-if="activeTab === 3">사용자가 업로드한 이미지와, 편집할 부분과 함께 입력된 단어나 문장(공백 가능)을 기반으로 새로운 작품을 생성합니다.</p>
            </div>
            <div class="content">
              <div class="experience">
                <div v-if="activeTab !== 1" class="experience-content">
                  <div class="head-title">
                    <span>Image Input</span>
                  </div>
                  <div v-if="activeTab === 2" class="experience-tool">
                    <karlo-editor
                      ref="variation"
                      :crop="true"
                      :key="'crop'"
                      @fileUpload="onFileUpload"
                    />
                  </div>
                  <div v-if="activeTab === 3" class="experience-tool">
                    <karlo-editor
                      ref="inpainting"
                      :crop="true"
                      :masking="true"
                      :includeUI="true"
                      :key="'masking'"
                      @fileUpload="onFileUpload"
                      @ready="onMaskingReady()"
                    />
                  </div>
                </div>
                <div v-if="activeTab !== 2" class="experience-content">
                  <div class="head-title">
                    <span>Text Prompt</span>
                  </div>
                  <div class="experience-tool">
                    
                    <textarea
                      v-if="activeTab === 1"
                      v-model="t2i"
                      placeholder="(영문만 입력 가능) 상상하는 문장이나, 생각나는 모습을 입력하세요."
                      :disabled="isGenerating"
                      @input="onTextareaChange($event, 't2i')"
                    ></textarea>
                    <textarea
                      v-else-if="activeTab === 3"
                      v-model="inpaintingTxt"
                      placeholder="(영문만 입력 가능) 상상하는 문장이나, 생각나는 모습을 입력하세요."
                      :disabled="isGenerating"
                      @input="onTextareaChange($event, 'inpaintingTxt')"
                    ></textarea>
                    <div class="byte">{{ activeTab === 1 ? getStringToByte(t2i) : getStringToByte(inpaintingTxt) }}/{{ maxByte }}</div>
                  </div>
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
                <p>*생성할 수 있는 이미지가 <span class="color-orange">{{ count.availableCount }}</span>장 남았습니다.</p>
              </div>
              <tech-button
                text="Generate!"
                :disabled="!getGenerateCondition || isGenerating"
                :full="true"
                @click.native="onGenerate()"
              />
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
          <div class="content" :class="{ 'is-active': resData[activeTab] }">
            <ul
              v-if="resData[activeTab]"
            >
              <li v-for="(item, idx) in resData[activeTab].images" :key="item.id">
                <karlo-canvas :ref="`masking-canvas-${idx}`" :base64-data="item.image" />
              </li>
            </ul>
            <div v-if="isGenerating" class="proceeding">
              <img src="@/assets/images/playground/loading.gif" />
              <p>Karlo가 열심히 그리고 있어요.</p>
            </div>
          </div>
          <tech-button
            text="Download"
            :disabled="!resData[activeTab] || isGenerating"
            theme="mint"
            :full="true"
            @click.native="onDownload()"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import TechButton from '@/components/techplayground/common/Button'
import TechSelectbox from '@/components/techplayground/common/Selectbox'
import KarloCanvas from '@/components/techplayground/demo/KarloCanvas'
import KarloEditor from '@/components/techplayground/demo/KarloEditor'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  components: {
    TechButton,
    TechSelectbox,
    KarloCanvas,
    KarloEditor,
    Swiper,
    SwiperSlide
  },
  layout: 'playground',
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Generative AI_Karlo'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${process.env.BASE_URL}/techplayground/karlo/demo`
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${process.env.BASE_URL}/meta/meta_techplayground_karlo.png`
        }
      ]
    }
  },
  data() {
    return {
      version: 'v1.3.2',
      t2i: '',
      inpaintingTxt: '',
      variationFileUploaded: false,
      inpaintingFileUploaded: false,
      isGenerating: false,
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
      ],
      resData: {
        1: null,
        2: null,
        3: null,
      },
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 10,
        mousewheel: false,
        scrollbar: true,
        breakpoints: {
          1024: {
            slidesPerView: 3
          }
        }
      },
      count: {
        totalAvailableCount: 60,
        availableCount: 60,
        useCount: 0
      }
    }
  },
  computed: {
    ...mapState({
      device: state => state.device
    }),
    getGenerateCondition() {
      switch (this.activeTab) {
        case 1:
          return this.t2i
        case 2:
          return this.variationFileUploaded
        case 3:
          return this.inpaintingFileUploaded
      }
    },
  },
  async fetch() {
    await this.getCount()
  },
  mounted() {
    document.querySelector('.wrap').scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  },
  methods: {
    /**
     * karlo download 횟수 확인
     */
    async getCount() {
      const res = await this.$axios.get('/karlo/count')
      this.count = { ...res.data }
    },
    tabClick(tab) {
      this.activeTab = tab.value
    },
    getStringToByte(string) {
      return string.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length
    },
    onChange(selectItem) {
      console.log(selectItem)
    },
    onKeydown(model) {
      this[model] = this[model]
    },
    onTextareaChange(event, model) {
      if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g.test(event.target.value)) {
        this[model] = this[model].replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/g, '')
      }
      setTimeout(() => {
        this[model] = this.getLimitedByteText(this[model], 250)
      }, 50)
    },
    getLimitedByteText(inputText, maxByte) {
      const characters = inputText.split('')
      let validText = ''
      let totalByte = 0

      for (let i = 0; i < characters.length; i += 1) {
        const character = characters[i]
        const decimal = character.charCodeAt(0)
        const byte = this.getByteLength(decimal) // 글자 한 개가 몇 바이트 길이인지 구해주기

        // 현재까지의 바이트 길이와 더해 최대 바이트 길이를 넘지 않으면 
        if (totalByte + byte <= maxByte) { 
          totalByte += byte      // 바이트 길이 값을 더해 현재까지의 총 바이트 길이 값을 구함
          validText += character // 글자를 더해 현재까지의 총 문자열 값을 구함
        } else {      
          alert('최대 250byte를 넘길 수 없습니다.')           // 최대 바이트 길이를 넘으면
          break                  // for 루프 종료
        }
      }

      return validText
    },
    getByteLength(decimal) {
      const LINE_FEED = 10
      return (decimal >> 7) || (LINE_FEED === decimal) ? 2 : 1
    },
    onFileUpload() {
      switch (this.activeTab) {
        case 2:
          this.variationFileUploaded = true
          break
        case 3:
          this.inpaintingFileUploaded = true
          break
      }
    },
    onMaskingReady() {
      this.$refs.inpainting.onMaking()
    },
    async onGenerate() {
      if (this.count.availableCount === 0) {
        alert('생성할 수 있는 쿼터가 없습니다.')
        return false
      } else if (this.selectedValue > this.count.availableCount) {
        alert('생성할 수 있는 총 쿼터를 넘었습니다.')
        return false
      }
      try {
        this.isGenerating = true
        let params = null
        let res = ''
        switch (this.activeTab) {
          case 1:
            params = {
              prompt: {
                text: this.t2i,
                batch_size: this.selectedValue
              }
            }
            res = await this.$axios.post('/karlo/t2i', params)
            break
          case 2:
            params = {
              prompt: {
                image: await this.$refs.variation.onToDataURL(),
                batch_size: this.selectedValue
              }
            }
            res = await this.$axios.post('/karlo/variations', params)
            break
          case 3:
            params = {
              prompt: {
                text: this.inpaintingTxt,
                image: this.$refs.inpainting.onGetOrigin(),
                mask: await this.$refs.inpainting.onToDataURL(),
                batch_size: this.selectedValue
              }
            }
            res = await this.$axios.post('/karlo/inpainting', params)
            break
        }
        this.resData[this.activeTab] = res.data
        this.count = {
          totalAvailableCount: res.data.totalAvailableCount,
          availableCount: res.data.availableCount,
          useCount: res.data.useCount,
        }
        this.isGenerating = false
      } catch (err) {
        // console.log(err.response.data)
        alert(`[${err.response.data.code}] 전송에 실패하였습니다. 담당자에게 문의하세요.`)
        this.isGenerating = false
      }
    },
    onDownload() {
      if (this.resData[this.activeTab]) {
        const zip = new JSZip()
        const images = zip.folder('images')
        this.resData[this.activeTab].images.forEach((item, index) => {
          images.file(`karlo_${index}.png`, this.dataURLtoFile(this.$refs[`masking-canvas-${index}`][0].maskingSrc))
        })

        zip.generateAsync({
          type: "blob"
        }).then((content) => {
          saveAs(content, "karlo_archive.zip")
        })
      }


    },
    dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);

        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }



        return new File([u8arr], filename, {type:mime});
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/layout/techplayground/pages/demo.scss';
</style>
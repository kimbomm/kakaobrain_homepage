<template>
  <div class="karlo-editor">
    <div v-if="!isUploadFile" class="placeholder">
      <label :for="refKey" @dragover="onDragover" @drop="onDrop">
        <p>이미지를 끌어서 놓기 또는 클릭해서 업로드 하기</p>
        <input
          :ref="refKey"
          :id="refKey"
          :name="refKey"
          type="file"
          accept="image/*"
          @change="onFileChange"
        />
      </label>
    </div>
    <client-only>
      <image-editor
        :ref="`editor-${refKey}`"
        class="tui-image-editor"
        :class="{ 'no-ui': !includeUI }"
        :include-ui="includeUI"
        :options="options"
      />
    </client-only>
    <div class="buttons">
      <template v-if="crop && !masking">
        <button @click="onCrop()">
          <img
            v-if="!isCropMode"
            src="@/assets/images/playground/demo/ic_tool-modify.png"
          />
          <img v-else src="@/assets/images/icons/ic_check.png" />
        </button>
        <button v-if="!isCropMode" @click="onClear()">
          <img src="@/assets/images/playground/demo/ic_tool-close.png" />
        </button>
      </template>
      <template v-else-if="masking">
        <button class="button-undo" @click="onUndo()">
          <img src="@/assets/images/playground/demo/ic_tool-refresh.png" />
        </button>
        <button @click="onMaskingEnd()">
          <img src="@/assets/images/playground/demo/ic_tool-close.png" />
        </button>
        <button @click="onMaking()">
          <img src="@/assets/images/playground/demo/ic_tool-modify.png" />
        </button>
      </template>
      <input
        v-if="isMaskingMode"
        v-model="brush.width"
        type="range"
        :min="brush.min"
        :max="brush.max"
        step="1"
        @change="onMaskingChange"
      />
    </div>
    <canvas
      id="canvas"
      width="1024"
      height="1024"
      :ref="`canvas-${refKey}`"
      style="display: none"
    ></canvas>
  </div>
</template>
<script>
  import Utility from '@/util/utility.js'
  export default {
    props: {
      crop: {
        type: Boolean,
        default: true
      },
      masking: {
        type: Boolean,
        default: false
      },
      includeUI: {
        type: Boolean,
        default: false
      },
      divKey: {
        type: Number,
        default: Math.random()
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        refKey: 0,
        origin: null,
        brush: {
          min: 20,
          max: 150,
          width: 20
        },
        isUploadFile: false,
        isUploadFile: false,
        isCropMode: false,
        isMaskingMode: false,
        stack: {
          undo: false,
          redo: false
        },
        options: {
          // includeUI: {
          //   initMenu: 'crop'
          // },
          cssMaxWidth: 300,
          cssMaxHeight: 292,
          usageStatistics: false
          // selectionStyle: {
          //   borderColor: 'blue',
          //   cornerColor: 'blue',
          //   cornerSize: 6
          // },
        },
        editorRef: null,
        canvasRef: null
      }
    },
    watch: {
      /**
       * 탭 활성화시 ref element 등록
       */
      isShow() {
        if (this.isShow) {
          this.editorRef = this.$refs[`editor-${this.refKey}`]
          this.canvasRef = this.$refs[`canvas-${this.refKey}`].getContext('2d')
        }
      }
    },
    mounted() {
      this.refKey = Math.floor(Math.random() * this.divKey * 100)
    },
    methods: {
      onDragover(event) {
        event.preventDefault()
      },
      onDrop(event) {
        event.preventDefault()
        const files = event.dataTransfer.files
        if (!files[0].type.includes('image')) {
          alert('지원하지 않는 형식의 파일입니다.')
          return false
        }
        const newEvent = {
          target: {
            files
          }
        }
        this.onFileChange(newEvent)
      },
      onFileChange(event) {
        this.$emit('fileUpload', true)
        this.isUploadFile = !this.isUploadFile
        this.setImageResize(event.target.files[0])
      },
      /**
       * tui-image-editor 이미지 로드
       */
      setImage(fileObj) {
        this.editorRef.invoke('loadImageFromFile', fileObj).then(result => {
          this.setCanvasSize(result)
          this.$emit('ready')
        })
        this.fileToBase64(fileObj)
      },
      /**
       * 1024 X 1024 보다 클때 사이즈 줄이기
       */
      setImageResize(fileObj) {
        const _this = this
        const fr = new FileReader()
        fr.onload = () => {
          // file is loaded
          const img = new Image()
          img.onload = async () => {
            if (img.width > 1024 || img.height > 1024) {
              const resizeImage = await Utility.imageResize(1024, 1024, img)
              await _this.canvasRef.drawImage(
                img,
                0,
                0,
                resizeImage.width,
                resizeImage.height
              )
              const newImage = await _this.$refs[
                `canvas-${this.refKey}`
              ].toDataURL()
              const newFileObj = await Utility.dataUrlToFile(
                newImage,
                'resizeImage'
              )
              _this.setImage(newFileObj)
            } else {
              _this.setImage(fr.result)
            }
          }
          img.src = fr.result // is the data URL because called with readAsDataURL
        }
        fr.readAsDataURL(fileObj)
      },
      /**
       * tui-image-editor 이슈
       * 이미지 사이즈에 따라서 canvas 커짐 비율대로 커지지 않음...
       * 위 이슈에 대한 조치
       */
      setCanvasSize(result) {
        const img = {
          width: result.newWidth,
          height: result.newHeight
        }
        let nw, nh
        if (img.width > 300 || img.height > 292) {
          if (img.width !== img.height) {
            const resizeImage = Utility.imageResize(300, 294, img)
            nw = resizeImage.width
            nh = resizeImage.height
          } else {
            nh = 292
            nw = 292
          }
          this.editorRef.$el.querySelector('.lower-canvas').style.maxWidth =
            nw + 'px'
          this.editorRef.$el.querySelector('.lower-canvas').style.maxHeight =
            nh + 'px'
          this.editorRef.$el.querySelector('.upper-canvas').style.maxWidth =
            nw + 'px'
          this.editorRef.$el.querySelector('.upper-canvas').style.maxHeight =
            nh + 'px'
        }
      },
      /**
       * Image file convert to base64
       */
      fileToBase64(file) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.origin = reader.result
        }
      },
      onUndo() {
        if (!this.editorRef.invoke('isEmptyUndoStack')) {
          this.editorRef.invoke('undo')
        }
        this.$nextTick(() => {
          if (this.editorRef.invoke('isEmptyUndoStack')) {
            this.stack.undo = false
          }
        })
      },
      onRedo() {
        if (!this.editorRef.invoke('isEmptyRndoStack')) {
          this.editorRef.invoke('redo')
        }

        this.$nextTick(() => {
          if (this.editorRef.invoke('isEmptyRndoStack')) {
            this.stack.redo = false
          }
        })
      },
      onClear() {
        this.editorRef.invoke('stopDrawingMode')
        this.editorRef.invoke('clearUndoStack')
        this.isUploadFile = false
        this.origin = null
        this.$emit('clear')
      },
      /**
       * 이미지 crop mode
       */
      onCrop() {
        this.isCropMode = !this.isCropMode
        if (this.isCropMode) {
          this.editorRef.invoke('startDrawingMode', 'CROPPER')
        } else {
          const rect = this.editorRef.invoke('getCropzoneRect')
          if (rect.width > 0.5 && rect.height > 0.5) {
            this.editorRef.invoke('crop', rect).then(result => {
              this.setCanvasSize(result)
              this.editorRef.invoke('stopDrawingMode')
            })
          }
        }
      },
      onMaskingEnd() {
        if (this.isMaskingMode) {
          this.editorRef.invoke('stopDrawingMode')
          this.isMaskingMode = false
        } else {
          this.onClear()
        }
      },
      /**
       * 이미지 masking mode
       */
      onMaking() {
        this.isMaskingMode = true
        const strokeWidth = this.brush.width * 1
        this.editorRef.invoke('startDrawingMode', 'FREE_DRAWING', {
          width: strokeWidth,
          color: 'rgba(0,0,0,1)'
        })
      },
      /**
       * slider 변경 이벤트
       */
      onMaskingChange(e) {
        const strokeWidth = this.brush.width * 1
        this.editorRef.invoke('setBrush', {
          width: strokeWidth,
          color: 'rgba(0,0,0,1)'
        })
      },
      onToDataURL() {
        return this.editorRef.invoke('toDataURL').split(';base64,')[1]
      },
      onGetOrigin() {
        return this.origin.split(';base64,')[1]
      },
      objectScaled(props) {
        console.log(props)
      },
      objectMoved(props) {
        console.log(props)
      },
      objectActivated(props) {
        console.log(props)
      },
      mousedown(props) {
        console.log(props)
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '@/assets/scss/components/techplayground/demo/karloEditor.scss';
</style>

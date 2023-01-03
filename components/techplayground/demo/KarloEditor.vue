<template>
  <div class="karlo-editor">
    <div v-if="!isUploadFile" class="placeholder">
      <label
        :for="refKey"
        @dragover="onDragover"
        @drop="onDrop"
      >
        <p>이미지를 끌어서 놓기 또는 클릭해서 업로드 하기</p>
        <input :ref="refKey" :id="refKey" :name="refKey" type="file" accept="image/*" @change="onFileChange">
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
          <img v-if="!isCropMode" src="@/assets/images/playground/demo/ic_tool-modify.png" />
          <img v-else src="@/assets/images/icons/ic_check.png" />
        </button>
        <button v-if="!isCropMode" @click="onClear()">
          <img src="@/assets/images/playground/demo/ic_tool-close.png" />
        </button>
      </template>
      <template v-else-if="masking">
        <button class="button-undo" @click="onUndo()"><img src="@/assets/images/playground/demo/ic_tool-refresh.png" /></button>
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
      >
    </div>
  </div>
</template>
<script>
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
        redo: false,
      },
      options: {
        // includeUI: {
        //   initMenu: 'crop'
        // },
        cssMaxWidth: 300,
        cssMaxHeight: 292,
        usageStatistics: false,
        // selectionStyle: {
        //   borderColor: 'blue',
        //   cornerColor: 'blue',
        //   cornerSize: 6
        // },
      },
      editorRef: null
    }
  },
  mounted() {
    this.refKey = Math.floor(this.divKey * 100)
    this.editorRef = this.$refs[`editor-${this.refKey}`]
  },
  methods: {
    onDragover (event) {
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
          files,
        }
      }
      this.onFileChange(newEvent)
    },
    onFileChange(event) {
      this.$emit('fileUpload', true)
      this.isUploadFile = !this.isUploadFile
      this.$refs[`editor-${this.refKey}`].invoke('loadImageFromFile', event.target.files[0]).then((result) => {
        this.setCanvasSize(result)
        this.$emit('ready')
      })
      this.fileToBase64(event.target.files[0])
    },
    setCanvasSize(result) {
      const ww = result.newWidth
      const hh = result.newHeight
      
      let nw, nh
      if (ww > 300 || hh > 292 ) {
        if (ww !== hh) {
          if (ww > hh) {
            nh = Math.floor(300 * hh / ww)
            nw = 300
          } else {
            nh = 292
            nw = Math.floor(292 * ww / hh)
          }
        } else {
          nh = 292
          nw = 292
        }
        this.$refs[`editor-${this.refKey}`].$el.querySelector('.lower-canvas').style.maxWidth = nw+'px'
        this.$refs[`editor-${this.refKey}`].$el.querySelector('.lower-canvas').style.maxHeight = nh+'px'
        this.$refs[`editor-${this.refKey}`].$el.querySelector('.upper-canvas').style.maxWidth = nw+'px'
        this.$refs[`editor-${this.refKey}`].$el.querySelector('.upper-canvas').style.maxHeight = nh+'px'
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
      if (!this.$refs[`editor-${this.refKey}`].invoke('isEmptyUndoStack')) {
        this.$refs[`editor-${this.refKey}`].invoke('undo')
      }
      this.$nextTick(() => {
        if (this.$refs[`editor-${this.refKey}`].invoke('isEmptyUndoStack')) {
          this.stack.undo = false
        }
      })
    },
    onRedo() {
      if (!this.$refs[`editor-${this.refKey}`].invoke('isEmptyRndoStack')) {
        this.$refs[`editor-${this.refKey}`].invoke('redo')
      }

      this.$nextTick(() => {
        if (this.$refs[`editor-${this.refKey}`].invoke('isEmptyRndoStack')) {
          this.stack.redo = false
        }
      })
    },
    onClear() {
      this.$refs[`editor-${this.refKey}`].invoke('stopDrawingMode')
      this.$refs[`editor-${this.refKey}`].invoke('clearUndoStack')
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
        this.$refs[`editor-${this.refKey}`].invoke('startDrawingMode', 'CROPPER')
      } else {
        const rect = this.$refs[`editor-${this.refKey}`].invoke('getCropzoneRect')
        if (rect.width > 0.5 && rect.height > 0.5) {
          this.$refs[`editor-${this.refKey}`].invoke('crop', rect).then((result) => {
            this.setCanvasSize(result)
            this.$refs[`editor-${this.refKey}`].invoke('stopDrawingMode')
          })
        }
      }
    },
    onMaskingEnd() {
      if (this.isMaskingMode) {
        this.$refs[`editor-${this.refKey}`].invoke('stopDrawingMode')
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
      this.$refs[`editor-${this.refKey}`].invoke('startDrawingMode', 'FREE_DRAWING', {
        width: strokeWidth,
        color: 'rgba(0,0,0,1)'
      })
    },
    /**
     * slider 변경 이벤트
     */
    onMaskingChange(e) {
      const strokeWidth = this.brush.width * 1
      this.$refs[`editor-${this.refKey}`].invoke('setBrush', {
        width: strokeWidth,
        color: 'rgba(0,0,0,1)'
      })
    },
    onToDataURL() {
      return this.$refs[`editor-${this.refKey}`].invoke('toDataURL').split(';base64,')[1]
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
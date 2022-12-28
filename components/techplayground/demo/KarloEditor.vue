<template>
  <div class="karlo-editor">
    <div v-if="!isUploadFile" class="placeholder">
      <label
        for="file"
        @dragover="onDragover"
        @drop="onDrop"

      >
        <p>이미지를 끌어서 놓기 또는 클릭해서 업로드 하기</p>
        <input ref="file" id="file" name="file" type="file" accept="image/*" @change="onFileChange">
      </label>
    </div>
    <client-only>
      <image-editor
        ref="editor"
        class="tui-image-editor"
        :include-ui="true"
        :options="options"
      />
    </client-only>
    <div class="buttons">
      <template v-if="crop && !masking">
        <button @click="onCrop()">
          <img v-if="!isCropMode" src="@/assets/images/playground/demo/ic_tool-modify.png" />
          <img v-else src="@/assets/images/playground/demo/ic_tool-close.png" />
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
  },
  data() {
    return {
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
        includeUI: {
          initMenu: 'filter'
        },
        cssMaxWidth: 300,
        cssMaxHeight: 292,
        usageStatistics: false,
        selectionStyle: {
          borderColor: 'blue',
          cornerColor: 'blue',
          cornerSize: 6
        },
      },
    }
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
      this.$refs.editor.invoke('loadImageFromFile', event.target.files[0])
      this.fileToBase64(event.target.files[0])
      // setTimeout(() => {
      //   const parentElementHeight = getComputedStyle(document.querySelector('.experience-tool')).minHeight.split('px')[0] * 1
      //   const height = this.$refs.editor.$el.querySelector('.lower-canvas').style.maxHeight.split('px')[0] * 1
      //   this.$refs.editor.$el.style.height = height > parentElementHeight
      //     ? height + 'px'
      //     : parentElementHeight + 'px'
      // }, 200)
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
      if (!this.$refs.editor.invoke('isEmptyUndoStack')) {
        this.$refs.editor.invoke('undo')
      }
      this.$nextTick(() => {
        if (this.$refs.editor.invoke('isEmptyUndoStack')) {
          this.stack.undo = false
        }
      })
    },
    onRedo() {
      if (!this.$refs.editor.invoke('isEmptyRndoStack')) {
        this.$refs.editor.invoke('redo')
      }

      this.$nextTick(() => {
        if (this.$refs.editor.invoke('isEmptyRndoStack')) {
          this.stack.redo = false
        }
      })
    },
    onClear() {
      this.$refs.editor.$el.style.height = 'auto'
      this.$refs.editor.invoke('stopDrawingMode')
      this.isUploadFile = false
      this.origin = null
    },
    /**
     * 이미지 crop mode
     */
    onCrop() {
      this.isCropMode = !this.isCropMode
      if (this.isCropMode) {
        this.$refs.editor.invoke('startDrawingMode', 'CROPPER')
      } else {
        const rect = this.$refs.editor.invoke('getCropzoneRect')
        this.$nextTick(() => {
          this.$refs.editor.invoke('crop', rect)
          this.$refs.editor.invoke('stopDrawingMode')
        })
      }
    },
    onMaskingEnd() {
      if (this.isMaskingMode) {
        this.$refs.editor.invoke('stopDrawingMode')
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
      this.$refs.editor.invoke('startDrawingMode', 'FREE_DRAWING', {
        width: strokeWidth,
        color: 'rgba(0,0,0,1)'
      })
    },
    /**
     * slider 변경 이벤트
     */
    onMaskingChange(e) {
      const strokeWidth = this.brush.width * 1
      this.$refs.editor.invoke('setBrush', {
        width: strokeWidth,
        color: 'rgba(0,0,0,1)'
      })
    },
    onToDataURL() {
      return this.$refs.editor.invoke('toDataURL').split('data:image/png;base64,')[1]
    },
    onGetOrigin() {
      return this.origin.split('data:image/png;base64,')[1]
    },
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/techplayground/demo/karloEditor.scss';
</style>
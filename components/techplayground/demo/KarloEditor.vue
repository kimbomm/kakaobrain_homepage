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
      <image-editor ref="editor" :include-ui="false" :options="options" />
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
        @change="onMaskingChange()"
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
      brush: {
        min: 1,
        max: 20,
        width: 5
      },
      isUploadFile: false,
      canvas: {
        width: '894',
        height: '292'
      },
      isUploadFile: false,
      isCropMode: false,
      isMaskingMode: false,
      stack: {
        undo: false,
        redo: false,
      },
      options: {
        cssMaxHeight: '292px',
        cssMaxWidth: '894px',
        usageStatistics: false
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
      console.log('onDrop::', files)
      const newEvent = {
        target: {
          files,
        }
      }
      this.onFileChange(newEvent)
    },
    onFileChange(event) {
      this.isUploadFile = !this.isUploadFile
      this.$refs.editor.invoke('loadImageFromFile', event.target.files[0])
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
      this.$refs.editor.invoke('stopDrawingMode')
      this.isUploadFile = false
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
      this.$refs.editor.invoke('startDrawingMode', 'FREE_DRAWING', {
        width: this.brush.width,
        color: 'rgba(0,0,0,1)'
      })
    },
    /**
     * slider 변경 이벤트
     */
    onMaskingChange() {
      this.$refs.editor.invoke('setBrush', {
        width: this.brush.width
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/assets/scss/components/techplayground/demo/karloEditor.scss';
</style>
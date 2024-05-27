<script>
import { mapState } from 'vuex';
export default {
  data() { 
    return {
      isMobile: false
    }
  },
  computed: {
    ...mapState({
      device: state => state.device,
      language: state => state.language,
      popup: state => state.translation.POPUP,
    }),
  },
  mounted() {
    this.onResizeEvent()
    window.addEventListener('resize', this.onResizeEvent)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResizeEvent)
  },
  methods: {
    onResizeEvent() {
      this.isMobile = (this.device.touch && this.device.mobile || window.innerWidth <= 768)
    }
  }
  }
</script>
<template>
  <div class="popup">
    <div class="dimmed"></div>
    <div class="popup__content">
      <div class="popup__content__header">
        <button @click="$emit('close')">close popup</button>
      </div> 
      <div class="popup__content__body">
        <div class="title">{{ popup[language].title }}</div>
        <div class="description" v-html="popup[language].description"></div>
        <template v-if="!isMobile">
          <div class="table">
            <div class="table__content">
              <div class="table__content__th">{{ popup[language].before.title }}</div>
              <div class="table__content__th">{{ popup[language].after.title }}</div>
            </div>
            <template v-for="(item, index) in popup[language].before.data">
              <div class="table__content">
                <div class="table__content__td" v-html="popup[language].before.data[index]"></div>
                <div class="table__content__td" v-html="popup[language].after.data[index]"></div>
              </div>
            </template>
          </div>
        </template>
        <template v-else>
          <div class="table">
            <div class="table__content">
              <div class="table__content__th">{{ popup[language].before.title }}</div>
            </div>
            <template v-for="(item, index) in popup[language].before.data">
              <div class="table__content">
                <div class="table__content__td" v-html="popup[language].before.data[index]"></div>
              </div>
            </template>
          </div>
          <div class="table">
            <div class="table__content">
              <div class="table__content__th">{{ popup[language].after.title }}</div>
            </div>
            <template v-for="(item, index) in popup[language].after.data">
              <div class="table__content">
                <div class="table__content__td" v-html="popup[language].after.data[index]"></div>
              </div>
            </template>
          </div>
        </template>
        <div class="final" v-html="popup[language].final"></div>
      </div> 
    </div>
  </div>
</template>
<style lang="scss" scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  .dimmed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
  &__content {
    position: relative;
    z-index: 1;
    width: 700px;
    height: 700px;
    max-height: 85vh;
    border-radius: 20px;
    background-color: white;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    color: #333;
    &__header {
      background-color: #333333;
      height: 56px;
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex-shrink: 0;
      button {
        width: 20px;
        height: 20px;
        background-image: url('~/assets/images/ico-close.svg');
        background-size: cover;
        font-size: 0;
        text-indent: -9999px;
      }
    }
    &__body {
      flex-grow: 1;
      height: 100%;
      overflow-y: auto;
      padding: 30px 30px 100px;
    }
  }
}
.title {
  font-size: 24px;
  line-height: 19.2px;
  margin-bottom: 50px;
}
.description,
.final {
  font-size: 14px;
  line-height: 1.5;
}
.table {
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  border: 1px solid #E8ECF1;
  font-size: 12px;
  line-height: 1.5;
  color: #666;
  &__content {
    display: flex;
    border-bottom: 1px solid #E8ECF1;
    &:last-child {
      border-bottom: 0;
    }
    > div {
      flex: 0 0 50%;
      &:nth-child(1) {
        border-right: 1px solid #E8ECF1;
      }
    }
    &__th {
      background-color: #F5F7FA;
      height: 30px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    &__td {
      padding: 12px 10px;
    }
  }
}

@include pc-4k {
  .popup {
    &__content {
      width: 1000px;
      height: 800px;
    }
  }
  .title {
    font-size: 34px;
    line-height: 27.2px;
  }
  .description,
  .final {
    font-size: 20px;
  }
  .table {
    font-size: 16px;
  }
}

@include tablet {
  .popup {
    &__content {
      height: 400px;
    }
  }
}

@include mobile {
  .popup {
    &__content {
      width: calc(100% - 40px);
      height: 100%;
      &__body {
        padding: 20px 20px 84px;
      }
    }
  }
  .title {
    font-size: 24px;
    line-height: 19.2px;
  }
  .description,
  .final {
    font-size: 14px;
  }
  .table {
    font-size: 12px;
    & + .table {
      margin-top: 0;
    }
    &__content {
      > div {
        flex: 1;
      }
    }
  }
}
</style>
<style>
.highlight {
  color: #001EFF !important;
}
</style>
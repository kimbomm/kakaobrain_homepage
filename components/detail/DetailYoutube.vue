<template>
  <div class="youtube">
    <div>
      <iframe
        :id="data.itemProp.youtube.id"
        :src="`https://www.youtube.com/embed/${data.itemProp.youtube.id}?enablejsapi=1&version=3&playerapiid=ytplayer`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        :onload="onPlay()"
      />
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      data: {
        type: Object,
        default: () => {}
      }
    },
    async mounted() {
      // await this.onPlay()
    },
    methods: {
      onPlay() {
        // console.log('play!!')
        // document
        //   .getElementById(this.data.itemProp.youtube.id)
        //   .contentWindow.postMessage(
        //     '{"event":"command","func":"' + 'playVideo' + '","args":""}',
        //     '*'
        //   )
      }
    }
  }
</script>
<style lang="scss" scoped>
  .youtube {
    width: getWidth(7);
    margin: {
      top: 140px;
      bottom: 150px;
      left: getMargin(2);
    }
    > div {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  @include pc-large {
    .youtube {
      margin: {
        top: 200px;
        bottom: 300px;
      }
    }
  }

  @include pc-4k {
    .youtube {
      margin: {
        top: 300px;
        bottom: 300px;
      }
    }
  }

  @include tablet {
    .youtube {
      margin: {
        top: 100px;
        bottom: 74px;
      }
    }
  }
  @include mobile {
    .youtube {
      width: 100%;
      margin: {
        top: 100px;
        bottom: 100px;
        left: 0;
      }
    }
  }
</style>

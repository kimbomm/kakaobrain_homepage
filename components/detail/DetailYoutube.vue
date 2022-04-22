<template>
  <div class="youtube">
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
        console.log('play!!')
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
    position: relative;
    width: getWidth(6);
    padding-top: 33%;
    margin: 100px auto;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

<template>
  <div class="monthly-detail">
    <div class="con-tit">
      <DetailTitle
        text="Automated Learning Rate Scheduler for Large-batch Training."
        type="gl-6"
        ml="l-ml-2"
      />
    </div>
    <div class="con-text">
      <DetailSubTitle text="The first record." />
      <DetailText
        text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years."
      />
      <DetailText
        text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research."
      />
      <DetailText
        text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research."
      />
      <DetailText
        text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years."
      />
      <DetailText
        text="Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University, Hanyang University, KAIST and UNIST, and began joint research for 3] years."
      />
      <DetailText
        text="Kakao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research."
      />
      <DetailText
        text="K akao Brain and each school's AI laboratory are trying to establish a new research methodology that goes beyond the stereo type of AI research through this cooperation. It makes me feel grand how our research will change the world. Let me introduce Kakao Brain's know-how for joint research."
      />
      <div class="item">
        <DetailTextItem text="AAAI (2021)" />
        <DetailTextItem text="PAPER" />
      </div>
    </div>
    <div class="con-text">
      <DetailTextTitle text="Author" />
      <DetailText
        text="ic, the whole schedule consists of two phases: adaptive warmup and predefined decay, where the LR i"
      />
    </div>
    <div class="con-text">
      <DetailTextTitle text="Keywords." />
      <DetailText
        text=" Kakao Brain, along with the world's top AI laboratories, challenges the limitations of human perception and reasoning. Kakao Brain formed industry-academic cooperation with seven universities' AI laboratories, including Korea University, Seoul National University, Pohang University,"
      />
    </div>
    <div class="con-text">
      <DetailTextTitle text="Published" />
      <DetailText text="2021.02.02 " />
    </div>
    <div>
      <Like />
    </div>
  </div>
</template>
<script>
  import Thumbnail from '@/components/detail/Thumbnail'
  import DetailTitle from '@/components/detail/DetailTitle'
  import DetailText from '@/components/detail/DetailText'
  import DetailImg from '@/components/detail/DetailImg'
  import DetailSubTitle from '@/components/detail/DetailSubTitle'
  import DetailFullImg from '@/components/detail/DetailFullImg'
  import DetailTextItem from '@/components/detail/DetailTextItem'
  import DetailTextTitle from '@/components/detail/DetailTextTitle'
  import Like from '@/components/elements/Like'
  export default {
    name: 'index',
    components: {
      Thumbnail,
      DetailTitle,
      DetailText,
      DetailImg,
      DetailSubTitle,
      DetailFullImg,
      DetailTextItem,
      DetailTextTitle,
      Like
    }
  }
</script>
<style lang="scss" scoped>
  .monthly {
    &-detail {
      .con-tit {
        margin-bottom: 200px;
      }
      .con-text {
        &:not(:last-child) {
          margin-bottom: 150px;
        }
        .item {
          margin-top: 100px;
        }
      }
    }
  }

  .like {
    display: none;
  }
  @include pc-4k {
    .monthly {
      &-detail {
        .con-tit {
          margin-bottom: 400px !important;
        }
        .con-text {
          &:not(:last-child) {
            margin-bottom: 250px !important;
          }
          .item {
            margin-top: 256px !important;
          }
        }
      }
    }
  }

  @include pc-large {
    .monthly {
      &-detail {
        .con-tit {
          margin-bottom: 300px;
        }
        .con-text {
          &:not(:last-child) {
            margin-bottom: 200px;
          }
          .item {
            margin-top: 100px;
          }
        }
      }
    }
  }
  @include tablet {
    .monthly {
      &-detail {
        .con-text {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
          .item {
            margin-top: 80px;
          }
        }
      }
    }
  }
  @include mobile {
    .monthly {
      &-detail {
        .con-tit {
          margin-bottom: 140px;
        }
        .con-text {
          &:not(:last-child) {
            margin-bottom: 100px;
          }
          .item {
            margin-top: 60px;
          }
        }
      }
    }
  }

  .like {
    display: block;
  }
</style>

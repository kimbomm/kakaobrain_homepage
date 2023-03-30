<template>
  <div class="goal">
    <div class="gl-6" style="position: relative">
      <div class="goal-title" width="100%">
        <span
          >Unthinkable<br />
          question<br />
          makes impactful<br />
          answer.</span
        >
        <div class="diacritic">
          <img
            class="dia5"
            src="@/assets/images/diacritic-5.png"
            style="width: 100%; height: 100%"
          />
          <img
            class="dia4"
            src="@/assets/images/diacritic-4.png"
            style="width: 100%; height: 100%"
          />
          <img
            class="dia3"
            src="@/assets/images/diacritic-3.png"
            style="width: 100%; height: 100%"
          />
          <img
            class="dia2"
            src="@/assets/images/diacritic-2.png"
            style="width: 100%; height: 100%"
          />
          <img
            class="dia1"
            src="@/assets/images/diacritic-1.png"
            style="width: 100%; height: 100%"
          />
        </div>
      </div>
      <div
        class="goal-desp"
        style="display: flex; flex-direction: column; align-items: flex-end"
      >
        <p>
          카카오브레인은 생각하지 못한 물음으로부터<br />
          기술을 발전시키고, 모두의 생활을 변화시킵니다.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {}
    }
  }
</script>
<style lang="scss" scoped>
  .goal {
    height: 1500px;
    margin-left: 20px;
    padding: 0 20px;
    background-color: #000;
    display: flex;
    align-items: center;
    justify-content: center;

    > div {
      position: relative;
      width: fit-content !important;

      .diacritic {
        width: 100%;
        position: absolute;
        display: flex;
        gap: 0px 70px;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
      }
    }
    &-title {
      text-transform: uppercase;
      font-size: 110px;
      line-height: 0.9;
      font-weight: 900;
      color: $surface-1;
      width: 100%;
      position: relative;
      z-index: 1;
    }
    &-desp {
      margin-top: 100px;
      p {
        text-align: right;
        font-size: 30px;
        line-height: 1.3;
        color: #fff;
        word-break: keep-all;
      }
    }
  }
  @include pc-large {
    .goal {
      height: 2000px;

      > div {
        width: fit-content !important;
        .diacritic {
          width: '100%';
        }
        // &:before {
        //   top: calc((50%) - 30px);
        // }
        // &:after {
        //   top: calc((50%) - 30px);
        // }
      }
      &-title {
        font-size: 146px;
      }
      &-desp {
        p {
          font-size: 40px;
        }
      }
    }
  }
  @include pc-4k {
    .goal {
      justify-content: flex-start;
      height: 3000px;
      padding-left: 1478px;
      > div {
        position: relative;

        &.gl-6 {
          //width: getWidth(5) !important;
          width: fit-content !important;
        }

        .diacritic {
          width: 100%;
        }
        // &:before {
        //   left: calc((50%) - 135px);
        //   top: 50%;
        //   width: 500px;
        //   height: 500px;
        // }
        // &:after {
        //   left: calc((50%) - 260px);
        //   top: 50%;
        //   width: 500px;
        //   height: 500px;
        // }
      }
      &-title {
        font-size: 216px;
      }
      &-desp {
        margin-top: 200px;
        p {
          font-size: 62px;
        }
      }
    }
  }
  @include tablet {
    .goal {
      height: 1000px;
      //margin-top: 100px;

      > div {
        width: fit-content !important;
        //display: relative;
        .diacritic {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-110%, -50%);
          width: 45%;
          height: 45%;
          gap: 0px 30px;
        }
        // &:before {
        //   top: 50%;
        //   width: 160px;
        //   height: 160px;
        // }
        // &:after {
        //   top: 50%;
        //   width: 160px;
        //   height: 160px;
        // }
      }
      &-title {
        font-size: 60px;
      }
      &-desp {
        margin-top: 60px;
        p {
          font-size: 20px;
        }
      }
    }
  }
  @include mobile {
    .goal {
      height: 670px;
      //height: 100vh;
      margin-left: 0;
      width: auto;
      > div {
        width: fit-content !important;

        .diacritic {
          position: absolute;
          display: flex;
          align-items: center;
          flex-direction: column;
          left: 50%;
          top: 0%;
          transform: translate(-50%, -150%);
          width: auto;
          height: 76px;
          gap: 0px 0px 17px 0px;
        }
      }
      &-title {
        font-size: 30px;
      }
      &-desp {
        margin-top: 20px;
        p {
          text-align: left;
          font-size: 14px;
          z-index: 1;
        }

        // br {
        //   display: none;
        // }
      }
    }
  }
</style>

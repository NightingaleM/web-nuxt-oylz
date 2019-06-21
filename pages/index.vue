<template>
  <div id="home-page" @click="setColor">
    <div class="home-page-box">
      <div :class="['box', item]" v-for="(item,index) in ways" :key="index">
        <div :class="['colourless','colourless-'+item]"></div>
        <div :class="['filter-tab','filter-'+item]"></div>
      </div>
    </div>
    <!--  TODO: 中间旋转内容 -->
    <div class="center-box">
      <div class="bird top-b">
        <div class="gray-box"></div>
        <div class="colorful-box"></div>
      </div>
      <div class="logo web-font">O Y R C</div>
      <div class="bird bot-b">
        <div class="gray-box"></div>
        <div class="colorful-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'fullpage',
  data() {
    return {
      ways: ['top-left', 'top-right', 'bot-left', 'bot-right'],
      cd: 4
    }
  },
  methods: {
    setColor() {
      if (this.cd) {
        return
      }
      document.querySelectorAll('.filter-tab').forEach(e => {
        e.className = e.className + ' filter'
      })
    }
  },
  mounted() {
    let timer = setInterval(() => {
      this.cd--
      if (this.cd === 0) {
        console.log('done')
        clearInterval(timer)
      }
    }, 1000)
    // setTimeout(() => {

    // }, 4200)
  }
}
</script>

<style lang="less" scoped>
#home-page {
  width: 100vw;
  height: 100vh;
  background-image: url(~assets/img/fhw_invite/bg_cloud.jpg);
  .home-page-box {
    position: relative;
    width: 100%;
    height: 100%;
    .box {
      position: absolute;
      width: 50% !important;
      height: 70% !important;
      .filter-tab {
        position: absolute;
        background-repeat: no-repeat;
        mask-repeat: no-repeat;
        width: 100%;
        height: 100%;
        mask-position: center;
        mask-size: 0;
        background-size: 76%;

        // background-size: cover;
        // transition: mask-size 1.6s ease-in 0s;
        // &:hover {
        //   mask-size: 1920px;
        // }
      }
      .filter {
        mask-size: 2000px;
        animation: changeMaskSize_colorful ease-out 3s;
      }
      .filter-top-left {
        background-image: url(~assets/img/fhw_invite/left_top_hover.png);
        mask-image: url(~assets/img/fhw_invite/m.png);
        // mask-size: 1500px;
      }
      .filter-top-right {
        background-position: right top;
        // mask-position: top right;
        background-image: url(~assets/img/fhw_invite/right_top_hover.png);
        mask-image: url(~assets/img/fhw_invite/m.png);
        // mask-size: 1500px;
      }
      .filter-bot-left {
        background-position: left bottom;
        // mask-position: left bottom;
        background-image: url(~assets/img/fhw_invite/left_bot_hover.png);
        mask-image: url(~assets/img/fhw_invite/m.png);
        // mask-size: 1500px;
      }
      .filter-bot-right {
        background-position: right bottom;
        // mask-position: right bottom;
        background-image: url(~assets/img/fhw_invite/right_bot_hover.png);
        mask-image: url(~assets/img/fhw_invite/m.png);
        // mask-size: 1500px;
      }
      .colourless {
        position: absolute;
        background-repeat: no-repeat;
        mask-repeat: no-repeat;
        animation: changeMaskSize cubic-bezier(0.73, 0.39, 0.51, 0.8) 6s;
        width: 100%;
        height: 100%;
        background-size: 76%;
      }
      .colourless-top-left {
        background-image: url(~assets/img/fhw_invite/left_top.png);
        mask-image: url(~assets/img/fhw_invite/left_top_b_m.png);
        mask-size: 1500px;
      }
      .colourless-top-right {
        background-position: right top;
        mask-position: top right;
        background-image: url(~assets/img/fhw_invite/right_top.png);
        mask-image: url(~assets/img/fhw_invite/right_top_b_m.png);
        mask-size: 1500px;
      }
      .colourless-bot-left {
        background-position: left bottom;
        mask-position: left bottom;
        background-image: url(~assets/img/fhw_invite/left_bot.png);
        mask-image: url(~assets/img/fhw_invite/left_bot_b_m.png);
        mask-size: 1500px;
      }
      .colourless-bot-right {
        background-position: right bottom;
        mask-position: right bottom;
        background-image: url(~assets/img/fhw_invite/right_bot.png);
        mask-image: url(~assets/img/fhw_invite/right_bot_b_m.png);
        mask-size: 1500px;
      }
    }
    .top-left {
      left: 0;
      top: 0;
      height: 47.3%;
    }
    .top-right {
      right: 0;
      top: 0;
      height: 78.7%;
    }
    .bot-left {
      left: 0;
      bottom: 0;
      height: 57.8%;
    }
    .bot-right {
      right: 0;
      bottom: 0;
      height: 40.3%;
    }
  }
  .center-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin ease 5s 0s;
    opacity: 1;
    .logo {
      z-index: 3;
      position: absolute;
      top: 50%;
      left: 50%;
      font-weight: bolder;
      font-size: 68px;
      transform: translate(-50%, -50%);
      color: transparent;
      animation: r_spin ease 5s 0s, showColor 4s both 4s;
      background-image: url(~assets/img/fhw_invite/car_flower.jpg);
      background-position: 20px -6px;
      background-size: cover;
      background-clip: text;
    }
    .bird {
      height: 310px;
      width: 580px;
      position: relative;
      .gray-box {
        position: absolute;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
      }
      .colorful-box {
        position: absolute;
        height: 100%;
        width: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        // mask-size: 150%;
        mask-repeat: no-repeat;
        // animation-fill-mode: both;
        // animation-duration: 4s;
        // animation-delay: 4s;
        // animation-timing-function: ease-in;
        // animation-play-state: paused;
        // mask-position: center;
      }
    }
    .top-b {
      margin-bottom: -20px;
      .gray-box {
        background-image: url(~assets/img/fhw_invite/f1.png);
        filter: grayscale(100%);
      }
      .colorful-box {
        background-image: url(~assets/img/fhw_invite/f1.png);
        mask-image: url(~assets/img/fhw_invite/big_m.png);
        animation: spinColorful_left 4s both 3s ease-in;
      }
    }
    .bot-b {
      margin-top: -20px;
      .gray-box {
        filter: grayscale(100%);
        background-image: url(~assets/img/fhw_invite/f2.png);
      }
      .colorful-box {
        background-image: url(~assets/img/fhw_invite/f2.png);
        mask-image: url(~assets/img/fhw_invite/big_m.png);
        animation: spinColorful_right 4s both 3s ease-in;
      }
    }
  }
}
@keyframes changeMaskSize {
  0% {
    mask-size: 0px;
  }
  100% {
    mask-size: 1500px;
  }
}
@keyframes changeMaskSize_colorful {
  0% {
    mask-size: 0px;
  }
  100% {
    mask-size: 2000px;
  }
}
@keyframes spin {
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) rotate(90deg);
    // filter: grayscale(100%)
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(0deg);
    // filter: grayscale(100%)
  }
}
@keyframes r_spin {
  0% {
    transform: translate(-50%, -50%) rotate(-90deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
@keyframes spinColorful_left {
  0% {
    mask-position: -800px -100px;
  }
  100% {
    mask-position: -60px -100px;
  }
}
@keyframes spinColorful_right {
  0% {
    mask-position: 400px 100px;
  }
  100% {
    mask-position: -100px -100px;
  }
}
@keyframes showColor {
  0% {
    // background: rgba(0, 0, 0, 0);
    filter: grayscale(100%);
  }
  100% {
    filter: grayscale(0%);
  }
}
</style>

<template>
  <div id="welcome-page" @click="setColor">
    <div class="welcome-page-box">
      <div :class="['box', item]" v-for="(item,index) in ways" :key="index">
        <div :class="['colourless','colourless-'+item]"></div>
        <div :class="['filter-tab','filter-'+item]"></div>
        <nuxt-link :class="['l-bird-box','l-bird-box-'+item]" :to="routerList[index].to">
          <!-- <div class="title">{{routerList[index].name}}</div> -->
        </nuxt-link>
      </div>
    </div>
    <!--  TODO: 中间旋转内容 -->
    <div class="center-box">
      <div class="bird top-b">
        <div class="gray-box"></div>
        <div class="colorful-box"></div>
      </div>
      <!-- <div class="logo web-font">O Y R C</div> -->
      <div class="bird bot-b">
        <div class="gray-box"></div>
        <div class="colorful-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCookie, setCookie } from '~/plugins/public.js'
export default {
  layout: 'fullpage',
  data() {
    return {
      ways: ['top-left', 'top-right', 'bot-left', 'bot-right'],
      cd: 4,
      activeKey: false,
      routerList: [
        {
          name: '首页',
          to: '/'
        },
        {
          name: '备忘录',
          to: '/easynote'
        },
        {
          name: '喳喳',
          to: ''
        },
        {
          name: '唧唧',
          to: ''
        }
      ]
    }
  },
  methods: {
    setColor() {
      if (this.cd || this.activeKey) {
        return
      }
      this.activeKey = true
      document.querySelectorAll('.filter-tab').forEach(e => {
        e.className = e.className + ' filter'
      })
      document.querySelectorAll('.l-bird-box').forEach(e => {
        e.className = e.className + ' active-bird'
      })
    }
  },
  mounted() {
    let timer = setInterval(() => {
      this.cd--
      if (this.cd === 0) {
        clearInterval(timer)
      }
    }, 1000)
    let status = getCookie('oylzft')
    if (!status) {
      setCookie('oylzft', 1, 10)
    }
    // setTimeout(() => {

    // }, 4200)
  }
}
</script>

<style lang="less" scoped>
#welcome-page {
  width: 100vw;
  height: 100vh;
  background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/bg_cloud.webp);
  .welcome-page-box {
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
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_top_hover.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/m.webp);
        // mask-size: 1500px;
      }
      .filter-top-right {
        background-position: right top;
        // mask-position: top right;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_top_hover.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/m.webp);
        // mask-size: 1500px;
      }
      .filter-bot-left {
        background-position: left bottom;
        // mask-position: left bottom;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_bot_hover.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/m.webp);
        // mask-size: 1500px;
      }
      .filter-bot-right {
        background-position: right bottom;
        // mask-position: right bottom;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_bot_hover.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/m.webp);
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
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_top.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_top_b_m.webp);
        mask-size: 1500px;
      }
      .colourless-top-right {
        background-position: right top;
        mask-position: top right;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_top.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_top_b_m.webp);
        mask-size: 1500px;
      }
      .colourless-bot-left {
        background-position: left bottom;
        mask-position: left bottom;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_bot.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/left_bot_b_m.webp);
        mask-size: 1500px;
      }
      .colourless-bot-right {
        background-position: right bottom;
        mask-position: right bottom;
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_bot.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/right_bot_b_m.webp);
        mask-size: 1500px;
      }
    }
    @l: 35%;
    @m: 65%;
    .l-bird-box {
      position: absolute;
      height: 150px;
      width: 150px;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      opacity: 0;
      transition: all ease-in-out 1.5s;
      // .title {
      //   position: absolute;
      // }
      // &:hover {
      //   @l;
      // }
    }
    .active-bird {
      opacity: 1;
    }
    .l-bird-box-top-left {
      background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/bird_l_1.webp);
      top: @l;
      left: @l;
      transform: translate(-50%, -50%);
    }
    .l-bird-box-top-right {
      height: 300px;
      background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/bird_r_2.webp);
      top: @l;
      left: @m;
      transform: translate(-50%, -50%);
    }
    .l-bird-box-bot-left {
      background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/bird_l_2.webp);
      top: @m;
      left: @l;
      transform: translate(-50%, -50%);
    }
    .l-bird-box-bot-right {
      background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/bird_r_1.webp);
      top: @m;
      left: @m;
      transform: translate(-50%, -50%);
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
      background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/litter_flower.webp);
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
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/f1.webp);
        filter: grayscale(100%);
      }
      .colorful-box {
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/f1.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/big_m.webp);
        animation: spinColorful_left 4s both 3s ease-in;
      }
    }
    .bot-b {
      margin-top: -20px;
      .gray-box {
        filter: grayscale(100%);
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/f2.webp);
      }
      .colorful-box {
        background-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/f2.webp);
        mask-image: url(//oyrc-pic.oss-cn-shenzhen.aliyuncs.com/fhw_invite/big_m.webp);
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

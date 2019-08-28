<template>
  <header class="head_nav">
    <h1 class="title web-font">OYRC</h1>
    <!-- <p class="summary web-font">Que sera, sera</p> -->
    <!-- <div class="nav-lists">
      <nuxt-link
        class="nav-link"
        v-for="(item,index) in navLists"
        :key="index"
        :to="item.link"
      >{{item.name}}</nuxt-link>
    </div>-->

    <div class="flex-hold-grow"></div>
    <!-- <div class="go-loading" @click="removeCookie">还想看</div> -->
    <div class="filter-bg-box filter_bg"></div>
  </header>
</template>

<script>
import { getCookie, setCookie } from '~/plugins/public.js'
export default {
  data() {
    return {
      navLists: [
        // {
        //   name: '首页',
        //   link: '/home'
        // },
        // {
        //   name: '搜索',
        //   link: '/home'
        // }
        // {
        //   name: '首页',
        //   link: '/home'
        // }
      ]
    }
  },
  methods: {
    removeCookie() {
      setCookie('oylzft', true, -1)
      if (
        navigator.userAgent.match(
          /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        )
      ) {
        location.href = '/loading.html'
      } else {
        location.href = '/welcome'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.head_nav {
  position: sticky;
  width: 100%;
  height: 55px;
  background-color: rgb(255, 255, 255);
  z-index: 5;
  top: 0;
  left: 0;
  padding: 0 30px;
  display: flex;
  align-items: center;
  .title {
    color: #000;
    background-position: -450px -200px;
    // mix-blend-mode: color-burn;
    font-size: 38px;
  }
  // .summary {
  //   mix-blend-mode: color-burn;
  //   font-size: 14px;
  //   padding-left: 10px;
  //   position: absolute;
  //   bottom: 10px;
  //   left: 100px;
  //   // height: 45px;
  // }
  .filter-bg-box {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    content: '';
    filter: blur(40px);
    background-position-x: 50%;
    background-position-y: center;
    background-size: cover;
    background-repeat-x: no-repeat;
    background-repeat-y: no-repeat;
    background-attachment: fixed;
    background-origin: initial;
    background-clip: initial;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
  }
}
</style>

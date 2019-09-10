<template>
  <header class="head_nav">
    <nuxt-link to="/" class="oyrc-title">
      <h1 class="title web-font">OYRC</h1>
    </nuxt-link>
    <p class="summary web-font">Que sera, sera</p>
    <div class="nav-lists">
      <nuxt-link
        class="nav-link"
        v-for="(item,index) in navLists"
        :key="index"
        :to="item.link"
      >{{item.name}}</nuxt-link>
    </div>
    <div class="flex-hold-grow"></div>
    <!-- <div class="go-loading" @click="removeCookie">还想看</div> -->
    <div :class="['filter_bg_box',filterBg]"></div>
  </header>
</template>

<script>
import { getCookie, setCookie, debounce } from '~/plugins/public.js'
import { mapGetters } from 'vuex'
import eventHub from '~/plugins/eventHub'

export default {
  data() {
    return {
      resize: 1300,
      navLists: [
        {
          name: '首页',
          link: '/'
        }
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
  computed: {
    ...mapGetters(['filterBg'])
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
  },
  mounted() {
    eventHub.on('resize', data => {
      console.log(data)
      this.resize = data
    })
    eventHub.emit('resize', window.innerWidth)
    window.addEventListener(
      'resize',
      debounce(e => {
        eventHub.emit('resize', e.target.innerWidth)
      }, 300)
    )
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
  align-items: flex-end;
  .oyrc-title {
    &:hover {
      text-decoration: none;
    }
    .title {
      color: #000;
      background-position: -450px -200px;
      // mix-blend-mode: color-burn;
      font-size: 38px;
    }
  }
  .summary {
    padding-left: 10px;
    line-height: 30px;
  }
  .nav-lists {
    margin-left: 50px;
    line-height: 30px;
    .nav-link {
      color: #000;
      &:hover {
        color: #000;
      }
    }
  }
}
</style>

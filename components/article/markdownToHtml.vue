<template>
  <div
    id="markdown-to-html"
    :class="[isLight?'filter_light_style':'filter_dark_style',{'show-all':showAll}]"
  >
    <div class="title-box">
      <nuxt-link :to="'/article/'+id">
        <h2 class="title css_flower_font_15">{{title}}</h2>
      </nuxt-link>
      <span class="user-name">- {{user.username}}</span>
      <span class="tag" v-for="(item,index) in tags" :key="index">{{item}}</span>
    </div>
    <article :class="['markdown-box',{'show-all':showAll}]" v-html="md"></article>
    <div
      :class="['mk-btn','css_flower_font_8',showAll ? 'hide':'show']"
      @click="showAll = !showAll"
    >{{showAll?'CLOSE':'SHOW'}}</div>
    <div :class="['filter_bg_box',filterBg]"></div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
import api from '~/api/index.js'
import { parsingMarkDown } from '~/plugins/public.js'
// import 'highlightjs/styles/github.css'
// import 'highlightjs/styles/brown_paper.css' // 砂纸背景
import 'highlightjs/styles/monokai-sublime.css' // sublime 风格 dark

export default {
  props: {
    id: {
      type: Number
    },
    user: {
      type: Object
    },
    title: {
      type: String
    },
    md: {
      type: String
    },
    tags: {
      type: Array
    }
  },
  data() {
    return {
      mdEl: null,
      showAll: false
    }
  },
  computed: {
    ...mapState(['isLight']),
    ...mapGetters(['filterBg'])
  }
}
</script>
<style lang="less">
// 隐藏时的高度
@hideHeight: 300px;

#markdown-to-html {
  margin-bottom: 30px;
  background-color: #fff;
  position: relative;
  padding: 20px;
  padding-bottom: 50px;
  z-index: 1;

  .title-box {
    vertical-align: text-bottom;
    .title {
      display: inline-block;
    }
    .user-name {
      font-size: 12px;
    }
    .tag {
      vertical-align: text-bottom;
      margin-left: 15px;
      text-decoration: underline;
      // color: #000;
      cursor: pointer;
    }
  }
  .mk-btn {
    cursor: pointer;
    padding: 5px 10px;
    display: block;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid rgba(0, 0, 0, 0.24);
    font-size: 16px;
    font-weight: bold;
    opacity: 0.5;
    transition: all 0.4s ease;
    width: 73px;

    &:hover {
      opacity: 1;
    }
  }
  .hide {
    position: sticky;
    bottom: 0;
    width: 73px;
    text-align: center;
    left: 50%;
    // transform: none;
    background: #000;
    color: #eee;
  }
  .markdown-box {
    max-height: calc(@hideHeight - 33px - 20px);
  }
  .show-all {
    height: auto;
    max-height: none;
  }
  .filter_bg_box {
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
.show-all {
  height: auto;
}
</style>

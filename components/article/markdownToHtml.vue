<template>
  <div id="markdown-to-html" :class="[{'show-all':showAll}]">
    <div class="title-box">
      <h2 class="title css_flower_font_15">{{title}}</h2>
      <span class="tag" v-for="(item,index) in tags" :key="index">{{item}}</span>
    </div>
    <article :class="['markdown-box',{'show-all':showAll}]" v-html="mdText"></article>
    <div
      :class="['mk-btn','css_flower_font_8',showAll ? 'hide':'show']"
      @click="showAll = !showAll"
    >{{showAll?'CLOSE':'SHOW'}}</div>
    <div class="filter-bg-box filter_bg"></div>
  </div>
</template>
<script>
import MarkDownIt from 'markdown-it'
import api from '~/api/index.js'
import hljs from 'highlightjs'
// import 'highlightjs/styles/github.css'
// import 'highlightjs/styles/brown_paper.css'// 砂纸背景
import 'highlightjs/styles/monokai-sublime.css' // sublime 风格 dark

export default {
  props: {
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
      mdText: '',
      mdEl: null,
      showAll: false
    }
  },
  methods: {
    initHTMLText() {
      let result = this.mdEl.render(this.md)
      this.mdText = result
    }
  },
  mounted() {
    // let res = await this.$axios(api.getArticleList())
    let md = new MarkDownIt({
      // this.mdEl = new MarkDownIt({
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return `<pre class="hljs language-${lang}"><code>
              ${hljs.highlight(lang, str, true).value}
              </code></pre>`
          } catch (__) {}
        }
        return (
          '<pre class="hljs"><code>' +
          md.utils.escapeHtml(str) +
          '</code></pre>'
        )
      }
    })
    this.mdEl = md
    this.initHTMLText()
  },
  watch: {
    md() {
      this.initHTMLText()
    }
  },
  created() {}
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
    .tag {
      vertical-align: text-bottom;
      margin-left: 15px;
      text-decoration: underline;
      color: #000;
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
    transition: all 2s ease;
    max-height: calc(@hideHeight - 33px - 20px);
    overflow: hidden;
    width: 100%;
    font-weight: 500;
    .hljs {
      margin-bottom: 15px;
    }
    a {
      color: #3194d0;
      text-decoration: none;
      padding: 0 3px;
      &:hover {
        text-decoration: underline;
      }
    }
    p {
      padding: 10px 0;
      margin-bottom: 15px;
      img {
        width: 100%;
        height: auto;
        margin: 10px 0;
        margin-bottom: 15px;
      }
      > code {
        color: #c7254e;
        border-radius: 4px;
        padding: 2px 4px;
        background-color: #fff5ea;
        border: none;
        font-size: 13px;
        white-space: pre-wrap;
        vertical-align: middle;
        margin: 0 3px;
      }
    }
  }
  .show-all {
    height: auto;
    max-height: none;
  }
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
.show-all {
  height: auto;
}
</style>

<template>
  <div id="markdown-to-html" :class="[{'show-all':showAll}]">
    <h2 class="title-box">
      {{title}}
      <span class="title"></span>
    </h2>
    <article :class="['markdown-box',{'show-all':showAll}]" v-html="mdText"></article>
    <div
      :class="['mk-btn',showAll ? 'hide':'show']"
      @click="showAll = !showAll"
    >{{showAll?'CLOSE':'SHOW'}}</div>
    <div class="fliter-bg-box"></div>
  </div>
</template>
<script>
import MarkDownIt from 'markdown-it'
import api from '~/api/index.js'
import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import http from 'highlight.js/lib/languages/http'
import bash from 'highlight.js/lib/languages/bash'
import json from 'highlight.js/lib/languages/json'
import markdown from 'highlight.js/lib/languages/markdown'
import sql from 'highlight.js/lib/languages/sql'
import htmlbars from 'highlight.js/lib/languages/htmlbars'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('css', css)
hljs.registerLanguage('http', http)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('json', json)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('sql', sql)
hljs.registerLanguage('htmlbars', htmlbars)
// import 'highlightjs/styles/github.css'
// import 'highlightjs/styles/brown_paper.css'// 砂纸背景
import 'highlight.js/styles/monokai-sublime.css' // sublime 风格 dark

export default {
  props: ['title', 'md'],
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
    position: sticky;
    top: 0;
    cursor: pointer;
    background-color: #fff;
    background-image: url(~assets/img/fhw_invite/car_flower.jpg);
    background-size: cover;
    background-clip: text;
    color: transparent;
    animation: flowFlowerBK 15s infinite alternate 0s ease-in-out;
    // .title {
    // }
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
    // background-color: #d3eeff;
    background-image: url(~assets/img/fhw_invite/car_flower.jpg);
    background-position: 20px -6px;
    background-size: cover;
    background-clip: text;
    color: transparent;
    font-size: 16px;
    font-weight: bold;
    opacity: 0.5;
    transition: all 0.4s ease;
    animation: flowFlowerBK 8s infinite alternate 0s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }

  .markdown-box {
    transition: all 2s ease;
    height: calc(@hideHeight - 33px - 20px);
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
  }
  .fliter-bg-box {
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    content: '';
    filter: blur(80px);
    background: url(~assets/img/1469.jpg) 50% center / cover no-repeat fixed
      rgb(255, 255, 255);
    height: 100%;
    width: 100%;
  }
}
.show-all {
  height: auto;
}
@keyframes flowFlowerBK {
  0% {
    background-position: -118px -86px;
  }
  100% {
    background-position: -160px -6px;
  }
}
</style>

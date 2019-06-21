<template>
  <div id="markdown-to-html">
    <h2 class="title">{{title}}</h2>
    <article class="markdown-box" v-html="mdText"></article>
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
  props: ['title', 'md'],
  data() {
    return {
      mdText: '',
      mdEl: null
    }
  },
  methods: {},
  async mounted() {
    // let res = await this.$axios(api.getArticleList())
    this.mdEl = new MarkDownIt({
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
  },
  watch: {
    md() {
      let result = this.mdEl.render(res.data.result.data[0].content)
      this.mdText = result
    }
  },
  created() {}
}
</script>
<style lang="less">
.markdown-box {
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
</style>

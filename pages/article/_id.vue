<template>
  <section id="article-page" :class="[isLight?'filter_light_style':'filter_dark_style']">
    <h1 class="title">{{title}}</h1>
    <p class="author">{{user}}</p>
    <p class="tags" v-if="tags.length">
      <span>标签：</span>
      {{
      tags.join('，')
      }}
    </p>
    <div class="content markdown-box" v-html="content"></div>
    <div class="options"></div>
    <div :class="['filter_bg_box',filterBg]"></div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from '~/api/index.js'
import 'highlightjs/styles/monokai-sublime.css' // sublime 风格 dark
import { parsingMarkDown, setOssStyle } from '~/plugins/public.js'
export default {
  async asyncData({ app, error, req, store, $axios, params }) {
    const { id } = params
    let { result: res } = await $axios(api.getArticle({ id }))
    if (!res.length) {
      res.push({
        title: '该文章已被删除或者压根就没有～',
        user: '',
        tags: [],
        create_at: null,
        content: `[去首页吧！](https://oylz.site/)`
      })
    }
    let md = parsingMarkDown.render(
      setOssStyle({
        ct: res[0].content,
        type: store.getters.ossStyleName
      })
    )
    return {
      content: md,
      title: res[0].title,
      user: `-${res[0].user.username}`,
      tags: res[0].tags.map(e => e.tag),
      create_at: res[0].create_at
    }
  },
  head() {
    return {
      title: this.create_at ? this.title + '-oylz' : 'oylz',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '前端,Web前端,博客,欧阳'
        },
        {
          hid: 'description',
          name: 'description',
          content: this.title
        }
      ]
    }
  },
  computed: {
    ...mapState(['isLight']),
    ...mapGetters(['filterBg'])
  }
}
</script>

<style lang="less" scoped>
#article-page {
  min-height: calc(100vh - 55px - 60px - 65px);
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  padding: 20px;
  padding-bottom: 50px;
  z-index: 1;
  .title {
    font-size: 22px;
    display: inline-block;
  }
  .author {
    display: inline-block;
    font-size: 12px;
  }
  .tags {
    font-size: 12px;
  }
  .content {
  }
}
</style>
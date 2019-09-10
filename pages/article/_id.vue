<template>
  <section id="article-page" :class="[isLight?'filter_light_style':'filter_dark_style']">
    <div class="content markdown-box" v-html="content"></div>
    <div :class="['filter_bg_box',filterBg]"></div>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import api from '~/api/index.js'
import 'highlightjs/styles/monokai-sublime.css' // sublime 风格 dark
import { parsingMarkDown } from '~/plugins/public.js'
export default {
  async asyncData({ app, error, req, store, $axios, params }) {
    const { id } = params
    let { result: res } = await $axios(api.getArticle({ id }))
    let md = parsingMarkDown.render(res[0].content)
    return {
      content: md,
      title: res[0].title,
      user: res[0].user,
      tags: res[0].tags.map(e => e.tag),
      create_at: res[0].create_at
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
  background-color: #fff;
  position: relative;
  padding: 20px;
  padding-bottom: 50px;
  z-index: 1;
  .content {
  }
}
</style>
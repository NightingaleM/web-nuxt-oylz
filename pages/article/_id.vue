<template>
  <section id="article-page">
    <div v-html="content"></div>
  </section>
</template>

<script>
import api from '~/api/index.js'
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
  }
}
</script>

<style lang="less" scoped>
</style>
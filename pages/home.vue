<template>
  <div class="home-page">
    <markdownToHtml
      v-for="(item,index) in articleLists"
      :key="index"
      :md="item.content"
      :title="item.title"
    ></markdownToHtml>
  </div>
</template>

<script>
import markdownToHtml from '~/components/article/markdownToHtml.vue'
import api from '~/api/index.js'

export default {
  components: {
    markdownToHtml
  },
  async asyncData({ app, error, req, store, $axios }) {
    let [articleLists] = await Promise.all([$axios(api.getArticleList())])
    console.log(articleLists.data)
    return {
      total: articleLists.data.result.total,
      perPage: articleLists.data.result.perPage,
      lastPage: articleLists.data.result.lastPage,
      articleLists: articleLists.data.result.data
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
</style>

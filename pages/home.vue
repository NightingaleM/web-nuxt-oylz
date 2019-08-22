<template>
  <div class="home-page">
    <markdownToHtml
      v-for="(item,index) in articleLists"
      :key="index"
      :md="item.content"
      :title="item.title"
      :tags="item.tags.map(e=>e.tag)"
      :user="item.user"
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
    console.log('+++++++++++++++++++++++++++++++')
    console.log(articleLists)
    console.log('-----------------------------')
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
.home-page {
  padding-top: 30px;
}
</style>

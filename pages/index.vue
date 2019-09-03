<template>
  <div class="home-page">
    <markdownToHtml
      v-for="(item,index) in articleLists"
      :key="index"
      :md="item.content"
      :title="item.title"
      :tags="item.tags?item.tags.map(e=>e.tag):[]"
      :user="item.user"
    ></markdownToHtml>
  </div>
</template>

<script>
import markdownToHtml from '~/components/article/markdownToHtml.vue'
import api from '~/api/index.js'
import {
  scrollbarToWindowBottom,
  throttle,
  getCookie,
  setCookie
} from '~/plugins/public.js'
export default {
  components: {
    markdownToHtml
  },
  async asyncData({ app, error, req, store, $axios }) {
    try {
      let [articleLists] = await Promise.all([$axios(api.getArticleList())])
      return {
        page: 1,
        count: 5,
        total: articleLists.data.result.total,
        perPage: articleLists.data.result.perPage,
        lastPage: articleLists.data.result.lastPage,
        articleLists: articleLists.data.result.data
      }
    } catch (e) {
      console.log(e)
      error({ status: 404, message: '获取文章的接口嗝屁了。' })
    }
  },
  data() {
    return {}
  },
  methods: {
    async getArticleList(page, count) {
      let { data: articleRes } = await this.$axios(
        api.getArticleList({ page, count })
      )

      this.total = articleRes.result.total
      this.perPage = articleRes.result.perPage
      this.lastPage = articleRes.result.lastPage
      this.articleLists.push(...articleRes.result.data)
    }
  },
  watch: {
    async page(v) {
      await this.getArticleList(v, this.count)
    }
  },
  computed: {},
  created() {
    if (process.client) {
      let status = getCookie('oylzft')
      if (!status) {
        if (
          navigator.userAgent.match(
            /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
          )
        ) {
          location.href = '/loading.html'
        } else {
          this.$router.replace('/welcome')
        }
      }
    }
  },
  mounted() {
    window.addEventListener(
      'scroll',
      throttle(() => {
        if (scrollbarToWindowBottom() < 200) {
          this.page =
            this.page * this.count > this.total ? this.page : this.page + 1
        }
      }, 200)
    )
  },
  beforeDestroy() {
    window.removeEventListener('scroll')
  }
}
</script>

<style lang="less" scoped>
.home-page {
  padding-top: 30px;
}
</style>

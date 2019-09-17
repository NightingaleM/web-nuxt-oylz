<template>
  <div class="home-page">
    <markdownToHtml
      v-for="(item,index) in articleLists"
      :key="index"
      :md="item.content"
      :title="item.title"
      :tags="item.tags?item.tags.map(e=>e.tag):[]"
      :user="item.user"
      :id="item.id"
      :isStick="item.is_stick"
    ></markdownToHtml>
  </div>
</template>

<script>
import markdownToHtml from '~/components/article/markdownToHtml.vue'
import { parsingMarkDown } from '~/plugins/public.js'
import api from '~/api/index.js'
import {
  scrollbarToWindowBottom,
  throttle,
  getCookie,
  setCookie,
  setOssStyle
} from '~/plugins/public.js'
import { mapGetters } from 'vuex'
export default {
  components: {
    markdownToHtml
  },
  async asyncData({ app, error, req, store, $axios }) {
    try {
      let [{ result: articleLists }] = await Promise.all([
        $axios(api.getArticleList())
      ])
      return {
        page: 1,
        count: 5,
        total: articleLists.total,
        perPage: articleLists.perPage,
        lastPage: articleLists.lastPage,
        articleLists: articleLists.data.map(e => {
          e.content = parsingMarkDown.render(
            setOssStyle({
              ct: e.content,
              type: store.getters.ossStyleName
            })
          )
          return e
        })
      }
    } catch (e) {
      console.log(e)
      error({ message: e.message })
    }
  },
  head() {
    return {
      title: 'oylz'
    }
  },
  data() {
    return {}
  },
  methods: {
    changePage() {
      return throttle(() => {
        if (scrollbarToWindowBottom() < 200) {
          if (parseInt(this.page, 10) < parseInt(this.lastPage, 10)) {
            this.page = parseInt(this.page, 10) + 1
          }
        }
      }, 200)
    },
    async getArticleList(page, count) {
      let { result: articleLists } = await this.$axios(
        api.getArticleList({ page, count })
      )

      this.total = articleLists.total
      this.perPage = articleLists.perPage
      this.lastPage = articleLists.lastPage
      this.articleLists.push(
        ...articleLists.data.map(e => {
          e.content = parsingMarkDown.render(e.content)
          return e
        })
      )
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
          // location.href = '/loading.html'
        } else {
          this.$router.replace('/welcome')
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changePage())
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changePage())
  }
}
</script>

<style lang="less" scoped>
.home-page {
  padding-top: 30px;
}
</style>

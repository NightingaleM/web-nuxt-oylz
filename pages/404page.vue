<template>
  <div class="error-page">
    <h2>
      emmmm,一点意料之外的错误，不要慌，我们
      <nuxt-link href="/">回首页</nuxt-link>
    </h2>
  </div>
</template>

<script>
export default {
  components: {},
  async asyncData({ app, error, req, store, $axios }) {},
  data() {
    return {}
  },
  methods: {},
  watch: {},
  computed: {},
  created() {},
  mounted() {}
}
</script>

<style lang="less" scoped>
.error-page {
  padding-top: 30px;
}
</style>

export default {
  getArticleList: ({ tag, page, count } = {}) => {
    return {
      url: 'oy/papi/article',
      method: 'get',
      params: {
        tag, page, count
      }
    }
  },
  getArticle: ({ id }) => {
    return {
      url: `oy/papi/article/${id}`,
      method: 'get',
    }
  }
}
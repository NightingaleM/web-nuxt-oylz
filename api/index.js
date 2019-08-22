export default {
  getArticleList: ({ tag, page, count } = {}) => {
    return {
      url: 'oy/papi/article',
      method: 'get',
      params: {
        tag, page, count
      }
    }

  }
}
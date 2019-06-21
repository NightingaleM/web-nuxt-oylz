export default {
  getArticleList: ({ tag, page, count } = {}) => {
    return {
      url: 'oy/api/article',
      method: 'get',
      params: {
        tag, page, count
      }
    }

  }
}
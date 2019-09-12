export default {
  async nuxtServerInit({ commit }, { req }) {
    if (/Safari/.test(req.headers['user-agent']) && !/Chrome/.test(req.headers['user-agent'])) {
      commit('SET_USER_AGENT', 'safari')
    } else {
      commit('SET_USER_AGENT', 'chrome')
    }
  }
}





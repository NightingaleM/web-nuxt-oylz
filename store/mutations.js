export default {
  CHANGE_STYLE(state) {
    state.isLight = !state.isLight
  },
  SET_USER_AGENT(state, data) {
    state.userAgent = data
  }
}
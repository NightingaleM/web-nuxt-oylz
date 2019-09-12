export default {
  filterBg(state) {
    return `filter_bg_${state.isLight ? 'light' : 'dark'}_${state.bgIndex}`
  },
  ossStyleName(state) {
    return state.userAgent === 'chrome' ? 'smallSize' : 'iOSPng'
  }
}
export default {
  filterBg(state) {
    return `filter_bg_${state.isLight ? 'light' : 'dark'}_${state.bgIndex}`
  }
}
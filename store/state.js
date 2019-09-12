export default () => ({
  isLight: new Date().getHours() <= 19,
  bgIndex: 1,
  userAgent: 'chrome'
})

// export default {
//   isLight: true,
//   bgIndex: 1
// }
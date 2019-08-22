// 获取视窗距离页面最底部距离
export const scrollbarToWindowBottom = () => {
  const windowHeight = document.documentElement.clientHeight
  const scrollTop =
    document.documentElement.scrollTop || document.body.scrollTop
  const txtHeight = document.body.offsetHeight;
  return (txtHeight - (windowHeight + scrollTop))
}
// 节流函数
export const throttle = (fn, delay = 200) => {
  let canUse = true
  return () => {
    if (canUse) {
      canUse = false
      fn.apply(this, arguments)
      setTimeout(() => canUse = true, delay)
    } else {
    }
  }
}
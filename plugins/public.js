import MarkDownIt from 'markdown-it'
import hljs from 'highlightjs'
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
// 获取cookie
export const getCookie = c_name => {
  if (document.cookie.length > 0) { //先查询cookie是否为空，为空就return ""
    let c_start = document.cookie.indexOf(c_name + "=") //通过String对象的indexOf()来检查这个cookie是否存在，不存在就为 -1
    if (c_start != -1) {
      c_start = c_start + c_name.length + 1 //最后这个+1其实就是表示"="号啦，这样就获取到了cookie值的开始位置
      let c_end = document.cookie.indexOf(";", c_start) //其实我刚看见indexOf()第二个参数的时候猛然有点晕，后来想起来表示指定的开始索引的位置...这句是为了得到值的结束位置。因为需要考虑是否是最后一项，所以通过";"号是否存在来判断
      if (c_end == -1) c_end = document.cookie.length
      return unescape(document.cookie.substring(c_start, c_end)) //通过substring()得到了值。想了解unescape()得先知道escape()是做什么的，都是很重要的基础，想了解的可以搜索下，在文章结尾处也会进行讲解cookie编码细节
    }
  }
  return ""
}

// 设置cookie
export const setCookie = (c_name, value, expiredays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + expiredays);
  document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}
// markdown 解析

export const parsingMarkDown = new MarkDownIt({
  // this.mdEl = new MarkDownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs language-${lang}"><code>
          ${hljs.highlight(lang, str, true).value}
          </code></pre>`
      } catch (__) { }
    }
    return (
      '<pre class="hljs"><code>' +
      parsingMarkDown.utils.escapeHtml(str) +
      '</code></pre>'
    )
  }
})
// 防抖
export const debounce = (fn, delay) => {
  let timerId = null;
  return function () {
    const context = this;
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(context, arguments);
      timerId = null;
    }, delay);
  };
};
// 更换文章中图片oss规则
// TODO: 目前的图片替换是写死了的，后面有更多规则时，该方法需要改进
const OssStyleEnum = {
  0: 'smallSize',
  1: 'iOSPng',
  smallSize: 'smallSize',
  iOSPng: 'iOSPng'
}
export const setOssStyle = ({ ct, type } = { ct: '', type: 0 }) => {
  let rct = ct.replace(/smallSize/g, 'iOSPng')
  // let rct = ct.replace(/x-oss-process=style\/[a-zA-Z]+$/g, 'x-oss-process=style/iOSPng')
  return rct
}
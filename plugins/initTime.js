const initTime = (t) => {
  t = t ? t : new Date()
  let time = new Date(t)
  let format = getFormat
  let headway = getHeadway
  let navHeadWay = getOtherHeadway
  return {
    time,
    format,
    headway,
    navheadway: navHeadWay
  }
}

let getFormat = function (format = 'Y-M-D(W) H:m:s', lag = 'zh') {
  let time = this.time
  // let time = new Date()
  let formatList = format.split('')
  let initTime = ''
  for (let i = 0; i < formatList.length; i++) {
    let keyWorld = formatList[i]
    switch (keyWorld) {
      case 'Y':
        initTime += time.getFullYear()
        break;
      case 'M':
        if (time.getMonth() + 1 < 10) {
          initTime += '0' + (time.getMonth() + 1)
        } else {
          initTime += time.getMonth() + 1
        }
        break;
      case 'D':
        if (time.getDate() < 10) {
          initTime += '0' + time.getDate()
        } else {
          initTime += time.getDate()
        }
        break;
      case 'W':
        let weekList = []
        if (lag === 'zh') {
          weekList = ['日', '一', '二', '三', '四', '五', '六']
        } else {
          weekList = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']
        }
        initTime += weekList[time.getDay()]
        break;
      case 'H':
        if (time.getHours() < 10) {
          initTime += '0' + time.getHours()
        } else {
          initTime += time.getHours()
        }
        break;
      case 'm':
        if (time.getMinutes() < 10) {
          initTime += '0' + time.getMinutes()
        } else {
          initTime += time.getMinutes()
        }
        break;
      case 's':
        if (time.getSeconds() < 10) {
          initTime += '0' + time.getSeconds()
        } else {
          initTime += time.getSeconds()
        }
        break;
      default:
        initTime += keyWorld
    }
  }
  return initTime
}

let getHeadway = function (limit = 'Y', format = 'Y-M-D H:m') {
  let time = this.time.getTime()
  let nowTime = new Date().getTime()
  let isFuture = parseInt((nowTime - time) / 1000) > 0 ? false : true
  let shortfall = Math.abs(parseInt((nowTime - time) / 1000))
  let headway = ''
  // 一分钟60，一小时3600，一天86400，一周604800，一个月2592000，一年3153600
  if (shortfall < 60) {
    headway = `${isFuture ? '即将' : '刚刚'}`
  } else if (shortfall < 3600) {
    headway = `${parseInt(shortfall / 60)}分钟${isFuture ? '后' : '前'}`
  } else if (shortfall < 86400) {
    headway = `${parseInt(shortfall / 3600)}小时${isFuture ? '后' : '前'}`
  } else if (shortfall < 604800) {
    let dayNum = parseInt(shortfall / 86400)
    switch (dayNum) {
      case 1:
        headway = isFuture ? '明天' : '昨天'
        break;
      case 2:
        headway = isFuture ? '后天' : '前天'
        break;
      default:
        headway = `${this.format('M-D')}`
    }
    headway += this.format(' H:m')
  } else {
    headway = `${this.format(format)}`
  }
  return headway
}

let getOtherHeadway = function (limit = 'Y', format = 'Y-M-D H:m:s') {
  let time = this.time.getTime()
  let nowTime = new Date().getTime()
  let isFuture = parseInt((nowTime - time) / 1000) > 0 ? false : true
  let shortfall = Math.abs(parseInt((nowTime - time) / 1000))
  let headway = ''
  // 一分钟60，一小时3600，一天86400，一周604800，一个月2592000，一年3153600
  if (shortfall < 60) {
    headway = `${isFuture ? '即将' : '刚刚'}`
  } else if (shortfall < 3600) {
    headway = `${parseInt(shortfall / 60)}分钟${isFuture ? '后' : '前'}`
  } else if (shortfall < 86400) {
    headway = `${parseInt(shortfall / 3600)}小时${isFuture ? '后' : '前'}`
  } else if (shortfall < 2592000) {
    let dayNum = parseInt(shortfall / 86400)
    headway = `${dayNum}天${isFuture ? '后' : '前'}`
  } else if (shortfall < 31536000) {
    headway = limit === 'M' ? `${this.format(format)}` : `${parseInt(shortfall / 2592000)}个月${isFuture ? '后' : '前'}`
  } else {
    headway = limit === 'Y' ? `${this.format(format)}` : `${parseInt(shortfall / 31536000)}年${isFuture ? '后' : '前'}`
  }
  return headway
}
export default initTime

const w = (t) => new Date(t).getDay() // 获取星期
const d = (t) => new Date(t).getDate() // 获取日
const m = (t) => (new Date(t).getMonth() + 1) // 获取月
const y = (t) => new Date(t).getFullYear() // 获取年
const ymd = (t) => (new Date(t).getFullYear() + '-' + (new Date(t).getMonth() + 1) + '-' + new Date(t).getDate())
const ctd = 86400000
class ContribCalendar {
  constructor(t, _vue) {
    this.t = new Date(t).getTime() || new Date().getTime()
    this.contribCalendar = []
    this.dayTimes = {}
    this.beachTimes = []
    this._vue = _vue
    // this.initKey = false
  }
  initContribCalendar() {
    let t = this.t + ctd
    let holdMonth = null
    let holdWeek = []
    let j = 0
    let holdBeach = []
    for (let i = 0; i < 365; i++) {
      t -= ctd
      if (holdWeek[0] && holdWeek[0].w === 0) {
        this.beachTimes[j] = []
        // holdBeach.reverse()
        this.beachTimes[j].unshift(holdBeach)
        holdBeach = []
        holdMonth = m(t)
        this.contribCalendar.unshift({
          month: holdMonth,
          week: [...holdWeek]
        })
        holdWeek = []
        j++
      }
      let holdObj = {
        day: ymd(t),
        times: 0,
        w: w(t),
        beach: 0,
      }
      holdObj.beach = holdBeach[w(t)] = {}

      holdObj.times = this.dayTimes[ymd(t)] = {}
      holdWeek.unshift(holdObj)
    }
    this.beachTimes[j] = []

    this.beachTimes[j].unshift(holdBeach)
    holdBeach = []
    holdMonth = m(t)
    this.contribCalendar.unshift({
      month: holdMonth,
      week: [...holdWeek]
    })
    holdWeek = []
    this.initKey = true
  }
  // 必须先生成内容，再调用内容。
  // get contribCalendar() {
  //   if (this.initKey) {
  //     return this.contribCalendar
  //   } else {
  //     this.initContribCalendar()
  //     return this.contribCalendar
  //   }
  // }
  // set contribCalendar(value) {
  //   console.log(value)
  // }
  // -------------------------
  createBeach() {
    // let sand = [5]
    let sand = [4, 4, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    let sea = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    for (let i = 0; i < sand.length; i++) {
      let l = this.beachTimes[this.beachTimes.length - 2 - i][0]
      let cutNumber = 7 - l.length
      if (cutNumber) {
        for (let i = 0; i < cutNumber; i++) {
          l.push({})
        }
      }
      for (let e = sand[i]; e > 0; e--) {
        // 未浸水的沙子皆为浅黄色，只有浸了水的沙子深色，水越多色越深，在createSea中增值
        // l[7 - e].times = sand[i] - e + 1
        l[7 - e].times = 1
      }
    }
    // this.createSea(3)
  }
  createSea(deep) {
    for (let i = 0; i < this.beachTimes.length - 2; i++) {
      let l
      if (this.beachTimes[i + 1]) {
        l = this.beachTimes[i + 1][0]
      } else {
        break
      }
      // createBeach 时已经补充过了
      for (let e = deep; e > 0; e--) {
        if (!l[7 - e].times) {
          l[7 - e].times = e - (deep + 1)
        }
        if (l[7 - e].times < 0 && l[7 - e + 1] && l[7 - e + 1].times) {
          l[7 - e + 1].times = l[7 - e + 1].times - e + (deep + 1)
          // l[7 - e - 1].times = l[7 - e - 1].times - e + 4
        }
      }

    }
  }
}

export default ContribCalendar
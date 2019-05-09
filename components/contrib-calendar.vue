<template>
  <section class="contrib-calendar">
    <ol class="c-c-lists">
      <!-- <li class="c-c-li c-c-MWF">
        <span class="c-c-day"></span>
        <span class="c-c-day Sun"></span>
        <span class="c-c-day Mon">M</span>
        <span class="c-c-day Tues"></span>
        <span class="c-c-day Wed">W</span>
        <span class="c-c-day Thur"></span>
        <span class="c-c-day Fri">F</span>
        <span class="c-c-day Sat"></span>
      </li>-->
      <li class="c-c-li c-c-week" v-for="(week,idx) in contribCalendarData" :key="idx">
        <span class="c-c-day c-c-month"></span>
        <span
          :class="[
          'c-c-day',
          day.beach.times > 0 ? 'sand-'+day.beach.times:day.beach.times < 0 ? 'sea'+day.beach.times+' delay'+(idx - 15): '',
          ]"
          v-for="(day,i) in week.week"
          :key="i"
        ></span>
      </li>
    </ol>
  </section>
</template>

<script>
import ContribCalendar from '~/plugins/contribCalendar'
export default {
  data() {
    return {
      timesData: [],
      contribCalendarData: [],
      CC: null,
      beachACData: []
    }
  },
  methods: {
    // getTimesInfo() {
    //   let times = new Map()
    //   while (i < 365) {
    //   }
    // }
    // initBeach() {
    //   const h = 7
    //   const w = 53
    //   const sand = [[7, 4], [14, 3], [21, 2], [28, 1]]
    //   const initStyle = new Array(w)
    //   for (let t = 0; t < w; t++) {
    //     // 竖排
    //     initStyle[t] = [0, 0, 0, 0, 0, 0, 0]
    //     for (let i = 0; i < h; i++) {
    //       // 单个
    //       if (sand[i]) {
    //         initStyle[t][i] = 1
    //         if (
    //           typeof initStyle[t][i - 1] !== 'undefined' &&
    //           initStyle[t][i - 1] > 0
    //         ) {
    //           initStyle[t][i]++
    //         }
    //       }
    //     }
    //   }
    //   console.log(initStyle)
    // }
  },
  mounted() {
    this.CC = new ContribCalendar(new Date(), this)
    this.CC.initContribCalendar()
    this.contribCalendarData = this.CC.contribCalendar
    this.beachACData = this.CC.beachTimes
    this.CC.createBeach()
    this.CC.createSea(3)
    // setInterval(() => {
    // console.log(this.CC.beachTimes[40][0])
    // }, 5000)
    // this.initBeach()
    // this.CC.dayTimes['2018-3-30'].times = 4
    // this.getTimesInfo()
  },
  watch: {}
}
</script>

<style lang="less" scoped>
.contrib-calendar {
  width: 100%;

  .c-c-lists {
    display: flex;
    justify-content: space-between;
    .c-c-li {
      .c-c-day {
        display: block;
        margin-bottom: 1px;
        width: 15px;
        height: 15px;
        background-color: #f5ede4;
        border: 1px solid #e8e1d9;
        font-size: 12px;
        transition: all 0.5s;
      }
      .c-c-month {
        background-color: transparent;
        border: none;
      }
      .sand-1 {
        background-color: #fff0c8;
      }
      .sand-2 {
        background-color: #ffd050;
      }
      .sand-3,
      .sand-4,
      .sand-5 {
        background-color: #f0b000;
      }
      .sea-1 {
        background-color: rgb(162, 226, 255);
      }
      .sea-2 {
        background-color: rgb(113, 210, 255);
      }
      .sea-3 {
        background-color: rgb(77, 198, 255);
      }
      .sea-4 {
        background-color: rgb(10, 178, 255);
      }
      .sea-5 {
        background-color: rgb(0, 138, 202);
      }
    }
    .c-c-MWF {
      .c-c-day {
        background-color: transparent;
        font-size: 12px;
        text-align: center;
        border: none;
      }
    }
    .c-c-week {
    }
  }
}
</style>

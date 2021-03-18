<template>
  <div id="game-box" :class="[isLight?'filter_light_style':'filter_dark_style']">
    <div class="options">
      <span @click="showHelp=true">帮助</span>
      <span class="remind">{{ remindInfo }}</span>
      <span @click="restart">重新开始</span>
    </div>
    <div class="number-game-content">
      <div class="input-box">
        <div v-for="(number,index) in numbers" :key="index">{{ number === '' ? ' ' : number }}</div>
      </div>
      <div class="record-box">
        <li v-for="(record,index) in records" :key="`${record.numbers.toString()}-${index}`">
          <div>{{ record.numbers.toString() }}</div>
          <div><span v-for="status in record.result">{{ status ? '●' : '◯' }}</span></div>
        </li>
      </div>
      <div class="input-btn">
        <button class="clear" @click="clearNumbers">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-replace"></use>
          </svg>
        </button>
        <button v-for="number in numberInputs" :key="number" @click="insertNumber(number)">{{ number }}</button>
        <button class="ensure" @click="ensureNumbers">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zhengquexuanzhongqueding"></use>
          </svg>
        </button>
      </div>
    </div>
    <div :class="['filter_bg_box',filterBg]"></div>
    <div class="help-model" @click="showHelp=false" v-if="showHelp">
      <div class="help-content">
        <h3>猜密码</h3>
        <p>由0～5六个数字生成的随机密码，可能出现重复数字。依次输入你认为对的密码，确认后系统将做出判定。系统将返回全对"●"和半对"◯"的数量。</p>
        <p>●: 数字、位置都对</p>
        <p>◯: 数字对了，位置不对</p>
        <hr>
        <p>例如，正确密码为1223时，你输入2230。</p>
        <p>系统将提示 ●◯◯</p>
        <p>●和◯的顺序与输入数字的顺序无关。</p>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      showHelp: false,
      currentNumber: ['', '', '', ''],
      numbers: ['', '', '', ''],
      numberInputs: [0, 1, 2, 3, 4, 5],
      records: [],
      isAllRight: false
    }
  },
  methods: {
    restart() {
      this.makeCurrentNumber()
      this.clearNumbers()
      this.records = []
      this.isAllRight = false
    },
    clearNumbers() {
      this.numbers = ['', '', '', '']
    },
    insertNumber(number) {
      if (this.isAllRight) return
      let index = this.numbers.indexOf('')
      if (index < 0) return
      this.numbers.splice(index, 1, number)
    },
    ensureNumbers() {
      if (this.isAllRight || this.numbers.indexOf('') >= 0) return
      let record = {
        numbers: [...this.numbers],
        result: []
      }
      let trueCount = 0
      let ipn = [...this.numbers]
      let cn = [...this.currentNumber]
      for (let i = 0; i < 4; i++) {
        if (cn[i] === ipn[i]) {
          record.result.push(true)
          ipn.splice(i, 1, 'x')
          cn.splice(i, 1, 'y')
          trueCount += 1
        }
      }
      for (let i = 0; i < 4; i++) {
        let existIndex = cn.indexOf(ipn[i])
        if (existIndex < 0) continue
        ipn[i] = 'x'
        cn[existIndex] = 'y'
        record.result.push(false)
      }
      record.result = record.result.sort((a, b) => b - a)
      this.records.push(record)
      this.numbers = ['', '', '', '']
      if (trueCount === 4) {
        this.exactlyRight()
      }
    },
    exactlyRight() {
      this.isAllRight = true
      console.log('牛逼嗷，全对')
    },
    makeCurrentNumber() {
      for (let i = 0; i < 4; i++) {
        this.currentNumber.splice(i, 1, this.numberInputs[Math.floor(Math.random() * 6)])
      }
    }
  },
  mounted() {
    this.makeCurrentNumber()
  },
  computed: {
    ...mapGetters(['filterBg']),
    ...mapState(['isLight']),
    remindInfo() {
      if (!this.isAllRight && this.records.length === 7) {
        return '还做不行？下次我要报答案了。'
      }
      if (!this.isAllRight && this.records.length >= 8) {
        return this.currentNumber.toString()
      }
    }

  }
}

</script>
<style lang="less" scoped>
#game-box {
  min-height: calc(100vh - 55px - 60px - 65px);
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  padding: 40px 40px 50px 40px;
  //padding-bottom: 50px;
  z-index: 1;

  .options {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .remind {
      color: red;
    }
  }

  .number-game-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input-box {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      //margin: 0 auto;

      div {
        margin: 2px;
        border: 1px solid #ccc;
        font-size: 20px;
        text-align: center;
        width: 40px;
        height: 40px;
        line-height: 40px;
      }
    }

    .record-box {
      min-height: 34px;
      margin-top: 20px;
      width: 100%;
      border: 1px solid #ccc;
      display: grid;
      grid-template-columns: 50% 50%;

      li {
        font-size: 16px;
        padding: 2px;
        margin: 2px;
        border: 1px solid #ccc;
        display: flex;
        align-items: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }

    .input-btn {
      margin-top: 20px;
      width: 100%;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-around;

      button {
        margin: 2px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background: transparent;
        border: 1px solid #ccc;
        padding: 2px;
        font-size: 18px;
      }
    }
  }

  .help-model {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
    align-items: center;

    .help-content {
      position: absolute;
      max-width: 250px;
      background-color: rgba(255, 255, 255, 0.9);
      padding: 10px;

      hr {
        margin-bottom: 10px;
      }

      p {
        font-size: 14px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>


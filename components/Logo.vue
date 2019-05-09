<template>
  <div class="name-logo">
    <!-- <canvas id="name-canvas" height="100" width="100"></canvas> -->
    <img src="../assets/img/avatar.png" alt class="avatar">
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    drawName() {
      // let canvas = document.querySelector('#name-canvas')
      // let ctx = canvas.getContext('2d')
      // // ctx.fillStyle = 'rgb(200,0,0)'
      // // ctx.fillRect(25, 25, 100, 100) // 绘制长方形 x,y,width,height
      // // ctx.clearRect(45, 45, 60, 60) // 清除区域  x,y,width,height
      // // ctx.strokeRect(50, 50, 50, 50) // 绘制边框  x,y,width,height
      // ctx.fillStyle = 'rgb(40,134,144)'
      // ctx.beginPath()
      // ctx.moveTo(175, 150)
      // ctx.lineTo(200, 275)
      // ctx.lineTo(70, 325)
      // ctx.lineTo(170, 325)
      // ctx.fill()
      // ctx.beginPath()
      // setInterval(() => {
      //   ctx.clearRect(0, 0, 400, 400)
      //   let aa = Math.random() * 13
      //   let bb = Math.random() * 70
      //   ctx.arc(75 + aa, 75 + bb, 50, Math.PI * 1, Math.PI * 2, true) // 绘制
      //   ctx.moveTo(110, 75)
      //   ctx.arc(75 + aa, 75 + bb, 35, 0, Math.PI, false) // 口(顺时针)
      //   ctx.moveTo(65, 65)
      //   ctx.arc(60 + aa, 65 + bb, 5, 0, Math.PI * 2, true) // 左眼
      //   ctx.moveTo(95, 65)
      //   ctx.arc(90 + aa, 65 + bb, 5, 0, Math.PI * 2, true) // 右眼
      //   ctx.stroke()
      // }, 1000)
      // for (let i = 0; i < 4; i++) {
      //   for (let j = 0; j < 3; j++) {
      //     ctx.beginPath()
      //     let x = 25 + j * 50 // x 坐标值
      //     let y = 25 + i * 50 // y 坐标值
      //     let radius = 20 // 圆弧半径
      //     let startAngle = 0 // 开始点
      //     let endAngle = Math.PI + (Math.PI * j) / 2 // 结束点
      //     let anticlockwise = i % 2 == 0 ? false : true // 顺时针或逆时针
      //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise)
      //     if (i > 1) {
      //       ctx.fill()
      //     } else {
      //       ctx.stroke()
      //     }
      //   }
      // }
    }
  },
  mounted() {
    this.drawName()
  }
}
</script>


<style lang="less" scoped>
.name-logo {
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid #ccc;
  #name-canvas {
  }
  .avatar {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>


<template>
  <div id="save-pic">
    <!-- 操作区 -->
    <p class="title">操作区：</p>
    <div class="options">
      <span v-for="(item,key) in editBoxSize" :key="key">
        <span>{{key}}:</span>
        <input type="text" v-model="editBoxSize[key]">
      </span>
      <!-- <input type="text" v-model="editText.color"> -->
      <span v-for="(item,key) in editText" :key="key">
        <span>{{key}}:</span>
        <input type="text" v-model="editText[key]">
      </span>
      <button @click="savePic">make pic</button>
      <a class="save-btn" :href="saveLink" v-if="saveLink" download="图">save pic</a>
    </div>
    <div class="options">
      <ul>
        <li
          v-for="(item,idx) in picList"
          :key="idx"
          :style="item"
          @click="picIdx=idx"
          style="width: 100px;height:100%;"
        ></li>
      </ul>
    </div>
    <!-- 编辑区 -->
    <p class="title">编辑区：</p>
    <div class="edit-pic-box" :style="editBoxStyle">
      <!-- <div id="edit-box" class="edit"> -->
      <div id="edit-box" class="edit" :style="picList[picIdx]">
        <!-- <img :src="picList[Math.floor(Math.random()*4)].img" class="edit-img" alt> -->
        <div class="move-box">
          <span class="move-btn">X</span>
          <span class="center-btn">C</span>
          <div class="edit-text" contenteditable="true" :style="editText"></div>
        </div>
      </div>
    </div>
    <!-- 展示区 -->
    <p class="title">展示区：</p>
    <div class="canvas-box"></div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  mounted() {
    // let btn = document.querySelector('.move-btn')
    let target = document.querySelector('.move-box')
    let dragging = false
    let position = null
    target.addEventListener('mousedown', function(e) {
      dragging = true
      position = [e.clientX, e.clientY]
    })
    document.addEventListener('mousemove', function(e) {
      if (dragging === false) {
        return
      }
      const x = e.clientX
      const y = e.clientY
      const deltaX = x - position[0]
      const deltaY = y - position[1]
      const left = parseInt(target.style.left || 0)
      const top = parseInt(target.style.top || 0)
      target.style.left = left + deltaX + 'px'
      target.style.top = top + deltaY + 'px'
      position = [x, y]
    })
    target.addEventListener('mouseup', function(e) {
      dragging = false
    })
  },
  data() {
    return {
      picIdx: 0,
      saveLink: null,
      editBoxSize: {
        width: 500,
        height: 300
      },
      editText: {
        color: '#ccc',
        fontSize: '18px',
        fontWeight: '600'
      },
      picList: [
        {
          backgroundImage: 'url(/img/ship.jpg)',
          color: '#ccc'
          // img: '/img/pig.jpg'
        },
        {
          backgroundImage: 'url(/img/stone.jpg)',
          color: '#ffd050'
          // img: '/img/pig.jpg'
        },
        {
          backgroundImage: 'url(/img/money.png)',
          color: '#f0b000'
          // img: '/img/pig.jpg'
        },
        {
          backgroundImage: 'url(/img/pig.jpg)',
          color: '#fff0c8'
          // img: '/img/pig.jpg'
        }
      ]
    }
  },
  computed: {
    editBoxStyle() {
      return {
        width: this.editBoxSize.width + 'px',
        height: this.editBoxSize.height + 'px'
      }
    }
  },
  methods: {
    savePic() {
      let _this = this
      html2canvas(document.querySelector('#edit-box')).then(canvas => {
        if (document.querySelector('.canvas-box').children[0]) {
          document
            .querySelector('.canvas-box')
            .removeChild(document.querySelector('.canvas-box').children[0])
        }
        document.querySelector('.canvas-box').appendChild(canvas)
        let imgData = canvas.toDataURL('pig/jpg')
        _this.saveLink = imgData
      })
    }
  }
}
</script>

<style scoped>
#save-pic {
  user-select: none;
}
.title {
  margin-bottom: 10px;
  margin-top: 10px;
}
.edit-pic-box {
  width: 400px;
  height: 200px;
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
}
.edit {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
}
.edit-text {
  text-align: center;
  width: 100%;
  height: 100%;
}
/* .edit-img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
} */
.options {
  display: flex;
  min-height: 40px;
}
.options > span {
  margin-right: 10px;
  width: 80px;
}
.options span input {
  width: 100%;
}
.options button {
  border: none;
  background: yellowgreen;
  color: #000;
  padding: 0 5px;
  font-weight: 600;
}
.save-btn {
  text-decoration: none;
  border: none;
  background: thistle;
  color: #fff;
  padding: 0 5px;
  font-weight: 600;
  line-height: 40px;
  margin-left: 10px;
}
.options ul {
  display: flex;
}
.options ul li {
  background-position: center;
  background-size: cover;
}
.move-box {
  padding: 5px;
  padding-top: 20px;
  position: absolute;
  /* top: 100px; */
  /* left: 250px; */
  /* transform: translate(-100px, -250px); */
  min-height: 30px;
  z-index: 6;
  width: 80%;
}

.move-btn,
.center-btn {
  position: absolute;
  display: none;
  background-color: black;
  color: #fff;
  width: 14px;
  height: 14px;
  cursor: pointer;
  top: -10px;
  text-align: center;
  line-height: 14px;
  font-size: 12px;
}
.center-btn {
  left: 30px;
}
.move-box:hover {
  border: 1px double #fff;
}
.move-box:hover .move-btn,
.move-box:hover .center-btn,
.move-btn:hover,
.center-btn:hover {
  display: inline-block;
}

.canvas-box {
  display: flex;
  justify-content: center;
}
</style>

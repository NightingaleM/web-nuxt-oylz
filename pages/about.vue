<template>
  <div id="about" :class="[isLight?'filter_light_style':'filter_dark_style']">
    <h2>关于本站</h2>
    <p>
      纯粹的个人爱好写的这个网站，脑子里想法一堆，实际上写出来——“就这玩意儿？”。
      <br />接触到的新技术新玩意儿的试验地。所以建议在
      <a
        class="normal_a"
        href="https://www.google.cn/chrome/index.html"
      >Chrome浏览器</a> 上看本网站。不然不是卡就是炸…
    </p>
    <h3>技术：</h3>
    <p>
      这就是个基于vue(Nuxt)开发的服务端渲染的，网站。前后端代码都在
      <a
        class="normal_a"
        href="https://github.com/NightingaleM"
      >github</a>上。除了密码…
    </p>
    <p v-for="(item,index) in technology" :key="index">
      <span>{{item.t}}:</span>
      {{item.s.join('，')}}
    </p>
    <h3>作者：</h3>
    <p>
      oylz，95年，的人。
      <span class="nop">落魄的</span>web前端开发，现居广东深圳。
      <br />
    </p>
    <h4>参考网站：</h4>
    <a
      class="reference-link normal_a"
      :href="item.link"
      v-for="(item,index) in reference"
      :key="index"
    >{{item.title}}</a>
    <div :class="['filter_bg_box',filterBg]"></div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  asyncData() {
    return {
      technology: [
        {
          t: '前端',
          s: ['Vue', 'Less', 'Nuxt']
        },
        {
          t: '后端',
          s: ['Node.js', 'adonisjs', 'Mysql']
        }
      ],
      reference: [
        {
          link: 'https://career.ifeng.com/',
          title: '凤凰网招聘页'
        },
        {
          link: 'https://www.alimama.com/index.htm',
          title: '阿里妈妈'
        }
      ]
    }
  },
  head() {
    return {
      title: 'oylz-关于本站'
    }
  },
  computed: {
    ...mapState(['isLight']),
    ...mapGetters(['filterBg'])
  }
}
</script>

<style lang="less" scoped>
#about {
  min-height: calc(100vh - 55px - 60px - 65px);
  margin-bottom: 30px;
  margin-top: 30px;
  position: relative;
  padding: 40px;
  padding-bottom: 50px;
  z-index: 1;
  h2 {
    margin-bottom: 10px;
  }
  h3,
  h4 {
    margin-top: 20px;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  .nop {
    color: rgb(146, 146, 146);
    text-decoration: line-through red;
  }
  .reference-link {
    display: block;
    font-size: 12px;
  }
}
</style>
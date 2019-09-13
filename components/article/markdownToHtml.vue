<template>
  <div
    id="markdown-to-html"
    :class="[isLight?'filter_light_style':'filter_dark_style',{'show-all':showAll}]"
  >
    <div class="title-box">
      <nuxt-link :to="'/article/'+id">
        <h2 class="title css_flower_font_15">
          <span class="stick" v-if="isStick">置顶</span>
          {{title}}
        </h2>
      </nuxt-link>
      <span class="user-name">- {{user.username}}</span>
      <span class="tag" v-for="(item,index) in tags" :key="index">{{item}}</span>
    </div>
    <article :class="['markdown-box',{'show-all':showAll}]" v-html="md"></article>
    <!-- <div
      :class="['mk-btn','css_flower_font_8',showAll ? 'hide':'show']"
      @click="showAll = !showAll"
    >{{showAll?'CLOSE':'SHOW'}}</div>-->
    <ShowCloseBtn :id="id" type="article"></ShowCloseBtn>
    <div :class="['filter_bg_box',filterBg]"></div>
  </div>
</template>
<script>
import ShowCloseBtn from '~/components/public/show_close_btn.vue'
import { mapState, mapGetters } from 'vuex'
import api from '~/api/index.js'
import { parsingMarkDown } from '~/plugins/public.js'
// import 'highlightjs/styles/github.css'
// import 'highlightjs/styles/brown_paper.css' // 砂纸背景
import 'highlightjs/styles/monokai-sublime.css' // sublime 风格 dark

export default {
  components: {
    ShowCloseBtn
  },
  props: {
    id: {
      type: Number
    },
    user: {
      type: Object
    },
    title: {
      type: String
    },
    md: {
      type: String
    },
    tags: {
      type: Array
    },
    isStick: {
      type: Number,
      default: false
    }
  },
  data() {
    return {
      mdEl: null,
      showAll: false
    }
  },
  computed: {
    ...mapState(['isLight']),
    ...mapGetters(['filterBg'])
  }
}
</script>
<style lang="less">
// 隐藏时的高度
@hideHeight: 300px;

#markdown-to-html {
  margin-bottom: 30px;
  background-color: #fff;
  position: relative;
  padding: 20px;
  padding-bottom: 50px;
  z-index: 1;

  .title-box {
    vertical-align: text-bottom;
    .title {
      display: inline-block;
      .stick {
        font-size: 12px;
        border: 1px solid #ccc;
      }
    }
    .user-name {
      font-size: 12px;
    }
    .tag {
      vertical-align: text-bottom;
      margin-left: 15px;
      text-decoration: underline;
      // color: #000;
      cursor: pointer;
    }
  }
  .markdown-box {
    max-height: calc(@hideHeight - 33px - 20px);
  }
  .show-all {
    height: auto;
    max-height: none;
  }
}
.show-all {
  height: auto;
}
</style>

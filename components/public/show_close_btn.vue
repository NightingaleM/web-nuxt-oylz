<template>
  <nuxt-link
    :to="link"
    :class="['mk-btn','css_flower_font_8',isShow ? 'show':'hide']"
  >{{isShow?'SHOW':'CLOSE'}}</nuxt-link>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: true
    },
    id: {
      type: Number,
      required: false
    },
    type: {
      type: String,
      default: 'article',
      validator: function(value) {
        // 这个值必须匹配下列字符串中的一个
        return ['article', '/'].indexOf(value) !== -1
      }
    }
  },
  computed: {
    link() {
      if (this.type === '/') {
        return '/'
      } else {
        return `/${this.type ? this.type : ''}${this.id ? '/' + this.id : ''}`
      }
    }
  }
}
</script>

<style lang="less" scoped>
.mk-btn {
  cursor: pointer;
  padding: 5px 10px;
  display: block;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid rgba(0, 0, 0, 0.24);
  font-size: 16px;
  font-weight: bold;
  opacity: 0.5;
  transition: all 0.4s ease;
  width: 73px;

  &:hover {
    opacity: 1;
  }
}
.hide {
  position: sticky;
  bottom: 0;
  width: 73px;
  text-align: center;
  left: 50%;
  // transform: none;
  background: #000 !important;
  color: #eee !important;
  animation: none !important;
}
</style>
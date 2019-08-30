<template>
  <div class="home-layout filter_bg" hidden>
    <div class="error-page">
      <pre>
emmmm,
    一点意料之外的错误，
  不要慌，
    <nuxt-link to="/">回首页</nuxt-link>。
      </pre>
      <p class="check" @mouseenter="showError=true" @mouseout="showError=false">什么毛病?</p>
      <p class="check-box" v-if="showError">{{error.status}}-{{error.message}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showError: false
    }
  },
  props: ['error'],
  mounted() {
    this.$el.removeAttribute('hidden')
  }
}
</script>


<style scoped>
.home-layout {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: 0;
  padding-bottom: 200px;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home-paper {
  border: 1px solid #e0e8d900;
  background-color: #e4f5e800;
  margin: 0 auto;
}
.error-page {
  position: relative;
  font-size: 16px;
  font-weight: bold;
}
a {
  color: #000;
  text-decoration: none;
  border-bottom: 1px dashed;
}
.check {
  font-size: 12px;
  margin-top: 40px;
  border-bottom: 1px dashed;
  display: inline-block;
  cursor: pointer;
}
.check-box {
  position: absolute;
  margin-top: 20px;
  font-size: 14px;
  border: 1px dashed;
}
</style>

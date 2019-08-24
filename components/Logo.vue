<template>
  <div class="name-logo">
    <span class="o"></span>
    <!-- <img src="../assets/img/avatar.png" alt class="avatar"> -->
    <span class="y">Y</span>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {},
  mounted() {}
}
</script>


<style lang="less" scoped>
.name-logo {
  display: flex;
  align-items: center;
  .avatar {
    margin-right: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  .o {
    display: block;
    background-image: url('//oss.oylz.site/avatar.png');
    background-position: center;
    background-size: cover;
    font-size: 44.5px;
    line-height: 40px;
    font-weight: bolder;
    width: 30px;
    height: 40px;
    border: 5px solid #000;
    border-radius: 100%;
    box-sizing: content-box;
  }
  .y {
    font-size: 50px;
    display: block;
    text-align: center;
    width: 40px;
    height: 50px;
    line-height: 50px;
    font-weight: bolder;
  }
}
</style>


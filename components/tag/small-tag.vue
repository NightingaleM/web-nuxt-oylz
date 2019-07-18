<template>
  <div class="component-tag">{{tag}}</div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>
.component-tag {
  vertical-align: text-bottom;
  text-decoration: underline;
  color: #000;
  cursor: pointer;
}
</style>

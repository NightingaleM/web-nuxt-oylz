<template>
  <section class>
    <!-- <Logo></Logo> -->
    <!-- <contribCalendar></contribCalendar> -->
    <savePic></savePic>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
// import contribCalendar from '~/components/contrib-calendar.vue'
import savePic from '~/components/savePic.vue'
export default {
  components: {
    // Logo,
    // contribCalendar,
    savePic
  }
}
</script>

<style lang="less" scoped>
.container {
  color: #dafc;
  p {
    color: #ccaaff;
  }
}
</style>

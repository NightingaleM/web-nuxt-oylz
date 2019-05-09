<template>
  <div class="home-layout">
    <section class="home-paper">
      <nuxt/>
    </section>
  </div>
</template>


<style scoped>
.home-layout {
  width: 100vw;
  min-height: 100vh;
  background-image: url(~assets/img/Group.png);
  background-repeat: repeat;
  background-color: #f2eee9;
  padding: 0 10px;
  padding-top: 100px;
  padding-bottom: 200px;
}
.home-paper {
  border: 1px solid #e8e1d9;
  margin: 0 auto;
  background-color: #f5ede4;
  padding: 20px;
}
@media (max-width: 1000px) {
  .home-layout {
    padding-top: 20px;
    padding-bottom: 20px;
  }
  .home-paper {
    width: calc(100vw - 20px);
  }
}
@media (min-width: 1000px) {
  .home-layout {
    padding-top: 100px;
    padding-bottom: 200px;
  }
  .home-paper {
    width: 1000px;
  }
}
</style>

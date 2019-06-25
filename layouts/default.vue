<template>
  <div class="home-layout">
    <section class="home-paper">
      <nuxt/>
    </section>
  </div>
</template>


<style scoped>
.home-layout {
  width: 100%;
  min-height: 100vh;
  background-image: url(~assets/img/1469.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-color: #000; */
  /* background: radial-gradient(
    ellipse farthest-corner at 50% 0,
    #dbf5f1 0%,
    #9be4d8 100%
  ); */
  padding: 0 10px;
  padding-top: 100px;
  padding-bottom: 200px;
  background-attachment: fixed;
}
.home-paper {
  /* border: 1px solid #e8e1d9;
  background-color: #f5ede4; */
  border: 1px solid #e0e8d900;
  background-color: #e4f5e800;
  margin: 0 auto;
  /* padding: 20px; */
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

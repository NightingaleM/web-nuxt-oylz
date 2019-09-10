<template>
  <section class="default-footer">
    <div class="info">
      <pre class="bullshit">
世上无难事，只<span class="nop">要你放弃</span>怕有心人
      </pre>
      <div class="other">
        <nuxt-link class="about" to="/about">关于本站</nuxt-link>
        <div class="friends">
          友情链接：
          <a
            target="_blank"
            :href="item.link"
            v-for="item in friendLinks"
            :key="item.link"
          >{{item.name}}</a>
        </div>
      </div>
    </div>
    <div :class="['filter_bg_box',filterBg]"></div>
    <div class="bubble"></div>
  </section>
</template>


<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      friendLinks: [
        {
          link: 'https://happysooner.com',
          name: '远浅'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['filterBg'])
  }
}
</script>
<style lang="less" scoped>
.default-footer {
  // height: 90px;
  padding: 10px 10px;
  background-color: rgb(255, 255, 255);
  width: 100%;
  position: relative;
  z-index: 5;
  .info {
    margin: 0 auto;
    max-width: 1000px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    .bullshit {
      color: #555;
      font-weight: bold;
      .nop {
        color: #333;
        font-size: 12px;
        text-decoration: line-through red;
      }
    }
    .other {
      a {
        font-size: 14px;
        color: #333;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.default-footer {
  &:hover {
    .bubble {
      animation: 5s bubble-up ease 1;
    }
  }
  .bubble {
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 10px;
    height: 10px;
    background: #ffffff00;
    color: #ffffff00;
    box-shadow: 10em 3em 0 0.01em, 20em 5em 0 0.01em, 30em 4em 0 0.01em,
      40em 4em 0 0.01em, 12em 4em 0 0.01em, 17em 4em 0 0.01em, 25em 5em 0 0.01em,
      37em 3em 0 0.01em, -10em 3em 0 0.01em, -20em 4em 0 0.01em,
      -30em 5em 0 0.01em, -40em 4em 0 0.01em, -12em 4em 0 0.01em,
      -17em 5em 0 0.01em, -25em 3em 0 0.01em, -37em 3em 0 0.01em,
      10em 3em 0 0.01em, 20em 5em 0 0.01em, 30em 4em 0 0.01em, 40em 4em 0 0.01em,
      17em 3em 0 0.01em, 17em 5em 0 0.01em, 25em 5em 0 0.01em, 37em 4em 0 0.01em,
      -11em 3em 0 0.01em, -20em 4em 0 0.01em, -30em 5em 0 0.01em,
      -40em 3em 0 0.01em, -15em 3em 0 0.01em, -17em 3em 0 0.01em,
      -25em 3em 0 0.01em, -37em 3em 0 0.01em, -11em 5em 0 0.01em,
      10.6em 4em 0 0.01em, 12.5em 4em 0 0.01em, 13.6em 5em 0 0.01em,
      -5em 5em 0 0.01em, -6em 5em 0 0.01em, -7.4em 4em 0 0.01em,
      -9.2em 4em 0 0.01em, 5em 4em 0 0.01em, 6em 5em 0 0.01em,
      7.4em 4em 0 0.01em, 9.2em 3em 0 0.01em, 1em 4em 0 0.01em, 2em 3em 0 0.01em,
      4em 3em 0 0.01em, 3.2em 3em 0 0.01em, -1em 3em 0 0.01em, -2em 3em 0 0.01em,
      -4em 5em 0 0.01em, -3.2em 4em 0 0.01em;
    border-radius: 50%;
  }
  @keyframes bubble-up {
    5% {
      background: #8ca7ff81;
      color: #8ca7ff81;
    }
    90% {
      background: #bbcbff4f;
      color: #bbcbff4f;
      box-shadow: 10em -11em 0 0.01em, 20em -17em 0 0.01em, 30em -20em 0 0.01em,
        40em -30em 0 0.01em, 12em -12em 0 0.01em, 17em -5em 0 0.01em,
        25em -16em 0 0.01em, 37em -22em 0 0.01em, -10em -32em 0 0.01em,
        -20em -12em 0 0.01em, -30em -11em 0 0.01em, -40em -13em 0 0.01em,
        -12em -15em 0 0.01em, -17em -9em 0 0.01em, -25em -14em 0 0.01em,
        -37em -21em 0 0.01em, 10em -17em 0 0.01em, 20em -21em 0 0.01em,
        30em -11em 0 0.01em, 40em -19em 0 0.01em, 17em -23em 0 0.01em,
        17em -10em 0 0.01em, 25em -14.5em 0 0.01em, 37em -12.9em 0 0.01em,
        -11em -21.3em 0 0.01em, -20em -22.4em 0 0.01em, -30em -15.3em 0 0.01em,
        -40em -19.2em 0 0.01em, -15em -21.3em 0 0.01em, -17em -22.4em 0 0.01em,
        -25em -10.3em 0 0.01em, -37em -9.3em 0 0.01em, -11em -22.4em 0 0.01em,
        10.6em -20.4em 0 0.01em, 12.5em -6.9em 0 0.01em, 13.6em -8.3em 0 0.01em,
        -5em -21.4em 0 0.01em, -6em -13em 0 0.01em, -7.4em -15em 0 0.01em,
        -9.2em -22em 0 0.01em, 5em -30em 0 0.01em, 6em -24em 0 0.01em,
        7.4em -11em 0 0.01em, 9.2em -9.4em 0 0.01em, 1em -22em 0 0.01em,
        2em -14em 0 0.01em, 4em -21em 0 0.01em, 3.2em -16em 0 0.01em,
        -1em -21em 0 0.01em, -2em -19em 0 0.01em, -4em -17em 0 0.01em,
        -3.2em -15em 0 0.01em;
      bottom: 200px;
      opacity: 0;
    }
    100% {
      background: #bbcbff4f;
      color: #bbcbff4f;
      box-shadow: 10em -11em 0 0.01em, 20em -17em 0 0.01em, 30em -20em 0 0.01em,
        40em -30em 0 0.01em, 12em -12em 0 0.01em, 17em -5em 0 0.01em,
        25em -16em 0 0.01em, 37em -22em 0 0.01em, -10em -32em 0 0.01em,
        -20em -12em 0 0.01em, -30em -11em 0 0.01em, -40em -13em 0 0.01em,
        -12em -15em 0 0.01em, -17em -9em 0 0.01em, -25em -14em 0 0.01em,
        -37em -21em 0 0.01em, 10em -17em 0 0.01em, 20em -21em 0 0.01em,
        30em -11em 0 0.01em, 40em -19em 0 0.01em, 17em -23em 0 0.01em,
        17em -10em 0 0.01em, 25em -14.5em 0 0.01em, 37em -12.9em 0 0.01em,
        -11em -21.3em 0 0.01em, -20em -22.4em 0 0.01em, -30em -15.3em 0 0.01em,
        -40em -19.2em 0 0.01em, -15em -21.3em 0 0.01em, -17em -22.4em 0 0.01em,
        -25em -10.3em 0 0.01em, -37em -9.3em 0 0.01em, -11em -22.4em 0 0.01em,
        10.6em -20.4em 0 0.01em, 12.5em -6.9em 0 0.01em, 13.6em -8.3em 0 0.01em,
        -5em -21.4em 0 0.01em, -6em -13em 0 0.01em, -7.4em -15em 0 0.01em,
        -9.2em -22em 0 0.01em, 5em -30em 0 0.01em, 6em -24em 0 0.01em,
        7.4em -11em 0 0.01em, 9.2em -9.4em 0 0.01em, 1em -22em 0 0.01em,
        2em -14em 0 0.01em, 4em -21em 0 0.01em, 3.2em -16em 0 0.01em,
        -1em -21em 0 0.01em, -2em -19em 0 0.01em, -4em -17em 0 0.01em,
        -3.2em -15em 0 0.01em;
      bottom: 200px;
      opacity: 0;
    }
  }
}
</style>
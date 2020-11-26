<template>
  <div class>
    <h4 v-if="connected">已链接</h4>
    <input type="text" v-model="name" />
    <textarea cols="30" rows="10" v-model="textaraea"></textarea>
    <button @click="sendM">发送</button>
    <ul>
      <li v-for="(item,index) in message" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import Ws from '@adonisjs/websocket-client' // <====就是这句
export default {
  data() {
    return {
      Ws: null,
      name: '',
      chatWs: null,
      message: [],
      connected: false,
      textaraea: ''
    }
  },
  created() {
    console.log('created-----------------------')
  },
  methods: {
    sendM() {
      this.chatWs.emit('message', {
        name: this.name || 'faker',
        message: this.textaraea
      })
    },
    subscribeToChannel() {
      this.chatWs = this.Ws.subscribe('chat:news')
      this.chatWs.on('error', () => {
        this.connected = false
      })

      this.chatWs.on('message', message => {
        console.log(this.chatWs)
        this.message.push({
          message
        })
      })

      this.chatWs.on('new:user', e => {
        console.log('-----------------')
        console.log(e)
        console.log('new guy')
        console.log('-----------------')
      })

      this.chatWs.on('close:otherUser', e => {
        console.log('-----------------')
        console.log(e)
        console.log('some one leave  TAT~~~~~~')
        console.log('-----------------')
      })
    }
  },
  mounted() {
    this.Ws = Ws('ws://localhost:2222')
    this.Ws.connect()
    this.Ws.on('open', () => {
      this.connected = true
      this.subscribeToChannel()
    })

    this.Ws.on('error', () => {
      this.connected = false
    })
  },
  async beforeDestroy() {
    this.Ws.close()
    this.chatWs.on('close', e => {
      console.log('=====close=====')
      console.log(e)
      console.log('===============')
    })
  }
}
</script>

<style>
</style>

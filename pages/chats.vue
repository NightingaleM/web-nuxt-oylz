<template>
  <div id="chat">
    <client-only>
      <Chat />嘎嘎
    </client-only>
  </div>
</template>

<script>
import Chat from '~/components/public/chat.vue'

export default {
  components: {
    Chat
  },
  mounted() {}
}
</script>

<style>
</style>

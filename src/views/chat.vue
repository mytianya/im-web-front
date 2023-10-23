<script lang="ts" setup>
import { ref } from 'vue'
const msgId=ref('0')
let websocket=new WebSocket("ws://localhost:9000/ws")
websocket.onopen=function(){

}
</script>

<template>
  <div>{{msgId}}</div>
</template>

<style scoped></style>

<script lang="ts" setup>
import { ref } from 'vue'
const msgId=ref('0')
var websocket;
const wsOpen=()=>{
  console.log("ws open")
}
onMounted(()=>{
  websocket=new WebSocket("ws://localhost:9000/ws")
  websocket.onopen=wsOpen()
})
</script>

<template>
  <div>{{msgId}}</div>
</template>

<style scoped></style>

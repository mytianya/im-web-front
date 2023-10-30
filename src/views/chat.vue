<script setup>
import { ref, onMounted } from 'vue'
const msgId = ref('0')
var ws;
var fromuid='dsys'
const wsOpen = () => {
  console.log("ws open")
  ws.binaryType = "arraybuffer";
  var msg = new proto.Msg();
  var head = new proto.Head();
  head.setMsgtype(1004);
  head.setMsgid(1000000);
  head.setFromuid(fromuid);
  head.setTimestamp(new Date().getTime())
  msg.setHead(head);
  msg.setBody(
    '{"clientType":"user","clientSecret":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRzeXMiLCJleHAiOjE2OTc4ODg1ODJ9.nnYGM91C-lssB4Cfe_ivkibJlRJztbNCFcOOG7Xyf5A"}'
  );
  console.log(msg.serializeBinary())
  // Web Socket 已连接上，使用 send() 方法发送数据
  ws.send(msg.serializeBinary());
}

onMounted(() => {
  ws = new WebSocket("ws://localhost:8000/ws")
  ws.onopen = wsOpen
})
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
#canvas{
  width: 300px;
  height: 200px;
}
</style>

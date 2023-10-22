<script>
import { ref } from 'vue'
import { onMounted, onUpdated, onUnmounted } from 'vue'
import {id} from '@/api/id.js'
export default {
  setup() {
    const msgId=ref('0')
    onMounted(() => {
      id().then((res)=>{
          msgId.value=res;
      })
    })
    return {
      msgId
    }
  },

}
</script>

<template>
  <div>{{msgId}}</div>
</template>

<style scoped></style>

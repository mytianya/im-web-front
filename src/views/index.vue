<script setup lang="ts">
import {useUserStore} from '@/stores'
const userStore=useUserStore();
console.log(userStore.message)
setInterval(()=>{
    userStore.$patch({
        message:'hello'+new Date().toLocaleString()
    })
},1000)
</script>

<template>
  <div>
    <p>{{userStore.message}}</p>
    <p>{{userStore.refreshToken}}</p>
  </div>
</template>

<style scoped>
</style>

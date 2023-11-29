<template>
    <div>
        <audio :src="src" controls ref="audioref"></audio>
    </div>
</template>
    
<script lang="ts" setup>
import { nextTick,ref } from 'vue';
const audioref=ref(null)
console.log(audioref)
const src="http://127.0.0.1:8888/v1/music/audioSource/561"
nextTick(()=>{
    console.log(audioref)
})
</script>
    
<style scoped></style>
    
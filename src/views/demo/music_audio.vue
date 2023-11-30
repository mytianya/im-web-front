<template>
    <div class="audio-wrapper">
        <el-icon :size="40" color="white"><CaretLeft/></el-icon>
        <el-icon :size="40" color="white" @click="play"><VideoPlay /></el-icon>
        <el-icon :size="40" color="white"><CaretRight /></el-icon>
        <audio :src="audioUrl"  ref="audioEL" controls></audio>
    </div>
</template>
    
<script lang="ts">

import { nextTick, ref } from 'vue';
export default {
    name:"auido-player",
    props: {
        audioUrl: {
            type: String,
            default: "http://127.0.0.1:8888/v1/music/audioSource/746",
            required: true,
        },
    },
    setup(props) {
        const audioEL = ref(null)
        console.log(audioEL)
        console.log(props)
        nextTick(() => {
            console.log(audioEL)
        })
        const play=()=>{
            console.log(audioEL)
            console.log(audioEL.value.play())
        }
        const setCurrentTime=(currentTime)=>{
            audioEL.value.currentTime =currentTime
        }
        return { audioEL,play,setCurrentTime }
    },
}

</script>
    
<style scoped type="scss">
.audio-wrapper{
    background-color: brown;
    min-height: 40px;
}
</style>
    
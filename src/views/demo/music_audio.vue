<template>
    <div class="audio-wrapper">
        <el-icon :size="40" color="white">
            <CaretLeft />
        </el-icon>
        <el-icon :size="40" color="white" @click="play">
            <VideoPlay />
        </el-icon>
        <el-icon :size="40" color="white">
            <CaretRight />
        </el-icon>
        <audio :src="audioUrl" ref="audioEL" controls></audio>
    </div>
</template>
    
<script lang="ts">

import { nextTick, onMounted, ref,toRefs } from 'vue';
export default {
    name: "auido-player",
    props: {
        audioUrl: {
            type: String,
            default: "http://127.0.0.1:8888/v1/music/audioSource/746",
            required: true,
        },
        playStat: {
            type:Object,
            default:{
                duration: 0,
                loadedTime: 0,
                playedTime: 0,
            }
        },
    },
    setup(props) {
        const audioEL = ref(null)
        const {playStat}=toRefs(props)
        nextTick(() => {
            initAudio()
        })
        const play = () => {
            console.log(audioEL.value.play())
        }
        const setCurrentTime = (currentTime) => {
            audioEL.value.currentTime = currentTime
        }
        const onAudioDurationChange = () => {
            playStat.value.duration = audioEL.value.duration
            console.log(audioEL.value.duration)
            console.log(playStat)
        }
        const onAudioProgress = () => {
            if (audioEL.value.buffered.length) {
                playStat.loadedTime = audioEL.value.buffered.end(audioEL.value.buffered.length - 1)
            } else {
                playStat.loadedTime = 0
            }
            console.log(playStat)
        }
        const initAudio = () => {
            console.log(audioEL.value)
            audioEL.value.addEventListener("durationchange", onAudioDurationChange);
            audioEL.value.addEventListener('progress', onAudioProgress)

        }
        onMounted(() => {
            console.log(audioEL)
        })
        return { audioEL, play, setCurrentTime }
    },
}

</script>
    
<style scoped type="scss">
.audio-wrapper {
    background-color: brown;
    min-height: 40px;
}
</style>
    
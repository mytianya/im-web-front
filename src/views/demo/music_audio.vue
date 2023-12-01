<template>
    <div class="audio-wrapper">
        <el-row class="audio-wrapper-order">
            <el-col :span="3">
                <el-icon :size="40" color="white">
                    <CaretLeft />
                </el-icon>
                <el-icon :size="40" color="white" @click="pause" v-if="isPlaying">
                    <VideoPause />
                </el-icon>
                <el-icon :size="40" color="white" v-else @click="play">
                    <VideoPlay />
                </el-icon>
                <el-icon :size="40" color="white">
                    <CaretRight />
                </el-icon>
            </el-col>
            <el-col :span="12">
                <div class="a-wrapper">
                    <div class="a-bar">
                        <div class="a-loaded" :style="{width: `${loadProgress * 100}%`}"></div>
                        <div class="a-played" :style="{width: `${playProgress * 100}%`}">
                            <span class="a-load-icon">
                                <!-- <span class="a-loading-icon">
                                </span> -->
                            </span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <audio :src="audioUrl" ref="audioEL" controls></audio>
    </div>
</template>
    
<script lang="ts">

import { onMounted, ref, toRefs, computed } from 'vue';
export default {
    name: "auido-player",
    props: {
        audioUrl: {
            type: String,
            default: "http://127.0.0.1:8888/v1/music/audioSource/746",
            required: true,
        },
        playStat: {
            type: Object,
            default: {
                duration: 1,
                loadedTime: 0,
                playedTime: 0,
            }
        },
    },
    setup(props) {
        const audioEL = ref(null)
        const isPlaying = ref(false)
        const { playStat } = toRefs(props)
        const play = () => {
            audioEL.value.play()
            console.log("play...........")
            isPlaying.value = true;
        }
        const pause = () => {
            audioEL.value.pause();
            console.log("pause...........")
            isPlaying.value = false;
        }
        const setCurrentTime = (currentTime) => {
            audioEL.value.currentTime = currentTime
        }
        const onAudioDurationChange = () => {
            playStat.value.duration = audioEL.value.duration
        }
        const onAudioProgress = () => {
            console.log("onAudioProgress........")
            if (audioEL.value.buffered.length) {
                playStat.value.loadedTime = audioEL.value.buffered.end(audioEL.value.buffered.length - 1)
            } else {
                playStat.value.loadedTime = 0
            }
        }
        const onAudioTimeUpdate = () => {
            playStat.value.playedTime = audioEL.value.currentTime
        }
        const initAudio = () => {
            console.log(audioEL)
            audioEL.value.addEventListener("durationchange", onAudioDurationChange);
            audioEL.value.addEventListener('progress', onAudioProgress)
            audioEL.value.addEventListener('timeupdate', onAudioTimeUpdate)
        }
        onMounted(() => {
            initAudio()
        })
        const loadProgress=computed(()=>{
            console.log(playStat.value.loadedTime / playStat.value.duration)
            return playStat.value.loadedTime / playStat.value.duration
        })
        const playProgress=computed(()=>{
            console.log(playStat.value.playedTime / playStat.value.duration)
            return playStat.value.playedTime / playStat.value.duration

        })
        return { audioEL,isPlaying, play, pause, setCurrentTime,loadProgress,playProgress}
    },
}

</script>
    
<style scoped type="scss">
.audio-wrapper {
    background-color: brown;
    min-height: 40px;

    .audio-wrapper-order {
        align-items: center;

        .a-wrapper {
            flex: 1;

            .a-bar {
                position: relative;
                height: 2px;
                width: 100%;
                background: #cdcdcd;

                .a-loaded {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    background: #aaa;
                    height: 2px;
                    transition: all 0.5s ease;
                }

                .a-played {
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    height: 2px;
                    transition: background-color .3s;
                    will-change: width;
                    background: red;
                }

                .a-load-icon {
                    position: absolute;
                    top: 0;
                    margin-top: -5px;
                    margin-right: -10px;
                    right: 5px;
                    width: 10px;
                    height: 10px;
                    border: 1px solid red;
                    transform: scale(.8);
                    border-radius: 50%;
                    background: #fff;
                    cursor: pointer;
                    will-change: transform;
                    transition: transform 300ms, background-color .3s, border-color .3s;

                    &:hover {
                        transform: scale(1);
                        background-color: red;
                    }
                }

                .a-loading-icon {
                    display: block;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    animation: spin 1s linear infinite;
                }
            }
        }
    }
}

@keyframes spin {
    0% {
        transform: rotate(0)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
    
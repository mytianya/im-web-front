<template>
    <div class="audio-wrapper">
        <el-row class="audio-wrapper-order">
            <el-col :span="3">
                <el-icon :size="40" color="white" @click="prev">
                    <svg-icon name="skip"></svg-icon>
                </el-icon>
                <el-icon :size="40" color="white" @click="pause" v-if="playStat.isPlaying">
                    <VideoPause />
                </el-icon>
                <el-icon :size="40" color="white" v-else @click="play">
                    <VideoPlay />
                </el-icon>
                <el-icon :size="40" color="white" @click="next">
                    <svg-icon name="skip" class="svg-icon-skip"></svg-icon>
                </el-icon>
            </el-col>
            <el-col :span="12">
                <div class="a-wrapper">
                    <div>张三</div>
                    <div class="a-bar" ref="barWrapEL">
                        <div class="a-loaded" :style="{ width: `${loadProgress * 100}%` }"></div>
                        <div class="a-played" :style="{ width: `${playProgress * 100}%` }">
                            <span class="a-thumb" @mousedown="onThumbMouseDown" @touchstart="onThumbTouchStart">
                                <svg-icon name="loading" class="a-loading-icon" v-if="playStat.isLoading"></svg-icon>
                            </span>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <audio :src="playStat.audioUrl" ref="audioEL"></audio>
    </div>
</template>
    
<script lang="ts">

import { onMounted, ref, reactive, computed, toRefs,nextTick } from 'vue';
import { getElementViewLeft } from '@/utils/music_helper'
import { listMusic } from '@/api/music'
export default {
    name: "auido-player",
    props: {
        musicList: {
            type: Array,
            default: [{
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/561",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "亲密爱人",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/567",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "寂寞在唱歌",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/568",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "吻别",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/569",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "永远到底有多远",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/570",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "大约在冬季",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/571",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "橄榄树",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/572",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "我愿意",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/573",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "曾经心疼",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/577",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "海浪",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/578",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "爱如潮水",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/579",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "那个傻瓜爱过你",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/580",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "爱上一个不回家的人",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/581",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "爱你一万年",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/588",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "一场游戏一场梦",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/589",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "为爱犯了罪",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/590",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "最远的你是我最近的爱",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/592",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "执着",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/593",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "爱你在心口难开",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/596",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "月亮偷着哭",
                "musicSinger": "",
                "audioType": "audio/wav"
            },
            {
                "audioUrl": "http://127.0.0.1:8888/v1/music/audioSource/598",
                "lyricUrl": "",
                "coverUrl": "",
                "musicName": "那一场风花雪月的事",
                "musicSinger": "",
                "audioType": "audio/wav"
            }],
            required: true,
        }
    },
    setup(props) {
        const audioEL = ref(null)
        const barWrapEL = ref(null)
        const { musicList } = toRefs(props)
        const playStat = reactive(
            {
                duration: 1,
                loadedTime: 0,
                playedTime: 0,
                isPlaying: false,
                isLoading: false,
                audioPlayPromise: Promise.resolve(),
                rejectPlayPromise: null,
                audioUrl: '',
                audioName: '',
                lyricUrl: '',
                singer: '',
                curIndex: 0
            }
        )
        if (musicList.value.length > 0) {
            playStat.audioUrl = musicList.value[0].audioUrl
            playStat.audioName = musicList.value[0].audioName
            playStat.lyricUrl = musicList.value[0].lyricUrl
            playStat.singer = musicList.value[0].singer
        }
        const play = () => {
            const promise = audioEL.value.play()
            if (promise) {
                return playStat.audioPlayPromise = new Promise((resolve, reject) => {
                    // rejectPlayPromise is to force reject audioPlayPromise if it's still pending when pause() is called
                    playStat.rejectPlayPromise = reject
                    promise.then((res) => {
                        playStat.rejectPlayPromise = null
                        playStat.isPlaying = true;
                        resolve(res)
                    }).catch((err) => {
                        console.log(err)
                        playStat.isPlaying = false;
                        playStat.isLoading = false;
                    })
                })
            }
        }
        const pause = () => {
            playStat.audioPlayPromise
                .then(() => {
                    audioEL.value.pause()
                    playStat.isPlaying = false;
                    playStat.isLoading = false;
                })
                // Avoid force rejection throws Uncaught
                .catch(() => {
                    audioEL.value.pause()
                    playStat.isPlaying = false;
                    playStat.isLoading = false;
                })
            // audioPlayPromise is still pending
            if (playStat.rejectPlayPromise) {
                // force reject playPromise
                playStat.rejectPlayPromise()
                playStat.rejectPlayPromise = null
            }
        }
        const setCurrentTime = (currentTime) => {
            audioEL.value.currentTime = currentTime
        }
        const onAudioDurationChange = () => {
            playStat.duration = audioEL.value.duration
        }
        const onAudioProgress = () => {
            console.log("onAudioProgress........")
            if (audioEL.value.buffered.length) {
                playStat.loadedTime = audioEL.value.buffered.end(audioEL.value.buffered.length - 1)
            } else {
                playStat.loadedTime = 0
            }
        }
        const onAudioTimeUpdate = () => {
            playStat.playedTime = audioEL.value.currentTime
        }
        const onAudioEnded = () => {
            console.log("onAudioEnded........")
            playStat.isPlaying = false;
            playStat.isLoading = false;
            next();
        }
        const onAudioWaiting = () => {
            console.log("onAudioWaiting... isLoading")
            playStat.isLoading = true;
        }
        const onAudioCanplay = () => {
            playStat.isLoading = false;
        }
        const initAudio = () => {
            console.log(audioEL.value)
            //获取音频总时长
            audioEL.value.addEventListener("durationchange", onAudioDurationChange);
            //获取播放下载进度
            audioEL.value.addEventListener('progress', onAudioProgress)
            //获取播放进度
            audioEL.value.addEventListener('timeupdate', onAudioTimeUpdate)
            //播放结束
            audioEL.value.addEventListener('ended', onAudioEnded)
            //加载等待
            audioEL.value.addEventListener('waiting', onAudioWaiting)
            //是否可以播放
            audioEL.value.addEventListener('canplay', onAudioCanplay)

        }
        onMounted(() => {
            initAudio()
        })
        const loadProgress = computed(() => {
            return playStat.loadedTime / playStat.duration
        })
        const playProgress = computed(() => {
            return playStat.playedTime / playStat.duration

        })
        const onThumbMouseDown = (e) => {
            console.log(barWrapEL)
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (e.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            document.addEventListener('mousemove', onDocumentMouseMove)
            document.addEventListener('mouseup', onDocumentMouseUp)
        }
        const onDocumentMouseMove = (e) => {
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (e.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            pause();
            playStat.playedTime = percentage * playStat.duration
            console.log("duration:" + playStat.duration + ",mouseMove:" + playStat.playedTime)
            audioEL.value.currentTime = playStat.playedTime
        }
        const onDocumentMouseUp = (e) => {
            document.removeEventListener('mouseup', onDocumentMouseUp)
            document.removeEventListener('mousemove', onDocumentMouseMove)
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (e.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            playStat.playedTime = percentage * playStat.duration
            console.log("duration:" + playStat.duration + ",mouseMove:" + playStat.playedTime)
            if (playStat.playedTime == audioEL.value.duration) {
                console.log("onDocumentMouseUp pause.........")
                pause();
                audioEL.value.currentTime = playStat.playedTime
            } else {
                console.log("onDocumentMouseUp play.........")
                audioEL.value.currentTime = playStat.playedTime
                play();
            }
        }
        const onThumbTouchStart = (e) => {
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (e.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            document.addEventListener('touchmove', onDocumentTouchMove)
            document.addEventListener('touchend', onDocumentTouchEnd)
        }
        const onDocumentTouchMove = (e) => {
            const touch = e.changedTouches[0]
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (touch.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            pause();
            playStat.playedTime = percentage * playStat.duration
            console.log("duration:" + playStat.duration + ",mouseMove:" + playStat.playedTime)
            audioEL.value.currentTime = playStat.playedTime
        }
        const onDocumentTouchEnd = (e) => {
            document.removeEventListener('touchend', onDocumentTouchEnd)
            document.removeEventListener('touchmove', onDocumentTouchMove)
            const touch = e.changedTouches[0]
            const barWidth = barWrapEL.value.clientWidth
            let percentage = (touch.clientX - getElementViewLeft(barWrapEL.value)) / barWidth
            percentage = percentage > 0 ? percentage : 0
            percentage = percentage < 1 ? percentage : 1
            playStat.playedTime = percentage * playStat.duration
            console.log("duration:" + playStat.duration + ",mouseMove:" + playStat.playedTime)
            audioEL.value.currentTime = playStat.playedTime
            if (audioEL.value.playedTime == audioEL.value.duration) {
                pause();
            } else {
                play();
            }
        }
        const thenPlay = () => {
            nextTick(() => {
                play();
            })
        }
        const computedIndex=(playType)=>{
            let total = musicList.value.length
            if("prev"==playType){
                if(playStat.curIndex<=0){
                    playStat.curIndex=total-1;
                }else{
                    playStat.curIndex--;
                }
            }
            if("next"==playType){
                if(playStat.curIndex>=total){
                    playStat.curIndex=0;
                }else{
                    playStat.curIndex++;
                }
            }
        }
        const prev = () => {
            computedIndex("prev")
            playStat.duration = 0;
            playStat.playedTime = 0;
            playStat.loadedTime = 0;
            playStat.isPlaying = false;
            playStat.audioUrl = musicList.value[playStat.curIndex].audioUrl
            playStat.audioName = musicList.value[playStat.curIndex].audioName
            playStat.lyricUrl = musicList.value[playStat.curIndex].lyricUrl
            playStat.singer = musicList.value[playStat.curIndex].singer
            playStat.coverUrl = musicList.value[playStat.curIndex].coverUrl
            thenPlay()
        }
        const next = () => {
            computedIndex("next")
            playStat.duration = 0;
            playStat.playedTime = 0;
            playStat.loadedTime = 0;
            playStat.isPlaying = false;
            playStat.audioUrl = musicList.value[playStat.curIndex].audioUrl
            playStat.audioName = musicList.value[playStat.curIndex].audioName
            playStat.lyricUrl = musicList.value[playStat.curIndex].lyricUrl
            playStat.singer = musicList.value[playStat.curIndex].singer
            playStat.coverUrl = musicList.value[playStat.curIndex].coverUrl
            thenPlay()
        }
        return { audioEL, barWrapEL, playStat, play, pause, setCurrentTime, loadProgress, playProgress, onThumbMouseDown, onThumbTouchStart, prev, next }
    },
}

</script>
    
<style scoped type="scss">
.audio-wrapper {
    background-color: brown;
    min-height: 40px;

    .audio-wrapper-order {
        align-items: center;

        .svg-icon-skip {
            transform: scaleX(-1);
        }

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

                .a-thumb {
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
                    color: red;
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
    
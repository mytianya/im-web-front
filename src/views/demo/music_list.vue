<template>
    <div>
        <div>
            <el-table :data="musicData" stripe style="width: 100%">
                <el-table-column prop="musicName" label="歌名" />
                <el-table-column prop="musicSinger" label="歌手" />
                <el-table-column prop="duration" label="时长" />
                <el-table-column prop="audioType" label="类型" />
                <el-table-column label="播放">
                    <template #default="scope">
                        <el-icon :size="40" color="brown" @click="play(scope.$index, scope.row)">
                        <svg-icon name="play"  ></svg-icon>
                        </el-icon>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <AudioPlayer :musicData="musicData" />
        </div>
    </div>

</template>
    
<script lang="ts" setup>
import AudioPlayer from './music_audio.vue'
const musicData = [{
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
            }]
const play=(index,music)=>{
    console.log(index,music)
}
</script>
    
<style scoped type="scss"></style>
    
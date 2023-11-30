<template>
    <div>
        <el-table :data="musicData" stripe style="width: 100%">
            <el-table-column prop="musicName" label="歌名" width="180" />
            <el-table-column prop="musicSinger" label="歌手" width="180" />
            <el-table-column fixed="right" label="播放" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="handleClick(scope.$index, scope.row)">播放</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="aplayer"></div>
    </div>
</template>
    
<script lang="ts" setup>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import { nextTick, ref } from 'vue';
import { listMusic } from '@/api/music';
var musicData = ref([]);
var musicName
var audioUrl
var coverUrl
var lyricUrl
console.log(".................")
nextTick(() => {
    listMusic({ "pageIndex": 1, "pageSize": 20 }).then(res => {
        musicData.value = res.data.MusicList;
        console.log(musicData)
    })
});
const handleClick=(index,data)=>{
    console.log(index,data)
    musicName=data.musicName
    audioUrl=data.audioUrl
    coverUrl=data.coverUrl
    lyricUrl=data.lyricUrl
    nextTick(() => {
    let options = {
        container: document.getElementById('aplayer'),
        lrcType: 3,
        audio: [{
            name: musicName,
            artist: '未知者',
            url: audioUrl,
            cover: coverUrl,
            lrc: lyricUrl
        }]
    }
    new APlayer(options);
})

}

</script>
    
<style scoped></style>
    
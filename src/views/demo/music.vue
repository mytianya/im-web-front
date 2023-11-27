<template>
    <div>
        <div id="aplayer"></div>
    </div>
</template>
    
<script lang="ts" setup>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import { nextTick } from 'vue';
let musicName="悬溺";
let musicUrl="http://127.0.0.1:8888/v1/music/audioSource/546"
let lrcUrl="http://127.0.0.1:8888/v1/music/lyricSource/542";
let coverUrl="http://127.0.0.1:8888/v1/music/coverSource/543";
nextTick(()=>{
    let options={
    container:document.getElementById('aplayer'),
    lrcType: 3,
    audio:[{
        name:musicName,
        artist:'未知者',
        url:musicUrl,
        cover:coverUrl,
        lrc:lrcUrl
    }]
}
    new APlayer(options);
})

</script>
    
<style scoped></style>
    
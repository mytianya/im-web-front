<template>
    <div>
        <div id="aplayer"></div>
    </div>
</template>
    
<script lang="ts" setup>
import 'APlayer/dist/APlayer.min.css';
import APlayer from 'APlayer';
import { nextTick } from 'vue';
//let test1="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
let musicName="悬溺";
let musicUrl="http://192.168.22.90:8888/v1/music/audioSource?name=xn.mp3"
let lrcUrl="http://192.168.22.90:8888/v1/music/lyricSource?name=xn.lrc";
nextTick(()=>{
    let options={
    container:document.getElementById('aplayer'),
    lrcType: 3,
    audio:[{
        name:musicName,
        artist:'未知者',
        url:musicUrl,
        cover:'cover.jpg',
        lrc:lrcUrl
    }]
}
    new APlayer(options);
})

</script>
    
<style scoped></style>
    
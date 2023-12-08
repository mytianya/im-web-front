<template>
    <div>
        <div>
            <el-table :data="musicData" stripe style="width: 100%" max-height="600"  v-el-table-infinite-scroll="loadMore" width="600px">
                <el-table-column prop="musicName" label="歌名" />
                <el-table-column prop="musicSinger" label="歌手" />
                <el-table-column prop="duration" label="时长" />
                <el-table-column prop="audioType" label="类型" />
                <el-table-column label="播放">
                    <template #default="scope">
                        <el-icon :size="40" color="brown" @click="play(scope.$index, scope.row)">
                            <svg-icon name="play"></svg-icon>
                        </el-icon>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <AudioPlayer :musicList="musicData" ref="audioPlayerEL" />
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import AudioPlayer from './music_audio.vue'
import { ref } from 'vue'
import { listMusic } from '@/api/music';
import { default as vElTableInfiniteScroll } from "el-table-infinite-scroll";

const musicData = ref()
const audioPlayerEL=ref(null)
const play = (index, music) => {
    audioPlayerEL.value.changeIndex(index)
}
const total = ref()
var tempTableLayerData = []
const pageSize = 30
var pageIndex = 1
const loadMore = () => {
    // 每页条数
    // 如果加载结束就返回
    if (pageIndex * pageSize > total) return
    listMusic({ "pageIndex": pageIndex, "pageSize": pageSize }).then(res => {
        const mergeData = tempTableLayerData.concat(res.data.MusicList)
        tempTableLayerData = mergeData
        //形成最后的数据给table组件使用
        musicData.value = tempTableLayerData
        pageIndex++
        total.value=res.data.PageInfo.Total
    })
}
</script>
    
<style scoped type="scss"></style>
    
<template>
    <div>
        <div>
            <el-table :data="musicData" stripe style="width: 100%" max-height="100"  v-table-infinite-scroll="loadMore">
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
            <!-- <AudioPlayer :musicData="musicData" /> -->
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import AudioPlayer from './music_audio.vue'
import { ref } from 'vue'
import { listMusic } from '@/api/music';
const musicData = ref()
const play = (index, music) => {
    console.log(index, music)
}
const total = ref()
var tempTableLayerData = []
const pageSize = 3
var pageIndex = 1
listMusic({ "pageIndex": pageIndex, "pageSize": pageSize }).then(res => {
    const mergeData = tempTableLayerData.concat(res.data.MusicList)
    total.value = res.data.PageInfo.Total
    tempTableLayerData = mergeData
    //形成最后的数据给table组件使用
    musicData.value = tempTableLayerData
    pageIndex++
    console.log(musicData)
})
const vTableInfiniteScroll = {
  mounted(el, binding) {
    let tbody = el.querySelector('.el-scrollbar__wrap') // .el-table__body-wrapper 根据版本不同会有区别
    el.tableInfiniteScrollFn = function () {
      if (this.scrollHeight - this.scrollTop - parseInt(this.style.height) === 0) {
        binding.value()
      }
    }
    tbody.addEventListener('scroll', el.tableInfiniteScrollFn)
    tbody = undefined
  },
  unmounted(el, binding) {
    const tbody = el.querySelector('.el-scrollbar__wrap')
    tbody.removeEventListener('scorll', el.tableInfiniteScrollFn)
    el.tableInfiniteScrollFn = undefined
  }
}
const loadMore = () => {
    // 每页条数
    console.log(pageIndex)
    // 如果加载结束就返回
    if (pageIndex * pageSize > total) return
    listMusic({ "pageIndex": pageIndex, "pageSize": pageSize }).then(res => {
        const mergeData = tempTableLayerData.concat(res.data.MusicList)
        tempTableLayerData = mergeData
        //形成最后的数据给table组件使用
        musicData.value = tempTableLayerData
        pageIndex++
        console.log(pageIndex++)
    })

}
</script>
    
<style scoped type="scss"></style>
    
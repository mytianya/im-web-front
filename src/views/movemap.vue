<script setup>
import { ref, onMounted } from 'vue'
import * as zrender from "zrender";
const msgId = ref('0')
const movemap=ref(null)
console.log(movemap)

onMounted(()=>{
    var zr = zrender.init(movemap.value)
    console.log(movemap.value)
    let rect = new zrender.Rect({
        style: {
            fill: 'green',      //填充颜色
            stroke: 'red'    //描边颜色
        },
        shape: {
            x: 100,           //x,y代表坐标  左上角
            y: 100,
            width: 200,
            height: 100,
            r: [3]            //圆角
        },
        z: 1                   //层次，大的会覆盖小的
        });
        zr.add(rect);
})
</script>

<template>
  <div>
    haahhhh
    <div id="movemap" ref="movemap" style="width: 300px;">hahha</div>
  </div>
</template>

<style scoped>
#canvas{
  width: 300px;
  height: 200px;
}
</style>

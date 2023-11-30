<template>
    <div>
        <audio :src="audioUrl" controls ref="audioEL"></audio>
    </div>
</template>
    
<script lang="ts">

import { nextTick, ref } from 'vue';
export default {
    name:"auido-player",
    props: {
        audioUrl: {
            type: String,
            required: true,
        },
    },
    setup(props) {
        const audioEL = ref(null)
        console.log(audioEL)
        console.log(props)
        nextTick(() => {
            console.log(audioEL)
        })
        return { audioEL }
    },

}

</script>
    
<style scoped></style>
    
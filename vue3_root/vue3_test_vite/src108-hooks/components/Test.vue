<template>
  <div>
    <h1>Hello world</h1>
    <h1>count: {{num}}</h1>
    <button @click="num++">count</button>
    <hr>
    <h1>点击的坐标为:x:{{point.x}}, y:{{point.y}}</h1>
  </div>
</template>

<script>
import {ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
import usePoint from "../hooks/usePoint"
export default {
    name:'Test',
    setup(){
        let num = ref(0)

        let point = usePoint()

        return {
            num,
            point
        }
    }
  
}
</script>

<style>

</style>
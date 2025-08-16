<template>
  <div>
    <h1>Hello world</h1>
    <h1>count: {{num}}</h1>
    <button @click="num++">count</button>
  </div>
</template>

<script>
import {ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'
export default {
    name:'Test',
    setup(){
        let num = ref(0)

        onBeforeMount(()=>{
            console.log("---------onBeforeMount-----------")
        })
        onMounted(()=>{
            console.log("---------onMounted-----------")
        })
        onBeforeUpdate(()=>{
            console.log("---------onBeforeUpdate-----------")
        })
        onUpdated(()=>{
            console.log("---------onUpdated-----------")
        })
        onBeforeUnmount(()=>{
            console.log("---------onBeforeUnmount-----------")
        })
        onUnmounted(()=>{
            console.log("---------onUnmounted-----------")
        })
        
        return {
            num
        }
    },

// #region
//   beforeCreate(){
//     console.log("-------------beforeCreate---------------")
//   },
//   created(){
//     console.log("-------------created---------------")
//   },
//   beforeMount(){
//     console.log("-------------beforeMount---------------")
//   },
//   mounted(){
//     console.log("-------------mounted---------------")
//   },
//   beforeUpdate(){
//     console.log("-------------beforeUpdate---------------")
//   },
//   updated(){
//     console.log("-------------updated---------------")
//   },
//   beforeUnmount(){
//     console.log("-------------beforeUnmount---------------")
//   },
//   unmounted(){
//     console.log("-------------unmounted---------------")
//   }
// #endregion


    // destroy写法在vue3中更改为Unmount
    //   beforeDeatroy(){
    //     console.log("-------------beforeDeatroy---------------")
    //   },
    //   destroyed(){
    //     console.log("-------------destroyed---------------")
    //   },
  
}
</script>

<style>

</style>
<template setup>
  <div>
    <input type="text" v-model="name">
    <h2>{{name}}</h2>
    <button @click="myRef">myRef</button>
  </div>
</template>

<script>
import { ref, customRef} from 'vue'
export default {
  name: 'App',
  setup(){
    let name = myRef("dkuhfg")

    function myRef(value){
      // console.log(customRef(()=))
      return customRef((track, trigger)=>{
        return {
          get(){
            console.log("数据被读取", value)
            track()

            
            return value
          },
          set(newVal){
            console.log("数据被修改", newVal)
            value = newVal
            setTimeout(()=>{
              trigger()
            }, 1000)
          }
        }
      })
    }


    return {
      name,
      myRef
    }
  }
}
</script>

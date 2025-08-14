<template setup>
  <div>
    <h2>My Infomation</h2>    
    <h2>{{name}}</h2>    
    <h2>{{age}}</h2>
    <h2>{{job.type}}</h2>
    <h2>{{job.salary}}</h2>
    <button @click="change">change</button>
    <button @click="look">view</button>
    <button @click="changeJob">changeJob</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',
  setup(){

    let name = ref('Tom')
    let age = ref(18)

    let job = ref({
      type: 'Java Dev',
      salary: 30000
    })

    function change(){
      name.value = 'HHHH'
      age.value = 24
    }

    function changeJob(){
      job.value.type = 'Go Dev',
      job.value.salary = 50000
    }

    function look(){
      console.log('name = ' + name.value + ', age = ' + age.value)
      console.log(job)
    }

    return {
      name,
      age,
      change,
      look,
      job,
      changeJob
    }
  }
}
</script>

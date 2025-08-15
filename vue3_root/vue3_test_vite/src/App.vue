<template setup>
  <div>
    firstName:<input type="text" v-model="person.firstName">
    lastName: <input type="text" v-model="person.lastName">
    fullName: <h4>{{}}</h4>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup(){
    
    let person = reactive({
      firstName: 'A',
      lastName: 'B'
    })

    return {
      person
    }
  }
}
</script>

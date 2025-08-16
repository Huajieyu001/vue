<template setup>
  <div>
    firstName:<input type="text" v-model="person.firstName">
    lastName: <input type="text" v-model="person.lastName">
    fullName: <h4>{{person.fullName}}</h4>
  </div>
</template>

<script>
import { reactive, computed} from 'vue'
export default {
  name: 'App',
  setup(){
    
    let person = reactive({
      firstName: 'A',
      lastName: 'B'
    })

    person.fullName = computed(() => {
      return person.firstName + "-" + person.lastName
    })

    return {
      person
    }
  }
}
</script>

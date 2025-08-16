<template>
  <div class="l3">
    <h2 v-if="person">BBB: I'm {{person.name}}, I'm {{person  .age}} years old.</h2>
    <h2 v-else>BBB</h2>

    <input type="text" v-model="person.name">
    <button @click="person.name += '@'">Add at</button>
  </div>
</template>

<script>
import {inject} from 'vue'
export default {

    setup(){
      let person = inject('person')


      return {
        person
      }
    }
}
</script>

<style>
.l3{
  background-color: red;
}
</style>
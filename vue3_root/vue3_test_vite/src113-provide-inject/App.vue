<template setup>
  <div class="l1">
    <h2>App: I'm {{person.name}}, I'm {{person  .age}} years old.</h2>
    <hr>
    <AAA/>
  </div>
</template>

<script>
import { ref, customRef, reactive, provide} from 'vue'
import AAA from './components/AAA.vue'
export default {
  components: {
        AAA
    },
  name: 'App',
  setup(){

    let person = reactive({
      name: "Tom",
      age: 18
    })

    provide('person', person)

    return {
      person
    }
  }
}
</script>

<style scoped>
.l1{
  background-color: skyblue;
  padding: 100px, 100px;
}
</style>

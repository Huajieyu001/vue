<template setup>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <button @click="say">888</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){

    let name = ''
    let age = 18

    function say(){
      alert(`I am ${name}, I'm ${age} years old!`)
    }

    return {
      name,
      age,
      say
    }
  }
}
</script>

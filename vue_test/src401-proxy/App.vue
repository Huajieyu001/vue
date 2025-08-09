<template>
  <div>
    <button @click="getStudents">getStudents</button>
    <button @click="getCars">getCars</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:'App',
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/5000/students').then(
        response=>{
          console.log('200:getStudents', response.data)
        },
        error => {
          console.log('500:' + error.message)
        }
      )
    },
    getCars(){
      axios.get('http://localhost:8080/5001/cars').then(
        response => {
          console.log('200:getStudents', response.data)
        },
        error => {
          console.log('500:' + error.message)
        }
      )
    }
  }
}
</script>

<style>

</style>
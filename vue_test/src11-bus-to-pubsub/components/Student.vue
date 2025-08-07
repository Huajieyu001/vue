<template>
  <div class="s2">
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <button @click="send()">Click me</button>
    <!-- <button @click="unbind">unbind</button> -->
    <!-- <button @click="sendSchoolName(name)">Click me</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return {
            name: 'Tom',
            age: 18
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello', this.name)
        },
        unbind(){
            this.$off()
        },
        send(){
            pubsub.publish('hello', "Hahaha")
        }
    }
}
</script>

<style scoped>
    .s2{
        border: solid 0.5px;
        padding: 5px;
        margin-top: 10px;
        background-color: pink  ;
    }
</style>
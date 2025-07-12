<template>
  <div>
    <Todo v-for="(todo) in todos" :todo='todo' :key="todo.id" :changeStatus="changeStatus" :deleteTodo="deleteTodo"/>
  </div>
</template>

<script>
import Todo from './Todo.vue'
export default {
    name:'Todos',
    components:{
        Todo
    },
    methods:{
        del(){}
    },
    props:['todos','changeStatus','deleteTodo']
}
</script>

<style>

</style>
<template>
  <div>
    <Todo v-for="(todo) in todos" :todo='todo' :key="todo.id"/>
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
    props:['todos']
}
</script>

<style>

</style>
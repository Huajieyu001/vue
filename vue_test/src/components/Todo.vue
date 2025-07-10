<template>
  <div>
    <label>
        <input type='checkbox' :checked="todo.checked">
        <span>{{todo.title}}</span>
    </label>
    <button @click="del" class='btn'>delete</button>
  </div>
</template>

<script>
export default {
    props:{
        todo:{
            type:Object
        }
    },
    methods:{
        del(){
            this.todo.checked = false;
        }
    }
}
</script>

<style>

</style>
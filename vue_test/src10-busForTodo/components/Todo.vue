<template>
  <li>
    <label>
        <!-- <input type='checkbox' :checked="todo.checked" @click="todo.checked=!todo.checked"> -->
        <input type='checkbox' placeholder="请输入项目" :checked="todo.checked" @change="change(todo.id)">
        <!-- <input type='checkbox' v-model="todo.checked"> -->
        <span>{{todo.title}}</span>
    </label>
    <button @click="del(todo.id)" class='todoBtn'>delete</button>
  </li>
</template>

<script>
export default {
    props:['todo'],
    methods:{
        change(id){
            this.$bus.$emit('changeStatus',id)
        },
        del(id){
            if(confirm('确定删除？')){
                console.log(id)
                this.$bus.$emit('deleteTodo',id)
            }
        }
    }
}
</script>

<style>
    li{
        height: 30px;
        width: 480px;
        /* margin: 10px 0px; */
        border: solid 1px;
        padding: 0px 5px;
    }
    li:hover{
        background-color: rgb(162, 168, 162);
    }

    li:hover button{
        height: 20px;
        width: 60px;
        margin-left: 10px;
        margin-right: 10px;
        display: block;
    }
    .todoBtn{
        height: 20px;
        width: 60px;
        margin-left: 10px;
        margin-right: 10px;
        display: none;
    }
</style>
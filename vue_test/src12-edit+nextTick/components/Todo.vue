<template>
  <li>
    <label>
        <!-- <input type='checkbox' :checked="todo.checked" @click="todo.checked=!todo.checked"> -->
        <input type='checkbox' placeholder="请输入项目" :checked="todo.checked" @change="change(todo.id)">
        <!-- <input type='checkbox' v-model="todo.checked"> -->
        <span v-show="!todo.isEdit">{{todo.title}}</span>
        <input type="text" v-show="todo.isEdit" :value="todo.title" @blur="handleBlur(todo, $event)" ref="inputTitle">
    </label>
    <button @click="del(todo.id)" class='todoBtn btn-del'>删除</button>
    <button v-show="!todo.isEdit" @click="edit(todo)" class='todoBtn btn-edit'>编辑</button>
  </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    props:['todo'],
    methods:{
        change(id){
            pubsub.publish('changeStatus', id)
        },
        del(id){
            if(confirm('确定删除？')){
                pubsub.publish('deleteTodo', id)
            }
        },
        edit(todo){
            // 非响应式：模板不重新解析
            // todo.isEdit = true;

            // 响应式，模板重新解析
            if(todo.hasOwnProperty('isEdit')){
                console.log('Ali')
                todo.isEdit = true
            } else {
                console.log('Nasi')
                this.todo.$set(todo, 'isEdit', true)
            }

            // 直接写this.$refs.inputTitle.focus()会没用，因为此时Dom节点还未更新，聚焦效果不生效

            // 方法一：使用回调，200ms后再调用聚焦
            // setTimeout(()=>{
            //     this.$refs.inputTitle.focus()
            // }, 200)

            // 方法二：使用nextTick方法，该方法会在Dom节点更新后执行
            this.$nextTick(()=>{
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo, e){
            todo.isEdit = false
            this.$bus.$emit('updateTodo', todo.id, e.target.value)
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
        height: 30px;
        width: 60px;
        display: block;
        float: right;
    }
    .todoBtn{
        height: 30px;
        width: 60px;
        display: none;
    }
</style>
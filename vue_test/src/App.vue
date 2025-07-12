<template>
    <div id="app">
        <MyHeader :receive="receive"/>
        <Todos :todos="todos" :changeStatus="changeStatus" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :deleteChecked="deleteChecked" :selectAll="selectAll"/>
    </div>  
</template>

<script lang='js'>
    import MyHeader from './components/MyHeader'
    import Todos from './components/Todos'
    import MyFooter from './components/MyFooter'
    export default {
        name:'App',
        components:{
            MyHeader,
            Todos,
            MyFooter
        },
        data(){
            return {
                todos:[
                {
                    id:1,
                    title:'唱歌',
                    checked: true
                },{
                    id:2,
                    title:'跳舞',
                    checked: true
                },{
                    id:3,
                    title:'飙车',
                    checked: false
                },
            ]
            }
        },
        methods:{
            receive(todo){
                this.todos.unshift(todo)
            },
            del(id){

            },
            changeStatus(id){
                this.todos.forEach(e=>{
                    if(e.id == id){
                        e.checked = !e.checked
                        return
                    }
                })
            },
            deleteTodo(id){
                this.todos = this.todos.filter(e => e.id != id)
            },
            deleteChecked(){
                this.todos = this.todos.filter(e => e.checked == false)
            },
            selectAll(){
                let checkCount = this.todos.reduce((pre, todo) => pre + (todo.checked ? 1 : 0), 0)
                let flag = false
                if(checkCount != this.todos.length){
                    flag = true
                }
                this.todos.forEach(e => {
                    e.checked = flag
                })
            }
        }
    }
</script>

<style scoped>
    #app{
        border: solid 1px;
        padding: 10px 10px;
        margin: 20px 20px;
    }
</style>
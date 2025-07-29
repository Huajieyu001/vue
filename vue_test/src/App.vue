<template>
    <div id="app">
        <MyHeader :receive="receive"/>
        <Todos :todos="todos"/>
        <MyFooter :todos="todos" :deleteChecked="deleteChecked" :selectAll="selectAll"/>
    </div>  
</template>

<script lang='js'>
    import MyHeader from './components/MyHeader'
    import Todos from './components/Todos'
    import MyFooter from './components/MyFooter'
    import pubsub from 'pubsub-js'

    function updateStorage(e){
        console.log('updateStorage......')
        localStorage.setItem('todos', JSON.stringify(e))
    }
    export default {
        name:'App',
        components:{
            MyHeader,
            Todos,
            MyFooter
        },
        data(){
            return {
                todos: JSON.parse(localStorage.getItem('todos')) == null ? [] : JSON.parse(localStorage.getItem('todos'))
            }
        },
        methods:{
            receive(todo){
                this.todos.unshift(todo)
                updateStorage(this.todos)
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
                updateStorage(this.todos)
            },
            deleteTodo(id){
                this.todos = this.todos.filter(e => e.id != id)
                updateStorage(this.todos)
            },
            deleteChecked(){
                this.todos = this.todos.filter(e => e.checked == false)
                updateStorage(this.todos)
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
            },
            revertStorage(){
                this.todos = JSON.parse(localStorage.getItem('todos'))
            }
        },
        watch:{
            todos:{
                deep:false,
                handler(value){
                    localStorage.setItem('todos', JSON.stringify(value))
                }
            }
        },
        mounted(){
            this.id1 = pubsub.subscribe('receive', (name, value)=>{
                this.receive(value)
            })

            this.id2 = pubsub.subscribe('changeStatus', (name, value)=>{
                this.changeStatus(value)
            })

            this.id3 = pubsub.subscribe('deleteTodo', (name, value)=>{
                this.deleteTodo(value)
            })

            this.id4 = pubsub.subscribe('deleteChecked', (name, value)=>{
                this.deleteChecked(value)
            })

            this.id5 = pubsub.subscribe('selectAll', ()=>{
                this.selectAll()
            })
        },
        beforeDestroy(){
            pubsub.unsubscribe(id1)
            pubsub.unsubscribe(id2)
            pubsub.unsubscribe(id3)
            pubsub.unsubscribe(id4)
            pubsub.unsubscribe(id5)
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
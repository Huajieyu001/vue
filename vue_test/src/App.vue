<template>
    <div id="app">
        <MyHeader :receive="receive"/>
        <Todos :todos="todos"/>
        <MyFooter :completed="1" :total="2"/>
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
                this.todos.push(todo)
            },
            del(id){
                
            }
        }
    }
</script>

<style scoped>

</style>
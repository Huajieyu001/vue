<template>
    <div id="app">
        <h1>你好啊{{msg}}</h1>
        <School/>
        <Student/>
    </div>  
</template>

<script lang='js'>
    import School from './components/School'
    import Student from './components/Student'
    export default {
        name:'App',
        components:{
            School,
            Student
        },
        data(){
            return {
                msg: ''
            }
        }
    }
</script>

<style scoped>
    #app{
        border: solid 1px;
        padding: 10px 10px;
        margin: 20px 20px;
        background-color: green;
    }
</style>
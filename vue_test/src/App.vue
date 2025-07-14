<template>
    <div id="app">
        <!-- 通过props -->
        <School :sendSchoolName="getSchoolName"/>

        <!-- 通过v-on和@ -->
        <!-- <Student v-on:huajieyu="getStudentName"/> -->

        <!-- 通过绑定事件和refs..$on -->
        <Student ref="student" @f1='getStudentName'/>
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
        methods:{
            getSchoolName(name){
                console.log('App sendSchoolName recerved name = ' + name)
            },
            getStudentName(name){
                console.log('App huajieyu recerved name = ' + name)
            }
        },
        mounted(){
            // 绑定事件
            this.$refs.student.$on('huajieyu', this.getStudentName)
            // 绑定一次性事件
            // this.$refs.student.$once('huajieyu', this.getStudentName)
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
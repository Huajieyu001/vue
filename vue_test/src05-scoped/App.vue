<template>
    <div id="app">
        <Student/>
        <School/>
    </div>  
</template>

<script lang='js'>
    import School from './components/School'
    import Student from './components/Student'
    export default {
        name:'App',
        components:{
            Student,
            School
        }
    }
</script>

<style scoped>

</style>
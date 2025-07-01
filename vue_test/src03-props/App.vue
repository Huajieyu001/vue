<template>
    <div id="app">
        <Setudent name='Jack'/>
        <hr>
        <Setudent name='Tom' gender='male' :age='18'/>
        <hr>
        <Setudent name='Rosy' gender='female' :age='17'/>
    </div>  
</template>

<script lang='js'>
    import Setudent from './components/Setudent'
    export default {
        name:'App',
        components:{
            Setudent
        }
    }
</script>

<style scoped>

</style>
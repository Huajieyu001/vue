<template>
    <div>
        <h1>message : {{msg}}</h1>
        <h1>my name is :{{name}}</h1>
        <h1>my gender is :{{gender}}</h1>
        <h1>my age is :{{age}}</h1>
    </div>
</template>

<script lang=js>
    export default {
        name:'School',
        data(){
            return {
                msg:'123456789'
            }
        },
        props:['name','age','gender']
    }
</script>

<style scoped>
    h2{
        color: red
    }
</style>
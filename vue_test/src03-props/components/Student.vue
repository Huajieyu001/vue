<template>
    <div>
        <h1>message : {{msg}}</h1>
        <h1>my name is :{{name}}</h1>
        <h1>my gender is :{{gender}}</h1>
        <h1>my age is :{{age + 1}}</h1>
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
        // 1
        // props:['name','age','gender'],

        // 2
        // props:{
        //     name:String,
        //     age:Number,
        //     gender:String
        // }

        // 3
        props: {
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            },
            gender:{
                type:String,
                default: 'Unkonwn'
            }
        }
    }
</script>

<style scoped>
    h2{
        color: red
    }
</style>
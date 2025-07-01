<template>
    <div>
        <h1 @click='showName'>my name is :{{name}}</h1>
        <h1>my age is :{{age}}</h1>
    </div>
</template>

<script lang=js>
    import {show,testData} from '../mixin.js'
    import {testData2} from '../mixin2.js'
    export default {
        name:'Student',
        data(){
            return {
                name:'Tom',
                age: 18
            }
        },
        mixins:[show,testData2,testData]
    }
</script>

<style scoped>
    h2{
        color: red
    }
</style>
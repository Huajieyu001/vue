<template>
    <div>
        <h1 class="test">my name is :{{name}}</h1>
        <h1 class="test">my age is :{{age}}</h1>
    </div>
</template>

<script lang=js>
    export default {
        name:'Student',
        data(){
            return {
                name:'Tom',
                age: 18
            }
        },
    }
</script>

<style scoped>
    .test{
        background-color: orange;
    }
</style>
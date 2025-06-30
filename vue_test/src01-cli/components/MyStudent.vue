<template>
    <div>
        <h2>{{studentName}}</h2>
        <h2>{{age}}</h2>
    </div>
</template>

<script lang="js">
    export default {
        name:'MyStudent',
        data(){
            return {
                studentName:'Tom',
                age:18
            }
        }
    }
</script>

<style>

</style>
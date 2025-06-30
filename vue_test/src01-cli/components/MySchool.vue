<template>
    <div>
        <h2>{{schoolName}}</h2>
        <h2>{{location}}</h2>
    </div>
</template>

<script lang="js">
    export default {
        name:'MySchool',
        data(){
            return {
                schoolName:'Campus',
                location:'Beijing'
            }
        }
    }
</script>

<style scoped>
    h3 {
    margin: 40px 0 0;
    }
</style>
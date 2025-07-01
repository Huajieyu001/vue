<template>
    <div>
        <h1 @click='showName'>schoolName :{{name}}</h1>
    </div>
</template>

<script lang=js>
    export default {
        name:'School',
        data(){
            return {
                name:'Campus',

            }
        },
        mixins:[show,testData]
    }
</script>

<style scoped>
    h2{
        color: red
    }
</style>
<template>
    <div>
        <h1 class="test">schoolName :{{name}}</h1>
        <h1 class="abcd">schoolName :{{name}}</h1>
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
    }
</script>

<style scoped lang='less'>
    .test{
        background-color:rgb(49, 119, 146);
        .abcd{
            font-size:60px;
        }
    }
</style>
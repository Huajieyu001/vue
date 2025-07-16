<template>
  <div class="s1">
    <h1>{{name}}</h1>
    <h1>{{buildDate}}</h1>
    <button @click="sendSchoolName(name)">Click me</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data(){
        return {
            name: 'Uni',
            buildDate: 1930
        }
    },
    props:['sendSchoolName']
}
</script>

<style scoped>
    .s1{
        border: solid 0.5px;
        padding: 5px;
        background-color: gray;
    }
</style>
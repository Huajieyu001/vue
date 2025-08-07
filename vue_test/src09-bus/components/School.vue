<template>
  <div class="s1">
    <h1>{{name}}</h1>
    <h1>{{buildDate}}</h1>
    <!-- <button @hello="hello">Click me</button> -->
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
    mounted(){
        this.$bus.$on('hello', (name)=>{
            console.log('School 收到了数据：' + name)
        })
    }
}
</script>

<style scoped>
    .s1{
        border: solid 0.5px;
        padding: 5px;
        background-color: gray;
    }
</style>
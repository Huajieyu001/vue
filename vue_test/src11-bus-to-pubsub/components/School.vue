<template>
  <div class="s1">
    <h1>{{name}}</h1>
    <h1>{{buildDate}}</h1>
    <!-- <button @hello="hello">Click me</button> -->
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return {
            name: 'Uni',
            buildDate: 1930
        }
    },
    mounted(){
        // this.$bus.$on('hello', (name)=>{
        //     console.log('School 收到了数据：' + name)
        // }),
        this.pubId = pubsub.subscribe('hello', function(msgName, msg){
            console.log("Studnet 收到了消息:" + msg)
        })
    },
    beforeDestroy(){
        pubsub.unsubscribe(this.pubId)
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
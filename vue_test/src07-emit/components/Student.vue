<template>
  <div class="s2">
    <h1>{{name}}</h1>
    <h1>{{age}}</h1>
    <button @click="sendStudentName()">Click me</button>
    <button @click="unbind">unbind</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name: 'Tom',
            age: 18
        }
    },
    methods:{
        sendStudentName(){
            this.$emit('huajieyu', this.name)
            // this.$emit('f1', 'f1 -----')
        },
        unbind(){
            // 解绑一个事件
            // this.$off('huajieyu')

            // 解绑多个事件（传数组）
            // this.$off(['huajieyu','f1'])

            // 解绑所有自定义事件（传数组）
            this.$off()
        },

    }
}
</script>

<style scoped>
    .s2{
        border: solid 0.5px;
        padding: 5px;
        margin-top: 10px;
        background-color: pink  ;
    }
</style>
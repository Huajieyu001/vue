<template>
  <div v-show="total">
    <input type='checkbox' :checked="all" @change="selectAll">
    <span>已完成{{completed}}</span>
    <span>/全部{{total}}</span>
    <button @click="clear">Click clear selected data?</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyFooter',
    computed:{
      all(){
        return this.total === this.completed && this.total !== 0
      },
      total(){
        return this.todos.length;
      },
      completed(){
        return this.todos.reduce((pre,cur) => pre + (cur.checked ? 1 : 0), 0);
      }
    },
    props:['todos'],
    methods:{
      clear(){
        if(confirm('确定删除选中的数据吗?')){
          pubsub.publish('deleteChecked')
        }
      },
      selectAll(){
          pubsub.publish('selectAll')
      }
    }
}
</script>

<style>

</style>
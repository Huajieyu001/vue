<template>
  <div>
    <input type="textarea" @keyup.enter="add">
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
import {nanoid} from 'nanoid'
import Todos from './Todos.vue'
export default {
    name:'MyHeader',
    components:{
        Todos
    },
    props:['todos'],
    methods:{
        add(e){
          if(!e.target.value){
              console.log('Exception in receive')
              return
          }
          let todo = {
              id: nanoid(),
              title: e.target.value,
              checked: false
          }
          pubsub.publish('receive', todo)
          e.target.value = ''
        }
    },
}
</script>

<style>

</style>
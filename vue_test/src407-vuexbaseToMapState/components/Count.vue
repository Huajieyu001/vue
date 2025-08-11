<template>
  <div>
    <h2>当前的值是：{{sum}}</h2>
    <h2>当前的bigSum值是：{{bigSum}}</h2>
    <h3>学校{{school}}</h3>
    <h3>学科{{subject}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">add if odd</button>
    <button @click="incrementWait">wait</button>
  </div>
</template>

<script>
import store from '../store'
import {mapState, mapGetters} from 'vuex'

export default {
    name: 'Count',
    data(){
      return {
        // sum: 0,
        num: 1
      }
    },
    methods:{
      increment(){
        this.$store.commit("increment", this.num)
        console.log(this.$store)
      },
      decrement(){
        this.$store.commit("decrement", this.num)
      },
      incrementIfOdd(){
        this.$store.dispatch("incrementIfOdd", this.num)
      },
      incrementWait(){
        this.$store.dispatch('incrementWait', this.num)
      }
    },
    computed:{
      // 快速解析store的state元素的写法1：map解析
      // ...mapState({'he':'sum', 'xuexiao': 'school', 'kemu': 'subject'}),
      // 快速解析store的state元素的写法2：数组解析
      ...mapState(['sum', 'school', 'subject']),
      ...mapGetters(['bigSum'])
    },
    mounted(){
    }
}
</script>

<style>
button{
  margin-left: 5px;
  width: 120px;
  height: 30px;
}
</style>
<template>
  <div>
    <input type='text' placeholder='please input yout name'>
    <h3>{{sum}}</h3>
    <h3>{{school}}</h3>
    <h3>{{subject}}</h3>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(num)">+</button>
    <button @click="decrement(num)">-</button>
    <button @click="incrementIfOdd(num)">add if odd</button>
    <button @click="incrementWait(num)">wait</button>
    <ul>
        <li v-for="person in persons" :key="person.id">{{person.name}}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'
// import store from '../store'

export default {
    name: 'Person',
    data(){
        return {
            num: 1
        }
    },
    computed:{
        ...mapState(['sum', 'school', 'subject', 'persons']),
    },
    methods:{
      ...mapActions(['incrementIfOdd', 'incrementWait']),
      ...mapMutations(['increment','decrement']),
    },
}
</script>

<style>

</style>
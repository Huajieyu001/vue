<template setup>
  <div>
    <h2>{{sum}}</h2>
    <button @click="sum++">Click me</button>
    <hr>
    <h2>{{num}}</h2>
    <button @click="num--">Click me</button>
    <hr>
    <h4>name: {{person.name}}</h4>
    <h4>age: {{person.age}}</h4>
    <input type="text" v-model="person.name">
    <input type="number" v-model="person.age">
    <h4>card name: {{person.card.bank.name}}</h4>
    <h4>card money: {{person.card.bank.money}}</h4>
    <input type="text" v-model="person.card.bank.name">
    <input type="number" v-model="person.card.bank.money">
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect} from 'vue'
export default {
  name: 'App',
  setup(){
    
    let sum = ref(0)
    let num = ref(0)

    let person = reactive({
      name: "",
      age: 18,
      card: {
        bank: {
          name: "中国银行",
          money: 12000
        }
      }
    })

    watch(sum, (newValue, oldValue)=>{
      console.log('sum被修改了')
      console.log(newValue, oldValue)
    })

    watchEffect(()=>{
      console.log(person.name + person.age)
      return person.name + person.age
    })

    return {
      sum,
      num,
      person
    }
  }
}
</script>

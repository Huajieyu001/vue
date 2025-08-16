<template setup>
  <div>
    <h2>{{sum}}</h2>
    <button @click="sum++">SUM++</button>
    <h4>person: {{person}}</h4>
    <h4>name: {{name}}</h4>
    <h4>age: {{age}}</h4>
    <input type="text" v-model="name">
    <input type="number" v-model="person.age">
    <h4>card name: {{person.card.bank.name}}</h4>
    <h4>card money: {{person.card.bank.money}}</h4>
    <input type="text" v-model="person.card.bank.name">
    <input type="number" v-model="person.card.bank.money">
  </div>
</template>

<script>
import { ref, reactive, computed, watch, toRef, toRefs, readonly, shallowReadonly} from 'vue'
export default {
  name: 'App',
  setup(){

    let sum = ref(0)
    
    let person = reactive({
      name: "ewsgsdgs",
      age: 18,
      card: {
        bank: {
          name: "中国银行",
          money: 12000
        }
      }
    })

    // toRef
    console.log("//***********")
    let name = toRef(person, 'name')
    // 不能写成 let name2 = toRef(person.name) 不然没法双向绑定



    // toRefs
    let x = toRefs(person)
    console.log(x)

    // sum = readonly(sum)
    // person = readonly(person)

    sum = shallowReadonly(sum)
    person = shallowReadonly(person)

    

    return {
      person,
      // name
      ... toRefs(person),
      sum
    }
  }
}
</script>

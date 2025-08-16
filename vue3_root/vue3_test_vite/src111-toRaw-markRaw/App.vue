<template setup>
  <div>
    <h2>{{sum}}</h2>
    <button @click="sum++">SUM++</button>
    <h4>person: {{person}}</h4>
    <h4>name: {{person.name}}</h4>
    <h4>age: {{person.age}}</h4>
    <input type="text" v-model="person.name">
    <input type="number" v-model="person.age">
    <h4>card name: {{person.card.bank.name}}</h4>
    <h4>card money: {{person.card.bank.money}}</h4>
    <input type="text" v-model="person.card.bank.name">
    <input type="number" v-model="person.card.bank.money">
    <hr>
    <button @click="print">print</button>
    <hr>
    <button @click="addCar">addCar</button>
    <h3 v-if="person.car">Car: {{person.car}}</h3>
    <button @click="person.car.name+='*'">updateCarName</button>
    <button @click="person.car.price++">updateCarPrice</button>
  </div>
</template>

<script>
import { ref, reactive, toRefs, toRaw, markRaw, readonly} from 'vue'
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

    function print(){
      console.log(person)
      // 输出原始对象（使用toRaw）只能处理reactive，不能处理ref
      console.log(toRaw(person))
    }

    function addCar(){
      // 添加的对象，会自动转为响应式数据
      person.car = {
        name: "XiaoMi",
        price: 21
      }

      person.car = readonly(person.car)
      // markRaw(person.car)
    }

    return {
      person,
      sum,
      print,
      addCar
    }
  }
}
</script>

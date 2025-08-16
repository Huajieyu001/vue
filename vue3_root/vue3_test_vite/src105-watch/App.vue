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
import { ref, reactive, computed, watch} from 'vue'
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

    // 情况1：监视1个基础变量的watch写法
    // watch(sum, (newValue, oldValue)=>{
    //   console.log('sum被修改了')
    //   console.log(newValue, oldValue)
    // })
    // watch(num, (newValue, oldValue)=>{
    //   console.log('num被修改了')
    //   console.log(newValue, oldValue)
    // })

    // 情况2：监视多个基础变量的watch写法
    watch([sum, num], (newValue, oldValue)=>{
      console.log('sum被修改了')
      console.log(newValue, oldValue)
    }, {immediate: true})

    // 情况3：监视reactive对象
    // watch(person, (newValue, oldValue)=>{
    //   console.log('sum被修改了')
    //   console.log(newValue, oldValue)
    // })

    // 情况4：监视reactive对象的某个属性
    // 错误写法
    // watch(person.card.bank.money, (newValue, oldValue)=>{
    //   console.log('sum被修改了')
    //   console.log(newValue, oldValue)
    // })

    // 正确写法
    // watch(()=>person.card.bank.money, (newValue, oldValue)=>{
    //   console.log('sum被修改了')
    //   console.log(newValue, oldValue)
    // })

    // 情况4：监视reactive对象的某些（多个）属性
    watch(()=>[person.card.bank.money, person.card.bank.name], (newValue, oldValue)=>{
      console.log('sum被修改了')
      console.log(newValue, oldValue)
    })


    return {
      sum,
      num,
      person
    }
  }
}
</script>

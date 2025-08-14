<template setup>
  <div>
    <h2>My Infomation</h2>    
    <h2>{{name}}</h2>    
    <h2>{{age}}</h2>
    <h2>{{job.type}}</h2>
    <h2>{{job.salary}}</h2>
    <h2>{{person.number}}</h2>
    <h2>{{person.vx}}</h2>
    <h2>余额---{{person.card.money}}</h2>
    <h2>欠款银行---{{person.card.debt.bank}}</h2>
    <h2>欠款金额---{{person.card.debt.money}}</h2>
    <ul>
      <li v-for="item in hobby" :key="item">{{item}}</li>
    </ul>
    <button @click="change">change</button>
    <button @click="look">view</button>
    <button @click="changeJob">changeJob</button>
    <button @click="changeReactive">changeReactive</button>
    <button @click="changeReactiveArr">changeReactiveArr</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'App',
  setup(){

    let name = ref('Tom')
    let age = ref(18)

    let hobby = reactive([
      'Tennis',
      'Piano',
      'Sing',
      'Swim'
    ])

    let person = reactive({
      number: 123456,
      vx: 'KHJGsgsgdsr54dg',
      card: {
        money: 10000,
        debt: {
          bank: '中国银行',
          money: 20000
        }
      }
    })

    let job = ref({
      type: 'Java Dev',
      salary: 30000
    })

    function change(){
      name.value = 'HHHH'
      age.value = 24
    }

    function changeJob(){
      job.value.type = 'Go Dev',
      job.value.salary = 50000
    }

    function look(){
      console.log('name = ' + name.value + ', age = ' + age.value)
      console.log(job)
      console.log(person)
    }

    function changeReactive(){
      person.number = 99999
      person.vx = 'isksofysifugheiryg9weoisyiugovfhdoib'
      person.card.money = 15000
      person.card.debt.bank = '招商银行'
      person.card.debt.money = 8000
    }

    function changeReactiveArr(){
      hobby[0] = 'Smoke'
    }

    return {
      name,
      age,
      change,
      look,
      job,
      changeJob,
      person,
      changeReactive,
      hobby,
      changeReactiveArr
    }
  }
}
</script>

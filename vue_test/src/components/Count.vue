<template>
  <div>
    <h2>{{sum}}</h2>
    <select v-model.number="num">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="addIf">add if odd</button>
    <button @click="addWait">wait</button>
  </div>
</template>

<script>

export default {
    name: 'Count',
    data(){
      return {
        sum: 0,
        num: 1
      }
    },
    methods:{
      add(){
        this.sum += this.num
      },
      sub(){
        this.sum -= this.num
      },
      addIf(){
        if(this.sum % 2 == 0) return ;
        this.sum += this.num
      },
      addWait(){
        setTimeout(()=>{
          this.sum += this.num
        }, 500)
      }
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
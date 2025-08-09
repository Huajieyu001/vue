<template>
  <div class="container">
    <Category title="游戏">
      <template slot-scope="myData">
        <ul>
          <li v-for="(item, index) in myData.games" :key="index">{{item}}</li>
        </ul>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="myData">
        <ol>
          <li v-for="(item, index) in myData.games" :key="index">{{item}}</li>
        </ol>
      </template>
    </Category>
    <Category title="游戏">
      <template slot-scope="myData">
        <h4 v-for="(item, index) in myData.games" :key="index">{{item}}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  // data(){
  //   return {
  //     foods:['豆腐', '黄瓜', '菠菜', '米饭'],
  //     games:['CF', '飞车', '捞女', 'DNF'],
  //     films:['大话西游', '天罡传', '美女与野兽', '泰塔尼克号']
  //   }
  // },
  components:{
    Category
  }
}
</script>

<style>
.container,.foot{
  display: flex;
  justify-content: space-around;
}

h3{
  text-align: center;
  background-color: orange;
}

video{
  height: 100%;
}


</style>
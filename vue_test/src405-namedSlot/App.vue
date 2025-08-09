<template>
  <div class="container">
    <Category title="食物">
      <img slot="header" src='https://ts2.tc.mm.bing.net/th/id/OIP-C.UuyknNV6I3FPO_CTjHueAQAAAA?w=80&h=80&c=1&bgcl=7e6f26&r=0&o=7&pid=ImgRC&rm=3'>
      <a slot="footer" href="http://www.baidu.com">To Baidu</a>
    </Category>
    <Category title="游戏">
      <ul slot="header">
          <li v-for="(item, index) in games" :key="index">{{item}}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="http://www.baidu.com">AAA</a>&nbsp;
        <a href="http://www.baidu.com">BBB</a>
      </div>
    </Category>
    <Category title="电影">
      <!-- <video controls src='./asserts/5_6242495249726311521.mp4'></video> -->

      <!-- <template slot="footer"> -->
      <template v-slot:footer>
        <div class="foot">
          <a slot="footer" href="http://www.baidu.com">111</a>
          <a slot="footer" href="http://www.baidu.com">222</a>
          <a slot="footer" href="http://www.baidu.com">333</a>
        </div>
        <h4>欢迎看电影</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  data(){
    return {
      foods:['豆腐', '黄瓜', '菠菜', '米饭'],
      games:['CF', '飞车', '捞女', 'DNF'],
      films:['大话西游', '天罡传', '美女与野兽', '泰塔尼克号']
    }
  },
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
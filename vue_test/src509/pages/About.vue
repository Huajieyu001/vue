<template>
  <div>
    <h2>我是About的内容</h2>
  </div>
</template>

<script>
export default {
    name: 'About',
    beforeRouteEnter(to, fro, next){
      console.log('路由即将进入')
      next()
    },
    beforeRouteLeave(to, fro, next){
      console.log('路由即将离开')
      next()
    }
}
</script>

<style>

</style>
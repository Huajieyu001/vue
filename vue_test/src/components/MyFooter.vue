<template>
  <div>
    <span>已完成{{completed}}</span>
    <span>/全部{{total}}</span>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
    props:{
        completed: {
            type:Number,
            default: 0
        },
        total: {
            type:Number,
            default: 0
        }
    }
}
</script>

<style>

</style>
<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot :games="dataList"></slot>
  </div>
</template>

<script>

export default {
    name: 'Category',
    data(){
        return {
            dataList:['CF', '飞车', '捞女', 'DNF'],
        }
    },
    props: ['title']
}
</script>

<style>
.category{
    background-color: aquamarine;
    height: 300px;
    width: 200px;
}
</style>
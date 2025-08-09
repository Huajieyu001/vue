<template>
  <div class="category">
    <h3>{{title}}</h3>
    <slot></slot>
    <!-- <ul>
        <li v-for="(item, index) in dataList" :key="index">{{item}}</li>
    </ul> -->
  </div>
</template>

<script>

export default {
    name: 'Category',
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
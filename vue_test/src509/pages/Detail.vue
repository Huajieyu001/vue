<template>
  <ul>
    <li>id: {{id}}</li>
    <li>title: {{title}}</li>
  </ul>
</template>

<script>
export default {
    name: 'Detail',
    props: ['id', 'title']
}
</script>

<style>

</style>
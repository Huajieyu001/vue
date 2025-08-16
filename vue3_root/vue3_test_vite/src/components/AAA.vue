<template>
  <div class="l2">
    <h2>I'm AAA</h2>
    <hr>
    <BBB/>
  </div>
</template>

<script>
import BBB from './BBB.vue'
export default {
    components: {
        BBB
    }
}
</script>

<style>
.l2{
  background-color: green;
  margin: 100px;
}
</style>
<template setup>
  <div>
    <button @click="isShow = !isShow">Swap</button>
    <Test v-if="isShow"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Test from './components/Test.vue'
export default {
  components: { Test },
  name: 'App',
  setup(){
    
    let isShow = ref(false)

    return {
      isShow
    }
  }
}
</script>

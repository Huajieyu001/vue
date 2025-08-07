<template>
  <div>
    <button @click="isShow = !isShow">Show or hidding</button>
    <transition-group appear
        name="animate__animated animate__bounce"
        enter-active-class="animate__swing"
        leave-active-class="animate__backOutUp"
    >
        <h1 v-show="isShow" class="vs come" key="1">Hello</h1>
        <h1 v-show="!isShow" class="vs come" key="2">World</h1>
    </transition-group>
  </div>
</template>

<script>
import "animate.css"
export default {
    name: 'test4',
    data(){
        return {
            isShow: true
        }
    }

}
</script>

<style scoped>

.vs{
    background-color: orange;
}
</style>
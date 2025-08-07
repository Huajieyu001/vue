<template>
  <div>
    <button @click="isShow = !isShow">Show or hidding</button>
    <transition name="hello" :appear="true">
    <h1 v-show="isShow" class="vs come">Hello</h1>
    </transition>
  </div>
</template>

<script>
export default {
    name: 'test2',
    data(){
        return {
            isShow: true
        }
    }

}
</script>

<style scoped>

.vs{
    background-color: aquamarine;
}

.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}

.hello-enter-to,.hello-leave{
    transform: translateX(0);
}

.hello-enter-active,.hello-leave-active{
    transition: 0.5s linear;
}

/* 
.hello-enter{
    transform: translateX(-100%);
}

.hello-enter-to{
    transform: translateX(0);
}

.hello-leave{
    transform: translateX(0);
}

.hello-leave-to{
    transform: translateX(-100%);
} */


</style>
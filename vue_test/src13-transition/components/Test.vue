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
    name: 'test',
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

.hello-enter-active{
    animation: huajieyu 1s;
}

.hello-leave-active{
    animation: huajieyu 1s reverse;
}

@keyframes huajieyu{
    from{
        transform: translateX(-100px);
    }
    to{
        transform: translateX(0px);
    }
}

</style>
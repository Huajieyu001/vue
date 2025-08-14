<template>
    <ul>
        <li :style="{opacity}">HaHaHaHa</li>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
    </ul>
</template>

<script>
export default {
    name: 'News',
    beforeDestroy(){
        console.log('News 即将被销毁')
        // clearInterval(this.timer)
    },
    mounted(){
        // this.timer = setInterval(() => {
        //     console.log('@')
        //     this.opacity -= 0.01
        //     if(this.opacity <= 0){
        //         this.opacity = 1.0
        //     }
        // }, 16)
    },
    data(){
        return {
            a: false,
            opacity: 1
        }
    },

    // 新钩子函数（路由专用）

    activated(){
        console.log('News激活了')
        this.timer = setInterval(() => {
            console.log('@')
            this.opacity -= 0.01
            if(this.opacity <= 0){
                this.opacity = 1.0
            }
        }, 16)
    },
    deactivated(){
        console.log('News取消了激活')
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>
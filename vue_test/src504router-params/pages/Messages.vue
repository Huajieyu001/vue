<template>
    <div>
        <ul>
            <li v-for="m in msgs" :key="m.id">
                <!-- 传参写法一 -->
                <!-- <router-link :to="`/home/messages/detail/${m.id}/${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 传参写法二 -->
                <!-- 使用路径参数并且使用:to接收对象时,不能用path(有坑,会直接跳到path,而不带参数),只能用name -->
                <router-link :to="{ 
                    name: 'mydetail',
                    params: { 
                        id: m.id, 
                        title: m.title 
                        } 
                    }">{{m.title}}</router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Messages',
    data(){
        return {
            msgs:[
                {
                    id: 1,
                    title: 'khjwsrg'
                },
                {
                    id: 2,
                    title: 'khjwsrg'
                },
                {
                    id: 3,
                    title: 'sdg'
                },
            ]
        }
    }
}
</script>

<style>

</style>
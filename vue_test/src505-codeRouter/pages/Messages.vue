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
                    query: { 
                        id: m.id, 
                        title: m.title 
                        } 
                    }">{{m.title}}</router-link>&nbsp;&nbsp;
                <button @click="toPush(m)">push查看</button>
                <button @click="toReplace(m)">replace查看</button>
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
    },
    methods:{
        toPush(m){
            console.log(this.$router)
            this.$router.push({
                path: "/home/messages/detail",
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        },
        toReplace(m){
            this.$router.replace({
                path: "/home/messages/detail",
                query: {
                    id: m.id,
                    title: m.title
                }
            })
        }
    }
}
</script>

<style>

</style>